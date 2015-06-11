### Data binding

This exercise shows more examples of angular's two-way binding to further understand its usage.

`{{}}` is angular's syntax for data bind on web page. It allows you to run Javascript code inside it. 

Here we have a simple math calculation of `2+2` and concatenate strings. For these simple functions, such implementations are quite handy.

For non-trivial methods, angular defines the `controller` component. We will introduce its usage in later exercises.

The other side of data binding is `ng-model` allows you to binding the view into the model. It can be used in a `input` box to 
track the value inside it. Then use the `{{ }}` syntax we can bind its value to a view component (`h3` tag here).

Now every time the input changs, the `h3` automatically updates.

Finally, An alternative way to write data-binding on page is `ng-bind` syntax. You can see its usage on line 34.