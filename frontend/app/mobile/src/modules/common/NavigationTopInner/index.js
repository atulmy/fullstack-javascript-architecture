// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'

// UI Imports
import stylesCommon from '../../../ui/common/styles'
import styles from './styles'

// Component
class NavigationTopInner extends PureComponent {
  render() {
    const { leftIcon, title, subTitle, rightContent, shadow } = this.props

    return (
      <View style={[styles.container, shadow ? stylesCommon.shadowSubtle : {} ]} zIndex={1}>
        {/* Left */}
        <View style={styles.left}>
          {/* Left Icon */}
          <View style={styles.leftIcon}>
            { leftIcon || <View style={styles.leftIconPlaceholder} /> }
          </View>

          {/* Info */}
          <View style={styles.info}>
            { title && <Text style={styles.title}>{ title.toUpperCase() }</Text> }
            { subTitle && <Text style={styles.subTitle}>{ subTitle.toUpperCase() }</Text> }
          </View>
        </View>

        {/* Right */}
        <View style={styles.right}>{ rightContent }</View>
      </View>
    )
  }
}

// Component Properties
NavigationTopInner.propTypes = {
  leftIcon: PropTypes.any,
  title: PropTypes.any,
  subTitle: PropTypes.any,
  rightContent: PropTypes.any,
  shadow: PropTypes.bool,
}
NavigationTopInner.defaultProps = {
  shadow: true
}

export default NavigationTopInner

