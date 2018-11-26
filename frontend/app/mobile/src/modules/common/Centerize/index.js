// Imports
import React  from 'react'
import { View } from 'react-native'

// UI Imports
import styles from './styles'

// Component
const Centerize = (props) => (
  <View style={styles.container}>
    { props.children }
  </View>
)

export default Centerize
