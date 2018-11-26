// Imports
import { StyleSheet } from 'react-native'

// UI Imports
import { blockMarginHalf, blockPadding } from '../../../ui/common/responsive'
import { grey2 } from '../../../ui/common/colors'

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: blockPadding
  },
  text: {
    color: grey2,
    marginTop: blockMarginHalf,
    textAlign: 'center'
  }
})
