// Imports
import bcrypt from 'bcrypt'
import React from 'react'

// App Imports
import { SECURITY_SALT_ROUNDS } from '../../setup/config/env'
import params from '../../setup/config/params'
import { authCheck } from '../../setup/helpers/utils'
import validate from '../../setup/helpers/validation'
import User from './model'
import { userAuthResponse } from './query'

// Email
import { send as sendEmail } from '../email/send'
import Signup from './email/Signup'

// Create
export async function userSignup({ params: { name, email, password, passwordRepeat }, translate }) {
  // Validation rules
  const rules = [
    {
      data: { value: name, length: params.user.rules.nameMinLength },
      check: 'lengthMin',
      message: translate.t('user.messages.fields.nameMinLength', { length: params.user.rules.nameMinLength })
    },
    {
      data: { value: email },
      check: 'email',
      message: translate.t('user.messages.fields.email')
    },
    {
      data: { value: password, length: params.user.rules.passwordMinLength },
      check: 'lengthMin',
      message: translate.t('user.messages.fields.passwordMinLength', { length: params.user.rules.passwordMinLength })
    },
    {
      data: { value1: password, value2: passwordRepeat },
      check: 'equal',
      message: translate.t('user.messages.fields.passwordEqual')
    }
  ]

  // Validate
  try {
    validate(rules)
  } catch(error) {
    throw new Error(error.message)
  }

  // Check if user exists with same email
  const user = await User.findOne({ email })

  if(!user) {
    try {
      const passwordHashed = await bcrypt.hash(password, SECURITY_SALT_ROUNDS)

      const user = await User.create({
        name,
        email,
        password: passwordHashed,
        role: params.user.roles.user.key,
        image: params.user.image.default,
        isDeleted: false
      })

      if(user) {
        // Send email
        await sendEmail({
          translate,
          to: {
            email: user.email
          },
          from: {
            name: params.site.emails.help.name,
            email: params.site.emails.help.email
          },
          subject: translate.t('user.signup.email.subject'),
          template: <Signup
            to={name}
            translate={translate}
          />
        })

        return {
          data: userAuthResponse(user),
          message: translate.t('user.signup.messages.success')
        }
      }
    } catch (error) {
      console.log(error)

      throw new Error(translate.t('common.messages.error.server'))
    }
  } else {
    throw new Error(translate.t('user.signup.messages.error.exists'))
  }

  throw new Error(translate.t('common.messages.error.default'))
}

// Update Profile
export async function userProfileUpdate({ params: { name }, auth, translate }) {
  if (authCheck(auth)) {
    // Validation rules
    const rules = [
      {
        data: { value: name, length: params.user.rules.nameMinLength },
        check: 'lengthMin',
        message: translate.t('user.messages.fields.nameMinLength', { length: params.user.rules.nameMinLength })
      }
    ]

    // Validate
    try {
      validate(rules)
    } catch (error) {
      throw new Error(error.message)
    }

    try {
      const user = await User.findOneAndUpdate(
        { _id: auth.user._id },
        { name },
        { new: true }
      )

      return {
        data: userAuthResponse(user),
        message: translate.t('user.profile.messages.success')
      }
    } catch (error) {
      throw new Error(translate.t('common.messages.error.server'))
    }
  }

  throw new Error(translate.t('common.messages.error.unauthorized'))
}

// Change image
export async function userChangeImage({ params: { image }, auth, translate }) {
  if (authCheck(auth)) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: auth.user._id },
        { image },
        { new: true }
      )

      return {
        data: userAuthResponse(user),
        message: translate.t('user.profile.messages.success')
      }
    } catch (error) {
      throw new Error(translate.t('common.messages.error.server'))
    }
  }

  throw new Error(translate.t('common.messages.error.unauthorized'))
}
