var myApp = angular.module('myApp', []);

myApp.directive('button', function() {
  return {
    restrict: 'E',
    //exercise: defaul button should have class="btn btn-primary"
    
    //exercise: attributes.type could be one of "default,info,success,warning,danger,primary"
    //bootstrap will render the button according to the css class name
    
    compile: function(element, attributes) {
      element.addClass('btn');
      if ( attributes.type === 'submit' ) {
        element.addClass('btn-primary');
      }    
      if ( attributes.size ) {
        element.addClass('btn-' + attributes.size);
      }
      
      
      
    }
  };
});
