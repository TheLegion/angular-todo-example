angular.module('taskApp', [])

.service('taskService', taskService)

.controller('tasksController', tasksController)

function tasksController($scope, taskService) {
  $scope.tasks = taskService.getTasks();

  $scope.taskDone = taskDone;

  function taskDone(task) {
    taskService.setChecked(task);
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

}