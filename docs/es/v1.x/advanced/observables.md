# Observables

Tiene a su disposición un sistema para añadir observables cuando los eventos provengan de acciones realizadas por Lyra, para ello, en su `AppServiceProvider` debe añadir los observables dentro de la función callback de `Lyra::serving` como puede observar a continuación.

``` php
Lyra::serving(function () {
  // Your observables
});
```
