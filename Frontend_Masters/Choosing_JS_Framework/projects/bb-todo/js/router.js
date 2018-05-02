window.TodoApp = new (Backbone.Router.extend({
  routes: { '' : 'index' },
  initialize: function() {
    this.todoItems = new TodoItems();
    this.todosView = new TodosView({ collection: this.todoItems });
    this.todosView.render();

    $('.btn-clear').click(function(e) {
      window.TodoApp.todosView.filterCompleted();
    });

    $('.btn-success').click(function() {
      window.TodoApp.todoItems.add({val:$("#newTodo").val(), completed: false });
      $("#newTodo").val('');
    });
  },
  index: function() {
    var fixtures = [
      { val: "Chrome Dev Tools", completed: true },
      { val: "Electron Apps", completed: true },
      { val: "CSS Grids", completed: false },
      { val: "JS Frameworks", completed: false },
      { val: "Intro to React", completed: false }
    ];

    $('#app').html(this.todosView.el);
    this.todoItems.reset(fixtures);
  },
  start: function() {
    Backbone.history.start();
  }
}));
