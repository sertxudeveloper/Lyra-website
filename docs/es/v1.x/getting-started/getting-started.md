# Primeros pasos
[[toc]]

## Definir recursos

Por defecto, los recursos se almacenan en el directorio `app/Lyra` de su aplicación.

Para crear los recursos debe ejecutar el siguiente comando indicando el nombre del recurso, además con el parámetro `-m` podemos especificar el nombre del modelo Eloquent al que pertenece el recurso.

Si no se especifica un modelo, el recurso se creará suponiendo que en la carpeta `app` existe un modelo con el mismo nombre que el recurso.

``` bash
$ php artisan lyra:resource Post
```

La parte principal de los recursos es la propiedad `model`, esta propiedad indica el modelo Eloquent al que pertenece el recurso.

``` php
use App\Post as Model;

/**
 * The resource Eloquent model
 *
 * @var string
 */
public static $model = Model::class;
```

Los recursos también disponen de un método `fields` el cual devuelve un array con los diferentes campos del recurso.

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

Los recursos recién creados solo cuentan con el campo `Id`, en la sección "**[Campos](/es/v1.x/fields/defining.html)**" encontrará los diferentes tipos de campos que existen y su modo de funcionamiento.

## Registrar recursos

Una vez ha creado un nuevo recurso, debe añadirlo al menú en el fichero de configuración para que se registre en el sistema automáticamente.

Dentro de la configuración encontrará el array `menu`, a continuación, puede observar un ejemplo de cómo debe registrar un nuevo recurso:

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

El orden de apariencia en el array `menu` determinará el orden del menú de todos los usuarios.
Para saber más acerca del menú vaya a la "**[Configuración del menú](/es/v1.x/advanced/menu-configuration.md)**".

