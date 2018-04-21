var todoList = {
  todos: [],
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  changeTodo: function(index, newTodoText) {
    this.todos[index].todoText = newTodoText;
  },
  deleteTodo: function(index) {
    this.todos.splice(index, 1);
  },
  toggleCompleted: function(index) {
    var todo = this.todos[index];
    todo.completed = !todo.completed;
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;

    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }
    if (completedTodos === totalTodos) {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
    }
    else {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
  }
};

var handlers = {
    addTodo: function() {
    var newTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(newTodoTextInput.value);
    newTodoTextInput.value = '';
    view.displayTodos();
  },
  changeTodo: function() {
    var newTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var newTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(newTodoPositionInput.valueAsNumber - 1, newTodoTextInput.value);
    newTodoPositionInput.value = '';
    newTodoTextInput.value = '';
    view.displayTodos();
  },
  deleteTodo: function() {
    var removedTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodo(removedTodoPositionInput.valueAsNumber - 1);
    removedTodoPositionInput.value = '';
    view.displayTodos();
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber - 1);
    toggleCompletedPositionInput.value = '';
    view.displayTodos();
  },
  toggleAll: function() {
    todoList.toggleAll();
    view.displayTodos();
  }
};

var view = {
  displayTodos: function() {
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
    for (var i = 0; i < todoList.todos.length; i++) {
      var todosLi = document.createElement('li');
      var todo = todoList.todos[i];
      var todoTextWithStatus = '';

      if (todo.completed === true) {
        todoTextWithStatus = '(x) ' + todo.todoText;
      } else {
        todoTextWithStatus = '( ) ' + todo.todoText;
      }

      todosLi.textContent = todoTextWithStatus;
      todosUl.appendChild(todosLi);
    }
  }
};
