# Relations

## HasMany Field

It shows a one-to-many relationship in table form in the show view of the records.

The `setResource` method must be used to indicate the resource of the related element.

```php
HasMany::make('Posts')->setResource(Posts:class)
```

## BelongsTo Field

It shows a one-to-many relationship inverse.

The `setResource` method must be used to indicate the resource of the related element.

``` php
HasMany::make('Category')->setResource(Categories:class)
```

## BelongsToMany Field

It shows a many to many relationship.

The `setResource` method must be used to indicate the resource of the related element.

``` php
HasMany::make('Tags')->setResource(Tags:class)
```

## BelongToManyTable Field

It shows a many to many relationship in table form in the show view of the records.

The `setResource` method must be used to indicate the resource of the related element.

``` php
HasMany::make('Posts')->setResource(Posts:class)
```

## MorphOneToOne Field

It shows a polymorphic one-to-one relationship, depending on the selection some fields appear or others.

You must use the `types` method to specify the different resource types.

``` php
MorphOneToOne::make('Type')->types([Particular::class, Enterprise::class])
```
