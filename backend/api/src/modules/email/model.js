// Imports
import mongoose, { Schema } from 'mongoose'

// App Imports
import { collection as User } from '../user/model'

// Collection name
export const collection = 'Email'

// Schema
const schema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: User,
    },
    toName: {
      type: String,
    },
    toEmail: {
      type: String,
      required: true,
    },
    fromName: {
      type: String,
      required: true,
    },
    fromEmail: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
)

// Model
export default mongoose.model(collection, schema, collection)
