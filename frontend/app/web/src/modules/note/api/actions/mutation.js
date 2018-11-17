// Imports
import axios from 'axios'

// App Imports
import { API_URL } from '../../../../setup/config/env'

// Actions

// Create or Edit
export function createOrEdit({ _id, note }) {
  return dispatch => {
    return axios.post(API_URL, {
      operation: 'noteCreateOrEdit',
      params: { _id, note },
      fields: ['_id']
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
