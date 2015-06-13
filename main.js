var myApp = angular.module('myApp', []);

myApp.factory('DataStore', function() {
  var dataToShare = {
    message: "time" 
  };

  var setMessage = function(message){
    dataToShare.message = message;
  };

  var getMessage = function(){
    return dataToShare.message;
  };

  return {
    'getMessage': getMessage,
    'setMessage': setMessage,
  }; 
})

function FirstCtrl($scope, DataStore){

  $scope.message = DataStore.getMessage();

  $scope.saveMessage = function(){
    //Use setMessage in DataStore to save message

  };

}

function SecondCtrl($scope, DataStore){

  $scope.message = DataStore.getMessage();

  $scope.reversedMessage = function(message) {
    return message.split("").reverse().join("");
  };

  $scope.fetchMessage = function(){
    //Use getMessage to fetch updated message

  };

}