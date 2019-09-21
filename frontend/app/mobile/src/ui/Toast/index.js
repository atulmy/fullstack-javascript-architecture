// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native'

// UI Imports
import { blockPadding, font, blockMarginHalf } from '../common/responsive'
import { white, positive, negative, black } from '../common/colors'
import Typography from '../Typography'
import stylesCommon  from '../common/styles'
import Icon  from '../icon/Icon'

// Component
const Toast = ({ onPress, message, success }) => (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.icon}>
          <Icon
            name={success ? 'check' : 'alert-circle-outline'}
            size={font(18)}
            color={ success ? positive : negative }
          />
        </View>

        <Typography size={'h5'} color={black}>{ message }</Typography>
      </View>
    </TouchableWithoutFeedback>
)

// Component Properties
Toast.propTypes = {
  onPress: PropTypes.func,
  message: PropTypes.string,
  success: PropTypes.bool,
}

export default Toast

// Component Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    backgroundColor: white,
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: blockPadding,
    paddingHorizontal: blockPadding * 2,
    ...stylesCommon.shadowSubtle
  },
  icon: {
    marginRight: blockMarginHalf
  },
  text: {
    fontSize: font(14),
    color: white
  }
})
