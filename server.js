const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const pg = require('pg');

const PORT = 4000;

const connection = pg.createConnection({
    host: process.env.RDS_HOSTNAME,
    user: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    port: process.env.RDS_PORT
});

connection.connect((err) => {
    if (err) {
        console.log('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Conneted database')
})

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.json('This is the home page')
})

app.listen(PORT, () => {
    console.log('WE OUT HERE BOIIII')
})

connection.end();