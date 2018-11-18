// Imports
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// App Imports
import common from '../modules/common/api/state'
import user from '../modules/user/api/state'
import note from '../modules/note/api/state'

// Root Reducer
const rootReducer = combineReducers({
  common,
  ...user,
  ...note
})

// Store
export const store = createStore(rootReducer, applyMiddleware(thunk))
