// Imports
import React from 'react'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'

// App Imports
import names from './names'
import Entry from '../../modules/pages/Entry'
import PreLoginStack from './preLogin'
import PostLoginStack from './postLogin'

/*
  Routing Structure

  Routes (SwitchNavigator)
    - Entry
    - PreLoginStack (StackNavigator)
      - Start
      - Signup
      - Login
    - PostLoginStack (TabNavigator)
      - Notes (StackNavigator)
        - List
        - Detail
      - User (StackNavigator)
        - Profile
 */

// Router
const AppNavigator = createSwitchNavigator(
  {
    [names.entry]: Entry,
    [names.preLoginStack]: PreLoginStack,
    [names.postLoginStack]: PostLoginStack,
  },
  {initialRouteName: 'entry'},
)

export default createAppContainer(AppNavigator)
