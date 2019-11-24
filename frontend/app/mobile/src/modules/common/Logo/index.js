// Imports
import React from 'react'
import { View, Image } from 'react-native'

// Assets
import imageLogo from '../../../../assets/logo.png'

// UI Imports
import Typography from '../../../ui/Typography'
import styles from './styles'

// App Imports
import params from '../../../setup/config/params'

// Component
const Logo = () => (
  <View>
    {/* Logo */}
    <View style={styles.imageWrapper}>
      <Image
        resizeMode='contain'
        source={imageLogo}
        style={styles.image}
      />
    </View>

    <Typography
      align='center'
      spacing={3}
    >
      { params.site.name.toUpperCase() }
    </Typography>
  </View>
)

export default Logo
