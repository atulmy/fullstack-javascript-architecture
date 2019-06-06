// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { View } from 'react-native'

// UI Imports
import Button from '../../../../../ui/button/Button'
import InputTextWithLabel from '../../../../../ui/input/TextWithLabel'
import stylesCommon from '../../../../../ui/common/styles'

// App Imports
import translate from '../../../../../setup/translate'
import { setUser, profile } from '../../../api/actions/query'
import { profileUpdate } from '../../../api/actions/mutation'
import { messageShow } from '../../../../common/api/actions'

// Component
class Form extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      isSubmitting: false,

      name: '',

      ...props.auth.details
    }
  }

  #onSubmit = async () => {
    const { dispatch } = this.props
    const { name } = this.state

    this.#isSubmittingToggle(true)

    try {
      const { data } = await dispatch(profileUpdate({ name }))

      this.#isSubmittingToggle(false)

      dispatch(messageShow({ success: data.success, message: data.message }))

      if(data.success) {
        dispatch(setUser(data.data.token, data.data.user))
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

  render() {
    const { isSubmitting, name } = this.state

    return (
      <View>
        <View style={stylesCommon.form}>
          {/* Nickname */}
          <InputTextWithLabel
            label={translate.t('user.fields.name')}
            placeholder={translate.t('user.fields.namePlaceholder')}
            value={name}
            returnKeyType={'next'}
            autoCapitalize={'none'}
            onChangeText={name => this.setState({ name })}
            onSubmitEditing={this.#onSubmit}
          />
        </View>

        {/* Bottom CTA */}
        <View style={stylesCommon.formCta}>
          {/* Submit */}
          <Button
            title={ translate.t('user.profile.button.submit').toUpperCase() }
            theme={'primary'}
            onPress={this.#onSubmit}
            disabled={isSubmitting}
            fullWidth
          />
        </View>
      </View>
    )
  }
}

// Component Properties
Form.propTypes = {
  auth: PropTypes.object.isRequired
}

// Component State
function formState(state) {
  return {
    auth: state.auth
  }
}

export default connect(formState)(Form)
