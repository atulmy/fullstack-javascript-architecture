// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

// App Imports
import userRoutes from '../../setup/routes/user'

// Component
const RoutePrivate = (props) => (
  props.auth.isAuthenticated
    ? props.role
        ? props.auth.details.role === props.role
          ? <Route {...props} component={props.component}/>
          : <Redirect to={userRoutes.userLogin.path}/>
        : <Route {...props} component={props.component}/>
    : <Redirect to={userRoutes.userLogin.path}/>
)

// Component Properties
RoutePrivate.propTypes = {
  auth: PropTypes.object.isRequired,
}

// Component State
function routePrivateState(state) {
  return {
    auth: state.auth
  }
}

export default connect(routePrivateState, {})(RoutePrivate);
