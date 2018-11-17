// App Imports
import Home from '../../modules/pages/Home'
import Contact from '../../modules/pages/Contact'
import Privacy from '../../modules/pages/Privacy'
import Terms from '../../modules/pages/Terms'

// Pages routes
export default {
  pagesHome: {
    path: '/',
    component: Home,
    exact: true
  },

  pagesContact: {
    path: '/contact',
    component: Contact
  },

  pagesPrivacy: {
    path: '/privacy-policy',
    component: Privacy
  },

  pagesTerms: {
    path: '/terms-of-use',
    component: Terms
  }
}
