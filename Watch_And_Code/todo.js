var todos = [];

function displayTodos() {
  console.log('My todos:', todos);
}

function addTodo(todo) {
  todos.push(todo);
  displayTodos();
}

function changeTodo(index, value) {
  todos[index] = value;
  displayTodos();
}

function deleteTodo(index) {
  todos.splice(index, 1);
  displayTodos();
}
