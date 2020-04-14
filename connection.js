const mongoose = require('mongoose')

mongoose.connect('mongodb://yaquake3:tuhasuga88@127.0.0.1:27017/personal_website',
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })

const connection = mongoose.connection

connection.on('connected', ()=> {
    console.log('Connected')
})


module.exports = connection
