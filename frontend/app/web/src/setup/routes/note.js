// App Imports
import List from '../../modules/note/List'

// Pages routes
export default {
  noteList: {
    path: '/note/list',
    component: List,
    auth: true
  }
}
