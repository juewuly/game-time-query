
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/game-time-query.min.js');
} else {
  module.exports = require('./dist/game-time-query.js');
}