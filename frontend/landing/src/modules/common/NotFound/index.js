// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// UI Imports
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles/index'
import styles from './styles'

// App Imports
import routes from '../../../setup/routes'
import Section from '../Section'

// Component
const NotFound = (props) => (
  <Section>
    <Typography variant={'h5'} gutterBottom>
      Its a 404
    </Typography>

    <Typography variant={'subtitle1'} gutterBottom>
      The page you are looking for does not exists or has been removed.
    </Typography>

    <Link to={routes.pagesHome.path}>
      <Button variant={'contained'} color={'primary'} className={props.classes.button}>
        Back to Home
      </Button>
    </Link>
  </Section>
)

// Component Properties
NotFound.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(NotFound)

