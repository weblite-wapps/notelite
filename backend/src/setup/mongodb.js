import mongoose from 'mongoose'


mongoose.connect('mongodb://localhost:27017/notelite')
mongoose.Promise = Promise
const db = mongoose.connection
db.on('error', console.log)
