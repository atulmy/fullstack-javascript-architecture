// App Imports
import params from '../config/params'
import {API_URL} from '../config/env'

// Utility functions

// Get percentage
export function percent(value, percent) {
  return (value / 100) * percent
}

// No operation
export const noop = () => {}

// Render if
export function renderIf(condition, content) {
  return condition ? content : null
}

// Routing
export function getRoutesForStack(routes) {
  return Object.values(routes).reduce((result, route) => {
    result[route.name] = route
    return result
  }, {})
}

// User Image
export function userImage(image) {
  return API_URL + params.folders.user.image + '/' + image
}
