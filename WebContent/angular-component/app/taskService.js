angular.module('taskApp')

.service('taskService', taskService);

function taskService() {
  var tasks = [{
    id: 1,
    text: 'Составить список дел на день',
    checked: true
  }, {
    id: 2,
    text: 'Выполнить первый пункт списка',
    checked: true
  }, {
    id: 3,
    text: 'Осознать, что два пункта уже выполнено'
  }, {
    id: 4,
    text: 'Отдохнуть'
  }];

  this.getTasks = function() {
    return tasks;
  };

  this.setChecked = function(task) {
    task.checked = true;
  };

  this.getTask = function(id) {
    for (var i = 0; i < tasks.length; i++) {
      if (tasks[i].id == id) { return tasks[i]; }
    }
    return null;
  };

  this.addTask = function(text) {
    var task = {
      text: text,
      checked: false,
      id: tasks[tasks.length - 1].id
    };
    return task;
  }

}