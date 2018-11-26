// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

// UI Imports
import { blockMargin, blockPadding, blockPaddingHalf, itemRadius } from '../common/responsive'
import { black, grey1, grey3, grey5 } from '../common/colors'
import Typography from '../Typography'

// Component
const InputButtonGroup = ({ label, list, active, onSelect, textSize }) => {
  return(
    <View style={styles.container}>
      <Typography size={'h5'} color={grey1}>{ label.toUpperCase() }</Typography>

      <View style={styles.buttons}>
        {
          list.map((item, i) =>
            <TouchableOpacity style={{ flex: 1 }} key={i} onPress={onSelect(item.key)}>
              <View
                style={[
                  styles.button,
                  item.key === active ? { backgroundColor: grey5 } : {},
                  i === 0 ? { borderTopLeftRadius: itemRadius, borderBottomLeftRadius: itemRadius } : {},
                  i === (list.length - 1) ? { borderTopRightRadius: itemRadius, borderBottomRightRadius: itemRadius } : {},
                ]}
              >
                <Typography color={item.key === active ? black : grey1} size={textSize}>{ item.title }</Typography>
              </View>
            </TouchableOpacity>
          )
        }
      </View>
    </View>
  )
}

// Component Properties
InputButtonGroup.propTypes = {
  label: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  active: PropTypes.string,
  onSelect: PropTypes.func,
  textSize: PropTypes.any
}
InputButtonGroup.defaultProps = {
  textSize: 'h5'
}

export default InputButtonGroup

// Component Styles
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: blockPadding * 2,
    paddingVertical: blockPadding * 1.2
  },
  buttons: {
    flexDirection: 'row',
    marginTop: blockMargin,
    borderWidth: 1,
    borderColor: grey3,
    borderRadius: itemRadius
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: blockPadding
  }
})
