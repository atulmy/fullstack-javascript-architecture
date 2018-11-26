// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { View, TouchableOpacity } from 'react-native'
import { web } from 'react-native-communications'
import * as Animatable from 'react-native-animatable'

// UI Imports
import Typography from '../../../ui/Typography'
import Button from '../../../ui/button/Button'
import { grey1 } from "../../../ui/common/colors"
import styles from './styles'

// App Imports
import { LANDING_URL } from '../../../setup/config/env'
import params from '../../../setup/config/params'
import translate from '../../../setup/translate'
import { routesPreLogin } from '../../../setup/routes/preLogin'
import { messageShow } from '../../common/api/actions'
import { setUser } from '../api/actions/query'
import Logo from '../../common/Logo'
import Body from '../../common/Body'

// Component
class Start extends PureComponent {

  onPressEmail = () => {
    const { navigation } = this.props

    navigation.navigate(routesPreLogin.signup.name)
  }

  onPressTerms = () => {
    web(`${ LANDING_URL }/${ params.site.url.terms }`)
  }

  render() {
    return (
      <Body fullscreen={true}>
        <View style={styles.container}>
          {/* Logo section */}
          <View style={styles.intro}>
            <Animatable.View
              animation={'fadeIn'}
              useNativeDriver={true}
              duration={600}
            >
              <Logo />
            </Animatable.View>

            <Animatable.View
              animation={'fadeInUp'}
              useNativeDriver={true}
              duration={300}
              delay={400}
            >
              <Typography
                align={'center'}
                size={'h1'}
                style={styles.introTitle}
              >
                { translate.t('user.start.title') }
              </Typography>
            </Animatable.View>
          </View>

          {/* Buttons */}
          <Animatable.View
            animation={'fadeInUp'}
            useNativeDriver={true}
            duration={300}
            delay={800}
            style={styles.buttons}
          >
            <View >
              <Button
                title={ translate.t('user.start.button.email') }
                theme={'primary'}
                onPress={this.onPressEmail}
                fullWidth
              />

              <TouchableOpacity onPress={this.onPressTerms}>
                <Typography
                  size={10}
                  align={'center'}
                  color={grey1}
                  style={styles.terms}
                >
                  { translate.t('user.start.button.terms') }
                </Typography>
              </TouchableOpacity>
            </View>
          </Animatable.View>
        </View>
      </Body>
    )
  }
}

// Component Properties
Start.propTypes = {
  auth: PropTypes.object.isRequired,
  setUser: PropTypes.func.isRequired,
  messageShow: PropTypes.func.isRequired
}

// Component State
function startState(state) {
  return {
    auth: state.auth
  }
}

export default connect(startState, { setUser, messageShow })(Start)
