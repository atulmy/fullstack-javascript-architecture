// Imports
import { createStackNavigator } from 'react-navigation-stack'

// App Imports
import { getRoutesForStack } from '../../helpers/utils'
import Start from '../../../modules/user/Start'
import Signup from '../../../modules/user/Signup'
import Login from '../../../modules/user/Login'

// Auth routes
export const routesPreLogin = {
  start: {
    name: 'userStart',
    path: 'user/start',
    screen: Start
  },

  signup: {
    name: 'userSignup',
    path: 'user/signup',
    screen: Signup
  },

  login: {
    name: 'userLogin',
    path: 'user/login',
    screen: Login
  }
}

export default createStackNavigator(getRoutesForStack(routesPreLogin), {
  initialRouteName: routesPreLogin.start.name, // Initial route name @temp routesPreLogin.start.name
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false
  }
})
