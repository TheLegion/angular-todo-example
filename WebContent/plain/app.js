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

function init() {
  var list = document.getElementById('tasks');
  for (var i = 0; i < tasks.length; i++) {
    var task = tasks[i];
    var elem = document.createElement('li');
    elem.textContent = task.text;
    if (task.checked) {
      elem.className = 'checked';
    }
    list.appendChild(elem);
  }
}