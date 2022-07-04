const express = require('express');
const { default: mongoose } = require('mongoose');
require('dotenv').config()
const app = express()


app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json())

const personRoutes = require('./routes/PersonRoutes')

app.use('/person', personRoutes)

//const DB_USER = 'AdilsonBND'
//const DB_PASSWORD = encodeURIComponent('Bianca1301@@@')


mongoose
.connect(
    'mongodb://root:root@localhost:27017/?authSource=admin'
    //`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.foec6.mongodb.net/?retryWrites=true&w=majority`
    )
.then(() => {
    console.log('conectado ao mongo ')
    app.listen(3000)
})
.catch((err) => console.log(err))




