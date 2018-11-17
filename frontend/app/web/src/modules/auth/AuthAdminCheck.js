// Imports
import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// App Imports
import params from '../../setup/config/params'
import user from '../../setup/routes/user'

// Component
const AuthAdminCheck = ({ auth: { isAuthenticated, details } }) => (
  isAuthenticated && details.role === params.user.roles.admin.key
    ? ''
    : <Redirect to={user.userLogin.path}/>
)

// Component Properties
AuthAdminCheck.propTypes = {
  auth: PropTypes.object.isRequired
}

// Component State
function authAdminCheckState(state) {
  return {
    auth: state.auth
  }
}

export default connect(authAdminCheckState, {})(AuthAdminCheck)
