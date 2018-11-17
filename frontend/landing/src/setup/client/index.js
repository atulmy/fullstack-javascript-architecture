// Imports
import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

// App Imports
import ScrollFix from '../../modules/common/Scroll'
import App from './App'

// Project App
const Client = () => (
  <Router>
    <ScrollFix>
      <App />
    </ScrollFix>
  </Router>
)

// Mount project app
window.onload = () => {
  hydrate(
    <Client />,
    document.getElementById('app')
  )
}
