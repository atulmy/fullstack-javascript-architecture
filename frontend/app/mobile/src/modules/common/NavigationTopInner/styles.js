// Imports
import { StyleSheet } from 'react-native'

// UI Imports
import { navigationTopHeight, font, blockMargin } from '../../../ui/common/responsive'
import { black, grey1, white } from '../../../ui/common/colors'

export default StyleSheet.create({
  container: {
    height: navigationTopHeight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: white
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
  title: {
    color: black,
    fontSize: font(16),
  },
  subTitle: {
    color: grey1,
    fontSize: font(10)
  }
})
