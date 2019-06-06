// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
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
import { list as playerList, setUser } from '../../api/actions/query'
import { changeImage } from '../../api/actions/mutation'
import Form from './Form'

// Component
class MyInfo extends PureComponent {

  state = {
    isUploading: false
  }

  #selectImage = () => {
    const { dispatch } = this.props

    this.#isUploadingToggle(true)

    ImagePicker.launchImageLibrary({
      title: translate.t('user.avatar'),
      noData: true,
      allowsEditing: true,
      mediaType: 'photo'
    }, async response => {
      if (response.didCancel) {
        this.#isUploadingToggle(false)

      } else if (response.error) {
        this.#isUploadingToggle(false)

        // Error selecting image
        dispatch(messageShow({ success: false, message: translate.t('common.error.default') }))
      } else {
        // Image selection successful
        await this.#uploadImage(response)
      }
    })
  }

  #uploadImage = async (response) => {
    const { dispatch } = this.props

    const form = new FormData()
    form.append('type', 'user')
    form.append('folder', params.folders.user.image)
    form.append('file', {
      uri : response.uri,
      type: response.type,
      name: response.fileName
    })

    try {
      const { data: { success, file } } = await dispatch(upload(form))

      if(success && file) {
        await this.#updateImage(file)
      }
    } catch(error) {
      dispatch(messageShow({ success: false, message: translate.t('common.error.default') }))
    } finally {
      this.#isUploadingToggle(false)
    }
  }

  #updateImage = async (file) => {
    const { dispatch } = this.props

    try {
      const { data } = await dispatch(changeImage({ image : file }))

      if(data.success) {
        dispatch(messageShow({ success: true, message: data.message }))

        dispatch(setUser(data.data.token, data.data.user))
      } else {
        dispatch(messageShow({ success: false, message: translate.t('common.error.default') }))
      }
    } catch (error) {
      dispatch(messageShow({ success: false, message: translate.t('common.error.default') }))
    }
  }

  #isUploadingToggle = isUploading => {
    this.setState({
      isUploading
    })
  }

  render() {
    const { auth: { details: { name, email, image } } } = this.props
    const { isUploading } = this.state

    return (
      <KeyboardAwareScrollView contentContainerStyle={stylesCommon.flexGrow} enableOnAndroid={true} style={styles.container}>
        <View style={styles.profile}>
          {/* Image */}
          <View style={styles.profileImageWrapper}>
            <Image
              source={{ uri: userImage(image), cache: 'force-cache' }}
              resizeMode={'cover'}
              style={styles.profileImage}
            />

            <View style={{ position: 'absolute', bottom: 0, right: 0, alignItems: 'center' }}>
              <Fab
                icon={'photo-camera'}
                onPress={this.#selectImage}
                disabled={isUploading}
              />
            </View>
          </View>

          {/* Name */}
          <Typography size={'h2'} style={styles.profileTitle}>{ name }</Typography>

          {/* Email */}
          <Typography size={'h6'} color={grey3} style={styles.profileCaption}>{ email }</Typography>
        </View>

        {/* Form */}
        <View style={styles.formContainer}>
          <Form />
        </View>
      </KeyboardAwareScrollView>
    )
  }
}

// Component Properties
MyInfo.propTypes = {
  auth: PropTypes.object.isRequired
}

// Component State
function myInfoState(state) {
  return {
    auth: state.auth
  }
}

export default connect(myInfoState)(withNavigation(MyInfo))
