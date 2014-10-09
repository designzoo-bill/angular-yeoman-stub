'use strict';

angular.module('testApp').controller('UsersCtrl', function ($scope, UserData, EnvVars) {

  $scope.users = UserData;

  // set the default order by
  $scope.predicate = 'name.last';

  $scope.env = EnvVars.env;
});