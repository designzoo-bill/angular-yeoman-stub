'use strict';

angular.module('testApp').controller('UsersCtrl', function ($scope, UserData, ENV_CONFIG) {

  $scope.users = UserData;

  // set the default order by
  $scope.predicate = 'name.last';

  // get the env
  /*$scope.env = 'local';
  $http.get('/nodeenv').success(function(data){
  	console.log(data);
  	$scope.env = data.env;
  });*/

  $scope.env = ENV_CONFIG.env;
});