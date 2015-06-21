var myApp = angular.module('myApp', []);

myApp.controller("AppCtrl", function($scope) {
  $scope.callContent = function(number, network, message) {
    alert("Number: " + number + " Carrier: "+ 
      network + " Content: " + message);
  };
});

myApp.directive("phone", function() {
return {
  
restrict: "E",

scope: {
  number: "@",
  network: "=",
  makeCall: "&"
},
  
template: '<div class="panel panel-info">'+
  '<div class="panel-heading">Dashboard</div>'+
  '<div class="panel-body"><p>Number: {{number}}</p>'+
  '<p>Carrier: <select ng-model="network" ng-options="net for net in networks"></select></p>' +
  '<p><input type="text" ng-model="value" class="form-control" placeholder="Content"></p>' +
  '<p><button class="btn btn-default" ng-click="makeCall({number: number, network:network, message: value})">'+
  'Call</button></p>'+
  '</div></div>',

link: function(scope) {
  scope.networks = ["AT&T", "Verizon", "T-Mobile"];
  scope.network = scope.networks[0]
}

};
});