'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:NavigationCtrl
 * @description
 * # NavigationCtrl
 * Controller of the testApp
 */
 angular.module('testApp').controller('NavigationCtrl', function ($scope, $location) {

 	$scope.awesomeThings = [

 	'HTML5 Boilerplate',
 	'AngularJS',
 	'Karma'
 	];

 	$scope.getClass = function(path) {

 		if ($location.path().substr(0, path.length) === path) {

 			return 'active';
 		} else {

 			return '';
 		}
 	};

 });