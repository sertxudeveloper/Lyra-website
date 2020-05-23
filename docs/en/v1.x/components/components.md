# Components

Lyra includes a system that allows you to add extra functionality either by creating your own components or by importing from third parties.

These components allow you to have your own API paths, JavaScript scripts, styles and even implement your own Vue.js components.

## Creating a component

To create a component it is necessary to execute the following command by passing it the vendor and the name in "snake case", for example, `sertxudeveloper/test-component`.

The components created are located in the `lyra-components` folder within the web application.

## Register a component

After creating or importing a component and installing the necessary dependencies, you need to register it in the panel menu in order to start using it.

The registration of a component is very similar to that of a resource. The following is an example of a record.

``` php
[
  "name" => "Test Component",
  "key" => "test-component",
  "icon" => "fas fa-question",
  "component" => \SertxuDeveloper\Testcomponent\Testcomponent::class
]
```

Remember that if you are using the advanced mode, you must assign the relevant permissions so that the different roles can use the components.

## Registration of routes, assets, styles and scripts

Depending on whether you want to register API paths, an asset, a CSS style or a JavaScript script, you must use one method or the other.

These methods must be used in the `boot` method of the main class of the component. Since Lyra, when registering a component in the menu will be in charge of executing this method to register the files and paths of the component.

Below you will find different examples depending on the type of file you want to register.

### Register API route

To register an API path file you should follow the example below.

``` php
Lyra::route('test-component', __DIR__ . '/../routes/api.php');
```

To access the paths in that file you should note that first Lyra adds the `/components` prefix to the component paths, then the name of the component that receives the first parameter is added as a prefix.

Thus, following the example above, if you have registered the path `/test` it should be accessed as `/components/test-component/test`.

### Register asset

To register an asset you should follow the example below.

``` php
Lyra::asset('test-component-picture', __DIR__ . '/../dist/img/picture.png');
```

Please note that the name of the asset must be unique, otherwise you may overwrite an existing route.

### Register CSS style

To register a CSS style you should follow the example below.

``` php
Lyra::style('test-component-style, __DIR__ . '/../dist/css/component.css');
```

Please note that the CSS style name must be unique, otherwise it may overwrite an existing path.

### Register JavaScript script

To register a JavaScript script you should follow the example below.

``` php
Lyra::script('test-component-script, __DIR__ . '/../dist/js/component.js);
```

Please note that the name of the JavaScript script must be unique, otherwise it may overwrite an existing path.

The scripts will be added at the end of the HTML `<body>` tag.
