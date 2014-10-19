'use strict';

/**
 * @ngdoc service
 * @name testApp.Instagram
 * @description
 * # Instagram
 * Service in the testApp.
 */
angular.module('testApp')
  .service('Instagram', function Instagram() {

  	var accessToken;
  	var clientId = 'e12788f54eb54fa2b6c9b6646e7002be';
  	var clientSecret = 'd13017e23a9e437cbb768424e40eee0c';
  	var grantType = 'authorization_code';
  	var redirectUri = 'https://ancient-retreat-8481.herokuapp.com/#/instagram';
  	var accessTokenUrl = 'https://api.instagram.com/oauth/access_token/?';

  	this.hasValidToken = function (){

  		return true;
  	};

  	this.setAccessToken = function (token){

  		accessToken = token;
  	};

  	this.getAccessToken = function (){

  		return accessToken;
  	};

  	this.getAccessTokenUrl = function (){

  		return accessTokenUrl+'client_id='+clientId+'&client_secret='+clientSecret+'&grant_type='+grantType+'&redirect_uri='+redirectUri;
  	};
  });