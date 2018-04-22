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

    this.todos.forEach(function(todo) {
      if (todo.completed === true) {
        completedTodos++;
      }
    });

    this.todos.forEach(function(todo) {
      if (completedTodos === totalTodos) {
        todo.completed = false;
      } else {
        todo.completed = true;
      }
    })
  }
};

var handlers = {
    addTodo: function() {
    var newTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(newTodoTextInput.value);
    newTodoTextInput.value = '';
    view.todoPlaceholder();
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
  deleteTodo: function(index) {
    todoList.deleteTodo(index);
    view.displayTodos();
    view.todoPlaceholder();
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
  todoPlaceholder: function() {
    const placeholder = document.getElementById('placeholder-text');
    if (todoList.todos.length > 0) {
      placeholder.style.display = "none";
    } else {
      placeholder.style.display = "block";
    }
  },
  displayTodos: function() {
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';

    todoList.todos.forEach(function(todo, index) {
      var todosLi = document.createElement('li');
      var todoTextWithStatus = '';

      if (todo.completed === true) {
        todoTextWithStatus = '(x) ' + todo.todoText;
      } else {
        todoTextWithStatus = '( ) ' + todo.todoText;
      }

      todosLi.id = index;
      todosLi.textContent = todoTextWithStatus;
      todosLi.appendChild(this.createDeleteButton());
      todosUl.appendChild(todosLi);
    }, this);
  },
  createDeleteButton: function() {
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-button'
    return deleteButton;
  },
  setUpEventListeners: function() {
    var todosUl = document.querySelector('ul');

    todosUl.addEventListener('click', function( e ) {
      var elementClicked = e.target;
      if (elementClicked.className === 'delete-button') {
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
      }
    });
  }
};

view.setUpEventListeners();
