#!/usr/bin/env node

let router = require('./routes/router.js');
let app = require('express')();
let bodyParser = require('body-parser');

// logg
app.use((req, res, next) => {
  console.log(`${new Date()} [${req.method}] ${req.path}`);
  next();
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(router());

app.all('*', (req, res, next) => {
  res.status(404).send('404');
  next();
});

app.listen(8080, console.log);
