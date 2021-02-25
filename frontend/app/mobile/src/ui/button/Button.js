// Imports
import React from 'react'
import PropTypes from 'prop-types'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

// UI Imports
import {
  buttonPadding,
  blockMarginHalf,
  buttonRadius,
  font,
} from '../common/responsive'
import {
  black,
  grey,
  grey1,
  grey2,
  highlight,
  primary,
  primaryLight,
  secondary,
  secondaryLight,
  transparent,
  white,
} from '../common/colors'
import stylesCommon from '../common/styles'
import Icon from '../icon/Icon'

const ButtonState = ({
  disabled,
  onPress,
  theme,
  shadow,
  condensed,
  fullWidth,
  style = {},
  children,
}) =>
  disabled ? (
    <View
      style={[
        styles.container,
        {backgroundColor: themes[theme].background, opacity: 0.5},
        condensed ? styles.paddingCondensed : styles.padding,
        theme === 'outlined' ? {borderWidth: 1, borderColor: grey2} : {},
        fullWidth ? {width: '100%'} : {},
        style,
      ]}>
      {children}
    </View>
  ) : ['primary', 'secondary'].indexOf(theme) !== -1 ? (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {backgroundColor: themes[theme].background},
        shadow ? stylesCommon.shadowMedium : {},
        style,
      ]}>
      <LinearGradient
        colors={[themes[theme].backgroundLight, themes[theme].background]}
        start={{x: 1, y: 0}}
        end={{x: 0, y: 1}}
        style={[
          {borderRadius: buttonRadius},
          {backgroundColor: themes[theme].background},
          condensed ? styles.paddingCondensed : styles.padding,
          fullWidth ? {width: '100%'} : {},
        ]}>
        {children}
      </LinearGradient>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {backgroundColor: themes[theme].background},
        theme === 'outlined' ? {borderWidth: 1, borderColor: grey1} : {},
        condensed ? styles.paddingCondensed : styles.padding,
        fullWidth ? {width: '100%'} : {},
        style,
      ]}>
      {children}
    </TouchableOpacity>
  )

// Component
const Button = (props) => {
  const {
    title,
    onPress,
    iconLeft,
    iconRight,
    iconPack,
    theme,
    shadow,
    condensed,
    fullWidth,
    on,
    disabled,
    style = {},
  } = props

  return (
    <ButtonState
      disabled={disabled}
      theme={theme}
      shadow={shadow}
      condensed={condensed}
      onPress={onPress}
      fullWidth={fullWidth}
      style={style}>
      {iconLeft && (
        <Icon
          name={iconLeft}
          pack={iconPack}
          size={iconPack === 'social' ? font(14) : font(18)}
          color={themes[theme].text}
        />
      )}

      <Text
        style={[
          styles.text,
          {
            color: themes[theme].text,
            fontSize: condensed ? font(12) : font(16),
          },
        ]}>
        {title.toUpperCase()}
      </Text>

      {iconRight && (
        <Icon
          name={iconRight}
          pack={iconPack}
          size={iconPack === 'social' ? font(14) : font(18)}
          color={themes[theme].text}
        />
      )}

      {on && (
        <View
          style={{
            position: 'absolute',
            top: 5,
            right: 5,
            height: 5,
            width: 5,
            borderRadius: 3,
            backgroundColor: highlight,
          }}
        />
      )}
    </ButtonState>
  )
}

// Component Properties
Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  iconLeft: PropTypes.string,
  iconRight: PropTypes.string,
  iconPack: PropTypes.string,
  theme: PropTypes.string,
  shadow: PropTypes.bool,
  condensed: PropTypes.bool,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  on: PropTypes.bool,
}
Button.defaultProps = {
  iconPack: 'material',
  theme: 'default',
  shadow: true,
  condensed: false,
  disabled: false,
  fullWidth: false,
  on: false,
}

export default Button

// Component Styles
const styles = StyleSheet.create({
  container: {
    borderRadius: buttonRadius,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  padding: {
    paddingVertical: buttonPadding * 1.2,
    paddingHorizontal: buttonPadding * 2,
  },
  paddingCondensed: {
    paddingVertical: buttonPadding * 0.5,
    paddingHorizontal: buttonPadding * 0.7,
  },
  text: {
    marginHorizontal: blockMarginHalf,
    textAlign: 'center',
    fontSize: font(16),
  },
})

const themes = {
  default: {
    background: transparent,
    text: black,
  },
  primary: {
    background: primary,
    backgroundLight: primaryLight,
    text: white,
  },
  secondary: {
    background: secondary,
    backgroundLight: secondaryLight,
    text: black,
  },
  outlined: {
    background: transparent,
    text: grey,
  },
}
