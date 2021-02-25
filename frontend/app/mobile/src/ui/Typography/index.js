// Imports
import React from 'react'
import PropTypes from 'prop-types'
import {Text} from 'react-native'

// UI Imports
import {black} from '../common/colors'
import {font} from '../common/responsive'

const sizes = (s = 12) => {
  const sizePredefined = {
    h1: 30,
    h2: 26,
    h3: 20,
    h4: 16,
    h5: 14,
    h6: 12,
    h7: 10,
  }[s]

  return sizePredefined ? font(sizePredefined) : font(s)
}

// Component
const Typography = ({
  size,
  color,
  spacing,
  align,
  weight,
  style = {},
  children,
  ...props
}) => (
  <Text
    style={[
      {
        fontSize: sizes(size),
        color,
        letterSpacing: spacing,
        textAlign: align,
        fontWeight: weight,
      },
      style,
    ]}
    {...props}>
    {children}
  </Text>
)

// Component Properties
Typography.propTypes = {
  size: PropTypes.any,
  color: PropTypes.string,
  spacing: PropTypes.number,
  align: PropTypes.string,
  weight: PropTypes.string,
}

Typography.defaultProps = {
  size: 12,
  color: black,
  spacing: 0,
  align: 'left',
  weight: 'normal',
}

export default Typography
