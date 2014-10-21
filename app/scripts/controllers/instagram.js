'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:InstagramCtrl
 * @description
 * # InstagramCtrl
 * Controller of the testApp
 */
angular.module('testApp')
	.controller('InstagramCtrl', function ($scope, Instagram, $location) {

	    $scope.awesomeThings = [

	      'HTML5 Boilerplate',
	      'AngularJS',
	      'Karma'
	    ];

	    // setup the instagram connect url
	    $scope.instagramUrl = Instagram.getAccessTokenUrl();

	    // if there is a token in the url then set the access token
	    var accessToken = $location.hash().split('=')[1];

	    if (typeof accessToken !== 'undefined') {

	    	Instagram.setAccessToken(accessToken);
	    }

	   	// have we got a valid instagram access_token
	    var getInstgramUser = function(){

	    	Instagram.getUser().then(

		    	// success
		    	function(user){

		    		$scope.user = user;
		    		console.log('$scope.user: ', $scope.user);
		    	},
		    	// fail
		    	function(){

		    		$scope.user = null;
		    		console.log('$scope.user: ', $scope.user);	    		
		    	}
	    	);
	    };

	    // update the user every second
	    //$interval(getInstgramUser, 1000);
	    getInstgramUser();
	});
