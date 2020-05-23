# Configuración del menú

El menú se encuentra en la clave `menu` en el fichero de configuración.

Todos los elementos del menú deben tener `name`, `key` e `icon`. La clave `icon` tendrá como valor las clases CSS del icono correspondiente de la librería Font Awesome.

Dependiendo del tipo de elemento que se registra en el menú contará con una serie de valores u otros, como es el caso de los recursos que se debe añadir la clave `resource` o en los componentes la clave `component`.

Además, también existen valores opcionales que ofrecen funcionalidades extra, como ocultar elementos del menú o añadir parámetros a la URL al acceder al recurso.

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
