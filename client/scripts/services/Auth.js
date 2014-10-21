'use strict';

exports.inject = function(app) {
	app.factory('Auth', exports.factory);
	return exports.factory;
};

exports.factory = function() {

	var variabele = 'initital';

	return {
		setVal: function(val) {
			variabele = val;
		},
		getVal: function() {
			return variabele;
		}
	};

};
