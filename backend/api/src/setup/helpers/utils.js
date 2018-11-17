// App Imports
import params from '../config/params'

// Utility functions

// Generate random number
export function randomNumber(low, high) {
  return Math.floor(Math.random() * (high - low) + low);
}

// Auth check user
export function authCheck(auth) {
  return auth && auth.user && auth.user._id
}

// Auth check Admin
export function authCheckAdmin(auth) {
  return authCheck(auth) && auth.user.role === params.user.roles.admin.key
}

// No operation
export const noop = () => {}
