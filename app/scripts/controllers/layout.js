'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:LayoutCtrl
 * @description
 * # LayoutCtrl
 * Controller of the testApp
 */
angular.module('testApp').controller('LayoutCtrl', function ($scope, EnvVars) {

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    //
    $scope.env = EnvVars.env;

  });
