angular.module('taskApp', ['ngRoute'])

.service('taskService', taskService)

.controller('tasksController', tasksController)

.controller('taskController', taskController)

.config(routeConfig);

function tasksController($scope, taskService, $location) {
  $scope.tasks = taskService.getTasks();

  $scope.taskStateChanged = taskStateChanged;
  $scope.addTask = addTask;
  $scope.openTask = openTask;

  function taskStateChanged(task) {
    taskService.taskStateChanged(task);
  }

  function addTask() {
    if ($scope.newTask) {
      var task = taskService.addTask($scope.newTask);
      $scope.tasks.push(task);
      $scope.newTask = '';
    }
  }

  function openTask(task) {
    $location.path(task.id);
  }
}

function taskController($scope, task) {
  $scope.task = task;
}

function taskService() {
  var tasks = [{
    id: 1,
    text: 'Составить список дел на день',
    checked: true
  }, {
    id: 2,
    text: 'Выполнить первый пункт списка',
    checked: true
  }, {
    id: 3,
    text: 'Осознать, что два пункта уже выполнено'
  }, {
    id: 4,
    text: 'Отдохнуть'
  }];

  this.getTasks = function() {
    return tasks;
  };

  this.addTask = function(text) {
    var task = {
      text: text,
      checked: false
    };
    return task;
  }

  this.taskStateChanged = function(task) {
    console.log('Task state changed. Cool!');
  };

  this.getTask = function(id) {
    for (var i = 0; i < tasks.length; i++) {
      if (tasks[i].id == id) { return tasks[i]; }
    }
    return null;
  };

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