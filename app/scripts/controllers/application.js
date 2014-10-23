'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:ApplicationCtrl
 * @description
 * # ApplicationCtrl
 * Controller of the testApp
 */
angular.module('testApp')
	.controller('ApplicationCtrl', function ($scope, EnvVars, AppSettings) {

		EnvVars.setEnv().then(

			// success
			function(env){

				$scope.env = env;
				$scope.appName = AppSettings.appName;
			}
		);
	});
