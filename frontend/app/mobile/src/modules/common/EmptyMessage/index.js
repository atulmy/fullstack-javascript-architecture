// Imports
import React  from 'react'
import PropTypes  from 'prop-types'
import { Text, View } from 'react-native'

// UI Imports
import { grey2, opacityLow } from '../../../ui/common/colors'
import { font } from '../../../ui/common/responsive'
import Icon from '../../../ui/icon/Icon'
import styles from './styles'

// Component
const EmptyMessage = ({ icon, message }) => (
  <View
    animation='fadeIn'
    useNativeDriver={true}
    duration={1000}
    easing='ease-in-out-back'
    style={styles.container}
  >
    <Icon
      name={icon}
      size={font(30)}
      color={grey2 + opacityLow}
    />

    <Text style={styles.text}>{ message }</Text>
  </View>
)

// Component Properties
EmptyMessage.propTypes = {
  message: PropTypes.string.isRequired,
  icon: PropTypes.string
}
EmptyMessage.defaultProps = {
  icon: 'alert-circle-outline',
}

export default EmptyMessage
