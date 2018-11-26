// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { Image } from 'react-native'

// Assets
import iconFootball from '../../../assets/icons/football.png'
import iconFootballOutline from '../../../assets/icons/football-outline.png'

// App Imports
import { blockMargin, scalable } from '../common/responsive'

// Component
const IconFootballRate = ({ size, filled }) => (
  <Image
    resizeMode={'contain'}
    source={filled ? iconFootball : iconFootballOutline}
    style={{ width: size, height: size, marginRight: 5 }}
  />
)

IconFootballRate.propTypes = {
  size: PropTypes.number,
  filled: PropTypes.bool
}

IconFootballRate.defaultProps = {
  size: 30,
  filled: false
}

export default IconFootballRate
