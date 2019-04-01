let router = require('express').Router();

module.exports = function(db) {
  let model = db.models.user;

  router.get('/', (req, res, next) => {
    res.send(model.get());
  });

  router.post('/', (req, res, next) => {
    res.send(model.insert(req.body));
  });

  router.put('/', (req, res, next) => {
    res.send('user');
  });

  router.delete('/', (req, res, next) => {
    res.send(model.remove(req.query));
  });

  return router;
};
