'use strict';

//var myApp = angular.module('testApp', []);

angular.module('testApp').factory('EnvVars', function($location){

	var env, apiUrl;

	switch($location.host()) {

		case 'localhost':

			env = 'local';
			apiUrl = 'local api url';
			break;

		case 'ancient-retreat-8481.herokuapp.com':

			env = 'development';
			apiUrl = 'dev api url';
			break;
	}

	return {env: env};
});