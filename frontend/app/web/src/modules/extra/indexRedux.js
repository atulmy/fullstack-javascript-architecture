// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// UI Imports
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'

// App Imports
// import { someAction } from './api/actions'

// Component
class IndexRedux extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {
    // const { someAction } = this.props
  }

  render() {
    const { classes } = this.props

    return (
      <div>
        <h1>Dummy Component Redux</h1>
      </div>
    )
  }
}

// Component Properties
IndexRedux.propTypes = {
  classes: PropTypes.object.isRequired,
  dummyId: PropTypes.number.isRequired,
  // someAction: PropTypes.func.isRequired,
}

// Component State
function dummyComponentReduxState(state) {
  return {
    common: state.common
  }
}

export default connect(dummyComponentReduxState, { /* someAction */ })(withStyles(styles)(IndexRedux))
