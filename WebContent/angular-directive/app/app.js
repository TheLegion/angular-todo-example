angular.module('taskApp', ['ngRoute'])

.controller('taskController', taskController)

.config(routeConfig);

function taskController($scope, task) {
  $scope.task = task;
}

function routeConfig($routeProvider) {
  $routeProvider

  .when('/', {
    template: '<tasks></tasks>'
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