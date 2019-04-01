let router = require('express').Router();
let api = require('./api/index.js');

module.exports = function() {
  router.use('/api', api());
  
  return router;
}
