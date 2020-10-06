const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const passport = require('passport');

// Load ROUTES
const users = require('./routes/api/users');
const posts = require('./routes/api/posts');

const app = express();

// Bodyparser middleware
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to database
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Database has connected'))
    .catch(error => console.log(error));


// Connection for logging user in and registering users
app.use(passport.initialize());
require('./config/passport')(passport);
app.use('/api/users', users);

// Connection for creating new posts
app.use('/api/posts', posts)


const PORT = 4000;

app.listen(PORT, () => {
    console.log(`App is listening to PORT ${PORT}`)
})



