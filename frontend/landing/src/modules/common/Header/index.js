// Imports
import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

// UI Imports
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import blue from '@material-ui/core/colors/blue'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'

// App Imports
import { routes } from 'setup/routes'
import params from 'setup/config/params'

// Component
const Header = ({ classes }) => {
  // router
  const router = useRouter()

  const activeClass = (route) => {
    return router.pathname === route ? { backgroundColor: blue[600] } : {}
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.flex}>
            <Link href={routes.pagesHome.path}>{ params.site.name.toUpperCase() }</Link>
          </Typography>

          <>
            <Link href={routes.pagesContact.path}>
              <Button color="inherit" style={activeClass(routes.pagesContact.path)}>Contact</Button>
            </Link>

            <Link href={routes.pagesPrivacy.path}>
              <Button color="inherit" style={activeClass(routes.pagesPrivacy.path)}>Privacy</Button>
            </Link>

            <Link href={routes.pagesTerms.path}>
              <Button color="inherit" style={activeClass(routes.pagesTerms.path)}>Terms</Button>
            </Link>
          </>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default withStyles(styles)(Header)
