// Imports
import { StyleSheet } from 'react-native'

// UI Imports
import { blockMargin, blockPadding } from '../../../ui/common/responsive'

// Styles
export default StyleSheet.create({
  container: {
    flex: 1
  },

  formContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: blockMargin * 3
  },
  form: {
    marginBottom: blockMargin * 3
  },

  bottomCta: {
    paddingVertical: blockPadding * 2
  }
})
