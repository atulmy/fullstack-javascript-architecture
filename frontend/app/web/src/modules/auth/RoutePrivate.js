// Imports
import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

// App Imports
import userRoutes from '../../setup/routes/user'

// Component
const RoutePrivate = ({ role, component, ...props }) => {
  const { isAuthenticated, details } = useSelector(state => state.auth)

  return (
    isAuthenticated
      ? role
        ? details.role === role
          ? <Route {...props} component={component}/>
          : <Redirect to={userRoutes.userLogin.path}/>
        : <Route {...props} component={component}/>
      : <Redirect to={userRoutes.userLogin.path}/>
  )
}

export default RoutePrivate
