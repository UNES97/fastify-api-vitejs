let Items = require('../items');
const {v4: uuidv4} = require('uuid');
const jwt = require("jsonwebtoken");
require('dotenv').config()

const getItems = (req, reply) => {
    reply.status(200).send({
        statusCode: 200,
        data: Items,
    })
    console.log('Elapsed time:', reply.elapsedTime, 'ms');
}


const getItem = (req, reply) => {
    const {id} = req.params;
    const item = Items.find((item)=>{
        return item.id == id;
    })
    reply.status(200).send({
        statusCode: 200,
        data: item,
    })
    console.log('Elapsed time:', reply.elapsedTime, 'ms');
}

const addItem = (req, reply) => {
    const {name,age} = req.body;
    const item = {
        id: uuidv4(),
        name: name,
        age: age
    };
    Items = [...Items, item];
    reply.status(201).send({
        statusCode: 201,
        data: item,
        message: 'Item inserted successfully'
    })
}

const signIn = (req, reply) =>{
    const {name} = req.body;
    const user = Items.find((item)=>{
        return item.name.toLowerCase() == name.toLowerCase();
    })

    if (!user) {
        reply.status(400).send({
            statusCode: 400,
            message: 'User not Found',
        })
    }
    else {
        var token = jwt.sign(
            { 
                id: user.id , 
                name: user.name,
            },
            process.env.SECRECT_KEY, {
            expiresIn: 86400 /* 24 Hours token's life */
        });
        reply.status(200).send({
            statusCode: 200,
            accessToken: token,
        })
    }
}

module.exports = {
    getItems, getItem, addItem, signIn
}