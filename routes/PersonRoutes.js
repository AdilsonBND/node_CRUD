const router = require('express').Router()
const Person = require('../models/Person')

router.post('/', async(req, res) =>{
    const {CPF, name, approved} = req.body
    const person = {
        CPF,
        name,
        approved
    }

    if(!CPF){
        res.status(422).json({ error: "O CPF é obrigatório"});
        return
    }
    if(!name){
        res.status(422).json({ error: "O nome é obrigatório"});
        return
    }
    if(approved == null){
        res.status(422).json({ error: "O campo aprovação é obrigatório"});
        return
    }

    try{
        await Person.create(person)
        res.status(201).json({message: "Incluido no DB com sucesso"})
    } catch {
        res.status(500).json({error: error})
    }
})

router.get('/', async(req, res) => {
    try {
        const people = await Person.find()
        res.status(200).json(people)
    } catch (error) {
        res.status(500).json({error})
    }
    
})

router.get('/:id', async(req,res) =>{
    const id = req.params.id
    try{
       
        const person = await Person.findOne({_id: id})
        
        if (!person){
           
            res.status(422).json({ message: "Id Inválido"});
            return
        }
        res.status(200).json(person)
    } catch (error) {
        res.status(500).json({error})
    }
})

router.patch('/:id', async (req, res) => {
    const id = req.params.id
    const{CPF, name, approved} = req.body
    const person = {
        CPF,
        name,
        approved
    }

    try {
    
        const updatedPerson = await Person.updateOne({_id: id}, person)

        if(updatedPerson.matchedCount === 0){
            res.status(422).json({ message: "Usuário não encontrado"});
            return
        }

        res.status(200).json(person)

    } catch{
        res.status(500).json({error})
    }
})

router.delete('/:id', async(req,res) =>{
    const id = req.params.id
    const person = await Person.findOne({_id: id})

    if (!person){
           
        res.status(422).json({ message: "Id Inválido"});
        return
    }

    try{
        await Person.deleteOne({_id: id})
        res.status(200).json({message: "removido com sucesso"})

    }catch{
        res.status(500).json({error})
    }


})


module.exports = router