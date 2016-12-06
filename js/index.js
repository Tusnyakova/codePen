angular.module("App",[])
.controller("Todo", function($scope)
            {
  $scope.Todo= [{name:"Сдать долги"},
             {name:"Поспать"},
               {name:"Захватить мир"}];
  $scope.archive=[];
  $scope.Add=function()
  {
    $scope.Todo.push({name:$scope.newItem});
    $scope.newItem=" ";
  }
  $scope.Clear=function()
  {
    for(var i=0; i<$scope.Todo.length;i++)
      {
        if($scope.Todo[i].done)
          {                                                          $scope.archive.push($scope.Todo[i]);
            $scope.Todo.splice(i,1);
            i--;
          
          }
      }
  }
});