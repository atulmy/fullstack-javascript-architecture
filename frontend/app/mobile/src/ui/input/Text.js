// Imports
import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

// UI Imports
import { blockMarginHalf, blockPadding, font } from '../common/responsive'
import { grey1, transparent } from '../common/colors'

// Component
const InputText = ({ onSubmitEditing, inputRef, style = {}, ...props}) => {
  return(
    <TextInput
      ref={inputRef || null}
      onSubmitEditing={() => {
        if (onSubmitEditing) onSubmitEditing()
      }}
      placeholderTextColor={grey1}
      underlineColorAndroid={transparent}
      autoCorrect={false}
      style={[styles.container, style]}
      {...props}
    />
  )
}

export default InputText

// Component Styles
const styles = StyleSheet.create({
  container: {
    marginVertical: blockMarginHalf,
    padding: blockPadding,
    fontSize: font(16),
    borderWidth: 0,
    textAlign: 'center'
  }
})
