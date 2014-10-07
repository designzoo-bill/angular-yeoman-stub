'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('ContactCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
