// Imports
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider as StateProvider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { MuiThemeProvider } from '@material-ui/core/styles'
import isFunction from 'lodash/isFunction'

// App Imports
import { store } from './setup/store'
import routes from './setup/routes'
import theme from './setup/theme'
import { setUser, setUserLocally } from './modules/user/api/actions/query'
import Layout from './modules/common/Layout'
import Redirector from './modules/common/Redirector'
import RoutePrivate from './modules/auth/RoutePrivate'
import * as serviceWorker from './serviceWorker'

// User Authentication
const token = window.localStorage.getItem('token')
if (token && token !== 'undefined' && token !== '') {
  const user = JSON.parse(window.localStorage.getItem('user'))
  if (user) {
    // Dispatch action
    store.dispatch(setUser(token, user))

    setUserLocally(token, user)
  }
}

// Render App
ReactDOM.render(
  <StateProvider store={store}>
    <Router>
      <MuiThemeProvider theme={theme}>
        <Layout>
          <Switch>
            {
              Object.values(routes).map((route, index) => (
                route.auth
                  ? <RoutePrivate
                    {...route}
                    key={index}
                    path={isFunction(route.path) ? route.path() : route.path}
                  />
                  : <Route
                    {...route}
                    key={index}
                    path={isFunction(route.path) ? route.path() : route.path}
                  />
              ))
            }
            
            <Route component={Redirector} />
          </Switch>
        </Layout>
      </MuiThemeProvider>
    </Router>
  </StateProvider>,
  document.getElementById('root')
)

// Service Worker
serviceWorker.unregister()
