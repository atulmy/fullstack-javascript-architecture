// Imports
import React from 'react'
import PropTypes from 'prop-types'

// UI Imports
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles/index'
import styles from './styles'

// Component
const EmptyMessage = (props) => (
  <Typography variant="subtitle1" color="textSecondary" className={props.classes.root}>
    { props.message }
  </Typography>
)

// Component Properties
EmptyMessage.propTypes = {
  message: PropTypes.string
}

// Component Default Properties
EmptyMessage.defaultProps = {
  message: 'No data to show'
}

export default withStyles(styles)(EmptyMessage)
