'use strict';

exports.inject = function(app) {
  app.directive('myCustomers', exports.directive);
  return exports.directive;
};

exports.directive = function() {
  return {
    restrict: 'E',
    template: 'Namssse: {{customer.name}} Address: {{customer.address}}'
  };
};
