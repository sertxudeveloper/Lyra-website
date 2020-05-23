# Installation
[[toc]]

## Requirements

Lyra has a few requirements that you should take into consideration before installation.

- Composer
- Laravel Framework 6.0+

## Installation

To install Lyra, you must first import the latest version into your project using Composer.

``` bash
$ composer require sertxudeveloper/lyra
```

Once imported, you must run the installation manager, which will make the necessary initial settings.

``` bash
$ php artisan lyra:install
```

To access the control panel you must go to **`/lyra`** in your application.
This path can be modified from the configuration file.
