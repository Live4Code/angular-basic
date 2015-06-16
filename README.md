### What are Directives?

At a high level, directives are markers on a DOM element (such as an attribute, element name, comment or CSS class) that tell 
AngularJS's HTML compiler ($compile) to attach a specified behavior to that DOM element or even transform the DOM element and 
its children.

Angular comes with a set of these directives built-in, like `ngBind`, `ngModel`, and `ngClass`. Much like you create controllers 
and services, you can create your own directives for Angular to use. When Angular bootstraps your application, the HTML compiler 
traverses the DOM matching directives against the DOM elements.

