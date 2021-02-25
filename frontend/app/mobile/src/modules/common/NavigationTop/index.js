// Imports
import React from 'react'
import PropTypes from 'prop-types'
import {View, Text} from 'react-native'

// UI Imports
import styles from './styles'

// Component
const NavigationTop = ({leftIcon, title, rightIcon}) => (
  <View style={styles.container}>
    {/* Left Icon */}
    <View style={styles.left}>
      {leftIcon || <View style={styles.iconPlaceholder} />}
    </View>

    {/* Title */}
    {title ? (
      <View style={styles.middle}>
        <Text style={styles.title}>{title}</Text>
      </View>
    ) : null}

    {/* Right Icon */}
    <View style={styles.right}>
      {rightIcon || <View style={styles.iconPlaceholder} />}
    </View>
  </View>
)

// Component Properties
NavigationTop.propTypes = {
  leftIcon: PropTypes.any,
  title: PropTypes.any,
  rightIcon: PropTypes.any,
}
NavigationTop.defaultProps = {
  theme: 'primary',
}

export default NavigationTop
