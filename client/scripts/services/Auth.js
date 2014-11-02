'use strict';

exports.inject = function(app) {
  app.factory('Auth', exports.factory);
  return exports.factory;
};

exports.factory = function() {

  var variabele = 'Default Service Value';

  return {
    setValue: function(val) {
      variabele = val + ' - ' + Math.ceil(Math.random() * 1000);
    },
    getValue: function() {
      return variabele;
    }
  };

};
