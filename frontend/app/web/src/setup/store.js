// Imports
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// App Imports
import common from '../modules/common/api/state'
import user from '../modules/user/api/state'

// Root Reducer
const rootReducer = combineReducers({
  common,
  ...user,
})

// Store
export const store = createStore(rootReducer, applyMiddleware(thunk))
