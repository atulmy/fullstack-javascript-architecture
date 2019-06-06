// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

// UI Imports
import Button from '../../../ui/button/Button'
import InputText from '../../../ui/input/Text'
import stylesCommon from '../../../ui/common/styles'
import styles from './styles'

// App Imports
import translate from '../../../setup/translate'
import { routesPreLogin } from '../../../setup/routes/preLogin'
import routeNames from '../../../setup/routes/names'
import { login, setUser } from '../api/actions/query'
import { messageShow } from '../../common/api/actions'
import Body from '../../common/Body'
import NavigationTop from '../../common/NavigationTop'
import ActionBack from '../../common/NavigationTop/ActionBack'

// Component
class Login extends PureComponent {
  state = {
    isSubmitting: false,

    email: '',
    password: ''
  }

  #onSubmit = async () => {
    const { dispatch } = this.props
    const { email, password } = this.state

    this.#isSubmittingToggle(true)

    try {
      const { data } = await dispatch(login({ email, password }))

      this.#isSubmittingToggle(false)

      if(data.success) {
        dispatch(setUser(data.data.token, data.data.user))

        dispatch(messageShow({ success: data.success, message: data.message }))

        // User profile is complete, redirect to post login route
        this.#navigateTo(routeNames.postLoginStack)
      } else {
        dispatch(messageShow({ success: data.success, message: data.message }))
      }
    } catch(error) {
      this.#isSubmittingToggle(false)

      dispatch(messageShow({ success: false, message: translate.t('common.error.default') }))
    }
  }

  #isSubmittingToggle = isSubmitting => {
    this.setState({
      isSubmitting
    })
  }

  #onPressSignup = () => {
    this.#navigateTo(routesPreLogin.signup.name)
  }

  #navigateTo = (screen) => {
    const { navigation } = this.props

    navigation.navigate(screen)
  }

  render() {
    const { isSubmitting, email, password } = this.state

    return (
      <Body fullscreen={true}>
        {/* Navigation */}
        <NavigationTop
          title={translate.t('user.login.title')}
          leftIcon={<ActionBack />}
        />

        <KeyboardAwareScrollView contentContainerStyle={stylesCommon.flexGrow} enableOnAndroid={true}>
          <View style={styles.container}>
            {/* Form */}
            <View style={styles.formContainer}>
              <View style={[stylesCommon.formRounded, styles.form]}>
                {/* Email */}
                <InputText
                  placeholder={translate.t('user.fields.email').toUpperCase()}
                  keyboardType={'email-address'}
                  autoCapitalize={'none'}
                  returnKeyType={'next'}
                  value={email}
                  onChangeText={email => this.setState({ email })}
                  blurOnSubmit={false}
                  onSubmitEditing={() => this.inputPassword.focus()}
                />

                <View style={stylesCommon.divider} />

                {/* Password */}
                <InputText
                  inputRef={input => this.inputPassword = input}
                  placeholder={translate.t('user.fields.password').toUpperCase()}
                  secureTextEntry={true}
                  autoCapitalize={'none'}
                  returnKeyType={'next'}
                  value={password}
                  onChangeText={password => this.setState({ password })}
                  blurOnSubmit={false}
                  onSubmitEditing={this.#onSubmit}
                />
              </View>

              {/* Submit */}
              <Button
                onPress={this.#onSubmit}
                title={ translate.t('common.button.submit').toUpperCase() }
                theme={'primary'}
                disabled={isSubmitting}
              />
            </View>

            {/* Bottom CTA */}
            <View style={styles.bottomCta}>
              <Button title={ translate.t('user.login.button.signup').toUpperCase() } onPress={this.#onPressSignup} />
            </View>
          </View>
        </KeyboardAwareScrollView>
      </Body>
    )
  }
}

export default connect()(Login)
