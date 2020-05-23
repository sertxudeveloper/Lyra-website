# Perfil

Si lo desea puede cambiar el recurso que se utiliza para mostrar el perfil en el fichero de configuración.

``` php
"profile_resource" => \SertxuDeveloper\Lyra\Http\Resources\LyraUser::class,
```

Están disponibles los recursos `LyraUser` y `LaravelUser` por defecto, generalmente no será necesario crear recursos nuevos para el perfil.

## Avatar

Los avatares de los usuarios se obtienen por defecto de Gravatar, pero si lo desea puede utilizar una de las columnas de la tabla de usuarios como avatar.

Para ello modifique en el fichero de configuración la clave `avatar` especificando el nombre de la columna.

``` php
"avatar" => "picture",
```

Los usuarios del modo avanzado cuentan con una columna llamada `avatar` pensada para almacenar la ruta del avatar del usuario.
