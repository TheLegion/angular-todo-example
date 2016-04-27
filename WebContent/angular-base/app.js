angular.module('taskApp', [])

.service('taskService', taskService)

.controller('tasksController', tasksController)

function tasksController($scope, taskService) {
  $scope.tasks = taskService.getTasks();

  $scope.taskStateChanged = taskStateChanged;
  $scope.addTask = addTask;

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
}

function taskService() {
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

  this.getTasks = function() {
    return tasks;
  };

  this.taskStateChanged = function(task) {
    console.log('Task state changed. Cool!');
  };

  this.addTask = function(text) {
    var task = {
      text: text,
      checked: false
    };
    return task;
  }

}