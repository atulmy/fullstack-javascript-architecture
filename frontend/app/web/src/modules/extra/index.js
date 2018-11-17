// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

// UI Imports
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'

// App Imports

// Component
class DummyComponent extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div>
        <h1>Dummy Component</h1>
      </div>
    )
  }
}


// Component Properties
DummyComponent.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(DummyComponent)
