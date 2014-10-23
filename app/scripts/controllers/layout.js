'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:LayoutCtrl
 * @description
 * # LayoutCtrl
 * Controller of the testApp
 */
angular.module('testApp')
	.controller('LayoutCtrl', function ($scope, EnvVars) {

	    EnvVars.setEnv().then(

			// success
			function(env){

				$scope.env = env;
			}
		);
  	});