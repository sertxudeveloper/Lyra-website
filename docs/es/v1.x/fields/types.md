# Tipos de campos

Lyra incluye los tipos de datos más utilizados.

[[toc]]

## Campo Texto

El campo de texto es el más sencillo de los campos editables, en él se mostrará una entrada de texto.

``` php
Text::make('Name')
```

## Campo URL

Muestra un enlace clickable en las vistas index y show.

``` php
Url::make('Link')
```

## Campo Slug

Muestra un campo de texto con un filtro de patrón tipo slug.

``` php
Slug::make('Slug')
```

Además de la funcionalidad del campo Texto, cuenta con el método `sluglify` para autogenerar el slug desde otro campo existente.

Este método requiere el nombre de la columna del campo origen.

``` php
Text::make('Title'),
Slug::make('Slug')->sluglify('title'),
```

El slug se creará automáticamente mientras escribe en el campo de origen, siempre y cuando no haya ningún valor previo en el campo `Slug` al momento de acceder al formulario.

## Campo Textarea

Muestra un elemento textarea con posibilidad de expandirlo verticalmente.

``` php
Textarea::make('Description')
```

## Campo Contraseña

Muestra un campo de entrada tipo contraseña, siempre muestra un placeholder aunque tenga valor y guarda un Hash de la contraseña.

``` php
Password::make('Password')
```

## Campo Fecha

Muestra un campo de entrada tipo fecha

``` php
Date::make('Birth')
```

## Campo DateTime

Muestra un campo tipo datetime el cual cuenta con fecha y hora.

``` php
DateTime::make('Published At')
```

## Campo Fichero

Este campo permite la subida de cualquier tipo de fichero.

``` php
File::make('Attachment')
```

## Campo Imagen

Permite la subida de imágenes ofreciendo una previsualización de la misma.

``` php
Image::make('Thumbnail')
```

## Campo Markdown

Muestra el editor EasyMDE de Markdown.

``` php
Markdown::make('Body')
```

## Campo Boleano

Este campo se utiliza para representar un valor booleano, muestra un :heavy_check_mark: cuando el valor es  verdadero, y un :x: si el valor es falso.

``` php
Boolean:make('Active')
```

Puede establecer los valores true y false si, por ejemplo, tiene un campo enum en su base de datos, para ello debe utilizar el método `values`.

Este método requiere dos parámetros, el primero será el valor true y el segundo será el valor false.

``` php
Boolean:make('Status')->values('ACTIVE', 'FALSE')
```

Además, puede establecer si desea que se marque por defecto o no.
Si quiere que se marque debe usar el método `checked`.

``` php
Boolean:make('Active')->checked()
```

## Campo Select

Este campo muestra un desplegable seleccionable con múltiples opciones, que las opciones deben ser añadidas al campo utilizando el método `options`.

``` php
Select::make('Status')->options([
  'Draft', 'Pending', 'Published'
])
```

También puede utilizar un array asociativo, la clave se guardará en la base de datos y el valor se mostrará en el desplegable.

``` php
Select::make('Status')->options([
  'draft' => 'Draft',
  'pending' => 'Publish pending', 'published' => 'Published'
])
```

Para definir un valor por defecto debe utilizar el método `default`.

``` php
Select::make('Status')->options([
  'Draft', 'Pending', 'Published'
])->default('Draft')
```

``` php
Select::make('Status')->options([ 'draft' => 'Draft',
  'pending' => 'Publish pending', 'published' => 'Published'
])->default('draft')
```

## Campo Radio

Este campo muestra un grupo de botones radio, debe especificar las opciones disponibles utilizado el método `options`.

``` php 
Radio::make('Status')->options(['Draft', 'Pending', 'Published'])
```

También puede utilizar un array asociativo, la clave se guardará en la base de datos y el valor se mostrará al lado de cada botón radio.

``` php
Radio::make('Status')->options([
  'draft' => 'Draft',
  'pending' => 'Publish pending',
  'published' => 'Published'
])
```

Para definir un valor por defecto debe utilizar el método `default`.

``` php 
Radio::make('Status')->options([
  'Draft', 'Pending', 'Published'
])->default('Draft')
```

``` php 
Radio::make('Status')->options([
  'draft' => 'Draft',
  'pending' => 'Publish pending',
  'published' => 'Published'
])->default('draft')
```

## Campo de cabecera

Este campo no corresponde a ninguna columna de la base de datos.
Muestra un separador para agrupar diferentes campos en las vistas show y edit.

``` php 
Heading::make('Meta')
```

También puede mostrar código HTML el cual será renderizado por el navegador del usuario.

``` php 
Heading::make('Extra data - <span style="color:red">Important</span>')
```

## Campo Código

El campo mostrará el editor [CodeMirror](https://codemirror.net/).

Este campo soporta múltiples modos, para especificar un modo debe utilizar el método `mode`.

Los modos disponibles son:
  - [clike](https://codemirror.net/mode/clike/)
  - [htmlmixed](https://codemirror.net/mode/htmlmixed/)
  - [javascript](https://codemirror.net/mode/javascript/)
  - [sql](https://codemirror.net/mode/sql/)
  - [shell](https://codemirror.net/mode/shell/)
  - [powershell](https://codemirror.net/mode/powershell/)
  - [css](https://codemirror.net/mode/css/)
  - [dockerfile](https://codemirror.net/mode/dockerfile/)
  - [go](https://codemirror.net/mode/go/)
  - [http](https://codemirror.net/mode/http/)
  - [markdown](https://codemirror.net/mode/markdown/)
  - [php](https://codemirror.net/mode/php/)
  - [python](https://codemirror.net/mode/python/)
  - [sass](https://codemirror.net/mode/sass/)
  - [scheme](https://codemirror.net/mode/scheme/)
  - [diff](https://codemirror.net/mode/diff/)
  - [vue](https://codemirror.net/mode/vue/)
  - [xml](https://codemirror.net/mode/xml/)
  - [yaml](https://codemirror.net/mode/yaml/)

``` php
Code::make('Body')->mode('htmlmixed')
```

Si desea utilizar JSON en este campo, debe utilizar el método `json`.

``` php
Code::make('Options')->json()
```
