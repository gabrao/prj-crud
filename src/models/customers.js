const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String
})

const Model = mongoose.model('customers', schema)

module.exports = Model

/*
const register = new Model({
    name: 'Gabiru',
    age: 25,
    email: 'gabrielarao16@gmail.com',
    password: '123456'
})


register.save()*/