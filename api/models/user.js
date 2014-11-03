'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {type: String, index: {unique: true}},
  email: {type: String, index: {unique: true}}
});

module.exports = mongoose.model('User', UserSchema);
