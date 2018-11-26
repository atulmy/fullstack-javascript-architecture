// Imports
import dotenv from 'dotenv'

// Load .env
dotenv.config()

// Environment
export const NODE_ENV = process.env.NODE_ENV

// Security
export const SECURITY_SECRET = process.env.SECURITY_SECRET
export const SECURITY_SALT_ROUNDS = parseInt(process.env.SECURITY_SALT_ROUNDS)

// Port
export const PORT = process.env.PORT

// Database
export const MONGO_URL = process.env.MONGO_URL

// URL
export const LANDING_URL = process.env.LANDING_URL
export const WEB_URL = process.env.WEB_URL
export const API_URL = process.env.API_URL

// Email
export const EMAIL_ON = process.env.EMAIL_ON
export const EMAIL_TEST = process.env.EMAIL_TEST
export const EMAIL_HOST = process.env.EMAIL_HOST
export const EMAIL_USER = process.env.EMAIL_USER
export const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD
