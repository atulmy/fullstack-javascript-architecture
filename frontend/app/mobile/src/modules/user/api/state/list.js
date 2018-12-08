// App Imports
import { LIST_DONE, LIST_FILTER, LIST_REQUEST, LIST_RESET, LIST_RESPONSE } from '../actions/types'

// User list

// Initial State
const usersInitialState = {
  isLoading: false,
  list: []
}

// State
export default (state = usersInitialState, action) => {
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
      return { ...usersInitialState }

    case LIST_FILTER:
      return {
        ...state,
        list: action.list
      }

    default:
      return state
  }
}
