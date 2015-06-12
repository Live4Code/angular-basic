### Controller

Sometimes our apps focus on CRUD (create, read, update and delete) on  data. In angular `Controller` is the logical place to 
achieve these.

We put the controller code to a separate file (`main.js`), which helps us to separate logic from view.

Controller has its own scope. It is the HTML element on which the controller is declared. For example, on line 16 of 
`index.html`, we use keyword `ng-controller`, to tell angular we defined a controller, and its scope is 
to the end of the `<div>` (line 21).  

Inside the `<div>`, we use syntax `{{}}` to replace content inside it with Javascript variables defined in``` MainCtrl```. 
These variables are declared with the `$scope` keyword in the controller. $scope variables automatically update their values on view.