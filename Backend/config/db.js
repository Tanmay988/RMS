const mongoose = require('mongoose');

const connectWithDB = () => {
mongoose.connect(process.env.DATABASE_URI)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('[STATUS] Connected to Database'))
}


module.exports = connectWithDB;