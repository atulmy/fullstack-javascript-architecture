// Imports
import React from 'react'
import { Provider } from 'react-redux'

// App Imports
import { store } from './store'
import Routes from './routes'

// App
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store} key="provider">
        <Routes />
      </Provider>
    )
  }
}
