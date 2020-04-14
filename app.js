const express = require('express')
const ejs = require('ejs')
const app = express()
const connection = require('./connection')

let port = process.env.PORT
if (port = "" || port == null) {
    port = 4000
}

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', async (req, res) => {
    const studies = await  connection.db.collection('study').find({}).toArray()
    const expertise = await connection.db.collection('expertise').find({}).toArray()
    const experience = await connection.db.collection('experience').find({}).sort({'_id': -1}).toArray()
    res.render('index', {
        studies,
        expertise,
        experience
    })
})

app.listen(port)
