### Scope in Directive

All directives have a scope associated with them. They use this scope for accessing data/methods inside the template and 
link function. 

We have alreay used scope in previous 2 exercises when creating directives.

By default, unless explicitly set, directives don’t create their own scope. They inherit their parent scope 
( usually a controller ). This means everyhing in controller's scope is available to the directives.

This is usually a bad idea. Use pagination directive as an example. The pagination directive only cares about how the 
pagination widget works, it dose not need to know actual page contents (it can be in a forum, blog, or product listings ...). 

AngularJS allows us to change the default scope of directives by defining directives' own scope in the `scope` property. This is 
called isolated scope.

### Different types of directive scopes

`scope : false`. Directive uses its parent scope.

`scope : true`. Directive gets a new scope, nothing is shared with parent controller.

`scope : { }`. Directive gets a new isolated scope.

### Isolated Scope 

In isolated scope, to access any parent scope data, we need to pass that to our directive explicitly.

```
scope: {
  name: "@",
  color: "=",
  reverse: "&"
}
```

Scope properties depends on their values –– also known as Prefixes –– provided. These Prefixes are used to bind the parent scope’s 
methods and properties to the directive scope.

There’re 3 types of prefixes AngularJS provides.

1. `@`   (  Text binding / one-way binding )
2. `=`   ( Direct model binding / two-way binding )
3. `&`   ( Behaviour binding / Method binding  )

`@` is creating a one-way binding between the parent and directive scope, any changes made in the parent scope will reflect 
inside the directive scope, but not the other way. It is useful when directive needs to be initialised with some data from parent scope.

`=` creates a two-way binding between the parent and directive scope. It’ll always expect the attribute value to be a ng model. 
This is useful, when any of our directive scope property to be same as the parent scope property.

`&` prefix is also known as a method binding. This is used to bind any methods from the parent scope to the directive scope. 
This is used when directive needs to execute any callbacks in the parent scope.




