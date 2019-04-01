let user = require('./user.js');

module.exports = function() {
  return {
    models: {
      user: user(),
    },
  }
};
