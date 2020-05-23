# Notificaciones

Lyra, en el modo avanzado, dispone de un sistema de notificaciones propio, por defecto viene deshabilitado, pero se puede activar fácilmente desde el fichero de configuración.

``` php
"notificator" => true,
```

## Creación de una notificación

Para enviar una notificación se recomienda encarecidamente utilizar la clase que incluye Lyra, esta clase requiere dos parámetros, el primero ha de ser el título y el segundo el texto con el mensaje.

A continuación, puede observar un ejemplo de cómo enviar una notificación al usuario actual de Lyra.

``` php
Lyra::auth()->user()->notify(
 new LyraNotification('Hello World!', 'This is a test notification')
);
```
