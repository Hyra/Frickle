'use strict';

exports.inject = function(app) {
  app.factory('Auth', exports.factory);
  return exports.factory;
};

exports.factory = function() {

  var variabele = 'Default value';

  return {
    setValue: function(val) {
      variabele = val;
    },
    getValue: function() {
      return variabele;
    }
  };

};
