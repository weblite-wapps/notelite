// models
import Note from '../models/note'


export const loadNote = async id => Note
  .findOne({ id })
  .exec()

export const saveNote = async (id, text) => Note
  .findOneAndUpdate({ id }, { id, text }, { upsert: true }, function(err, doc){
    if(err) return err
});
