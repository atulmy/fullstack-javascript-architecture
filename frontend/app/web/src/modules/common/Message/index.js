// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'

// UI Imports
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

// App Imports
import { messageHide } from '../api/actions'

// Component
const Message = ({ }) => {
  // state
  const { message } = useSelector(state => state.common)
  const dispatch = useDispatch()

  const onHideMessage = () => {
    dispatch(messageHide())
  }

  // render
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left'
      }}
      open={message.open}
      autoHideDuration={5000}
      onClose={onHideMessage}
      message={message.text}
      action={[
        <IconButton
          key={'close'}
          color={'inherit'}
          onClick={onHideMessage}
        >
          <CloseIcon />
        </IconButton>
      ]}
    />
  )
}

// Component Properties
Message.propTypes = {
  common: PropTypes.object.isRequired,
}

export default Message
