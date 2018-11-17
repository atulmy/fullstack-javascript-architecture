// Imports
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'

// UI Imports
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import grey from '@material-ui/core/colors/grey'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'

// App Imports
import routes from '../../../setup/routes'
import params from '../../../setup/config/params'
import { messageShow } from '../api/actions'
import { logout } from '../../user/api/actions/query'

// Component
class Header extends Component {
  onClickLogout = () => {
    let check = window.confirm('Are you sure you want to logout?')

    if(check) {
      const { logout, messageShow } = this.props

      logout()

      messageShow('You have been logged out successfully.')
    }
  }

  isActiveRoute = (routePath) => {
    const { location } = this.props

    return routePath === location.pathname ? { backgroundColor: grey[300] } : {}
  }

  render () {
    const { classes, auth: { isAuthenticated, details } } = this.props

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.flex}>
              <Link to={routes.pagesHome.path}>{ params.site.name }</Link>
            </Typography>

            {
              isAuthenticated
                ? <>
                    <Link to={routes.userProfile.path}>
                      <Button color="inherit">Profile</Button>
                    </Link>

                    <Button color="inherit" onClick={this.onClickLogout}>Logout</Button>
                  </>
                : <>
                    <Link to={routes.userLogin.path}>
                      <Button color="inherit">Login</Button>
                    </Link>

                    <Link to={routes.userSignup.path}>
                      <Button color="inherit">Signup</Button>
                    </Link>
                  </>
            }
          </Toolbar>
        </AppBar>

        {
          isAuthenticated &&
          <AppBar position="static" color="default">
            <Toolbar>
              {
                details.role === params.user.roles.admin.key
                  ? <>
                      <Link to={routes.adminDashboard.path}>
                        <Button color="inherit" style={this.isActiveRoute(routes.adminDashboard.path)}>Dashboard</Button>
                      </Link>

                      <Link to={routes.adminUserList.path}>
                        <Button color="inherit" style={this.isActiveRoute(routes.adminUserList.path)}>Users</Button>
                      </Link>
                    </>
                  : <>
                      <Link to={routes.userDashboard.path}>
                        <Button color="inherit" style={this.isActiveRoute(routes.userDashboard.path)}>Dashboard</Button>
                      </Link>

                      <Link to={routes.noteList.path}>
                        <Button color="inherit" style={this.isActiveRoute(routes.noteList.path)}>Notes</Button>
                      </Link>
                    </>
              }
            </Toolbar>
          </AppBar>
        }
      </div>
    )
  }
}

// Component Properties
Header.propTypes = {
  auth: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  messageShow: PropTypes.func.isRequired
}

// Component State
function headerState (state) {
  return {
    auth: state.auth
  }
}

export default withRouter(connect(headerState, { logout, messageShow })(withStyles(styles)(Header)))
