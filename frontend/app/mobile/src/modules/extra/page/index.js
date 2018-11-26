// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { View } from 'react-native'

// UI Imports
import styles from './styles'

// App Imports
import translate from '../../../setup/translate'
import Body from '../../common/Body'
import NavigationTopInner from '../../common/NavigationTopInner'

// Component
class List extends PureComponent {
  render() {
    return (
      <Body>
        {/* Navigation */}
        <NavigationTopInner
          title={translate.t('page.title')}
          subTitle={translate.t('page.subTitle')}
        />

        <View style={styles.container}>

        </View>
      </Body>
    )
  }
}

// Component Properties
List.propTypes = {
  auth: PropTypes.object.isRequired
}

// Component State
function listState(state) {
  return {
    auth: state.auth
  }
}

export default connect(listState, {})(List)
