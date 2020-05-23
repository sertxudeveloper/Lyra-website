# Types of fields

Lyra includes the most commonly used data types.

[[toc]]

## Text field

The text field is the simplest of the editable fields, it will display a text entry.

``` php
Text::make('Name')
```

## URL field

It shows a clickable link in the index and show views.

``` php
Url::make('Link')
```

## Slug field

Displays a text field with a slug pattern filter

``` php
Slug::make('Slug')
```

In addition to the functionality of the Text field, it has the `sluglify` method to auto-generate the slug from another existing field.

This method requires the name of the column in the source field.

``` php
Text::make('Title'),
Slug::make('Slug')->sluglify('title'),
```

The slug will be created automatically as you type in the source field, as long as there is no previous value in the 'Slug' field when you access the form.

## Textarea field

Muestra un elemento textarea con posibilidad de expandirlo verticalmente.

``` php
Textarea::make('Description')
```

## Password field

Displays a password type input field, always displays a placeholder even if it has a value and saves a hash of the password.

``` php
Password::make('Password')
```

## Date field

Displays a date type entry field

``` php
Date::make('Birth')
```

## DateTime field

Displays a datetime field with date and time.

``` php
DateTime::make('Published At')
```

## File field

This field allows the upload of any type of file.

``` php
File::make('Attachment')
```

## Field Image

It allows the upload of images offering a preview of the same.

``` php
Image::make('Thumbnail')
```

## Field Markdown

Shows the EasyMDE editor for Markdown.

``` php
Markdown::make('Body')
```

## Boolean field

This field is used to represent a boolean value, it shows a :heavy_check_mark: when the value is true, and an :x: if the value is false.

``` php
Boolean:make('Active')
```

You can set the true and false values if, for example, you have an enum field in your database, to do this you must use the `values` method.

This method requires two parameters, the first will be the true value and the second will be the false value.

``` php
Boolean:make('Status')->values('ACTIVE', 'FALSE')
```

In addition, you can set whether you want it to be marked as default or not.
If you want it to be checked you must use the `checked` method.

``` php
Boolean:make('Active')->checked()
```

## Select field

This field shows a selectable drop-down list with multiple options, which options must be added to the field using the `options` method.

``` php
Select::make('Status')->options([
  'Draft', 'Pending', 'Published'
])
```

You can also use an associative array, the key will be saved in the database and the value will be displayed in the drop-down list.

``` php
Select::make('Status')->options([
  'draft' => 'Draft',
  'pending' => 'Publish pending', 'published' => 'Published'
])
```

To define a default value you must use the `default` method.

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

## Radio field

This field shows a group of radio buttons, you must specify the available options using the `options` method.

``` php 
Radio::make('Status')->options(['Draft', 'Pending', 'Published'])
```

You can also use an associative array, the key will be saved in the database and the value will be displayed next to each radio button.

``` php
Radio::make('Status')->options([
  'draft' => 'Draft',
  'pending' => 'Publish pending',
  'published' => 'Published'
])
```

To define a default value you must use the `default` method.

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

## Heading field

This field does not correspond to any column in the database.
It shows a separator to group different fields in the show and edit views.

``` php 
Heading::make('Meta')
```

You can also display HTML code which will be rendered by the user's browser.

``` php 
Heading::make('Extra data - <span style="color:red">Important</span>')
```

## Code field

The field will display the [CodeMirror](https://codemirror.net/) editor.

This field supports multiple modes, to specify a mode you must use the `mode` method.

The available modes are:
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

If you want to use JSON in this field, you must use the `json` method.

``` php
Code::make('Options')->json()
```
