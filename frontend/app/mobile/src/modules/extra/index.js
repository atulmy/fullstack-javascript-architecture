// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'

// UI Imports
import styles from './styles'

// App Imports

// Component
class Extra extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text>Extra</Text>
      </View>
    )
  }
}

// Component Properties
Extra.propTypes = {
  auth: PropTypes.object.isRequired
}

// Component State
function extraState(state) {
  return {
    auth: state.auth
  }
}

export default connect(extraState, {})(Extra)
