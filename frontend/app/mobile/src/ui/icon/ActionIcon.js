// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

// UI Imports
import { font, navigationTopHeight } from '../common/responsive'
import { black, white } from '../common/colors'
import Icon from '../../ui/icon/Icon'

// Component
const ActionIcon = ({ onPress, icon, color, size }) => {
  return(
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Icon
          name={icon}
          size={font(size)}
          color={color}
        />
      </View>
    </TouchableOpacity>
  )
}

// Component Properties
ActionIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
}
ActionIcon.defaultProps = {
  color: black,
  size: 22
}

export default ActionIcon

// Component Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: navigationTopHeight,
    width: navigationTopHeight,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
