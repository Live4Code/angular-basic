### Create Button Directive

In this exercise, we create our own version of DOM element -- button. We will do it by adding custom CSS styles to the default button 
elements.

### How is directive rendered?

Angular first traverses HTML in search of recognisable custom elements or tags and then links them with predefined JavaScript 
functionality. Those 2 steps are named `Compile` phase and `Link` phase and together they compose Compilation process.

1. Compile: traverse the DOM and collect all of the directives. The result is a linking function.
2. Link: combine the directives with a scope and produce a live view. Any changes in the scope model are reflected in the view, 
and any user interactions with the view are reflected in the scope model.

To put in this example, in the `compile` phase (the `compile` function in directive), Angular search the web page and replacing custom 
directives with actual HTML content. In this stage, we can add CSS classes to the DOM elements. 

We create a directive `<button></button>` (The button is our custom directive name). When Angular sees the directive, the `compile` 
method will be triggered, which in our case is to add css classes. So the output is `<button class=\"btn btn-primary\"></button>`, which 
is passed to the linking function.

Normally we will bind scope, data models in the linking phase (the `link` function in directive). Here we do not have this step. After 
it, the directive is displayed on page.