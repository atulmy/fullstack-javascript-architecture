// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// UI Imports
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

// App Imports
import { messageHide } from '../api/actions'

// Component
class Message extends PureComponent {
  render() {
    const { common: { message }, messageHide } = this.props

    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        open={message.open}
        autoHideDuration={5000}
        onClose={messageHide}
        message={message.text}
        action={[
          <IconButton
            key={'close'}
            color={'inherit'}
            onClick={messageHide}
          >
            <CloseIcon />
          </IconButton>
        ]}
      />
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
