# Translation system

Lyra has a translation system that integrates with the `sertxudeveloper/laravel-translatable` package.
To enable translations in Lyra using this package, you must modify the configuration file.

``` php
"translator" => [
  "enabled" => true,
  "default_locale" => "es",
  "available_locales" => ["en"],
  
  // No modification needed if you're using sertxudeveloper/laravel-translatable
  "table_suffix" => "_translations",
  "locale_column" => "locale",
],
```

The `enabled` key must be true, the `default_locale` key must indicate the default language, and the `available_locales` key must be an array with the other languages that will be available.

The languages must comply with the **ISO 639-1** format for the correct operation of the application.

Once the translation system is activated, the `translatable` method must be used in the fields that allow translations.

``` php
Text::make('Title')->translatable()
```

The translations of the different fields can only be added from the edit form, as the base record must exist in order to add the translation.
