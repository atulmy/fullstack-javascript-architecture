// App Imports
import params from '../../../setup/config/params'
import Dashboard from '../../../modules/admin/dashboard/Dashboard'

// Admin dashboard routes
export default {
  adminDashboard: {
    path: '/admin/dashboard',
    component: Dashboard,
    auth: true,
    role: params.user.roles.admin.key
  },
}
