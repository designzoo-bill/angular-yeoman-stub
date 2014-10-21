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

  	var accessToken, user;
  	var clientId = '7e0855d5d0414cf5ab2d7232cf7792ea';
  	var responseType = 'token';
  	var redirectUri = 'https://ancient-retreat-8481.herokuapp.com/instagram';
  	var accessTokenUrl = 'https://instagram.com/oauth/authorize/';

  	this.hasValidToken = function (){

  		return true;
  	};

  	this.setAccessTokenAndUser = function (params){

  		//accessToken = params.access_token;
  		user = params.user;

  		console.log('user: ', user);
  	};

  	this.getAccessToken = function (){

  		return accessToken;
  	};

  	this.getAccessTokenUrl = function (){

  		var url = accessTokenUrl+'?client_id='+clientId+'&redirect_uri='+encodeURIComponent(redirectUri)+'&response_type='+responseType;
  		return url;
  	};


  	this.getAccessToken = function (){

  		return accessToken;
  	};  	
  });