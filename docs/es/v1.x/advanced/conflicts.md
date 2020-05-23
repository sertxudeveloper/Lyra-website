# Prevención de conflictos

Cada vez que un usuario actualiza un modelo, el valor de la columna `updated_at` se comprueba antes de guardar los valores en la base de datos.

Si la columna `updated_at` no tiene el mismo valor que al cargar el formulario de edición el backend nos devolverá un error 409, ya que el registro ha sido modificado por otro usuario, por lo que sus datos pueden no estar actualizados.
