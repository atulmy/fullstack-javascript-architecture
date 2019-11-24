// Imports
import axios from 'axios/index'

// App Imports
import { API_URL } from '../../../setup/config/env'
import params from '../../../setup/config/params'
import { MESSAGE_SHOW, MESSAGE_HIDE } from './types'

// Actions
export function messageShow({ success, message }, hide = params.message.timers.default) {
  return dispatch => {
    window.setTimeout(() => {
      dispatch({ type: MESSAGE_HIDE })
    }, hide)

    dispatch({ type: MESSAGE_SHOW, success, message })
  }
}

export function messageHide() {
  return { type: MESSAGE_HIDE }
}

export function upload(file) {
  return axios.post(API_URL + params.endpoint.uploads, file, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}
