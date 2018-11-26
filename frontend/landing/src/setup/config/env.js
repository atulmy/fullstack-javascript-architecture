// Imports
import dotenv from 'dotenv'

// Load .env
dotenv.config()

// Environment
export const NODE_ENV = process.env.NODE_ENV

// URL
export const LANDING_URL = process.env.LANDING_URL
export const WEB_URL = process.env.WEB_URL
export const API_URL = process.env.API_URL

// Port
export const PORT = process.env.PORT

// Contact
export const CONTACT_PHONE = process.env.CONTACT_PHONE
export const CONTACT_EMAIL = process.env.CONTACT_EMAIL
export const CONTACT_ADDRESS = process.env.CONTACT_ADDRESS

// Misc
export const GA_TRACKING_ID = process.env.GA_TRACKING_ID
