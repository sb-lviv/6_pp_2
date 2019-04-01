let router = require('express').Router();

module.exports = function() {

  router.get('/', (req, res, next) => {
    res.send('user');
  });

  router.post('/', (req, res, next) => {
    res.send('user');
  });

  router.put('/', (req, res, next) => {
    res.send('user');
  });

  router.delete('/', (req, res, next) => {
    res.send('user');
  });

  return router;
}
