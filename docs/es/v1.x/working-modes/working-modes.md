# Modos de funcionamiento

Lyra dispone de dos modos de funcionamiento.
[[toc]]

## Básico

El modo básico es el que viene por defecto, permite el acceso completo a los usuarios especificados utilizando el sistema de autenticación existente en Laravel.

Para permitir el acceso a los usuarios deseados, debe modificar el fichero de configuración de Lyra, la opción `authenticator` debe tener el valor `Lyra::MODE_BASIC`, bajo esa opción encontrará el array `authorized_users`, en este array debe añadir el correo electrónico de los usuarios que deben poder acceder.

Tenga en cuenta los usuarios tendrán acceso completo a todas las partes de Lyra.

``` php
"authenticator" => Lyra::MODE_BASIC,
"authorized_users" => [
  "lyra@sertxu.dev"
]
```

## Avanzado

El modo avanzado es el más completo, ofrece un sistema de acceso basado en roles y un sistema de notificaciones.
Al utilizar este modo, el array `authorized_users` se ignorará.

``` php
"authenticator" => Lyra::MODE_ADVANCED,
```

Además, este modo añade un nuevo sistema de autenticación independiente de forma que los usuarios de Laravel y los usuarios de Lyra permanecerán separados.

### Crear un rol

Para crear un nuevo rol debe ejecutar el siguiente comando indicando el nombre del rol.

``` bash
$ php artisan lyra:role {name}
```

Puede asignar diferentes permisos a los roles que haya creado, para ello ejecute el siguiente comando.

``` bash
$ php artisan lyra:permission {name}
```

Podrá decidir a qué recursos tiene acceso y las acciones que puede realizar el rol.


### Crear un usuario

Para crear un nuevo usuario debe ejecutar el siguiente comando.

``` bash
$ php artisan lyra:user
```

Este comando solicitará que introduzca el nombre de usuario, el correo, la contraseña, la confirmación de contraseña y el rol del usuario.
