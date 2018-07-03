// components
import app from '../setup/server'
// db helpers
import { saveNote, loadNote } from './db'


app.post('/saveNote', ({ body: { id, text } }, res) =>
  saveNote(id, text)
    .then(() => res.end('ok'))
    .catch(() => res.end('not ok')))

app.get('/loadNote/:id', ({ params: { id } }, res) =>
  loadNote(id)
    .then(note => res.json(note))
    .catch((err) => res.end('not ok' + err)))
