// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { Image } from 'react-native'

// Assets
import iconFootball from '../../../assets/icons/football.png'

// App Imports
import { blockMarginHalf, scalable } from '../common/responsive'

// Component
const IconFootball = ({ size, margin }) => (
  <Image
    resizeMode={'contain'}
    source={iconFootball}
    style={{ width: size, height: size, marginLeft: scalable(margin) }}
  />
)

IconFootball.propTypes = {
  size: PropTypes.number.isRequired,
  margin: PropTypes.number
}

IconFootball.defaultProps = {
  size: 16,
  margin: blockMarginHalf,
}

export default IconFootball
