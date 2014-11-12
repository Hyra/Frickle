'use strict';

exports.inject = function(app) {
  app.factory('Auth', exports.factory);
  return exports.factory;
};

exports.factory = function($http) {

  var sdo = {
    isLoggedIn: false,
    username: ''
  };

  var _urls = {
    auth: '/api/login',
    signup: '/api/signup'
  };

  return {
    login: function(data) {
      return $http.post(_urls.auth, data);
    },
    signup: function(data) {
      return $http.post(_urls.signup, data);
    },
    setLoggedIn: function(bool) {
      sdo.isLoggedIn = bool;
    }
  };

};
