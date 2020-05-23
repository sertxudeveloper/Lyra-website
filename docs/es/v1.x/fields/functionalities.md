# Funcionalidades
[[toc]]

## Mostrar/Ocultar campos

Algunos campos se ocultan automáticamente de algunas vistas, por ejemplo, el campo `Id` se oculta de la vista de creación y edición.
Puede ocultar los campos utilizando los siguientes métodos:
- hideOnIndex
- hideOnShow
- hideOnCreate
- hideOnEdit

Puede concatenar cualquiera de estos métodos al definir un campo para indicar dónde debe mostrarse o no el mismo:

``` php
Text::make('Name')->hideOnIndex()
```

Además, si quiere invertir la funcionalidad del método y mostrar un campo que por defecto está oculto debe pasarle un booleano falso al método.

``` php
Id::make('Id')->hideOnCreate(false)
```

## Ordenar registros

Si desea ordenar los registros de la vista index, debe utilizar el método `sortable` en el campo que desea añadir el sistema de ordenación.

``` php
Id::make('Id')->sortable()
```

### Límite de longitud

Con el método `size` podemos añadir un límite de longitud, el primer parámetro es necesario y debe ser un int para especificar la longitud máxima, el segundo parámetro es opcional y determinará el tipo de límite.

Existen dos modos de límite, el modo fuerte y el modo débil.

#### Modo débil

Este modo muestra el número de caracteres seguido de la longitud máxima establecida.

Una vez alcanzado el límite, el usuario podrá seguir escribiendo, se utiliza únicamente como un límite de caracteres orientativo.

``` php
Text::make('Name')->size(25)
```

#### Modo fuerte

Este modo, al igual que el modo débil, muestra el número de caracteres seguido de la longitud máxima establecida.

Una vez se ha alcanzado el límite, el usuario no podrá seguir escribiendo. Tenga en cuenta que este límite es sólo del lado del cliente.

``` php
Text::make('Name')->size(25, true)
```

## Validaciones

Los campos permiten añadir validaciones utilizando el sistema de validaciones de Laravel.

Para añadir una validación debe utilizar el método "rules" añadiendo las distintas validaciones.

``` php
Password::make('Password')->rules('nullable', 'string', 'min:8')
```

## Campos calculados

Si desea añadir campos cuyo valor no se almacena en la base de datos, sino que se calcula a partir de otro dato debe añadir un callback en vez del nombre de la columna.

``` php
Text::make('Age', function () {
  return \Carbon::parse($this->birth_date)->age;
}),
```

Debido a la naturaleza  de estos campos, únicamente se pueden mostrar en las vistas index y show.

## Ordenación de campos

Si desea habilitar el sistema de ordenación por un campo debe añadir el método `sortable` a la declaración del campo.

``` php
Text::make('Title')->sortable()
```
