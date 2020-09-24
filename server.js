const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;

const connectionString = 'mongodb+srv://admin:Wrangler1!@cluster0.uujdj.mongodb.net/social-network-db?retryWrites=true&w=majority'

MongoClient.connect(connectionString, {useUnifiedTopology: true})
    .then(client => {
        console.log('Connected to the database')
        const db = client.db('social-network-db')
        const usersCollection = db.collection('users')

        const PORT = 4000;

        app.use(bodyParser.json());
        app.use(cors());

        app.post('/signup', (req, res) => {
            usersCollection.insertOne(req.body)
            .then(result => {
                res.redirect('/')
            })
            .catch(err => console.log(err))
        })

        app.get('/', (req, res) => {
            const cursor = db.collection('users').find().toArray()
                .then(results => {
                    res.json(results)
                })
                .catch(err => console.log(err))
        })

        app.listen(PORT, () => {
            console.log("Heyo it's me the server listening to you")
        })

    })
    .catch(err => {
        console.log(err)
    })


