let router = require('express').Router();
let api = require('./api/index.js');

module.exports = function(db) {
  router.use('/api', api(db));
  
  return router;
};
