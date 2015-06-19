### Transclude in Directive

We use `scope` to pass in models to a directive. Sometimes it's desirable to be able to pass in an entire template rather than a string 
or an object. Let's say that we want to create a "alert box" component. The alert box should be able to wrap any arbitrary content.

The `transclude` option allows us do it.

What does this `transclude` option do, exactly? transclude makes the contents of a directive with this option have access to the 
scope outside of the directive rather than inside. 


Now when constructing the directive on the page, instead of using plain `<directive></directive>`, we can add custom HTML content 
inside the element which will be picked up by directive as templete content (`<directive>MY CUSTOM CONTENT</directive>`).

This behavior makes sense for a directive that wraps some content, because otherwise you'd have to pass in each model you wanted to 
use separately. If you have to pass in each model that you want to use, then you can't really have arbitrary contents, can you?

> Best Practice: only use transclude: true when you want to create a directive that wraps arbitrary content.
