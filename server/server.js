const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const config = require('./../config.js')
const sc = require('./setController');

const app = express();
app.use(bodyParser.json());
massive(config.connectionString).then(db => app.set('db', db));

//=========ENDPOINTS===========
app.get('/api/getHabits/:userid', sc.getHabits);



app.listen(3001, () => console.log('Listening on port 3001'));