// Imports
import axios from 'axios'

// App Imports
import { API_URL } from '../../../../setup/config/env'
import { MESSAGE_SHOW } from '../../../common/api/actions'
import { LOGIN_REQUEST, LOGIN_RESPONSE, SET_USER, LOGOUT } from './types'

// Actions

// Login a user using credentials
export function login({ email, password }, isLoading = true) {
  return async (dispatch) => {
    dispatch({
      type: LOGIN_REQUEST,
      isLoading,
    })

    dispatch({
      type: MESSAGE_SHOW,
      message: 'Please wait..',
    })

    try {
      const { data } = await axios.post(API_URL, {
        operation: 'userLogin',
        params: { email, password },
      })

      let message = ''

      if (data.success) {
        dispatch(setUser(data.data.token, data.data.user))

        setUserLocally(data.data.token, data.data.user)

        message = `Login successful. Welcome back, ${data.data.user.name}.`
      } else {
        message = data.message
      }

      dispatch({
        type: MESSAGE_SHOW,
        message,
      })
    } catch (error) {
      console.log(error)
      dispatch({
        type: MESSAGE_SHOW,
        message: 'Please try again.',
      })
    } finally {
      dispatch({
        type: LOGIN_RESPONSE,
      })
    }
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
export function setUser(token, user) {
  if (token) {
    axios.defaults.headers.common['Authentication'] = `Bearer ${token}`
  } else {
    delete axios.defaults.headers.common['Authentication']
  }

  return {
    type: SET_USER,
    user,
  }
}

// Get list
export function getList() {
  return axios.post(API_URL, {
    operation: 'userList',
  })
}

// Get count
export function getDashboardCount() {
  return axios.post(API_URL, {
    operation: 'userDashboardCount',
  })
}

// Set user token and info locally (AsyncStorage)
export function setUserLocally(token, user) {
  // Set token
  window.localStorage.setItem('token', token)
  window.localStorage.setItem('user', JSON.stringify(user))
}

// Unset user token and info locally (AsyncStorage)
export function unsetUserLocally() {
  // Remove token
  window.localStorage.removeItem('token')
  window.localStorage.removeItem('user')

  // Remove cached data
  for (let item of Object.keys({ ...window.localStorage })) {
    if (item.indexOf('CACHE.KEY.') !== -1) {
      window.localStorage.removeItem(item)
    }
  }
}
