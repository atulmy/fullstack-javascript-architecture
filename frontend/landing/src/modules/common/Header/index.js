// Imports
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'

// UI Imports
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import blue from '@material-ui/core/colors/blue'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'

// App Imports
import routes from '../../../setup/routes'
import params from '../../../setup/config/params'

// Component
class Header extends Component {

  isActiveRoute = (routePath) => {
    const { location } = this.props

    return routePath === location.pathname ? { backgroundColor: blue[600] } : {}
  }

  render () {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.flex}>
              <Link to={routes.pagesHome.path}>{ params.site.name }</Link>
            </Typography>

            <>
              <Link to={routes.pagesContact.path}>
                <Button color="inherit" style={this.isActiveRoute(routes.pagesContact.path)}>Contact</Button>
              </Link>

              <Link to={routes.pagesPrivacy.path}>
                <Button color="inherit" style={this.isActiveRoute(routes.pagesPrivacy.path)}>Privacy</Button>
              </Link>

              <Link to={routes.pagesTerms.path}>
                <Button color="inherit" style={this.isActiveRoute(routes.pagesTerms.path)}>Terms</Button>
              </Link>
            </>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

// Component Properties
Header.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withRouter(withStyles(styles)(Header))
