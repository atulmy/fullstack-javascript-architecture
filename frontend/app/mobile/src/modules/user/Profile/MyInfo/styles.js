// Imports
import {StyleSheet} from 'react-native'

// UI Imports
import {
  blockMargin,
  blockMarginHalf,
  scalable,
} from '../../../../ui/common/responsive'
import stylesCommon from '../../../../ui/common/styles'

// Styles
export default StyleSheet.create({
  container: {
    flex: 1,
  },

  // Profile
  profile: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImageWrapper: {
    position: 'relative',
    marginTop: blockMargin * 3,
    ...stylesCommon.shadow,
  },
  profileImage: {
    width: scalable(120),
    height: scalable(120),
    borderRadius: scalable(60),
  },
  profileTitle: {
    marginTop: blockMargin,
    textAlign: 'center',
  },
  profileCaption: {
    marginTop: blockMarginHalf,
    textAlign: 'center',
  },

  formContainer: {
    flex: 1,
    margin: blockMargin * 2,
  },
})
