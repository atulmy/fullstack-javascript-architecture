// Imports
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'

// App Imports
import {API_URL} from '../../../../setup/config/env'
import {MESSAGE_SHOW} from '../../../common/api/types'
import translate from '../../../../setup/translate'
import {USER_LIST_CACHE} from './cache-keys'
import {SET_USER, LOGOUT, LIST_DONE, LIST_REQUEST, LIST_RESPONSE} from './types'

// Actions

// Login
export function login({email, password}) {
  return (dispatch) => {
    return axios.post(API_URL, {
      operation: 'userLogin',
      params: {email, password},
    })
  }
}

// Log out user and remove token from local (AsyncStorage)
export function logout() {
  return (dispatch) => {
    unsetUserLocally()

    dispatch({
      type: LOGOUT,
    })
  }
}

// Set a user after login or using local (AsyncStorage) token
export function loginSetUser(token, user) {
  if (token) {
    axios.defaults.headers.common['Authentication'] = `Bearer ${token}`

    loginSetUserLocally(token, user)
  } else {
    delete axios.defaults.headers.common['Authentication']
  }

  return {
    type: SET_USER,
    user,
  }
}

// Set user token and info locally (AsyncStorage)
export async function loginSetUserLocally(token, user) {
  // Set token
  await AsyncStorage.setItem('token', token)
  await AsyncStorage.setItem('user', JSON.stringify(user))
}

// Unset user token and info locally (AsyncStorage)
export async function unsetUserLocally() {
  // Remove token
  await AsyncStorage.removeItem('token')
  await AsyncStorage.removeItem('user')

  // Clear cache
  const keys = await AsyncStorage.getAllKeys()
  const cacheKeys = keys.filter((k) => k.indexOf('CACHE.KEY.') !== -1)
  if (cacheKeys.length) {
    await AsyncStorage.multiRemove(cacheKeys)
  }
}

// Get list
export function list(isLoading = true) {
  return async (dispatch) => {
    // Caching
    try {
      const list = JSON.parse(await AsyncStorage.getItem(USER_LIST_CACHE))

      if (list) {
        dispatch({
          type: LIST_RESPONSE,
          list,
        })
      } else {
        dispatch({
          type: LIST_REQUEST,
          isLoading,
        })
      }
    } catch (e) {
      dispatch({
        type: LIST_REQUEST,
        isLoading,
      })
    }

    try {
      const {data} = await axios.post(API_URL, {
        operation: 'userList',
      })

      if (!data.success) {
        dispatch({
          type: MESSAGE_SHOW,
          success: data.success,
          message: data.message,
        })
      } else {
        const list = data.data

        dispatch({
          type: LIST_RESPONSE,
          list,
        })

        await AsyncStorage.setItem(USER_LIST_CACHE, JSON.stringify(list))
      }
    } catch (error) {
      dispatch({
        type: MESSAGE_SHOW,
        success: false,
        message: translate.t('common.error.default'),
      })
    } finally {
      dispatch({
        type: LIST_DONE,
        isLoading: false,
      })
    }
  }
}

// Get detail
export function detail({userId}) {
  return (dispatch) => {
    return axios.post(API_URL, {
      operation: 'userDetail',
      params: {userId},
    })
  }
}
