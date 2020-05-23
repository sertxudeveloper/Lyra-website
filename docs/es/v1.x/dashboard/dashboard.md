# Dashboard

Por defecto no se incluye ningún dashboard configurado, para configurar uno primero debe crearlo utilizando el siguiente comando indicando el nombre del dashboard.

``` php
$ php artisan lyra:dashboard {name}
```

Una vez creado lo puede encontrar en la carpeta `app/Lyra/Dashboards`.

Posteriormente debe registrarlo en el fichero de configuración.

``` php
"dashboard" => \App\Lyra\Dashboards\Dashboard::class,
```

Ahora solo falta crear las diferentes tarjetas para mostrar información relevante.

## Tarjetas

Para crear una tarjeta hay que ejecutar el siguiente comando indicando el nombre de la tarjeta

``` php
$ php artisan lyra:card {name}
```

Preguntará que tipo de tarjeta desea crear. Puede elegir entre:

- **Tarjeta simple**: Muestra un único valor junto a un título y un icono.
- **Tarjeta con métrica**: Muestra un valor junto a un porcentaje, un título y un icono.
- **Tarjeta de lista ordenada**: Muestra un listado de valores junto a un título.

Las tarjetas creadas se encuentran en `app/Lyra/Dashboards/Cards`.

Para añadir una tarjeta al dashboard simplemente hay que importarla y añadir una nueva instancia de la misma en el array que devuelve la función `dashboard`.

``` php
protected function dashboard() {
  return [
    [
      // First row
      new ExampleCard(),
    ]
  ];
}
```
