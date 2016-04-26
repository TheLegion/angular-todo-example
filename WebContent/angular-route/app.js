angular.module('taskApp', ['ngRoute'])

.service('taskService', taskService)

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
    text: 'Отдохнуть',
    major: true
  }];

  this.getTasks = function() {
    return tasks;
  };

  this.addTask = function(task) {
    if (tasks.indexOf(task) != -1) {
      tasks.push(task);
    }
    return tasks;
  };

  this.setChecked = function(task) {
    task.checked = true;
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