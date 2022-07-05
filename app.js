const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express()


app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json())

const personRoutes = require('./routes/PersonRoutes')

app.use('/person', personRoutes)

<<<<<<< HEAD

mongoose
.connect(
    'mongodb://root:root@mongodb:27017/?authSource=admin'
=======



mongoose
.connect(
    'mongodb://root:root@localhost:27017/?authSource=admin'
  
>>>>>>> df436cec2d9841308321d29347f171f1146fa6de
    )
.then(() => {
    console.log('conectado ao mongo ')
    app.listen(3000)
})
.catch((err) => console.log(err))




