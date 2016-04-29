angular.module('taskApp')

.component('tasks', {
  controller: tasksController,
  controllerAs: 'ctrl',
  templateUrl: 'views/taskList.html',
  bindings: {
    tasks: '<',
    openTask: '&',
    addTask: '&'
  }
});

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