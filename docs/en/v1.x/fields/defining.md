# Define the fields

Each resource has a `fields` method, this method returns an array of fields, which generally extend from the `SertxuDeveloper\Lyra\Fields` class.
Lyra includes fields for text, boolean, dates, file upload, markdown, and more.

To add a field to the resource, simply add it to the array of the `fields` method.
The fields must be created using the `make` method, this method accepts a series of arguments, however, normally you only need to indicate the "readable" name of the field.

Lyra will automatically change the name to "snake case" to determine the name of the database column.

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

If necessary, you can pass the name of the column as a second argument to the `make` method of the field.

``` php
Text::make('Name', 'name_column');
```
