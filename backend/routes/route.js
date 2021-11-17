const express = require('express');
var bodyParser = require('body-parser');
var axios = require('axios');
const User = require('../models/model.js')
const mongoose=require('../db/db.js')

const app=express()
const port=process.env.PORT||3000

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

app.listen(port,()=>{
    console.log('Server is up on the port '+port+" !")
})

app.post('/signup', async (req, res) => {
    // console.log(req.body)
    //  res.send('testing!')
    const user = new User(req.body)
    try {
        await user.save()
        res.status(201).send("Successfully Saved")
    } catch (error) {
        res.status(400).send(error)
    }
})

app.post('/login', async (req, res) => {
    try{
        const user=await User.findByCredentials(req.body.name,req.body.password)
        res.status(200).send({user})
    }catch(error){
        res.status(400).send(error)
    }
})