// Imports
import React  from 'react'
import PropTypes  from 'prop-types'
import { View, Text, ActivityIndicator } from 'react-native'

// UI Imports
import { grey2 } from '../../../ui/common/colors'
import styles from './styles'

// Component
const Loading = ({ message, size, color }) => (
  <View style={styles.container}>
    <ActivityIndicator size={size} color={color} />

    <Text style={styles.text}>{ message }</Text>
  </View>
)

// Component Properties
Loading.propTypes = {
  message: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string
}
Loading.defaultProps = {
  message: '',
  size: 'large',
  color: grey2,
}

export default Loading
