// Imports
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

// UI Imports
import InputTextWithLabel from '../../../ui/input/TextWithLabel'
import Button from '../../../ui/button/Button'
import stylesCommon from '../../../ui/common/styles'
import styles from './styles'

// App Imports
import translate from '../../../setup/translate'
import { routesNote } from '../../../setup/routes/postLogin/note'
import { messageShow } from '../../common/api/actions'
import { list } from '../api/actions/query'
import { create } from '../api/actions/mutation'
import NavigationTopInner from '../../common/NavigationTopInner'
import ActionBack from '../../common/NavigationTop/ActionBack'
import Body from '../../common/Body'

// Component
const Create = ({ navigation }) => {
  // state
  const [isSubmitting, isSubmittingToggle] = useState(false)
  const [note, setNote] = useState('')
  const dispatch = useDispatch()

  // on submit
  const onSubmit = async () => {
    isSubmittingToggle(true)

    try {
      const { data } = await create({ note })

      isSubmittingToggle(false)

      dispatch(messageShow({ success: data.success, message: data.message }))

      if(data.success) {
        dispatch(list(false))

        navigation.navigate(routesNote.list.name)
      }
    } catch(error) {
      isSubmittingToggle(false)

      dispatch(messageShow({ success: false, message: translate.t('common.error.default') }))
    }
  }

  // render
  return (
    <Body>
      {/* Navigation */}
      <NavigationTopInner
        title={translate.t('note.create.title')}
        subTitle={translate.t('note.create.subTitle')}
        leftIcon={
          <ActionBack />
        }
        rightContent={
          <Button
            title={translate.t('common.button.save')}
            theme='outlined'
            onPress={onSubmit}
            disabled={isSubmitting}
            shadow={false}
            condensed
          />
        }
      />

      {/* Form */}
      <KeyboardAwareScrollView
        contentContainerStyle={stylesCommon.flexGrow}
        enableOnAndroid={true}
        keyboardShouldPersistTaps='handled'
        style={styles.container}
      >
        <View style={styles.formContainer}>
          <View style={stylesCommon.form}>
            {/* Notes */}
            <InputTextWithLabel
              label={translate.t('note.fields.note').toUpperCase()}
              placeholder={translate.t('note.fields.notePlaceholder')}
              value={note}
              autoCapitalize='none'
              autoFocus
              multiline={true}
              onChangeText={note => setNote(note)}
            />
          </View>

          {/* Bottom CTA */}
          <View style={stylesCommon.formCta}>
            {/* Submit */}
            <Button
              title={translate.t('common.button.save').toUpperCase()}
              theme='primary'
              onPress={onSubmit}
              disabled={isSubmitting}
              fullWidth
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </Body>
  )
}

export default Create
