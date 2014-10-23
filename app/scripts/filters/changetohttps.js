'use strict';

/**
 * @ngdoc filter
 * @name testApp.filter:changetohttps
 * @function
 * @description
 * # changetohttps
 * Filter in the testApp.
 */
angular.module('testApp')
  .filter('changeToHttps', function () {
    return function (input) {
      return input.replace('http:', 'https:');
    };
  });
