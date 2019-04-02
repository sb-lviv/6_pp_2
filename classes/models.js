let user = require('./user.js');

module.exports = function({db}) {
  return {
    user: user({db}),
  }
};
