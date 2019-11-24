// Imports
import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'

// UI Imports
import { font, scalable } from '../../../ui/common/responsive'
import { black, grey2, white } from '../../../ui/common/colors'
import Icon from '../../../ui/icon/Icon'

// App Imports
import { getRoutesForStack } from '../../helpers/utils'
import NoteStack from './note'
import UserStack from './user'

const iconSize = font(27)

// Routes App
export const routesPostLogin = {
  // Note
  note: {
    name: 'note',
    path: 'note',
    screen: NoteStack,
    navigationOptions: {
      tabBarLabel: 'Notes',
      tabBarIcon: ({ tintColor }) => <Icon name='clipboard-text' size={iconSize} color={tintColor} />,
    }
  },

  // User
  user: {
    name: 'user',
    path: 'user',
    screen: UserStack,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => <Icon name='account-circle' size={iconSize} color={tintColor} />,
    }
  },
}

export default createBottomTabNavigator(getRoutesForStack(routesPostLogin), {
  initialRouteName: routesPostLogin.note.name,
  navigationOptions: {
    tabBarVisible: true
  },
  tabBarOptions: {
    activeTintColor: black,
    inactiveTintColor: grey2,
    style: {
      backgroundColor: white,
      paddingVertical: scalable(5),
      height: scalable(55)
    },
    tabStyle: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    labelStyle: {
      marginLeft: 0
    }
  }
})
