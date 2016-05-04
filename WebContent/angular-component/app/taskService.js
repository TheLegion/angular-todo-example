angular.module('taskApp')

.service('taskService', taskService);

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
      task.checked = true;
    },
    addTask: function(text) {
      var task = {
        text: text,
        checked: false,
        id: tasks[tasks.length - 1].id
      };
      return task;
    }
  }

}