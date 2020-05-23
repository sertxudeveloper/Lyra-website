# Búsquedas

## Búsqueda en recursos

Existen dos tipos de búsqueda, la búsqueda global ubicada en la barra superior, y la búsqueda por recursos permite buscar dentro de un recurso desde la vista index.

Para definir en qué campos del recurso se puede buscar, debe asignar los nombres de las columnas en la propiedad `search` en el recurso.
Por defecto se incluye la columna `id` pero puede modificarla en base a sus necesidades.

``` php
public static $search = ["id", "name"];
```

## Búsqueda global

Para habilitar la búsqueda global, debe configurar la propiedad `search` como se indica anteriormente, además, debe configurar otra propiedad llamada `title`.

También existe una tercera propiedad llamada `subtitle` la cual permite mostrar una línea de texto adicional en los resultados.

### Limitar cantidad de resultados

Si desea limitar el número de resultados que aparecen de un recurso en concreto, debe utilizar la propiedad `limitResults` indicando el número de resultados máximos a mostrar.

Si desea únicamente buscar en un recurso debe utilizar la palabra clave `resource:` seguida de la clave del recurso donde buscar y el texto a buscar.
Por ejemplo, `resource:users gmail.com`.
