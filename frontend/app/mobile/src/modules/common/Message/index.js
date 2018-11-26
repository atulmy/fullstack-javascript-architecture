// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// UI Imports
import Toast from '../../../ui/Toast'

// App Imports
import { messageHide } from '../api/actions'

// Component
class Message extends PureComponent {
  render() {
    const { common: { message: { open, success, message } }, messageHide } = this.props

    return (
      open && <Toast message={message} success={success} onPress={ messageHide } />
    )
  }
}

// Component Properties
Message.propTypes = {
  common: PropTypes.object.isRequired,
  messageHide: PropTypes.func.isRequired
}

// Component State
function messageState(state) {
  return {
    common: state.common
  }
}

export default connect(messageState, { messageHide })(Message)
