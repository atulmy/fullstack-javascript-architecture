// Imports
import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import {connect} from 'react-redux'
import {View, Linking} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import RNLanguages from 'react-native-languages'

// UI Imports
import styles from './styles'

// App Imports
import translate from '../../../setup/translate'
import routeNames from '../../../setup/routes/names'
import {loginSetUser, logout} from '../../user/api/actions/query'
import Body from '../../common/Body'
import Loading from '../../common/Loading'

// Component
class Entry extends PureComponent {
  async componentDidMount() {
    this.#setLanguage()

    await this.#checkLogin()
  }

  #setLanguage = () => {
    axios.defaults.headers.common['Language'] = RNLanguages.language
  }

  #checkLogin = async () => {
    const {navigation, dispatch} = this.props

    try {
      const token = await AsyncStorage.getItem('token')

      if (token && token !== 'undefined' && token !== '') {
        const user = JSON.parse(await AsyncStorage.getItem('user'))

        if (user) {
          dispatch(loginSetUser(token, user))

          navigation.navigate(routeNames.postLoginStack)
        } else {
          this.#showLogin()
        }
      } else {
        this.#showLogin()
      }
    } catch (e) {
      this.#showLogin()
    }
  }

  #showLogin = () => {
    const {navigation, dispatch} = this.props

    dispatch(logout())

    navigation.navigate(routeNames.preLoginStack)
  }

  render() {
    return (
      <Body fullscreen={true}>
        <View style={styles.container}>
          <Loading message={translate.t('common.loading')} />
        </View>
      </Body>
    )
  }
}

// Component Properties
Entry.propTypes = {
  auth: PropTypes.object.isRequired,
}

// Component State
function entryState(state) {
  return {
    auth: state.auth,
  }
}

export default connect(entryState)(Entry)
