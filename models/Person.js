const mongoose = require('mongoose')


const PersonSchema = new mongoose.Schema({
    CPF: 'String',
    name: 'String',
    approved: 'Boolean'
})


const Person = mongoose.model('Person', PersonSchema)


module.exports = Person
