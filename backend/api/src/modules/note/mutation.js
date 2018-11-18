// App Imports
import { authCheck } from '../../setup/helpers/utils'
import validate from '../../setup/helpers/validation'
import Note from './model'

// Create
export async function noteCreate({ params: { note }, auth, translate }) {
  if(authCheck(auth)) {
    // Validation rules
    const rules = [
      {
        data: { value: note },
        check: 'empty', not: true,
        message: translate.t('note.messages.fields.note')
      }
    ]

    // Validate
    try {
      validate(rules)
    } catch(error) {
      throw new Error(error.message)
    }

    // Create or Update
    try {
      const data = await Note.create({ userId: auth.user._id, note, isDeleted: false })

      return {
        data,
        message: translate.t('note.messages.create.success')
      }
    } catch (error) {
      throw new Error(translate.t('common.messages.error.server'))
    }
  }

  throw new Error(translate.t('common.messages.error.unauthorized'))
}

// Delete
export async function noteDelete({ params: { noteId }, auth, translate }) {
  if(authCheck(auth)) {
    // Validation rules
    const rules = [
      {
        data: { value: noteId },
        check: 'empty', not: true,
        message: translate.t('note.messages.remove.error')
      }
    ]

    // Validate
    try {
      validate(rules)
    } catch(error) {
      throw new Error(error.message)
    }

    try {
      const data = await Note.updateOne({ _id: noteId }, { $set: { isDeleted: true }})

      return {
        data,
        message: translate.t('note.messages.remove.success')
      }
    } catch (error) {
      throw new Error(translate.t('common.messages.error.server'))
    }
  }

  throw new Error(translate.t('common.messages.error.unauthorized'))
}
