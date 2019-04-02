#!/usr/bin/env node

let router = require('./routes/router.js');
let app = require('express')();
let bodyParser = require('body-parser');
let mongodb = require('mongodb');
let models = require('./classes/models.js');

// log
app.use((req, res, next) => {
  let d = new Date();
  console.log(`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} `
            + `[${req.method}] `
            + `${req.path} `
            + `(${req.headers['content-length'] || 0})`);
  next();
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


(async function() {
  let client = await mongodb.MongoClient.connect(
      'mongodb://root:password1@ds040167.mlab.com:40167/pp2',
      {useNewUrlParser: true});
  let db = client.db();

  app.use(router({models: models({db})}));

  app.all('*', (req, res, next) => {
    res.status(404).send('404');
    next();
  });
})();

app.listen(8080, _ => console.log('started server at 8080'));
