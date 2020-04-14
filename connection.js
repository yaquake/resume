const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0-njnty.mongodb.net/resume`,

    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })

const connection = mongoose.connection

connection.on('connected', ()=> {
    console.log('Connected')
})


module.exports = connection
