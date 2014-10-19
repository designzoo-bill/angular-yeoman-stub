'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:InstagramCtrl
 * @description
 * # InstagramCtrl
 * Controller of the testApp
 */
angular.module('testApp')
	.controller('InstagramCtrl', function ($scope, Instagram, $routeParams) {

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
	    
	    // if there is a token in the url then set the access token
	    if (typeof $routeParams !== 'undefined') {

	    	Instagram.setAccessTokenAndUser($routeParams);
	    }
	});
