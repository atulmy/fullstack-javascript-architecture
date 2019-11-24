// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { withNavigation } from 'react-navigation'

// UI Imports
import ActionIcon from '../../../../ui/icon/ActionIcon'

// Component
class ActionDrawer extends PureComponent {
  render() {
    const { navigation } = this.props

    return (
      <ActionIcon
        icon='menu'
        onPress={() => navigation.openDrawer()}
      />
    )
  }
}

// Component Properties
ActionDrawer.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default withNavigation(ActionDrawer)
