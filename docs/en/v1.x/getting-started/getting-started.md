# Getting Started
[[toc]]

## Defining Resources

By default, resources are stored in the `app/Lyra` directory of your application.

To create the resources you must execute the following command indicating the name of the resource, also with the `-m` parameter we can specify the name of the Eloquent model to which the resource belongs.

If no model is specified, the resource will be created assuming that a model with the same name as the resource exists in the 'app' folder.

``` bash
$ php artisan lyra:resource Post
```

The main part of the resources is the `model` property, this property indicates the Eloquent model to which the resource belongs.

``` php
use App\Post as Model;

/**
 * The resource Eloquent model
 *
 * @var string
 */
public static $model = Model::class;
```

The resources also have a `fields` method which returns an array with the different fields of the resource.

``` php 
/**
 * The fields' resource definition
 *
 * @return array
 */
public function fields()
{
  return [
    Id::make('Id'),
  ];
}
```

Newly created resources only have the `Id` field, in the section "**[Fields](/en/v1.x/fields/defining.html)**" you will find the different types of fields that exist and how they work.

## Register resources

Once you have created a new resource, you must add it to the menu in the configuration file so that it is registered in the system automatically.

Within the configuration you will find the `menu` array, below you can see an example of how you should register a new resource:

``` php
"menu" => [
  ...
  [
    "name" => "Posts",
    "key" => "posts",
    "icon" => "far fa-file-alt",
    "resource" => App\Lyra\Post::class
  ]
]
```

The order of appearance in the `menu` array will determine the menu order for all users.
To learn more about the menu, go to "**[Menu Settings](/en/v1.x/advanced/menu-configuration.md)**".

