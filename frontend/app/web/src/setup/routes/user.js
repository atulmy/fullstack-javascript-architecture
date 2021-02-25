// App Imports
import Login from '../../modules/user/Login'
import Signup from '../../modules/user/Signup'
import Profile from '../../modules/user/Profile'
import Dashboard from '../../modules/user/Dashboard'

// Pages routes
export default {
  userLogin: {
    path: '/user/login',
    component: Login,
  },

  userSignup: {
    path: '/user/signup',
    component: Signup,
  },

  userProfile: {
    path: '/user/profile',
    component: Profile,
    auth: true,
  },

  userDashboard: {
    path: '/user/dashboard',
    component: Dashboard,
    auth: true,
  },
}
