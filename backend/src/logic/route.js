// components
import app from '../setup/server'
// db helpers
import { saveNote, loadNote } from './db'


app.post('/saveNote', ({ body: { id, text } }, res) =>
  saveNote(id, text)
    .then((note) => res.end())
    .catch((err) => res.send(err)))

app.get('/loadNote/:id', ({ params: { id } }, res) =>
  loadNote(id)
    .then((note) => res.send(note))
    .catch((err) => res.send(err)))
