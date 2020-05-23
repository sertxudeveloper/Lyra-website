# Definir los campos

Cada recurso tiene un método `fields`, este método devuelve un array de campos, los cuales generalmente extienden de la clase `SertxuDeveloper\Lyra\Fields\Field`.
Lyra incluye campos para texto, boleanos, fechas, subida de ficheros, Markdown, y más.

Para añadir un campo al recurso, simplemente hay que añadirlo al array del método `fields`.
Los campos deben ser creados utilizando el método `make`, este método acepta una serie de argumentos, sin embargo, de normal solo es necesario que indique el nombre "legible" del campo.

Lyra automáticamente pasará a "snake case" el nombre para determinar el nombre de la columna de la base de datos.

``` php

use SertxuDeveloper\Lyra\Fields\Id;
use SertxuDeveloper\Lyra\Fields\Text;
/**
 * The fields' resource definition
 *
 * @param \Illuminate\Http\Request $request
 * @return array
 */
public function fields()
{
  return [
    Id::make('Id')->sortable(),
    Text::make('Name'),
  ];
}
```

Si es necesario, puede pasar el nombre de la columna como segundo argumento al método `make` del campo.

``` php
Text::make('Name', 'name_column');
```
