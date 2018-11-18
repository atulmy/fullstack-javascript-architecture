// App Imports
import List from '../../modules/note/List'
import Create from '../../modules/note/Create'

// Pages routes
export default {
  noteList: {
    path: '/note/list',
    component: List,
    auth: true
  },

  noteCreate: {
    path: '/note/create',
    component: Create,
    auth: true
  }
}
