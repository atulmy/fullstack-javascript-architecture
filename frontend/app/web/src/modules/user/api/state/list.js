// App Imports
import { LIST_DONE, LIST_FILTER, LIST_REQUEST, LIST_RESET, LIST_RESPONSE } from '../actions/types'

// User list (players)

// Initial State
const playersInitialState = {
  isLoading: false,
  list: []
}

// State
export default (state = playersInitialState, action) => {
  switch (action.type) {
    case LIST_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading
      }

    case LIST_RESPONSE:
      return {
        ...state,
        list: action.list
      }

    case LIST_DONE:
      return {
        ...state,
        isLoading: false
      }

    case LIST_RESET:
      return { ...playersInitialState }

    case LIST_FILTER:
      return {
        ...state,
        list: action.list
      }

    default:
      return state
  }
}
