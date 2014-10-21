'use strict';

/**
 * @ngdoc service
 * @name testApp.Instagram
 * @description
 * # Instagram
 * Service in the testApp.
 */
angular.module('testApp')
  .service('Instagram', function Instagram($http) {

  	var accessToken;
  	var clientId = '7e0855d5d0414cf5ab2d7232cf7792ea';
  	var responseType = 'token';
  	var redirectUri = 'http://localhost:9000/instagram';
  	var accessTokenUrl = 'https://instagram.com/oauth/authorize/';

    // endpoints
    var url = 'https://api.instagram.com/v1';
    var userEndpoint = url+'/users/';

  	this.getUser = function (){

      if (typeof accessToken === 'undefined') {

        return null;
      }

      $http.get(userEndpoint+'self?access_token='+accessToken).
        success(function(data, status, headers, config) {

          console.log('data: ', data);
          console.log('status: ', status);
          console.log('headers: ', headers);
          console.log('config: ', config);
        }).
        error(function() {

          return null;
        });
  	};

  	this.setAccessToken = function (token){

  		accessToken = token;

  		console.log('accessToken: ', accessToken);
  	};

  	this.getAccessToken = function (){

  		return accessToken;
  	};

  	this.getAccessTokenUrl = function (){

  		var url = accessTokenUrl+'?client_id='+clientId+'&redirect_uri='+encodeURIComponent(redirectUri)+'&response_type='+responseType;
  		return url;
  	};  	
  });