// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// UI Imports
import Typography from '@material-ui/core/Typography'

// App Imports
import Section from '../../common/Section'

// Component
class Profile extends PureComponent {
  render() {
    const { auth: { details } } = this.props

    return (
      <Section>
        <Typography variant="h4">Profile</Typography>

        <p>Name: { details.name }</p>
        <p>Email: { details.email }</p>
      </Section>
    )
  }
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
export default connect(profileState, {})(Profile)
