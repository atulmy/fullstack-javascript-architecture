// Imports
import mongoose, { Schema } from 'mongoose'

// App Imports
import { collection as User } from '../user/model'

// Collection name
export const collection = 'Note'

// Schema
const schema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: User,
    index: true
  },

  note: {
    type: String,
    required: true
  },

  isDeleted: {
    type: Boolean,
    required: true,
    default: false
  }
}, { timestamps: true })

// Model
export default mongoose.model(collection, schema, collection)
