// Imports
import {StyleSheet} from 'react-native'

// UI Imports
import {blockMargin, blockPadding} from '../../../ui/common/responsive'

// Styles
export default StyleSheet.create({
  container: {
    flex: 1,
  },

  // Intro
  intro: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: blockPadding,
  },
  introTitle: {
    marginVertical: blockMargin * 2,
  },

  // Buttons
  buttons: {
    padding: blockPadding * 2,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  buttonsSocial: {
    flexDirection: 'row',
    marginTop: blockMargin,
  },
  buttonsSocialLeft: {
    flex: 1,
  },
  buttonsSocialRight: {
    flex: 1,
    marginLeft: blockMargin,
  },

  terms: {
    marginTop: blockMargin * 1.5,
  },
})
