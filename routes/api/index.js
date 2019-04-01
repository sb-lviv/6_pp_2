let router = require('express').Router();
let user = require('./user.js');

module.exports = function(db) {

  router.use('/user', user(db));

  return router;
};
