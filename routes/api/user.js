let router = require('express').Router();

module.exports = function({models}) {
  let model = models.user;

  router.get('/', async (req, res, next) => {
    res.json(await model.find(req.query));
  });

  router.post('/', async (req, res, next) => {
    res.json(await model.insert(req.body));
  });

  router.put('/', async (req, res, next) => {
    res.json(await model.update(req.body));
  });

  router.delete('/', async (req, res, next) => {
    res.json(await model.remove(req.query));
  });

  return router;
};
