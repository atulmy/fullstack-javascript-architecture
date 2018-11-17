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

// Profile
export async function userProfile({ auth, fields, translate }) {
  if (authCheck(auth)) {
    try {
      const user = await User.findById(auth.user._id).select(fields)

      if(user) {
        return {
          data: user,
          message: translate.t('common.success.default')
        }
      }
    } catch (error) {
      throw new Error(translate.t('common.error.server'))
    }
  }

  throw new Error(translate.t('common.error.default'))
}

// Auth Response (token and user info)
export function userAuthResponse({ _id, name, email, role }) {
  return {
    token: jwt.sign({ id: _id, email, role }, SECURITY_SECRET),
    user: { name, email, role }
  }
}
