var myApp = angular.module('myApp', []);

myApp.controller("AppCtrl", function($scope,$q) {

// exercise: create $scope.food to store food
$scope.eat = function(food){
  var deferred = $q.defer();
  var promise = deferred.promise;

  // exercise: show food on the page through $scope.food
  promise.then(function(food){
    alert("Dinner tonight "+food);

  }, function(reason){
    alert(reason);

  });

  if(!food){
    deferred.reject("Oops, no dinner tonight.");
  } 
  else {
    deferred.resolve(food);
  }  
};

});
