// module
import mongoose from 'mongoose'

const { Schema } = mongoose

// create a schema
const NoteSchema = new Schema({
  id: String,
  text: String,
})

export default mongoose.model('Note', NoteSchema)
