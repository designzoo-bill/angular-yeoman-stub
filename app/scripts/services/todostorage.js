'use strict';

/**
 * @ngdoc service
 * @name testApp.todoStorage
 * @description
 * # todoStorage
 * Service in the testApp.
 */
angular.module('testApp').service('todoStorage', function todoStorage() {

    // AngularJS will instantiate a singleton by calling "new" on this function

    var STORAGE_ID = 'todos-angularjs';

	return {

		get: function () {

			return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
		},

		put: function (todos) {
			
			localStorage.setItem(STORAGE_ID, JSON.stringify(todos));
		}
	};
});
