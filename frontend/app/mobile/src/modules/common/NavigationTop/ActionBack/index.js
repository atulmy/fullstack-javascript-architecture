// Imports
import React, { PureComponent } from 'react'
import { withNavigation } from 'react-navigation'

// UI Imports
import ActionIcon from '../../../../ui/icon/ActionIcon'

// Component
class ActionBack extends PureComponent {
  onPress = () => {
    const { navigation } = this.props

    navigation.goBack()
  }

  render() {
    const { onPress } = this.props

    return (
      <ActionIcon
        icon={'arrow-left'}
        onPress={onPress || this.onPress}
      />
    )
  }
}

export default withNavigation(ActionBack)
