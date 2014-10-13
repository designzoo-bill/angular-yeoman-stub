'use strict';

angular.module('testApp').controller('MainCtrl', function ($scope, $routeParams, $filter, todoStorage) {

	$scope.awesomeThings = [
	 	'HTML5 Boilerplate',
	 	'AngularJS',
	 	'Karma'
 	];

 	var todos = $scope.todos = todoStorage.get();

 	$scope.newTodo = '';
 	$scope.editedTodo = null;

 	$scope.$watch('todos', function (newValue, oldValue) {

		if (newValue !== oldValue) { // This prevents unneeded calls to the local storage

			todoStorage.put(todos);
		}
	}, true);

	$scope.addTodo = function () {

		var newTodo = $scope.newTodo.trim();
		var orderBy = todos.length;

		if (!newTodo.length) {

			return;
		}

		todos.push({

			title: newTodo,
			completed: false,
			orderBy: orderBy
		});

		$scope.newTodo = '';
	};

	$scope.toggleTodo = function (todo) {

		console.log('toggleTodo');
		todo.completed = !todo.completed;
	};

	$scope.removeTodo = function (todo) {

		todos.splice(todos.indexOf(todo), 1);
	};
});