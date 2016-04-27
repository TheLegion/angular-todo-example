angular.module('taskApp')

.directive('tasks', taskDirective);

function taskDirective() {
  return {
    controller: tasksController,
    templateUrl: 'views/taskList.html',
    restrict: 'E'
  }
}

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