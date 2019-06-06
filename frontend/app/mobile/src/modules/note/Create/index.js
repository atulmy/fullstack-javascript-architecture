// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
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
import { create, remove } from '../api/actions/mutation'
import NavigationTopInner from '../../common/NavigationTopInner'
import ActionBack from '../../common/NavigationTop/ActionBack'
import Body from '../../common/Body'

// Component
class Create extends PureComponent {

  constructor (props) {
    super(props)

    this.note = {
      note: ''
    }

    this.state = {
      isSubmitting: false,

      ...this.note
    }
  }

  #onSubmit = async () => {
    const { navigation, dispatch } = this.props
    const { _id, note } = this.state

    this.#isSubmittingToggle(true)

    try {
      const { data } = await dispatch(create({ _id, note }))

      this.#isSubmittingToggle(false)

      dispatch(messageShow({ success: data.success, message: data.message }))

      if(data.success) {
        dispatch(list(false))

        navigation.navigate(routesNote.list.name)
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
    const { isSubmitting, note } = this.state

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
              theme={'outlined'}
              onPress={this.#onSubmit}
              disabled={isSubmitting}
              shadow={false}
              condensed
            />
          }
        />

        <KeyboardAwareScrollView contentContainerStyle={stylesCommon.flexGrow} enableOnAndroid={true} style={styles.container}>
          <View style={styles.formContainer}>
            <View style={stylesCommon.form}>
              {/* Notes */}
              <InputTextWithLabel
                label={translate.t('note.fields.note').toUpperCase()}
                placeholder={translate.t('note.fields.notePlaceholder')}
                value={note}
                autoCapitalize={'none'}
                autoFocus
                multiline={true}
                onChangeText={note => this.setState({ note })}
              />
            </View>

            {/* Bottom CTA */}
            <View style={stylesCommon.formCta}>
              {/* Submit */}
              <Button
                title={ translate.t('common.button.save').toUpperCase() }
                theme={'primary'}
                onPress={this.#onSubmit}
                disabled={isSubmitting}
                fullWidth
              />
            </View>
          </View>
        </KeyboardAwareScrollView>
      </Body>
    )
  }
}

// Component Properties
Create.propTypes = {
  auth: PropTypes.object.isRequired
}

// Component State
function createState(state) {
  return {
    auth: state.auth
  }
}

export default connect(createState)(Create)
