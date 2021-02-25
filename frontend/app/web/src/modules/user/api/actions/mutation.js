// Imports
import axios from 'axios'
import isEmpty from 'lodash/isEmpty'

// App Imports
import { API_URL } from '../../../../setup/config/env'

// Signup
export function signup({ name, email, password, passwordRepeat }) {
  return axios.post(API_URL, {
    operation: 'userSignup',
    params: { name, email, password, passwordRepeat },
  })
}

// Create or update
export function createOrUpdate(user) {
  if (!isEmpty(user.id)) {
    return update(user)
  } else {
    delete user.id
    return create(user)
  }
}

// Create
export function create(user) {
  return (dispatch) => {
    return axios.post(API_URL, {
      operation: 'userCreate',
      params: user,
    })
  }
}

// Update
export function update(user) {
  return (dispatch) => {
    return axios.post(API_URL, {
      operation: 'userUpdate',
      params: user,
    })
  }
}

// Remove
export function remove(data) {
  return (dispatch) => {
    return axios.post(API_URL, {
      operation: 'userRemove',
      params: data,
    })
  }
}
