let router = require('express').Router();
let user = require('./user.js');

module.exports = function() {

  router.use('/user', user());

  return router;
}
