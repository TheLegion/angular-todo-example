angular.module('taskApp', [])

.service('taskService', taskService)

.controller('tasksController', tasksController)

function tasksController($scope, taskService) {
  $scope.tasks = taskService.getTasks();

  $scope.taskStateChanged = taskStateChanged;

  function taskStateChanged(task) {
    taskService.taskStateChanged(task);
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

}