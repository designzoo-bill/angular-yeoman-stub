'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:UsersCtrl
 * @description
 * # UsersCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('UsersCtrl', function ($scope, UserData) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.users = UserData;

    // set the default order by
    $scope.predicate = 'name.last';
  });
