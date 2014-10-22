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

  	this.getEnv = function (){

      var deferred = $q.defer();

      $http.get('/node-env').
        success(function(data) {

        	if (typeof data.env === 'undefined') {

        		deferred.resolve('local');
        	}
        	else {

        		deferred.resolve(data.env);
        	}
        }).
        error(function() {


          	deferred.resolve('local');
        });

        return deferred.promise;
  	};
  });