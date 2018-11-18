// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

// UI Imports
import Toolbar from '@material-ui/core/Toolbar/Toolbar'
import Typography from '@material-ui/core/Typography/Typography'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'

// App Imports
import Section from '../common/Section'

// Component
class DummyComponent extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div>
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Dummy
          </Typography>
        </Toolbar>

        <Section>
          Dummy section
        </Section>
      </div>
    )
  }
}

// Component Properties
DummyComponent.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(DummyComponent)
