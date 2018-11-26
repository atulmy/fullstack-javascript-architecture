// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { View, Image } from 'react-native'

// Assets
import imageLogo from '../../../../assets/logo.png'

// UI Imports
import Typography from '../../../ui/Typography'
import styles from './styles'

// App Imports
import params from '../../../setup/config/params'

// Component
class Extra extends PureComponent {
  render() {
    return (
      <View>
        {/* Logo */}
        <View style={styles.imageWrapper}>
          <Image
            resizeMode={'contain'}
            source={imageLogo}
            style={styles.image}
          />
        </View>

        <Typography
          align={'center'}
          spacing={3}
        >
          { params.site.name.toUpperCase() }
        </Typography>
      </View>
    )
  }
}

// Component Properties
Extra.propTypes = {
  auth: PropTypes.object.isRequired
}

// Component State
function extraState(state) {
  return {
    auth: state.auth
  }
}

export default connect(extraState, {})(Extra)
