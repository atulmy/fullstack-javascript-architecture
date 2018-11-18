// App Imports
import User from '../user/model'
import Note from './model'

// Seeds
export default async function() {
  console.log('SEED - Note..')

  const user = await User.findOne().sort({ createdAt: -1 })

  const notes = [
    {
      userId: user._id,
      note: 'Heu, clinias! Abactus, adiurator, et guttus.'
    },

    {
      userId: user._id,
      note: 'Sunt caesiumes quaestio mirabilis, magnum hydraes.'
    }
  ]

  for (const note of notes) {
    await Note.create(note)
  }
}
