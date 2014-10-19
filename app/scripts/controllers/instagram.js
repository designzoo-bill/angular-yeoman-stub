'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:InstagramCtrl
 * @description
 * # InstagramCtrl
 * Controller of the testApp
 */
angular.module('testApp')
	.controller('InstagramCtrl', function ($scope, Instagram) {

	    $scope.awesomeThings = [

	      'HTML5 Boilerplate',
	      'AngularJS',
	      'Karma'
	    ];

	    // have we got a valid instagram access_token
	    $scope.hasValidToken = false;
	    $scope.hasValidToken = Instagram.hasValidToken();

	    // setup the instagram connect url
	    $scope.instagramUrl = Instagram.getAccessTokenUrl();
	    
	});
