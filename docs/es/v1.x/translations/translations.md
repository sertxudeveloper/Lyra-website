# Sistema de traducciones

Lyra cuenta con un sistema de traducciones que se integra con el paquete `sertxudeveloper/laravel-translatable` para activar las traducciones en Lyra utilizando este paquete, debe modificar el fichero de configuración.

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

La clave `enabled` debe tener valor true, la clave `default_locale` debe indicar el idioma por defecto, y la clave `available_locales` debe ser un array con el resto de idiomas que estarán disponibles.

Los idiomas deben cumplir el formato **ISO 639-1** para el correcto funcionamiento de la aplicación.

Una vez activado el sistema de traducciones, se debe utilizar el método `translatable` en los campos que permitan traducciones.

``` php
Text::make('Title')->translatable()
```

Las traducciones de los diferentes campos se pueden añadir únicamente desde el formulario de edición, ya que debe existir el registro base para poder añadir la traducción.
