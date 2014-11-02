'use strict';

module.exports = function(server) {

  var users = require('./controllers/users');
  server.get('/api/users', users.all);

};
