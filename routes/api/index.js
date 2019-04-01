let router = require('express').Router();

module.exports = function() {

  router.get('/user', (req, res, next) => {
    res.send('user');
  });

  router.post('/user', (req, res, next) => {
    res.send('user');
  });

  return router;
}
