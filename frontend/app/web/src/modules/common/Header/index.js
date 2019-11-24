// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

// UI Imports
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import grey from '@material-ui/core/colors/grey'
import blue from '@material-ui/core/colors/blue'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'

// App Imports
import routes from '../../../setup/routes'
import params from '../../../setup/config/params'
import { messageShow } from '../api/actions'
import { logout } from '../../user/api/actions/query'

// Component
const Header = ({ location, classes }) => {
  // state
  const { isAuthenticated, details } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  // on click logout
  const onClickLogout = () => {
    let check = window.confirm('Are you sure you want to logout?')

    if(check) {
      dispatch(logout())

      dispatch(messageShow('You have been logged out successfully.'))
    }
  }

  // check is active route
  const isActiveRoute = (routePath, menu = 'primary') => {
    return routePath === location.pathname ? { backgroundColor: menu === 'primary' ? blue[600] : grey[300] } : {}
  }

  // home link
  const  homeLink = () => {
    return isAuthenticated
      ? details.role === params.user.roles.admin.key
        ? routes.adminDashboard.path
        : routes.userDashboard.path
      : routes.pagesHome.path
  }

  // render
  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={2}>
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.flex}>
            <Link to={homeLink()}>{ params.site.name.toUpperCase() }</Link>
          </Typography>

          {
            isAuthenticated
              ? <>
                  <Button component={Link} to={routes.userProfile.path} color="inherit" style={isActiveRoute(routes.userProfile.path)}>Profile</Button>

                  <Button color="inherit" onClick={onClickLogout}>Logout</Button>
                </>
              : <>
                  <Button component={Link} to={routes.userLogin.path} color="inherit" style={isActiveRoute(routes.userLogin.path)}>Login</Button>

                  <Button component={Link} to={routes.userSignup.path} color="inherit" style={isActiveRoute(routes.userSignup.path)}>Signup</Button>
                </>
          }
        </Toolbar>
      </AppBar>

      {
        isAuthenticated &&
        <AppBar position="static" color="default" elevation={2}>
          <Toolbar>
            {
              details.role === params.user.roles.admin.key
                ? <>
                    <Button component={Link} to={routes.adminDashboard.path}  color="inherit" style={isActiveRoute(routes.adminDashboard.path, 'secondary')}>Dashboard</Button>

                    <Button component={Link} to={routes.adminUserList.path}  color="inherit" style={isActiveRoute(routes.adminUserList.path, 'secondary')}>Users</Button>
                  </>
                : <>
                    <Button component={Link} to={routes.userDashboard.path}  color="inherit" style={isActiveRoute(routes.userDashboard.path, 'secondary')}>Dashboard</Button>

                    <Button component={Link} to={routes.noteList.path}  color="inherit" style={isActiveRoute(routes.noteList.path, 'secondary')}>Notes</Button>
                  </>
            }
          </Toolbar>
        </AppBar>
      }
    </div>
  )
}

// Component Properties
Header.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withRouter(withStyles(styles)(Header))
