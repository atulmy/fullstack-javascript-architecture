// Imports
import React, {useState, useRef} from 'react'
import {useDispatch} from 'react-redux'
import {View} from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

// UI Imports
import Button from '../../../ui/button/Button'
import InputText from '../../../ui/input/Text'
import stylesCommon from '../../../ui/common/styles'
import styles from './styles'

// App Imports
import translate from '../../../setup/translate'
import {routesPreLogin} from '../../../setup/routes/preLogin'
import routeNames from '../../../setup/routes/names'
import {loginSetUser} from '../api/actions/query'
import {signup} from '../api/actions/mutation'
import {messageShow} from '../../common/api/actions'
import Body from '../../common/Body'
import NavigationTop from '../../common/NavigationTop'
import ActionBack from '../../common/NavigationTop/ActionBack'

// Component
const Signup = ({navigation}) => {
  // state
  const [isSubmitting, isSubmittingToggle] = useState(false)
  const [user, setUser] = useState({
    name: 'User',
    email: 'user@example.com',
    password: '123456',
    passwordRepeat: '123456',
  })
  const dispatch = useDispatch()
  const inputEmail = useRef(null)
  const inputPassword = useRef(null)
  const inputPasswordRepeat = useRef(null)

  // on submit
  const onSubmit = async () => {
    isSubmittingToggle(true)

    try {
      const {data} = await signup(user)

      isSubmittingToggle(false)

      dispatch(messageShow({success: data.success, message: data.message}))

      if (data.success) {
        dispatch(loginSetUser(data.data.token, data.data.user))

        navigation.navigate(routeNames.postLoginStack)
      }
    } catch (error) {
      isSubmittingToggle(false)

      dispatch(
        messageShow({
          success: false,
          message: translate.t('common.error.default'),
        }),
      )
    }
  }

  // on change
  const onChange = (name) => (value) => {
    setUser({...user, [name]: value})
  }

  // on press login
  const onPressLogin = () => {
    navigation.navigate(routesPreLogin.login.name)
  }

  // render
  return (
    <Body fullscreen={true}>
      {/* Navigation */}
      <NavigationTop
        title={translate.t('user.signup.title')}
        leftIcon={<ActionBack />}
      />

      <KeyboardAwareScrollView
        contentContainerStyle={stylesCommon.flexGrow}
        enableOnAndroid={true}
        keyboardShouldPersistTaps='handled'>
        <View style={styles.container}>
          {/* Form */}
          <View style={styles.formContainer}>
            <View style={[stylesCommon.formRounded, styles.form]}>
              {/* Email */}
              <InputText
                placeholder={translate.t('user.fields.name').toUpperCase()}
                autoCapitalize='none'
                returnKeyType='next'
                value={user.name}
                onChangeText={onChange('name')}
                blurOnSubmit={false}
                onSubmitEditing={() => inputEmail.current.focus()}
              />

              <View style={stylesCommon.divider} />

              {/* Email */}
              <InputText
                inputRef={inputEmail}
                placeholder={translate.t('user.fields.email').toUpperCase()}
                keyboardType='email-address'
                autoCapitalize='none'
                returnKeyType='next'
                value={user.email}
                onChangeText={onChange('email')}
                blurOnSubmit={false}
                onSubmitEditing={() => inputPassword.current.focus()}
              />

              <View style={stylesCommon.divider} />

              {/* Password */}
              <InputText
                inputRef={inputPassword}
                placeholder={translate.t('user.fields.password').toUpperCase()}
                secureTextEntry={true}
                autoCapitalize='none'
                returnKeyType='next'
                value={user.password}
                onChangeText={onChange('password')}
                blurOnSubmit={false}
                onSubmitEditing={() => inputPasswordRepeat.current.focus()}
              />

              <View style={stylesCommon.divider} />

              {/* Repeat password */}
              <InputText
                inputRef={inputPasswordRepeat}
                placeholder={translate
                  .t('user.fields.passwordRepeat')
                  .toUpperCase()}
                secureTextEntry={true}
                autoCapitalize='none'
                returnKeyType='go'
                value={user.passwordRepeat}
                onChangeText={onChange('passwordRepeat')}
                blurOnSubmit={false}
                onSubmitEditing={onSubmit}
              />
            </View>

            {/* Submit */}
            <Button
              onPress={onSubmit}
              title={translate.t('common.button.submit').toUpperCase()}
              theme='primary'
              disabled={isSubmitting}
            />
          </View>

          {/* Bottom CTA */}
          <View style={styles.bottomCta}>
            <Button
              title={translate.t('user.signup.button.login').toUpperCase()}
              onPress={onPressLogin}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </Body>
  )
}

export default Signup
