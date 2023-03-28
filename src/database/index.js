
const mongoose = require('mongoose')

function conect() {
mongoose.set('useNewUrlParser', true)
mongoose.set('useUnifiedTopology', true)
mongoose.connect('mongodb://127.0.0.1:27017/projeto-crud')

const db = mongoose.connection
db.once('open', () => {
    console.log('Connected to database!')
})

db.error('error', console.error.bind(console, 'connection error: '))
}

module.exports = {
    conect
}