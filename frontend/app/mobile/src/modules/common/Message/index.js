// Imports
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

// UI Imports
import Toast from '../../../ui/Toast'

// App Imports
import { messageHide } from '../api/actions'

// Component
const Message = () => {
  const { message: { open, success, message } } = useSelector(state => state.common)
  const dispatch = useDispatch()

  return (
    open && <Toast message={message} success={success} onPress={() => dispatch(messageHide())} />
  )
}

export default Message
