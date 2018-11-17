// Imports
import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'

// App Imports
import Header from '../Header'
import Message from '../Message'

// Component
class Layout extends PureComponent {
  render() {
    const { children } = this.props

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
}

export default withRouter(Layout)
