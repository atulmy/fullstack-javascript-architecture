// Imports
import React from 'react'
import PropTypes from 'prop-types'
import {StyleSheet, Switch, View} from 'react-native'

// UI Imports
import {blockMargin, blockMarginHalf, blockPadding} from '../common/responsive'
import {grey1, grey2, grey5, highlight} from '../common/colors'
import Typography from '../Typography'
import {renderIf} from '../../setup/helpers/utils'

// Component
const InputSwitch = ({
  label,
  onChange,
  value,
  description = '',
  trackColor = highlight,
  style = {},
  ...props
}) => {
  return (
    <View style={styles.container}>
      <Typography size='h5' color={grey1}>
        {label.toUpperCase()}
      </Typography>

      <Switch
        onValueChange={onChange}
        value={value}
        trackColor={{
          true: trackColor,
        }}
        style={[styles.switch, style]}
        {...props}
      />

      {renderIf(
        description,
        <Typography size='h6' color={grey2} style={styles.description}>
          {description}
        </Typography>,
      )}
    </View>
  )
}

InputSwitch.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.bool,
  description: PropTypes.string,
  trackColor: PropTypes.string,
  style: PropTypes.object,
}

export default InputSwitch

// Component Styles
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: blockPadding * 2,
    paddingVertical: blockPadding * 1.2,
    alignItems: 'flex-start',
  },
  switch: {
    marginTop: blockMargin,
  },
  description: {
    marginTop: blockMarginHalf,
  },
})
