const express = require('express');

const db = require('./data/dbConfig.js');
const AccountRouter = require('./accounts/account-router');

const server = express();

server.use(express.json());
server.use('/api/accounts', AccountRouter);
server.use(logger);


server.get('/', (req, res) => {
    res.send('<h1>Lets Write Some Codes<h1>')
})

function logger(req, res, next) {
    console.log(`[${new Date().toISOString()}] ${req.method} to ${req.url}`);
    next();
  }

module.exports = server;