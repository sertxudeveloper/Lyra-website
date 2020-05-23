# Guia de contribuciones
[[toc]]

## Informe de errores

Todos los informes de fallos son bienvenidos y puedes crear una incidencia en [el repositorio de Lyra en GitHub](https://github.com/sertxudeveloper/Lyra/issues)

Si decide crear una nueva incidencia para informar de un fallo, le recomendamos encarecidamente que añada una descripción del mismo, añada tanta información relevante como sea posible, además de un código de ejemplo para poder replicar el fallo y resolver el problema para la siguiente versión.

Todas las correcciones de errores deberían enviarse a la rama de la última versión.

Por ejemplo, si quiere enviar una corrección de un fallo a la última versión "**v1.5.9**", debería enviarla a la rama "**1.x**".

La rama `master` sólo debería recibir correcciones de fallos si el fallo está sólo en esa rama y no en alguna de las versiones publicadas.

## Archivos compilados

Si va a enviar un cambio que afecta a un fichero compilado, como la mayoría de los ficheros en `resources/assets/sass` o `resources/assets/js` no envíe los archivos compilados.
Todos los archivos compilados serán generados y publicados por los desarrolladores de Lyra.

## Vulnerabilidades de seguridad

Si encuentra una vulnerabilidad de seguridad, **NO** abra una incidencia, envíe un correo electrónico a **lyra@sertxu.dev**.
Publicaremos una nueva versión tan pronto como el error sea corregido.
