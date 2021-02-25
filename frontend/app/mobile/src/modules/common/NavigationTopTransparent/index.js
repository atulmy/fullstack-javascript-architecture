// Imports
import React from 'react'
import PropTypes from 'prop-types'
import {View} from 'react-native'

// UI Imports
import styles from './styles'

// Component
const NavigationTopTransparent = ({leftIcon, rightContent, middleContent}) => (
  <View style={styles.container} zIndex={1}>
    {/* Left */}
    <View style={styles.left}>
      {/* Left Icon */}
      <View style={styles.leftIcon}>
        {leftIcon || <View style={styles.leftIconPlaceholder} />}
      </View>
    </View>

    {/* Middle */}
    <View style={styles.middle}>{middleContent}</View>

    {/* Right */}
    <View style={styles.right}>{rightContent}</View>
  </View>
)

// Component Properties
NavigationTopTransparent.propTypes = {
  leftIcon: PropTypes.any,
  rightContent: PropTypes.any,
}

export default NavigationTopTransparent
