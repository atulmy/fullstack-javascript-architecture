// Imports
import jwt from 'jsonwebtoken'

// App Imports
import { SECURITY_SECRET } from '../config/env'
import User from '../../modules/user/model'

// Authentication middleware
export default async function (request, response, next) {
  let header = request.headers.authentication

  if (header && header !== null) {
    try {
      const token = header.split(' ')
      const userToken = jwt.verify(token[1], SECURITY_SECRET)
      let user = await User.findOne({ _id: userToken.id })

      if(user) {
        request.auth = {
          isAuthenticated: true,
          user
        }
      }
    } catch (e) {
      console.warn('Invalid token detected.')
    }
  } else {
    request.auth = {
      isAuthenticated: false,
      user: null
    }
  }

  next()
}
