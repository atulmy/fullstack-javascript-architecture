// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'

// UI Imports
import styles from './styles'

// Component
class NavigationTopTransparent extends PureComponent {
  render() {
    const { leftIcon, rightContent, middleContent } = this.props

    return (
      <View style={styles.container} zIndex={1}>
        {/* Left */}
        <View style={styles.left}>
          {/* Left Icon */}
          <View style={styles.leftIcon}>
            { leftIcon || <View style={styles.leftIconPlaceholder} /> }
          </View>
        </View>

        {/* Middle */}
        <View style={styles.middle}>{ middleContent }</View>

        {/* Right */}
        <View style={styles.right}>{ rightContent }</View>
      </View>
    )
  }
}

// Component Properties
NavigationTopTransparent.propTypes = {
  leftIcon: PropTypes.any,
  rightContent: PropTypes.any
}

export default NavigationTopTransparent

