// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

// UI Imports
import Typography from '@material-ui/core/Typography'

// App Imports
import Section from '../../common/Section'

// Component
class Dashboard extends PureComponent {
  render() {
    return (
      <Section>
        <Typography variant="h4">Dashboard</Typography>

        <p>Please select an item from menu.</p>
      </Section>
    )
  }
}

export default Dashboard
