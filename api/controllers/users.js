'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('User');

exports.all = function(req, res) {
  User.find({}, function(err, users) {
    if(err) {
      res.send(400);
    }
    res.send(users);
  });
};
