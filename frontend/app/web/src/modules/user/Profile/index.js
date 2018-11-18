// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// UI Imports
import Toolbar from '@material-ui/core/Toolbar/Toolbar'
import Typography from '@material-ui/core/Typography/Typography'
import { withStyles } from '@material-ui/core/styles/index'
import styles from './styles'

// App Imports
import Section from '../../common/Section'

// Component
const Profile = ({ auth: { details }, classes }) => (
  <div>
    <Toolbar>
      <Typography variant="h6" color="inherit" className={classes.grow}>
        Profile
      </Typography>
    </Toolbar>

    <Section>
      <Typography paragraph>Sunt consiliumes convertam nobilis, neuter cobaltumes.</Typography>

      <Typography>Name: { details.name }</Typography>
      <Typography>Email: { details.email }</Typography>
    </Section>
  </div>
)

// Component Properties
Profile.propTypes = {
  classes: PropTypes.object.isRequired
}

// Component Properties
Profile.propTypes = {
  auth: PropTypes.object.isRequired
}

// Component State
function profileState(state) {
  return {
    auth: state.auth
  }
}

export default connect(profileState, {})(withStyles(styles)(Profile))
