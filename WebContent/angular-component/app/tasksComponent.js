angular.module('taskApp')

.component('tasks', {
  controller: tasksController,
  controllerAs: 'ctrl',
  templateUrl: 'views/taskList.html',
  bindings: {
    tasks: '<',
    add: '&',
    stateChanged: '&'
  }
});

function tasksController() {
  var self = this;

  self.addTask = function() {
    self.add({
      text: self.newTaskText
    });
    self.newTaskText = null;
  };

  self.taskStateChanged = function(task) {
    self.stateChanged({
      task: task
    });
  }

}