// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// UI Imports
import Toolbar from '@material-ui/core/Toolbar/Toolbar'
import Typography from '@material-ui/core/Typography/Typography'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'

// App Imports
// import { someAction } from './api/actions'
import Section from '../common/Section'

// Component
class DummyComponentRedux extends PureComponent {

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
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            DummyComponentRedux
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
DummyComponentRedux.propTypes = {
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

export default connect(dummyComponentReduxState, { /* someAction */ })(withStyles(styles)(DummyComponentRedux))
