# Search

## Search in resources

There are two types of search, the global search located on the top bar, and the resource search allows you to search within a resource from the index view.

To define which fields of the resource can be searched, you must assign the names of the columns in the `search` property to the resource.
By default the `id` column is included but you can modify it based on your needs.

``` php
public static $search = ["id", "name"];
```

## Global search

To enable global search, you must set the `search` property as above, in addition, you must set another property called `title`.

There is also a third property called `subtitle` which allows for an additional line of text to be displayed in the results.

### Limit number of results

If you want to limit the number of results that appear from a particular resource, you must use the `limitResults` property indicating the maximum number of results to be displayed.

If you only want to search a resource you must use the keyword `resource:` followed by the key of the resource to search and the text to search.
For example, `resource:users gmail.com`.
