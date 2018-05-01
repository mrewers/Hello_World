ngApp.controller('NgAppCtrl', function NgAppCtrl($scope) {
  $scope.todos = [
    { val: "Chrome Dev Tools", completed: true},
    { val: "Electron Apps", completed: true},
    { val: "CSS Grids", completed: false},
    { val: "JS Frameworks", completed: false},
    { val: "Intro to React", completed: false},
  ];

  $scope.addNewTask = function() {
    $scope.todos.push({ completed: false, val: $scope.newTask});
    $scope.newTask = ''
  };

  $scope.clearCompleted = function() {
    $scope.todos = $scope.todos.filter(function(el, index) {
      return !el.completed;
    });
  };

  $scope.removeTodo = function(index) {
    $scope.todos.splice(index, 1)
  };

});
