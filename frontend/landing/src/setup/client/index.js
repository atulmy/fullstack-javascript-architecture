// Imports
import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

// UI Imports
import { ThemeProvider } from '@material-ui/styles'

// App Imports
import ScrollFix from '../../modules/common/Scroll'
import App from './App'
import theme from './theme'

function Client() {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }, [])

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <ScrollFix>
          <App />
        </ScrollFix>
      </ThemeProvider>
    </Router>
  )
}

// Mount project app
window.onload = () => {
  hydrate(
    <Client />,
    document.getElementById('app')
  )
}
