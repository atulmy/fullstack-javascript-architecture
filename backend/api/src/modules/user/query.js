// Imports
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

// App Imports
import { SECURITY_SECRET } from '../../setup/config/env'
import params from '../../setup/config/params'
import { authCheckAdmin } from '../../setup/helpers/utils'
import v from '../../setup/helpers/validation'
import User from './model'
import Note from '../note/model'

// Login
export async function userLogin({ params: { email, password }, translate }) {
  // Validation rules
  const rules = [
    {
      data: { value: email },
      check: 'isValidEmail',
      message: translate.t('user.messages.fields.email')
    },
    {
      data: { value: password, length: params.user.rules.passwordMinLength },
      check: 'isLengthMinimum',
      message: translate.t('user.messages.fields.passwordMinLength', { length: params.user.rules.passwordMinLength })
    }
  ]

  // Validate
  try {
    v.validate(rules)
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

  throw new Error(translate.t('user.login.messages.error.wrongCredentials'))
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
export async function userDashboardCount({ auth, translate }) {
  if(authCheckAdmin(auth)) {
    try {
      const users = await User.countDocuments({ role: { $ne: params.user.roles.admin.key }, isDeleted: false })
      const notes = await Note.countDocuments({ isDeleted: false })

      return {
        data: {
          users,
          notes
        }
      }
    } catch (error) {
      throw new Error(translate.t('common.messages.error.server'))
    }
  }

  throw new Error(translate.t('common.messages.error.unauthorized'))
}

// Auth Response (token and user info)
export function userAuthResponse({ _id, name, email, role, image }) {
  return {
    token: jwt.sign({ id: _id }, SECURITY_SECRET),
    user: { name, email, role, image }
  }
}
