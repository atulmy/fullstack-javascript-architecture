// Imports
import bcrypt from 'bcrypt'

// App Imports
import { SECURITY_SALT_ROUNDS } from '../../setup/config/env'
import params from '../../setup/config/params'
import User from './model'

// Seeds
export default async function () {
  console.log('SEED - Users..')

  const users = [
    {
      email: 'admin@example.com',
      password: '123456',
      role: params.user.roles.admin.key,
      name: 'Admin',
      image: 'default.jpg',
      isDeleted: false,
    },

    {
      email: 'user@example.com',
      password: '123456',
      role: params.user.roles.user.key,
      name: 'User',
      image: 'default.jpg',
      isDeleted: false,
    },
  ]

  for (const user of users) {
    user.password = await bcrypt.hash(user.password, SECURITY_SALT_ROUNDS)
    await User.create(user)
  }
}
