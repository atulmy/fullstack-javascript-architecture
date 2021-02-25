// Imports
import React from 'react'
import PropTypes from 'prop-types'

// UI Imports
import { withStyles } from '@material-ui/core/styles/index'
import styles from './styles'

// Component
const Section = ({ classes, ...props }) => (
  <div className={classes.root} {...props}>
    {props.children}
  </div>
)

// Component Properties
Section.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Section)
