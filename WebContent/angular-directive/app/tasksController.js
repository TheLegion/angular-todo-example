angular.module('taskApp')

.controller('tasksController', tasksController);

function tasksController($scope, taskService, $location) {
  $scope.tasks = taskService.getTasks();

  $scope.taskDone = taskDone;
  $scope.openTask = openTask;
  $scope.addTask = addTask;

  function taskDone(task) {
    taskService.setChecked(task);
  }

  function openTask(task) {
    $location.path(task.id);
  }

  function addTask() {
    if ($scope.newTask) {
      var task = taskService.addTask($scope.newTask);
      $scope.tasks.push(task);
      $scope.newTask = '';
    }
  }
}