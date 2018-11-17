// Imports
import mongoose from 'mongoose'

// App Imports
import { MONGO_URL } from '../config/env'

// Connect database
export default function () {
  console.info('SETUP - Connecting database..')

  mongoose.connect(MONGO_URL, { useNewUrlParser: true, useCreateIndex: true })
}
