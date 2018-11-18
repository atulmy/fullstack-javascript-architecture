// Imports
import React from 'react'
import PropTypes from 'prop-types'

// UI Imports
import Toolbar from '@material-ui/core/Toolbar/Toolbar'
import Typography from '@material-ui/core/Typography/Typography'
import { withStyles } from '@material-ui/core/styles/index'
import styles from './styles'

// App Imports
import Section from '../common/Section'

// Component
const DummyComponentPure = ({ classes }) => (
  <div>
    <Toolbar>
      <Typography variant="h6" color="inherit" className={classes.grow}>
        DummyComponentPure
      </Typography>
    </Toolbar>

    <Section>
      Dummy section
    </Section>
  </div>
)

// Component Properties
DummyComponentPure.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(DummyComponentPure)

