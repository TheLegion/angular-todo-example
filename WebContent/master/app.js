angular.module('taskApp', ['ngRoute'])
.controller('tasksCtrl', tasksController)
.service('tasksService', tasksService)
.config(routeConfig);

function routeConfig($routeProvider) {
	$routeProvider

	.when('/', {
		templateUrl: 'views/list.html',
		controller: 'tasksCtrl'
	})

	.when('/:id', {
		templateUrl: 'views/card.html'
	});
}

function tasksController($scope, tasksService) {
	$scope.tasks = tasksService.getTasks();

	$scope.stateChanged = function(task) {
		tasksService.stateChanged(task);
	};

	$scope.addTask = function() {
		if ($scope.newTaskText) {
			tasksService.add($scope.newTaskText);
			$scope.newTaskText = null;
		}
	};
}

function tasksService() {
	var tasks = [{
		text: 'Составить список дел на день',
		checked: true
	}, {
		text: 'Выполнить первый пункт списка',
		checked: true
	}, {
		text: 'Осознать, что два пункта уже выполнено'
	}, {
		text: 'Отдохнуть'
	}];

	return {
		getTasks: function() {
			return tasks;
		},
		stateChanged: function(task) {
			task.checked = !task.checked;
		},
		add: function(text) {
			var task = {
				text: text,
				checked: false
			};
			tasks.push(task);
		}
	}
}