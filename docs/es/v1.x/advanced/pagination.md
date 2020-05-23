# Paginación

Por defecto, se mostrará un sistema de paginación basado en enlaces en todos los recursos.

Puede personalizar los valores del desplegable la cantidad de elementos que aparecerán por página.

## Personalización
Puede personalizar las cantidades que desea mostrar por página en cada recurso, modificando la propiedad `perPageOptions` dentro del recurso deseado:

``` php
/**
 * The pagination per-page options for this resource.
 *
 * @return array
 */
 public static $perPageOptions = [50, 100, 150];
```
