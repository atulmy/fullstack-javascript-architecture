// Imports
import { StyleSheet } from 'react-native'

// UI Imports
import { navigationTopHeight, font, blockMargin } from '../../../ui/common/responsive'
import { white } from '../../../ui/common/colors'

export default StyleSheet.create({
  container: {
    height: navigationTopHeight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  left: {
    flexDirection: 'row',
  },
  leftIcon: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: navigationTopHeight,
  },
  leftIconPlaceholder: {
    width: blockMargin * 1.5
  },
  right: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: blockMargin * 1.5
  },
  info: {
    justifyContent: 'center'
  },
  middle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
