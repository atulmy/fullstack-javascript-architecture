// Imports
import React from 'react'
import PropTypes from 'prop-types'

// UI Imports
import Fade from '@material-ui/core/Fade'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'
import green from '@material-ui/core/colors/green'
import { withStyles } from '@material-ui/core/styles/index'
import styles from './styles'

// Component
const Loading = ({ classes, size, message }) => {
  return(
    <Fade in={true}>
      <div className={classes.root}>
        <CircularProgress size={size} style={{ color: green[500] }} />

        <Typography variant='caption' gutterBottom align='center'>
          { message }
        </Typography>
      </div>
    </Fade>
  )
}

// Component Properties
Loading.propTypes = {
  classes: PropTypes.object.isRequired,
  size: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
}
Loading.defaultProps = {
  size: 40,
  message: 'please wait..',
}

export default withStyles(styles)(Loading)
