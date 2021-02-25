// Imports
import {StyleSheet} from 'react-native'

// UI Imports
import {
  black,
  blackLight,
  grey1,
  grey5,
  grey6,
  grey7,
  primary,
  secondary,
  transparent,
  white,
} from '../common/colors'
import {
  blockMargin,
  blockMarginHalf,
  blockPadding,
  blockPaddingHalf,
  itemRadius,
  itemRadiusHalf,
} from '../common/responsive'
import styles from '../../modules/common/Body/styles'

// Styles
const shadow = {
  shadowColor: black,
  shadowOffset: {
    width: 0,
    height: 10,
  },
  shadowRadius: 10,
  shadowOpacity: 0.25,
  elevation: 5,
}

const shadowMedium = {
  shadowColor: black,
  shadowOffset: {
    width: 0,
    height: 6,
  },
  shadowRadius: 6,
  shadowOpacity: 0.25,
  elevation: 3,
}

const shadowSubtle = {
  shadowColor: black,
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowRadius: 2,
  shadowOpacity: 0.1,
  elevation: 2,
}

// Styles
export default StyleSheet.create({
  flex: {
    flex: 1,
  },

  flexGrow: {
    flexGrow: 1,
  },

  flexDirectionRow: {
    flexDirection: 'row',
  },

  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  divider: {
    height: 1,
    width: '100%',
    backgroundColor: grey6,
  },

  // Form
  form: {
    backgroundColor: white,
    borderRadius: itemRadiusHalf,
    width: '100%',
    ...shadowSubtle,
  },
  formRounded: {
    backgroundColor: white,
    borderRadius: itemRadius,
    width: '100%',
    ...shadow,
  },
  formCta: {
    marginTop: blockMargin * 3,
  },

  // Tab
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: blockPadding,
    backgroundColor: grey1,
    ...shadowSubtle,
  },
  tabBarItem: {
    paddingHorizontal: blockPaddingHalf,
    paddingVertical: blockPadding,
    alignItems: 'center',
  },

  // Text
  bullet: {
    marginHorizontal: blockMarginHalf,
  },

  // Shadow
  shadow,
  shadowSubtle,
  shadowMedium,
})

// Others
export const gradient = {
  colors: ['#fafafa', '#d6d6d6'],
  start: {x: 1, y: 0},
  end: {x: 0, y: 1},
  style: styles.gradient,
}
export const gradientImage = {
  colors: [blackLight, transparent],
  start: {x: 0, y: 1},
  end: {x: 0, y: 0.5},
  style: styles.gradient,
}
export const gradientProfile = {
  colors: [secondary, primary],
  start: {x: 1, y: 0},
  end: {x: 0, y: 1},
  style: styles.gradient,
}
