// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

// UI Imports
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import IconArrowForward from '@material-ui/icons/ArrowForward';
import IconMobileScreenShare from '@material-ui/icons/MobileScreenShare';
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'

// App Imports
import { APP_URL } from '../../../setup/config/env'
import params from '../../../setup/config/params'

// Component
class Home extends PureComponent {
  render() {
    const { classes } = this.props

    return (
      <div>
        <div className={classes.hero}>
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            { params.site.name }
          </Typography>

          <Typography variant="h6" align="center" color="textSecondary" paragraph>
            { params.site.description } This is sample landing page
          </Typography>

          <div className={classes.heroButtons}>
            <Grid container spacing={16} justify="center">
              <Grid item>
                <a href={ params.site.url.store.ios } target="_blank" rel="noopener noreferrer">
                  <Button variant="contained" color="primary">
                    <IconMobileScreenShare className={classes.iconMobileApp} />

                    iOS App
                  </Button>
                </a>
              </Grid>

              <Grid item>
                <a href={ params.site.url.store.android } target="_blank" rel="noopener noreferrer">
                  <Button variant="contained" color="primary">
                    <IconMobileScreenShare className={classes.iconMobileApp} />

                    Android App
                  </Button>
                </a>
              </Grid>

              <Grid item>
                <a href={ APP_URL } target="_blank" rel="noopener noreferrer">
                  <Button variant="outlined" color="primary">
                    Open Web App

                    <IconArrowForward className={classes.iconWebApp} />
                  </Button>
                </a>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    )
  }
}

// Component Properties
Home.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Home)
