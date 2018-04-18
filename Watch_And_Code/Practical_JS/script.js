var todoList = {
  todos: [],
  displayTodos: function() {
    console.log('My todos:', this.todos);
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(index, newTodoText) {
    this.todos[index].todoText = newTodoText;
    this.displayTodos();
  },
  toggleCompleted: function(index) {
    var todo = this.todos[index];
    todo.completed = !todo.completed;
    this.displayTodos();
  },
  deleteTodo: function(index) {
    this.todos.splice(index, 1);
    this.displayTodos();
  }
}
