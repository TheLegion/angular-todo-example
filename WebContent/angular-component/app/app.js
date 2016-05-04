angular.module('taskApp', ['ngRoute'])

.controller('tasksViewCtrl', tasksViewCtrl);

function tasksViewCtrl(taskService) {
  var self = this;

  self.tasks = taskService.getTasks();
  self.add = function(text) {
    if (text) {
      taskService.addTask(text);
    }
  };

  self.stateChanged = function(task) {
    taskService.taskStateChanged(task);
  }
}