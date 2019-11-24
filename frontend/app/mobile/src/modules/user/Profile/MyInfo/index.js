// Imports
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { View, Image } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import ImagePicker from 'react-native-image-picker'
import { withNavigation } from 'react-navigation'

// UI Imports
import { grey3 } from '../../../../ui/common/colors'
import Fab from '../../../../ui/button/Fab'
import Typography from '../../../../ui/Typography'
import stylesCommon from '../../../../ui/common/styles'
import styles from './styles'

// App Imports
import params from '../../../../setup/config/params'
import translate from '../../../../setup/translate'
import { userImage } from '../../../../setup/helpers/utils'
import { upload, messageShow } from '../../../common/api/actions'
import { loginSetUser } from '../../api/actions/query'
import { changeImage } from '../../api/actions/mutation'
import Form from './Form'

// Component
const MyInfo = () => {
  // state
  const [isUploading, isUploadingToggle] = useState(false)
  const { details: { name, email, image } } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  // on select image
  const onSelectImage = () => {
    isUploadingToggle(true)

    ImagePicker.launchImageLibrary({
      title: translate.t('user.avatar'),
      noData: true,
      allowsEditing: true,
      mediaType: 'photo'
    }, async response => {
      if (response.didCancel) {
        isUploadingToggle(false)

      } else if (response.error) {
        isUploadingToggle(false)

        // Error selecting image
        dispatch(messageShow({ success: false, message: translate.t('common.error.default') }))
      } else {
        // Image selection successful
        await uploadImage(response)
      }
    })
  }

  // upload image
  const uploadImage = async (response) => {
    const form = new FormData()
    form.append('type', 'user')
    form.append('folder', params.folders.user.image)
    form.append('file', {
      uri : response.uri,
      type: response.type,
      name: response.fileName
    })

    try {
      const { data: { success, file } } = await upload(form)

      if(success && file) {
        await updateImage(file)
      }
    } catch(error) {
      dispatch(messageShow({ success: false, message: translate.t('common.error.default') }))
    } finally {
      isUploadingToggle(false)
    }
  }

  // update image
  const updateImage = async file => {
    try {
      const { data } = await changeImage({ image : file })

      if(data.success) {
        dispatch(messageShow({ success: true, message: data.message }))

        dispatch(loginSetUser(data.data.token, data.data.user))
      } else {
        dispatch(messageShow({ success: false, message: translate.t('common.error.default') }))
      }
    } catch (error) {
      dispatch(messageShow({ success: false, message: translate.t('common.error.default') }))
    }
  }

  // render
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={stylesCommon.flexGrow}
      enableOnAndroid={true}
      style={styles.container}
      keyboardShouldPersistTaps='handled'
    >
      <View style={styles.profile}>
        {/* Image */}
        <View style={styles.profileImageWrapper}>
          <Image
            source={{ uri: userImage(image), cache: 'force-cache' }}
            resizeMode='cover'
            style={styles.profileImage}
          />

          <View style={{ position: 'absolute', bottom: 0, right: 0, alignItems: 'center' }}>
            <Fab
              icon='camera'
              onPress={onSelectImage}
              disabled={isUploading}
            />
          </View>
        </View>

        {/* Name */}
        <Typography size='h2' style={styles.profileTitle}>{ name }</Typography>

        {/* Email */}
        <Typography size='h6' color={grey3} style={styles.profileCaption}>{ email }</Typography>
      </View>

      {/* Form */}
      <View style={styles.formContainer}>
        <Form />
      </View>
    </KeyboardAwareScrollView>
  )
}

export default withNavigation(MyInfo)
