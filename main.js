var myApp = angular.module('myApp', []);

myApp.directive('alert', function () {
  return {
    restrict:'EA',
    replace: true,
    template:
    '<div class="alert alert-{{type}}">' +
      '<button type="button" class="close" ng-click="close()">&times;</button>' +
      '<div ng-transclude></div>' +
    '</div>',
    transclude:true,
    scope:{
      type:'=',
      close:'&'
    }
  };
});

//Finish the panel directive based on the example of alert directive
//the template is provided in the index.html
//notice scope has two variables: type and title
myApp.directive('panel', function(){
  return {
    restrict:'EA',
    replace: true,
    template: 
      '<div class="panel panel-{{type}}">' +
        '<div class="panel-heading">' +
          '<h3 class="panel-title">{{title}}</h3>' +
        '</div>' +
        '<div class="panel-body">' +
          //add transclude here
        '</div>' +
      '</div>',
    transclude:true,
    scope:{
      type:'=',
      title: '='
    }
  }
});

myApp.controller('AlertController', function ($scope) {
  $scope.alerts = [
    { type: 'danger', msg: 'This is an error message' }, 
    { type: 'success', msg: 'This is a success message' },
    { type: 'info', msg: 'This is a info message'},
    { type: 'warning', msg: 'This is a warning message'}
  ];

  $scope.addAlert = function() {
    var alert = {type: '', msg: ''};
    //randomly select one from $scope.alerts and assign it to the alert variable
    
    $scope.alerts.push({ type: alert.type, msg: alert.msg});
  };

  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };

  var panels = [
    { type: 'danger', title: 'Error', content: 'This is a detailed error message' }, 
    { type: 'success', title: 'Success', content: 'This is a detailed success message' },
    { type: 'info', title: 'Info', content: 'This is a detailed info message'},
    { type: 'warning', title: 'Warning' , content: 'This is a detailed warning message'}
  ];

  //randomly select one from panels and assign it to $scope.panel
  //it is then rendered with the panel directive
  $scope.randomPanel = function(){

  };

});