// Imports
import React from 'react'
import {View} from 'react-native'

// UI Imports
import {grey4} from '../common/colors'

// Component
const DividerItem = ({margin = 0}) => (
  <View
    style={{
      borderBottomWidth: 1,
      borderBottomColor: grey4,
      marginVertical: margin,
    }}
  />
)

export default DividerItem
