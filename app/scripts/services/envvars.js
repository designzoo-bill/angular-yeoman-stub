'use strict';

/**
 * @ngdoc service
 * @name testApp.EnvVars
 * @description
 * # EnvVars
 * Service in the testApp.
 */
angular.module('testApp')
  .service('EnvVars', function EnvVars($http, $q) {

    var env;

  	this.setEnv = function (){

      var deferred = $q.defer();

      $http.get('/node-env').
        success(function(data) {

          if (typeof data.env === 'undefined') {

            env = 'local';
            deferred.resolve(env);
          }
          else {

            env = data.env;
            deferred.resolve(env);
          }
        }).
        error(function() {

            env = 'local';
            deferred.resolve(env);
        });

        return deferred.promise;
    };

    this.getVars = function (){

      var envVars;

      switch(env) { 

        case 'local':

          envVars = {

            env: env,
            instagramClientId: '7e0855d5d0414cf5ab2d7232cf7792ea',
            instagramRedirectUri: 'http://localhost:9000/instagram'
          };
          break;

        case 'development':

          envVars = {

            env: env,
            instagramClientId: '9820dd14bfaf478ea132acd571d17f1a',
            instagramRedirectUri: 'https://ancient-retreat-8481.herokuapp.com/instagram'
          };
          break;
      }

      return envVars;
  	};
  });