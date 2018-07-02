// models
import Note from '../models/note'


export const loadNote = async id => Note
  .findOne({ id })
  .exec()

export const saveNote = async (id, text) => new Note({ id, text })
  .save()
