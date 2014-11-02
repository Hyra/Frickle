var _ = require('lodash');

module.exports = _.extend(
  require('./config/env/all.js'),
  require('./config/env/' + process.env.NODE_ENV + '.json') || {}
);
