// Imports
import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {View} from 'react-native'

// UI Imports
import Button from '../../../../../ui/button/Button'
import InputTextWithLabel from '../../../../../ui/input/TextWithLabel'
import stylesCommon from '../../../../../ui/common/styles'

// App Imports
import translate from '../../../../../setup/translate'
import {loginSetUser} from '../../../api/actions/query'
import {profileUpdate} from '../../../api/actions/mutation'
import {messageShow} from '../../../../common/api/actions'

// Component
const Form = () => {
  // state
  const {details} = useSelector((state) => state.auth)
  const [isSubmitting, isSubmittingToggle] = useState(false)
  const [name, setName] = useState(details.name)
  const dispatch = useDispatch()

  // on submit
  const onSubmit = async () => {
    isSubmittingToggle(true)

    try {
      const {data} = await profileUpdate({name})

      isSubmittingToggle(false)

      dispatch(messageShow({success: data.success, message: data.message}))

      if (data.success) {
        dispatch(loginSetUser(data.data.token, data.data.user))
      } else {
        dispatch(messageShow({success: data.success, message: data.message}))
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
  const onChange = (value) => {
    setName(value)
  }

  // render
  return (
    <View>
      <View style={stylesCommon.form}>
        {/* Nickname */}
        <InputTextWithLabel
          label={translate.t('user.fields.name')}
          placeholder={translate.t('user.fields.namePlaceholder')}
          value={name}
          returnKeyType='go'
          autoCapitalize='none'
          onChangeText={onChange}
          onSubmitEditing={onSubmit}
        />
      </View>

      {/* Bottom CTA */}
      <View style={stylesCommon.formCta}>
        {/* Submit */}
        <Button
          title={translate.t('user.profile.button.submit').toUpperCase()}
          theme='primary'
          onPress={onSubmit}
          disabled={isSubmitting}
          fullWidth
        />
      </View>
    </View>
  )
}

export default Form
