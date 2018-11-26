// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { View, TouchableOpacity, Alert } from 'react-native'

// UI Imports
import { grey3, white } from '../../../ui/common/colors'
import { blockMarginHalf } from '../../../ui/common/responsive'
import Button from '../../../ui/button/Button'
import Typography from '../../../ui/Typography'
import stylesCommon from '../../../ui/common/styles'

// App Imports
import translate from '../../../setup/translate'
import { routesUser } from '../../../setup/routes/postLogin/user'
import { noop } from '../../../setup/helpers/utils'
import { logout } from '../../user/api/actions/query'
import { messageShow } from '../../common/api/actions'
import Body from '../../common/Body'
import NavigationTopInner from '../../common/NavigationTopInner'
import MyInfo from './MyInfo'

// Component
class Profile extends PureComponent {
  onLogout = () => {
    Alert.alert(
      translate.t('user.profile.prompts.logout'),
      '',
      [
        { text: translate.t('common.button.cancel'), onPress: noop, style: 'cancel' },
        { text: translate.t('common.button.okay'), onPress: this.logoutUser },
      ],
      { cancelable: false }
    )
  }

  logoutUser = () => {
    const { logout, messageShow, navigation } = this.props

    navigation.navigate('userStart')

    messageShow({ success: true, message: translate.t('user.profile.messages.logout') })

    logout()
  }

  onHelp = () => {
    this.#navigateTo(routesUser.help.name)
  }

  #navigateTo = (screen) => {
    const { navigation } = this.props

    navigation.navigate(screen)
  }

  render() {
    return (
      <Body>
        {/* Navigation */}
        <NavigationTopInner
          title={translate.t('user.profile.title')}
          subTitle={translate.t('user.profile.subTitle')}
          rightContent={
            <React.Fragment>
              <Button title={translate.t('common.button.logout')} onPress={this.onLogout} theme={'outlined'} condensed />

              <Button title={translate.t('common.button.help')} onPress={this.onHelp} theme={'outlined'} condensed style={{ marginLeft: blockMarginHalf }} />
            </React.Fragment>
          }
        />

        <MyInfo />
      </Body>
    )
  }
}

// Component Properties
Profile.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  messageShow: PropTypes.func.isRequired,
}

// Component State
function profileState(state) {
  return {
    auth: state.auth
  }
}

export default connect(profileState, { logout, messageShow })(Profile)
