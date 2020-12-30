// Imports
import ReactGA from 'react-ga'

// App imports
import { GOOGLE_ANALYTICS } from 'setup/config/env'

// Google Analytics
export const initGA = () => {
  ReactGA.initialize(GOOGLE_ANALYTICS)
}

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname + window.location.search)
}

export const logEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({ category, action })
  }
}

export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal })
  }
}
