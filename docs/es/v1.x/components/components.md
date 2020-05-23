# Componentes

Lyra incluye un sistema que le permite añadir funcionalidades extras ya sea creando sus propios componentes o importando de terceros.

Estos componentes permiten tener sus propias rutas API, scripts de JavaScript, estilos e incluso implementar sus propios componentes Vue.js.

## Creación de un componente

Para crear un componente es necesario ejecutar el siguiente comando pasándole el vendor y el nombre en "snake case", por ejemplo, `sertxudeveloper/test-component`.

Los componentes creados se encuentran en la carpeta `lyra-components` dentro de la aplicación web.

## Registrar un componente

Tras crear o importar un componente e instalar las dependencias necesarias, deberá registrarlo en el menú del panel para poder empezar a utilizarlo.

El registro de un componente es muy similar al de un recurso. A continuación, dispone de un ejemplo de registro.

``` php
[
  "name" => "Test Component",
  "key" => "test-component",
  "icon" => "fas fa-question",
  "component" => \SertxuDeveloper\Testcomponent\Testcomponent::class
]
```

Recuerde que, si está utilizando el modo avanzado, deberá asignar los permisos pertinentes para que los diferentes roles puedan utilizar los componentes.

## Registro de rutas, assets, estilos y scripts

Dependiendo de si desea registrar rutas API, un asset, un estilo CSS o un script JavaScript, deberá utilizar un método u otro.

Estos métodos se deben utilizar en el método `boot` de la clase principal del componente. Ya que Lyra, al registrar un componente en el menú se encargará de ejecutar este método para registrar los ficheros y rutas del mismo.

A continuación, encontrará distintos ejemplos dependiendo del tipo de fichero que desea registrar.

### Registrar ruta API

Para registrar un fichero de rutas API debe seguir el siguiente ejemplo.

``` php
Lyra::route('test-component', __DIR__ . '/../routes/api.php');
```

Para acceder a las rutas de ese fichero debe tener en cuenta que en primer lugar Lyra añade el prefijo `/components` a las rutas de los componentes, posteriormente se añade como prefijo el nombre del componente que recibe el primer parámetro.

De esta forma, siguiendo el ejemplo anterior, si ha registrado la ruta `/test` deberá ser accedida como `/components/test-component/test`.

### Registrar asset

Para registrar un asset debe seguir el siguiente ejemplo.

``` php
Lyra::asset('test-component-picture', __DIR__ . '/../dist/img/picture.png');
```

Debe tener en cuenta que el nombre del asset debe ser único, de lo contrario puede sobrescribir alguna ruta ya existente.

### Registrar estilo CSS

Para registrar un estilo CSS debe seguir el siguiente ejemplo.

``` php
Lyra::style('test-component-style, __DIR__ . '/../dist/css/component.css');
```

Debe tener en cuenta que el nombre del estilo CSS debe ser único, de lo contrario puede sobrescribir alguna ruta ya existente.

### Registrar script JavaScript

Para registrar un script JavaScript debe seguir el siguiente ejemplo.

``` php
Lyra::script('test-component-script, __DIR__ . '/../dist/js/component.js);
```

Debe tener en cuenta que el nombre del script JavaScript debe ser único, de lo contrario puede sobrescribir alguna ruta ya existente.

Los scripts se añadirán al final de la etiqueta HTML `<body>`.
