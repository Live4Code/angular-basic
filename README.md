### ng-repeat and filters

Continue our last exercise on ng-repeat. A useful pattern is to chain filters onto ng-repeat to further customize the data.

In angular's definition, 

> filters are used to select a subset of items from array and returns it as a new array.

Again, we can use the pipe symbol ( `|` ) to chain multiple filters together. Take a look at the expression:

```
<tr ng-repeat="actor in avengers.cast | filter:search | orderBy:attr | limitTo: limit ">
```

First is a search input box. It is binded to `$scope.search`. When its value changes, both actors and characters in the cast will 
be searched and only those with matching text will return.

Then the results are chained to a `orderBy` filter. 

> orderBy Orders a specified array by the expression predicate. It is ordered alphabetically for strings and numerically for numbers.

Here the `attr` is the property name (actor or character) the results will be sorted according to.

Lastly, the results are chained to a `limitTo` filter. 

> limitTo creates a new array or string containing only a specified number of elements.

We use another input box `limit` to controll the size of the results.

