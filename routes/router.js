let router = require('express').Router();
let api = require('./api/index.js');

module.exports = function({models}) {
  router.use('/api', api({models}));

  router.get('/users', async (req, res) => {
    let users = await models.user.find();
    let list = users.map(u => `<li>${u.username} | ${u.password}</li>`);
    res.send(`<ul>${list.join('')}</ul>`);
  });

  return router;
};
