// Imports
import React from 'react'

// App Imports
import PagesHome from '../modules/pages/Home'
import PagesContact from '../modules/pages/Contact'
import PagesPrivacy from '../modules/pages/Privacy'
import PagesTerms from '../modules/pages/Terms'

// Routes
export const routes = {
  pagesHome: {
    path: '/',
    component: PagesHome,
    exact: true
  },

  pagesContact: {
    path: '/contact',
    component: PagesContact
  },

  pagesPrivacy: {
    path: '/privacy-policy',
    component: PagesPrivacy
  },

  pagesTerms: {
    path: '/terms-of-use',
    component: PagesTerms
  }
}

export default Object.values(routes)
