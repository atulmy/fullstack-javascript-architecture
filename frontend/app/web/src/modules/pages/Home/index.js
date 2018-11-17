// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

// UI Imports
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'

// App Imports

// Component
class Home extends PureComponent {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <Typography variant="h4">Home</Typography>

        <p>Cum bromium potus, omnes urbses imperium talis, regius particulaes.</p>
      </div>
    )
  }
}


// Component Properties
Home.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Home)
