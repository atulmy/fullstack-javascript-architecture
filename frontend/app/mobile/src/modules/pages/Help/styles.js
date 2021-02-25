// Imports
import {StyleSheet} from 'react-native'
import {
  blockMargin,
  blockMarginHalf,
  blockPadding,
} from '../../../ui/common/responsive'

// Styles
export default StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    paddingVertical: blockPadding * 1.5,
    paddingHorizontal: blockPadding * 2,
  },

  section: {
    marginTop: blockMargin * 1.5,
  },

  item: {
    marginTop: blockMarginHalf,
  },
  itemRow: {
    flexDirection: 'row',
  },
  itemBullet: {
    marginRight: blockMargin,
  },
})
