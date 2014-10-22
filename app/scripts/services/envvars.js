'use strict';

/**
 * @ngdoc service
 * @name testApp.EnvVars
 * @description
 * # EnvVars
 * Service in the testApp.
 */
angular.module('testApp')
  .service('EnvVars', function EnvVars($http) {

  	var env, apiUrl;

  	var setVars = function(){

		switch(env) {

			case 'local':

			apiUrl = 'local api url';
			break;

			case 'development':

			apiUrl = 'dev api url';
			break;
		}
  	};

	// get the node env from the server defaults to local as we don't have node serve locally
	$http.get('/node-env').
		success(function(data) {
			env = data.env;
			setVars();
		}).
		error(function() {
			env = 'local';
			setVars();
		});

  	this.getEnv = function(){

  		return env;
  	};

  	this.getApiUrl = function(){

  		return env;
  	};
  });