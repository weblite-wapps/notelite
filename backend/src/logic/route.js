// components
import app from '../setup/server'
// db helpers
import { saveNote, getNote } from './db'

app.post('/saveNote', (req, res) => {
  saveNote(req.body.id, req.body.text)
    .then(() => res.end('ok'))
    .catch(err => res.end('not ok'))
})

app.get('/getNote/:id', (req, res) => {
  getNote(req.params.id)
    .then(note => res.json(note))
    .catch(err => res.end('not ok'))
})
