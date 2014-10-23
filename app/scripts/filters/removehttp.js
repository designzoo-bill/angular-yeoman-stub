'use strict';

/**
 * @ngdoc filter
 * @name testApp.filter:removeHttp
 * @function
 * @description
 * # removeHttp
 * Filter in the testApp.
 */
angular.module('testApp')
  .filter('removeHttp', function () {
    return function (input) {
      return input.replace('http:', '');
    };
  });
