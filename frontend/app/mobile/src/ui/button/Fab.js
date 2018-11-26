// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

// UI Imports
import { font, scalable } from '../common/responsive'
import { grey1, grey3, white } from '../common/colors'
import Icon from '../../ui/icon/Icon'
import stylesCommon from '../common/styles'

// Component
const Fab = ({ onPress, icon, color, iconColor, size, disabled }) => {
  return(
    disabled
      ? <View style={[styles.container, { backgroundColor: grey3 }]}>
          <Icon
            name={icon}
            size={font(size)}
            color={iconColor}
          />
        </View>
      : <TouchableOpacity onPress={onPress}>
          <View style={[styles.container, { backgroundColor: color, ...stylesCommon.shadowSubtle }]}>
            <Icon
              name={icon}
              size={font(size)}
              color={iconColor}
            />
          </View>
        </TouchableOpacity>
  )
}

// Component Properties
Fab.propTypes = {
  icon: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
  disabled: PropTypes.bool,
}
Fab.defaultProps = {
  color: white,
  iconColor: grey1,
  size: 26,
  disabled: false
}

export default Fab

// Component Styles
const styles = StyleSheet.create({
  container: {
    height: scalable(40),
    width: scalable(40),
    borderRadius: scalable(20),
    alignItems: 'center',
    justifyContent: 'center'
  }
})
