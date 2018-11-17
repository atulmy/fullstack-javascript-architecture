// Imports
import React from 'react'
import { Route, Switch } from 'react-router-dom'

// UI Imports
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from './theme'

// App Imports
import routes from '../../setup/routes'
import Layout from '../../modules/common/Layout'
import NotFound from '../../modules/common/NotFound'

const App = () => (
  <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
    <Layout>
      <Switch>
        {
          Object.values(routes).map((route, index) =>
            <Route
              {...route}
              key={index}
              path={typeof route.path === 'function' ? route.path() : route.path}
            />
          )
        }

        <Route component={NotFound} />
      </Switch>
    </Layout>
  </MuiThemeProvider>
)

export default App
