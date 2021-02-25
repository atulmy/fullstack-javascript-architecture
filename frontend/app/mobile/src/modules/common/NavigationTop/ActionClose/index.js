// Imports
import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {withNavigation} from 'react-navigation'

// UI Imports
import ActionIcon from '../../../../ui/icon/ActionIcon'

// Component
class ActionClose extends PureComponent {
  render() {
    const {onPress} = this.props

    return <ActionIcon icon='close' onPress={onPress} />
  }
}
// Component Properties
ActionClose.propTypes = {
  onPress: PropTypes.func.isRequired,
}

export default withNavigation(ActionClose)
