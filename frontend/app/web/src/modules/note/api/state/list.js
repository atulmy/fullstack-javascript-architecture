// App Imports
import {
  LIST_DONE,
  LIST_REQUEST,
  LIST_RESET,
  LIST_RESPONSE,
} from '../actions/types'

// List

// Initial State
const notesInitialState = {
  isLoading: false,
  list: [],
}

// State
export default (state = notesInitialState, action) => {
  switch (action.type) {
    case LIST_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading,
      }

    case LIST_RESPONSE:
      return {
        ...state,
        list: action.list,
      }

    case LIST_DONE:
      return {
        ...state,
        isLoading: false,
      }

    case LIST_RESET:
      return { ...notesInitialState }

    default:
      return state
  }
}
