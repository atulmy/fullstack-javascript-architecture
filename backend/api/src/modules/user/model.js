// Imports
import mongoose, { Schema } from 'mongoose'

// App Imports
import params from '../../setup/config/params'

// Collection name
export const collection = 'User'

// Schema
const schema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  role: {
    type: String,
    required: true,
    default: params.user.roles.user.key
  },

  name: {
    type: String
  },

  image: {
    type: String
  },

  isDeleted: {
    type: Boolean,
    required: true,
    default: false
  }
}, { timestamps: true })

// Model
export default mongoose.model(collection, schema, collection)
