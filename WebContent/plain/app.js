var tasks = [{
  text: 'Составить список дел на день',
  type: 'checked'
}, {
  text: 'Выполнить первый пункт списка',
  type: 'checked'
}, {
  text: 'Осознать, что два пункта уже выполнено'
}, {
  text: 'Отдохнуть',
  type: 'major'
}];

function init() {
  var list = document.getElementById('todo');
  for (var i = 0; i < tasks.length; i++) {
    var task = tasks[i];
    var elem = document.createElement('li');
    elem.textContent = task.text;
    if (task.type) {
      elem.className = task.type;
    }
    list.appendChild(elem);
  }
}