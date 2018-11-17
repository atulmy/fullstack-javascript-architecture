// App Imports
import params from '../../config/params'
import UserList from '../../../modules/admin/user/List'

// Admin user routes
export default {
  adminUserList: {
    path: '/admin/users',
    component: UserList,
    auth: true,
    role: params.user.roles.admin.key
  }
}
