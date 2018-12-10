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
import { setUser } from '../api/actions/query'
import { signup } from '../api/actions/mutation'
import { messageShow } from '../../common/api/actions'
import Body from '../../common/Body'
import NavigationTop from '../../common/NavigationTop'
import ActionBack from '../../common/NavigationTop/ActionBack'

// Component
class Signup extends PureComponent {
  state = {
    isSubmitting: false,

    name: '',
    email: '',
    password: '',
    passwordRepeat: ''
  }

  onSubmit = async () => {
    const { signup, setUser, messageShow } = this.props
    const { name, email, password, passwordRepeat } = this.state

    this.isSubmittingToggle(true)

    try {
      const { data } = await signup({ name, email, password, passwordRepeat })

      this.isSubmittingToggle(false)

      messageShow({ success: data.success, message: data.message })

      if(data.success) {
        setUser(data.data.token, data.data.user)

        this.navigateTo(routeNames.postLoginStack)
      }
    } catch(error) {
      this.isSubmittingToggle(false)

      messageShow({ success: false, message: translate.t('common.error.default') })
    }
  }

  isSubmittingToggle = isSubmitting => {
    this.setState({
      isSubmitting
    })
  }

  onPressLogin = () => {
    this.navigateTo(routesPreLogin.login.name)
  }

  navigateTo = (screen) => {
    const { navigation } = this.props

    navigation.navigate(screen)
  }

  render() {
    const { isSubmitting, name, email, password, passwordRepeat } = this.state

    return (
      <Body fullscreen={true}>
        {/* Navigation */}
        <NavigationTop
          title={translate.t('user.signup.title')}
          leftIcon={<ActionBack />}
        />

        <KeyboardAwareScrollView contentContainerStyle={stylesCommon.flexGrow} enableOnAndroid={true}>
          <View style={styles.container}>
            {/* Form */}
            <View style={styles.formContainer}>
              <View style={[stylesCommon.formRounded, styles.form]}>
                {/* Email */}
                <InputText
                  placeholder={translate.t('user.fields.name').toUpperCase()}
                  autoCapitalize={'none'}
                  returnKeyType={'next'}
                  value={name}
                  onChangeText={name => this.setState({ name })}
                  blurOnSubmit={false}
                  onSubmitEditing={() => this.inputEmail.focus()}
                />

                <View style={stylesCommon.divider} />

                {/* Email */}
                <InputText
                  inputRef={input => this.inputEmail = input}
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
                  onSubmitEditing={() => this.inputPasswordRetype.focus()}
                />

                <View style={stylesCommon.divider} />

                {/* Retype password */}
                <InputText
                  inputRef={input => this.inputPasswordRetype = input}
                  placeholder={translate.t('user.fields.passwordRepeat').toUpperCase()}
                  secureTextEntry={true}
                  autoCapitalize={'none'}
                  returnKeyType={'next'}
                  value={passwordRepeat}
                  onChangeText={passwordRepeat => this.setState({ passwordRepeat })}
                  blurOnSubmit={false}
                  onSubmitEditing={this.onSubmit}
                />
              </View>

              {/* Submit */}
              <Button
                onPress={this.onSubmit}
                title={ translate.t('common.button.submit').toUpperCase() }
                theme={'primary'}
                disabled={isSubmitting}
              />
            </View>

            {/* Bottom CTA */}
            <View style={styles.bottomCta}>
              <Button
                title={ translate.t('user.signup.button.login').toUpperCase() }
                onPress={this.onPressLogin}
              />
            </View>
          </View>
        </KeyboardAwareScrollView>
      </Body>
    )
  }
}

// Component Properties
Signup.propTypes = {
  signup: PropTypes.func.isRequired,
  setUser: PropTypes.func.isRequired,
  messageShow: PropTypes.func.isRequired
}

export default connect(null, { signup, setUser, messageShow })(Signup)
