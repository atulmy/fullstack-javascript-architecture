// App imports
import { ENV } from 'setup/config/env'

// Helpers

// Check development env
export function isDevelopment() {
  return ENV === 'development'
}

// get site env
export function getSiteEnv() {
  return ENV === 'development' ? 'dev' : 'live'
}
