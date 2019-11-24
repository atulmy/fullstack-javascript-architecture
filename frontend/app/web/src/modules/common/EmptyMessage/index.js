// Imports
import React from 'react'
import PropTypes from 'prop-types'

// UI Imports
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles/index'
import styles from './styles'

// Component
const EmptyMessage = ({ message, classes }) => (
  <Typography variant="subtitle1" color="textSecondary" className={classes.root}>
    { message }
  </Typography>
)

// Component Properties
EmptyMessage.propTypes = {
  classes: PropTypes.object.isRequired,
  message: PropTypes.string,
}

// Component Default Properties
EmptyMessage.defaultProps = {
  message: 'No data to show'
}

export default withStyles(styles)(EmptyMessage)
