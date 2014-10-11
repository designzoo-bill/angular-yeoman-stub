'use strict';

/**
 * @ngdoc directive
 * @name testApp.directive:todoFocus
 * @description
 * # todoFocus
 */
angular.module('testApp').directive('todoFocus', function ($timeout) {

	return function (scope, elem, attrs) {

		scope.$watch(attrs.todoFocus, function (newVal) {

			if (newVal) {

				$timeout(function () {

					elem[0].focus();
				}, 0, false);
			}
		});
	};
});