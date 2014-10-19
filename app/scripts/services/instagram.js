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
  	var clientId = '7e0855d5d0414cf5ab2d7232cf7792ea';
  	var responseType = 'token';
  	var redirectUri = 'https://ancient-retreat-8481.herokuapp.com/#/instagram';
  	var accessTokenUrl = 'https://api.instagram.com/oauth/access_token/';

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

  		return accessTokenUrl+'?client_id='+clientId+'&redirect_uri='+encodeURIComponent(redirectUri)+'&response_type='+responseType;
  	};
  });