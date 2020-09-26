const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const passport = require('passport');

const users = require('./routes/api/users');

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose.connect(db, { 
    useNewUrlParser: true 
})

// Passport middleware
app.use(passport.initialize())

// Passport config
require('./config/passport')(passport);

// Routes
app.use('./api/users', users);


mongoose.connection.on('error', err => {
    console.log('error', err)
})

mongoose.connection.on('connected', (err, res) => {
    console.log('Mongoose is connected')
})

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`App is listening to PORT ${PORT}`)
})



