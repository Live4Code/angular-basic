### ng-repeat

`ng-repeat` is used to show a list of items. It instantiates a template once per item from a collection. 
Each template instance gets its own scope, where the given loop variable is set to the current collection 
item, and `$index` is set to the item index or key.

We can also add filters to the `ng-repeat` expression to further customize how to render the data. It is 
a convenient way to contrstruct a `<table>` or `<ul>` element from a JS array.

### Tracking and Duplicates

By default, `ng-repeat` does not allow duplicate items in arrays. If you have duplicate items, 
then use the track by expression.

For example, you may track items by the index of each item in the collection, using the special scope property `$index`:

```
<div ng-repeat="n in [42, 42, 43, 43] track by $index">
  {{n}}
</div>
```
