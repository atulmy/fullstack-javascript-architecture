// Imports
import React from 'react'
import { withRouter } from 'react-router-dom'

// App Imports
import Header from '../Header'
import Message from '../Message'

// Component
const Layout = ({ children }) => {
  // render
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Body */}
      <main>
        { children }
      </main>

      {/* Message */}
      <Message />
    </div>
  )
}

export default withRouter(Layout)
