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
    if ($scope.newTaskText) {
      taskService.addTask($scope.newTaskText);
      $scope.newTaskText = '';
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

  return {
    getTasks: function() {
      return tasks;
    },

    taskStateChanged: function(task) {
      task.checked = !task.checked;
    },

    addTask: function(text) {
      var task = {
        text: text,
        checked: false
      };
      tasks.push(task);
    }
  }

}