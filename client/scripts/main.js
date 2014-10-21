'use strict';

require('angular');

var uiRoute = require('angular-ui-router');
var app = angular.module('MyApp', [uiRoute]);

require('./services/Auth').inject(app);
require('./directives/TestDirective').inject(app);

app.config(function($locationProvider, $stateProvider) {

	$locationProvider.html5Mode(true);

	$stateProvider
	.state('home', {
		url: '/',
		controller: require('./controllers/TestCtrl').inject(app),
		template: ' Hey {{testvar}} <my-customers></my-customers> {{auth.getVal()}} hallo. <a ng-click="auth.setVal(\'ffsfs\');">CLICK</a> <hr><a ui-sref="second">Second State</a>'
	})
	.state('second', {
		url: '/aap',
		controller: require('./controllers/TestCtrl').inject(app),
		template: ' SECOND {{testvar}} SECOND.<hr><a ui-sref="home">Second State</a>'
	});

});

app.run();
