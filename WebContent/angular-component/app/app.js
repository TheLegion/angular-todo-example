angular.module('taskApp', ['ngRoute'])

.controller('taskController', taskController)

.config(routeConfig);

function taskController($scope, task) {
  $scope.task = task;
}

function routeConfig($routeProvider) {
  $routeProvider

  .when('/', {
    template: '<tasks tasks="ctrl.tasks" add-task="ctrl.add(text)"open-task="ctrl.open(task)"></tasks>',
    controller: tasksViewCtrl,
    controllerAs: 'ctrl'
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

function tasksViewCtrl(taskService, $location) {
  var self = this;

  self.tasks = taskService.getTasks();
  self.add = function(text) {
    if (text) {
      var task = {
        id: self.tasks[self.tasks.length - 1] + 1,
        checked: false,
        text: text
      }
      self.tasks.push(task);
    }
  };

  self.open = function(task) {
    $location.path(task.id);
  }
}