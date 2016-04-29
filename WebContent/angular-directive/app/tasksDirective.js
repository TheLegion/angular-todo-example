angular.module('taskApp')

.directive('tasks', taskDirective);

function taskDirective() {
  return {
    controller: tasksController,
    controllerAs: 'ctrl',
    templateUrl: 'views/taskList.html',
    restrict: 'E',
    scope: {
      tasks: '<',
      openTask: '&',
      addTask: '&'
    },
    bindToController: true
  }
}

function tasksController() {
  var self = this;

  self.add = function() {
    self.addTask({
      text: self.newTask
    });
    self.newTask = null;
  };

  self.open = function(task) {
    self.openTask({
      task: task
    });
  };

}