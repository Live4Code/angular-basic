var myApp = angular.module('myApp', []);

myApp.directive("helloworld", function(){
  return {
    restrict: 'E',
    template: '<h2>Directive is web component</h2>'
  }
});
