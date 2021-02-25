// Imports
import React, {Fragment} from 'react'
import {useDispatch} from 'react-redux'
import {Alert} from 'react-native'

// UI Imports
import {blockMarginHalf} from '../../../ui/common/responsive'
import Button from '../../../ui/button/Button'

// App Imports
import translate from '../../../setup/translate'
import {routesPreLogin} from '../../../setup/routes/preLogin'
import {routesUser} from '../../../setup/routes/postLogin/user'
import {noop} from '../../../setup/helpers/utils'
import {logout} from '../../user/api/actions/query'
import {messageShow} from '../../common/api/actions'
import Body from '../../common/Body'
import NavigationTopInner from '../../common/NavigationTopInner'
import MyInfo from './MyInfo'

// Component
const Profile = ({navigation}) => {
  const dispatch = useDispatch()

  // on logout
  const onLogout = () => {
    Alert.alert(
      translate.t('user.profile.prompts.logout'),
      '',
      [
        {
          text: translate.t('common.button.cancel'),
          onPress: noop,
          style: 'cancel',
        },
        {text: translate.t('common.button.okay'), onPress: logoutUser},
      ],
      {cancelable: false},
    )
  }

  // logout user
  const logoutUser = () => {
    navigation.navigate(routesPreLogin.start.name)

    dispatch(
      messageShow({
        success: true,
        message: translate.t('user.profile.messages.logout'),
      }),
    )

    dispatch(logout())
  }

  // on help
  const onHelp = () => {
    navigation.navigate(routesUser.help.name)
  }

  // render
  return (
    <Body>
      {/* Navigation */}
      <NavigationTopInner
        title={translate.t('user.profile.title')}
        subTitle={translate.t('user.profile.subTitle')}
        rightContent={
          <Fragment>
            <Button
              title={translate.t('common.button.logout')}
              onPress={onLogout}
              theme='outlined'
              condensed
            />

            <Button
              title={translate.t('common.button.help')}
              onPress={onHelp}
              theme='outlined'
              condensed
              style={{marginLeft: blockMarginHalf}}
            />
          </Fragment>
        }
      />

      {/* My info */}
      <MyInfo />
    </Body>
  )
}

export default Profile
