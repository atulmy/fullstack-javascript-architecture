// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { View, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import LinearGradient from 'react-native-linear-gradient'

// UI Imports
import { white } from '../../../ui/common/colors'
import { gradient } from '../../../ui/common/styles'
import styles from './styles'

// App Imports
import Message from '../Message'

// Component
const BodyInner = ({ children }) => (
  <React.Fragment>
    <View style={styles.wrapper}>
      {/* Content */}
      <View style={styles.content}>
        { children }
      </View>

      {/* Toast Message */}
      <Message />
    </View>
  </React.Fragment>
)

const Body = ({ fullscreen, children }) => (
  fullscreen
    ? <LinearGradient {...gradient}>
        <StatusBar
          barStyle='dark-content'
          backgroundColor={white}
        />

        <SafeAreaView style={styles.container}>
          <BodyInner>{ children }</BodyInner>
        </SafeAreaView>
      </LinearGradient>
    : <SafeAreaView style={[styles.container, { backgroundColor: white }]}>
        <StatusBar
          barStyle='dark-content'
          backgroundColor={white}
        />

        <LinearGradient {...gradient}>
          <BodyInner>{ children }</BodyInner>
        </LinearGradient>
      </SafeAreaView>
)

Body.propTypes = {
  fullscreen: PropTypes.bool.isRequired
}
Body.defaultProps = {
  fullscreen: false
}

export default Body
