// Imports
import {StyleSheet} from 'react-native'

// UI Imports
import {navigationTopHeight, font} from '../../../ui/common/responsive'
import {black, white} from '../../../ui/common/colors'

export default StyleSheet.create({
  container: {
    height: navigationTopHeight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  left: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  middle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  right: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    color: black,
    fontSize: font(18),
  },
  iconPlaceholder: {
    width: navigationTopHeight,
    height: navigationTopHeight,
  },
})
