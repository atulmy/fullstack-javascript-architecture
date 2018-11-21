// Imports
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

// App Imports
import { SECURITY_SECRET } from '../../setup/config/env'
import params from '../../setup/config/params'
import { authCheck, authCheckAdmin } from '../../setup/helpers/utils'
import validate from '../../setup/helpers/validation'
import User, { collection as user } from './model'

// Login
export async function userLogin({ params: { email, password }, translate }) {
  // Validation rules
  const rules = [
    {
      data: { value: email },
      check: 'email',
      message: translate.t('user.messages.fields.email')
    },
    {
      data: { value: password, length: params.user.rules.passwordMinLength },
      check: 'lengthMin',
      message: translate.t('user.messages.fields.passwordMinLength', { length: params.user.rules.passwordMinLength })
    }
  ]

  // Validate
  try {
    validate(rules)
  } catch(error) {
    throw new Error(error.message)
  }

  // Check if user exists with same email
  try {
    // Get user
    const user = await User.findOne({ email })

    if(user) {
      const passwordsMatch = await bcrypt.compare(password, user.password)

      if (passwordsMatch) {
        return {
          data: userAuthResponse(user),
          message: translate.t('user.login.messages.success')
        }
      }
    }
  } catch (error) {
    throw new Error(translate.t('common.messages.error.server'))
  }

  throw new Error(translate.t('user.login.error.wrongCredentials'))
}

// Get all (Admin)
export async function userList({ auth, translate }) {
  if(authCheckAdmin(auth)) {
    try {
      const fields = ['_id', 'email', 'name', 'createdAt']

      const data = await User
        .find({ role: { $ne: params.user.roles.admin.key }, isDeleted: false })
        .select(fields)
        .sort({ createdAt: -1 })

      return {
        data
      }
    } catch (error) {
      throw new Error(translate.t('common.messages.error.server'))
    }
  }

  throw new Error(translate.t('common.messages.error.unauthorized'))
}

// Count (Admin)
export async function userCount({ auth, translate }) {
  if(authCheckAdmin(auth)) {
    try {
      const data = await User.count({ role: { $ne: params.user.roles.admin.key }, isDeleted: false })

      return {
        data
      }
    } catch (error) {
      throw new Error(translate.t('common.messages.error.server'))
    }
  }

  throw new Error(translate.t('common.messages.error.unauthorized'))
}

// Auth Response (token and user info)
export function userAuthResponse({ _id, name, email, role }) {
  return {
    token: jwt.sign({ id: _id, email, role }, SECURITY_SECRET),
    user: { name, email, role }
  }
}
