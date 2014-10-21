'use strict';

/**
 * @ngdoc service
 * @name testApp.Instagram
 * @description
 * # Instagram
 * Service in the testApp.
 */
angular.module('testApp')
  .service('Instagram', function Instagram($http, $q) {

  	var accessToken;
  	var clientId = '7e0855d5d0414cf5ab2d7232cf7792ea';
  	var responseType = 'token';
    var redirectUri = 'http://localhost:9000/instagram';
  	var accessTokenUrl = 'https://instagram.com/oauth/authorize/';

    // endpoints
    var url = 'https://api.instagram.com/v1';
    var userEndpoint = url+'/users/';

  	this.getUser = function (){

      var deferred = $q.defer();

      if (typeof accessToken === 'undefined') {

        deferred.reject(null);
      }

      $http.jsonp(userEndpoint+'self?access_token='+accessToken+'&callback=JSON_CALLBACK').

        success(function(data) {

          deferred.resolve(data.data);
        }).
        error(function() {

          deferred.reject(null);
        });

        return deferred.promise;
  	};

  	this.setAccessToken = function (token){

  		accessToken = token;
  	};

  	this.getAccessToken = function (){

  		return accessToken;
  	};

  	this.getAccessTokenUrl = function (){

  		var url = accessTokenUrl+'?client_id='+clientId+'&redirect_uri='+encodeURIComponent(redirectUri)+'&response_type='+responseType;
  		return url;
  	};  	
  });