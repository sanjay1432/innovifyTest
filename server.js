const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();
var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('./config'); 
var bluebird = require('bluebird')
// Connect
var mongoose = require('mongoose')

mongoose.Promise = bluebird
mongoose.connect(config.database, { useMongoClient: true})
.then(()=> { console.log(`Succesfully Connected to the
Mongodb Database  at URL : mongodb://127.0.0.1:27017/innovify`)})
.catch(()=> { console.log(`Error Connecting to the Mongodb 
Database at URL : mongodb://127.0.0.1:27017/innovify`)})
app.set('superSecret', config.secret); // secret variable
// API file for interacting with MongoDB
const users = require('./server/routes/users');

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

// API location
app.use('/users', users);

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));