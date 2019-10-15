// Imports
import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ensureReady, After } from '@jaredpalmer/after'

// UI Imports
import { ThemeProvider } from '@material-ui/styles'

// App imports
import routes from './setup/routes'
import theme from './setup/theme'

// Render
ensureReady(routes).then(data =>
  hydrate(
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <After data={data} routes={routes} />
      </ThemeProvider>
    </BrowserRouter>,

    document.getElementById('root'),

    () => {
      const jssStyles = document.getElementById('jss-ssr');
      if (jssStyles && jssStyles.parentNode)
        jssStyles.parentNode.removeChild(jssStyles);
    }
  )
)

// Hot reload
if (module.hot) {
  module.hot.accept()
}
