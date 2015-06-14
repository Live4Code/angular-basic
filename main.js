var myApp = angular.module('myApp', []);

myApp.filter('myReverse',function(){
  //input is the data to be filtered，uppercase is an additional parameter passed in from view
  //e.g. {{ message | myReverse:true }}，input is message, uppercase is true
  return function(input, uppercase){
    var out = "";
    for (var i = 0; i < input.length; i++) {
      out = input.charAt(i) + out;
    }
    // conditional based on optional argument
    if (uppercase) {
      out = out.toUpperCase();
    }
    return out;    
  }
})

//Shift characters in a string to the right by a specific number of times. 
//e.g.{{ 'abcd' | shiftString:2 }} -> 'cdab'
myApp.filter('shiftString',function(){
  return function(input, numberToShift){
    //first find the mod of numberToShift on input
    numberToShift = numberToShift%input.length;
    //create a new character array to save the result
    var letters = new Array(input.length);
    for (var i = 0; i < input.length; i++) {
      //compute the new position for each character based on the rule


    }
    //join the character array to return a string
    return letters.join('');    
  };  
});

function MainCtrl($scope, DataStore){

  $scope.message = DataStore.getMessage();

  $scope.reversedMessage = function(message) {
    return message.split("").reverse().join("");
  };

}

myApp.factory('DataStore', function() {
  var dataToShare = {
    message: "rats live on no evil star", 
  };

  var setMessage = function(message){
    dataToShare.message = message;
  };

  var getMessage = function(){
    return dataToShare.message;
  };

  return {
    'getMessage': getMessage,
    'setMessage': setMessage
  }; 
});
