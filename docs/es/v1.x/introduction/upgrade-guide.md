# Guía de actualización

Lyra utiliza el versionado semántico para proporcionar un número de versión. El número de versión `MAJOR.MINOR.PATCH` se incrementará:

- `MAJOR`: Cuando se realicen cambios en el núcleo y sea incompatible con las versiones anteriores.
- `MINOR`: Cuando se hayan añadido funciones o cambios retrocompatibles con versiones anteriores.
- `PATCH`: Cuando se hayan solucionado bugs o errores retrocompatibles.

Las versiones `MINOR` y `PATCH` no deben contener nunca "breaking changes".

Cuando una nueva versión requiera alguna interacción por su parte como modificaciones en su código o en el fichero de configuración, se añadirá una guía de instrucciones de actualización en las notas de la versión.

Para actualizar su versión actual, debe incrementar el número de versión del fichero `composer.json` y ejecutar:

``` bash
$ composer update
```

Además, si utiliza el modo avanzado deberá utilizar el siguiente comando para ejecutar las nuevas migraciones. 

``` bash
$ php artisan lyra:update
```
