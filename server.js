const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 4000;

app.use(bodyParser.json());
app.use(cors());

app.listen(PORT, () => {
    console.log('WE OUT HERE BOIIII')
})