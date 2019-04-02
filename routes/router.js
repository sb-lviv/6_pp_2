let router = require('express').Router();
let api = require('./api/index.js');

module.exports = function({models}) {
  router.use('/api', api({models}));
  
  return router;
};
