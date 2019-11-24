// Imports
import React from 'react'
import { YellowBox } from 'react-native'
import { Provider } from 'react-redux'

// App Imports
import { store } from './store'
import Routes from './routes'

// App
export default class App extends React.Component {

  constructor(props) {
    super(props)

    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
      'Warning: componentWillUpdate is deprecated',
    ])
  }

  render() {
    return (
      <Provider store={store} key='provider'>
        <Routes />
      </Provider>
    )
  }
}
