// App Imports
import { authCheck } from '../../setup/helpers/utils'
import Note from './model'

// Get all
export async function noteList({ auth, fields, translate }) {
  if (authCheck(auth)) {
    try {
      const data = await Note.find({
        userId: auth.user._id,
        isDeleted: false,
      })
        .sort({ createdAt: -1 })
        .select(fields)

      return {
        data,
      }
    } catch (error) {
      throw new Error(translate.t('common.messages.error.server'))
    }
  }

  throw new Error(translate.t('common.messages.error.unauthorized'))
}

// Get by id
export async function noteDetail({
  params: { noteId },
  auth,
  fields,
  translate,
}) {
  if (authCheck(auth)) {
    try {
      const data = await Note.findOne({
        _id: noteId,
        userId: auth.user._id,
        isDeleted: false,
      }).select(fields)

      return {
        data,
      }
    } catch (error) {
      throw new Error(translate.t('common.messages.error.server'))
    }
  }

  throw new Error(translate.t('common.messages.error.unauthorized'))
}
