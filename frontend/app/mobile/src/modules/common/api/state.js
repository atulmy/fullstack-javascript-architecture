// App Imports
import { MESSAGE_SHOW, MESSAGE_HIDE } from './types'

// Initial State
export const commonInitialState = {
  message: {
    success: false,
    message: '',
    open: false
  }
}

// State
export default (state = commonInitialState, action) => {
  switch (action.type) {
    case MESSAGE_SHOW:
      return {
        ...state,
        message: {
          success: action.success,
          message: action.message,
          open: true
        }
      }

    case MESSAGE_HIDE:
      return {
        ...state,
        ...commonInitialState
      }

    default:
      return state
  }
}
