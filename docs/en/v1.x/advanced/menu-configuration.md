# Menu settings

The menu can be found in the `menu` key in the configuration file.

All menu items must have `name`, `key` and `icon`. The `icon` key will have as value the CSS classes of the corresponding icon of the Font Awesome library.

Depending on the type of element that is registered in the menu it will have a series of values or others, as it is the case of the resources that the `resource` key must be added or in the components the `component` key.

In addition, there are also optional values that provide extra functionality, such as hiding menu items or adding parameters to the URL when accessing the resource.

``` php
[
  "name" => "Posts",
  "key" => "posts",
  "icon" => "fas fa-file-alt",
  "resource" => \App\Lyra\Posts::class,
  "query" => [ // Add query parameters to the URL
    "sortCol" => "id",
    "sortDir" => "desc"
  ]
],
[
  "name" => "Categories",
  "key" => "categories",
  "icon" => "fas fa-folder",
  "hidden" => true, // Hide the element in the sidebar menu
  "resource" => \App\Lyra\Categories::class
],
[
  "name" => "Authentication",
  "icon" => "fas fa-key",
  "items" => [ // Nested elements
    [
      "name" => "Users",
      "icon" => "fas fa-users",
      "resource" => \App\Lyra\Users::class
    ]
  ]
],
```
