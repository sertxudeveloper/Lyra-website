# Relaciones

## Campo HasMany

Muestra una relación uno a muchos en forma de tabla en la vista show de los registros.

Se debe utilizar el método `setResource` indicado el recurso del elemento relacionado.

```php
HasMany::make('Posts')->setResource(Posts:class)
```

## Campo BelongsTo

Muestra una relación uno a muchos inversa.

Se debe utilizar el método `setResource` indicado el recurso del elemento relacionado.

``` php
HasMany::make('Category')->setResource(Categories:class)
```

## Campo BelongsToMany

Muestra una relación muchos a muchos.

Se debe utilizar el método `setResource` indicado el recurso del elemento relacionado.

``` php
HasMany::make('Tags')->setResource(Tags:class)
```

## Campo BelongToManyTable

Muestra una relación muchos a muchos en forma de tabla en la vista show de los registros.

Se debe utilizar el método `setResource` indicado el recurso del elemento relacionado.

``` php
HasMany::make('Posts')->setResource(Posts:class)
```

## Campo MorphOneToOne

Muestra una relación uno a uno polimórfica, dependiendo de la selección aparecen unos campos u otros.

Se debe utilizar el método `types` para especificar los diferentes tipos de recurso.

``` php
MorphOneToOne::make('Type')->types([Particular::class, Enterprise::class])
```
