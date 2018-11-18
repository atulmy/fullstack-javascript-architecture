// Imports
import axios from 'axios'

// App Imports
import { API_URL } from '../../../../setup/config/env'

// Actions

// Create
export function create({ note }) {
  return dispatch => {
    return axios.post(API_URL, {
      operation: 'noteCreate',
      params: { note }
    })
  }
}

// Delete
export function remove({ noteId }) {
  return dispatch => {
    return axios.post(API_URL, {
      operation: 'noteDelete',
      params: { noteId  }
    })
  }
}
