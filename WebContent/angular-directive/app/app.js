angular.module('taskApp', ['ngRoute'])

.controller('tasksController', tasksController)

.controller('taskController', taskController)

.config(routeConfig);

function tasksController($scope, taskService) {
  $scope.tasks = taskService.getTasks();

  $scope.taskDone = taskDone;

  function taskDone(task) {
    taskService.setChecked(task);
  }
}

function taskController($scope, task) {
  $scope.task = task;
}

function routeConfig($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl: 'views/taskList.html',
    controller: 'tasksController'
  })

  .when('/:id', {
    templateUrl: 'views/taskCard.html',
    controller: 'taskController',
    resolve: {
      task: function($route, taskService) {
        return taskService.getTask($route.current.params.id);
      }
    }
  })

  .otherwise({
    redirectTo: '/'
  });
}