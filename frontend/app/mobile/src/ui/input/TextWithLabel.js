// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, TextInput } from 'react-native'

// UI Imports
import { blockMarginHalf, blockPadding, blockMargin, blockPaddingHalf, font } from '../common/responsive'
import { grey1, grey3, transparent } from '../common/colors'
import Typography from '../Typography'
import ActionIcon from '../icon/ActionIcon'

// Component
const InputTextWithLabel = ({ label, onSubmitEditing, inputRef, icon, onPressIcon, style = {}, ...props}) => {
  return(
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <Typography color={grey1} size={'h5'} style={{ marginTop: blockMargin }}>{ label.toUpperCase() }</Typography>

        <TextInput
          ref={inputRef ? ref => inputRef(ref) : null}
          onSubmitEditing={() => {
            if (onSubmitEditing) onSubmitEditing()
          }}
          placeholderTextColor={grey3}
          underlineColorAndroid={transparent}
          autoCorrect={false}
          style={[styles.input, style]}
          {...props}
        />
      </View>

      { icon && <ActionIcon
        icon={icon}
        size={font(26)}
        color={grey1}
        onPress={onPressIcon}
      /> }
    </View>
  )
}

// Component Properties
InputTextWithLabel.propTypes = {
  label: PropTypes.string.isRequired,
  onSubmitEditing: PropTypes.func,
  icon: PropTypes.string,
  onPressIcon: PropTypes.func
}

export default InputTextWithLabel

// Component Styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: blockPadding * 2,
  },
  inputWrapper: {
    flex: 1
  },
  input: {
    marginBottom: blockMarginHalf,
    paddingVertical: blockPaddingHalf,
    paddingHorizontal: 0,
    fontSize: font(16),
    borderWidth: 0
  }
})
