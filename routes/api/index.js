let router = require('express').Router();
let user = require('./user.js');
let post = require('./post.js');

module.exports = function({models}) {

  router.use('/user', user({models}));
  router.use('/post', post({models}));

  return router;
};
