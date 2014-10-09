'use strict';

angular.module('testApp').controller('UsersCtrl', function ($scope, UserData, $http) {

  $scope.users = UserData;

  // set the default order by
  $scope.predicate = 'name.last';

  // get the env
  $scope.env = 'local';
  $http.get('/nodeenv').success(function(data){
  	$scope.env = data.env;
  });
});