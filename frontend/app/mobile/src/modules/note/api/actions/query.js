// Imports
import axios from 'axios'
import { AsyncStorage } from 'react-native'

// App Imports
import { API_URL } from '../../../../setup/config/env'
import translate from '../../../../setup/translate'
import { MESSAGE_SHOW } from '../../../common/api/types'
import { NOTE_LIST_CACHE } from './cache-keys'
import { LIST_REQUEST, LIST_RESPONSE, LIST_DONE } from './types'

// Actions

// Get list
export function list(isLoading = true) {
  return async dispatch => {
    // Caching
    try {
      const list = JSON.parse(await AsyncStorage.getItem(NOTE_LIST_CACHE))

      if(list) {
        dispatch({
          type: LIST_RESPONSE,
          list
        })
      } else {
        dispatch({
          type: LIST_REQUEST,
          isLoading
        })
      }
    } catch(e) {
      dispatch({
        type: LIST_REQUEST,
        isLoading
      })
    }

    try {
      const { data } = await axios.post(API_URL, {
        operation: 'noteList',
        fields: ['_id', 'note', 'createdAt']
      })

      if(!data.success) {
        dispatch({
          type: MESSAGE_SHOW,
          success: data.success,
          message: data.message
        })
      } else {
        const list = data.data

        dispatch({
          type: LIST_RESPONSE,
          list
        })

        await AsyncStorage.setItem(NOTE_LIST_CACHE, JSON.stringify(list))
      }
    } catch(error) {
      dispatch({
        type: MESSAGE_SHOW,
        success: false,
        message: translate.t('common.error.default')
      })
    } finally {
      dispatch({
        type: LIST_DONE,
        isLoading: false
      })
    }
  }
}

// Get detail
export function detail({ noteId }) {
  return dispatch => {
    return axios.post(API_URL, {
      operation: 'noteDetail',
      params: { noteId }
    })
  }
}
