'use strict';

/**
 * @ngdoc service
 * @name testApp.Instagram
 * @description
 * # Instagram
 * Service in the testApp.
 */
angular.module('testApp')
  .service('Instagram', function Instagram($http, $q, InstagramAccessToken) {

    var me = this;
  	var accessToken;

    // Instagram Parama
  	var clientId = '7e0855d5d0414cf5ab2d7232cf7792ea';
  	var responseType = 'token';
    var redirectUri = 'http://localhost:9000/instagram';
  	var accessTokenUrl = 'https://instagram.com/oauth/authorize/';

    // endpoints
    var url = 'https://api.instagram.com/v1';
    var userEndpoint = url+'/users/';
    var popularMediaEndpoint = url+'/media/popular/';

    this.getUser = function (){

      var deferred = $q.defer();

      var token = me.getAccessToken();

      console.log('token: ', token);

      if (token === null) {

        deferred.reject(null);
      }

      $http.jsonp(userEndpoint+'self?access_token='+token+'&callback=JSON_CALLBACK').

        success(function(data) {

          deferred.resolve(data.data);
        }).

        error(function() {

          deferred.reject(null);
        });

        return deferred.promise;
    };

  	this.getPopularMedia = function (){

      var deferred = $q.defer();

      var token = me.getAccessToken();

      if (token === null) {

        deferred.reject(null);
      }

      $http.jsonp(popularMediaEndpoint+'?access_token='+token+'&callback=JSON_CALLBACK').

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

      // save to local storage
      InstagramAccessToken.set(token);
    };

  	this.getAccessToken = function (){

      if (typeof accessToken === 'undefined') {

        // check if we have the access token stored in local storage
        var accessTokenLocalStorage = InstagramAccessToken.get();

        if (accessTokenLocalStorage !== null) {

         return accessTokenLocalStorage;
        }
        else{

          return null;
        }
      }
      else {

        return accessToken;
      }
  	};

  	this.getAccessTokenUrl = function (){

  		var url = accessTokenUrl+'?client_id='+clientId+'&redirect_uri='+encodeURIComponent(redirectUri)+'&response_type='+responseType;
  		return url;
  	};  	
  });