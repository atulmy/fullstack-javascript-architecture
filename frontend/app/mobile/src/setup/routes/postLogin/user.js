// Imports
import {createStackNavigator} from 'react-navigation-stack'

// App Imports
import {getRoutesForStack} from '../../helpers/utils'
import Profile from '../../../modules/user/Profile'
import Help from '../../../modules/pages/Help'

// Routes
export const routesUser = {
  // Profile
  user: {
    name: 'user',
    path: 'user',
    screen: Profile,
  },

  // Help
  help: {
    name: 'help',
    path: 'help',
    screen: Help,
  },
}

export default createStackNavigator(getRoutesForStack(routesUser), {
  initialRouteName: routesUser.user.name, // Initial route name
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  },
})
