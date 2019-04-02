let router = require('express').Router();

module.exports = function({models}) {
  let model = models.user;

  router.get('/', async (req, res, next) => {
    res.send(await model.get());
  });

  router.post('/', async (req, res, next) => {
    res.send(await model.insert(req.body));
  });

  router.put('/', async (req, res, next) => {
    res.send('user');
  });

  router.delete('/', async (req, res, next) => {
    res.send(await model.remove(req.query));
  });

  return router;
};
