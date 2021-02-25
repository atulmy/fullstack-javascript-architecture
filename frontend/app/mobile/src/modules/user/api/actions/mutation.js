// Imports
import axios from 'axios'

// App Imports
import {API_URL} from '../../../../setup/config/env'

// Actions

// Signup
export function signup({name, email, password, passwordRepeat}) {
  return axios.post(API_URL, {
    operation: 'userSignup',
    params: {name, email, password, passwordRepeat},
  })
}

// Update
export function profileUpdate({name}) {
  return axios.post(API_URL, {
    operation: 'userProfileUpdate',
    params: {name},
  })
}

// Change image
export function changeImage({image}) {
  return axios.post(API_URL, {
    operation: 'userChangeImage',
    params: {image},
  })
}
