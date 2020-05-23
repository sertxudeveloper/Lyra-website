# Functionalities
[[toc]]

## Show/Hide fields

Some fields are automatically hidden from some views, for example, the `Id` field is hidden from the creation and edit view.
You can hide fields using the following methods:
- hideOnIndex
- hideOnShow
- hideOnCreate
- hideOnEdit

You can concatenate any of these methods when defining a field to indicate where it should or should not be displayed:

``` php
Text::make('Name')->hideOnIndex()
```

Also, if you want to reverse the functionality of the method and show a field that is hidden by default you must pass a false boolean to the method.

``` php
Id::make('Id')->hideOnCreate(false)
```

## Length limit

With the `size` method we can add a length limit, the first parameter is necessary and must be an int to specify the maximum length, the second parameter is optional and will determine the type of limit.

There are two limit modes, the strong mode and the weak mode.

### Weak mode

This mode displays the number of characters followed by the maximum length set.

Once the limit has been reached, the user can continue to write, it is used only as an indicative character limit.

``` php
Text::make('Name')->size(25)
```

### Strong mode

This mode, like the weak mode, displays the number of characters followed by the maximum length set.

Once the limit has been reached, the user will no longer be able to write.
Note that this limit is only on the client side.

``` php
Text::make('Name')->size(25, true)
```

## Validations

The fields allow you to add validations using the Laravel validation system.

To add a validation you must use the `rules` method by adding the different validations.

``` php
Password::make('Password')->rules('nullable', 'string', 'min:8')
```

## Computed fields

If you want to add fields whose value is not stored in the database, but is calculated from another data you must add a callback instead of the column name.

``` php
Text::make('Age', function () {
  return \Carbon::parse($this->birth_date)->age;
}),
```

Due to the nature of these fields, they can only be displayed in the index and show views.

## Sorting fields

If you want to enable the sorting system by a field you must add the `sortable` method to the field declaration.

``` php
Text::make('Title')->sortable()
```
