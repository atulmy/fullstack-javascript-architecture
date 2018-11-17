// Imports
import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// App Imports
import params from '../../setup/config/params'
import routes from '../../setup/routes'

// Component
const AuthCheck = ({ auth: { isAuthenticated, details } }) => (
  isAuthenticated
    ? details.role === params.user.roles.admin.key
      ? <Redirect to={routes.adminDashboard.path} />
      : <Redirect to={routes.userDashboard.path} />
    : ''
)

// Component Properties
AuthCheck.propTypes = {
  auth: PropTypes.object.isRequired
}

// Component State
function authCheckState(state) {
  return {
    auth: state.auth
  }
}

export default connect(authCheckState, {})(AuthCheck)
