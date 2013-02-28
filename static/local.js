function TodoCtrl($scope){
  $scope.addTodo = function (){
		$scope.todos.push({text:$scope.formTodoText, done:false});
		$scope.formTodoText = '';
		
	};
}
