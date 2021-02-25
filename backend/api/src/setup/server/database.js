// Imports
import mongoose from 'mongoose'

// App Imports
import { MONGO_URL } from '../config/env'

// Connect database
export default async function () {
  console.info('SETUP - Connecting database..')

  await connectWithRetry()
}

// Handle connection error
mongoose.connection.on('error', (error) => {
  console.log(`ERROR - Connection failed: ${error.message}`)

  setTimeout(async () => {
    console.log('SETUP - Connecting database.. retrying..')

    await connectWithRetry()
  }, 5000)
})

// Retry connection
const connectWithRetry = async () => {
  return await mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
}
