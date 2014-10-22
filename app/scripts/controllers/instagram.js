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

	    $scope.user = null;
	    $scope.instagramPopularMedia = null;

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
		    		console.log('$scope.user: ', user);
		    	}
	    	);
	    };
	   	
	   	// get the popular instagram media
	    var getInstgramPopularMedia = function(){

	    	Instagram.getPopularMedia().then(

		    	// success
		    	function(media){

		    		$scope.instagramPopularMedia = media;
		    		console.log('$scope.instagramPopularMedia: ', media);
		    	}
	    	);
	    };

	    getInstgramUser();
	    getInstgramPopularMedia();
	});
