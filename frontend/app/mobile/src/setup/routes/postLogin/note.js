// Imports
import { createStackNavigator } from 'react-navigation'

// App Imports
import { getRoutesForStack } from '../../helpers/utils'
import List from '../../../modules/note/List'
import Detail from '../../../modules/note/Detail'
import Create from '../../../modules/note/Create'

// Routes
export const routesNote = {
  // List
  list: {
    name: 'note',
    path: 'note',
    screen: List
  },

  // Create
  create: {
    name: 'noteCreate',
    path: 'note/create',
    screen: Create
  },

  // Detail
  detail: {
    name: 'noteDetail',
    path: 'note/detail',
    screen: Detail
  }
}

export default createStackNavigator(getRoutesForStack(routesNote), {
  initialRouteName: routesNote.list.name, // Initial route name
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false
  }
})
