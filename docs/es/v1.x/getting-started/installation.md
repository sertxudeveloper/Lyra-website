# Instalación
[[toc]]

## Requisitos

Lyra tiene unos requisitos previos que debe tener en cuenta antes de realizar la instalación.

- Composer
- Laravel Framework 6.0+

## Instalación

Para instalar Lyra, primero debe importar a su proyecto la última versión utilizando Composer.

``` bash
$ composer require sertxudeveloper/lyra
```

Una vez importado, debe ejecutar el gestor de instalación, el cual realizará las configuraciones iniciales necesarias.

``` bash
$ php artisan lyra:install
```

Para acceder al panel de control debe dirigirse a **`/lyra`** en su aplicación.
Esta ruta puede modificarse desde el fichero de configuración.
