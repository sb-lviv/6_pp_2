let router = require('express').Router();

module.exports = function() {

  router.get('/user', (req, res, next) => {
    res.send('user');
    delete req.client;
    delete req.res;
    delete req.connection;
    console.log(req);
  });

  router.post('/user', (req, res, next) => {
    res.send('user');
    delete req.client;
    delete req.res;
    delete req.connection;
    console.log(req);
  });

  return router;
}
