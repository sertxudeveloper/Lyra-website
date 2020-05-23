# Observables

You have at your disposal a system to add observables when events come from actions performed by Lyra. To do this, in your `AppServiceProvider` you must add the observables within the callback function of `Lyra::serving` as you can see below.

``` php
Lyra::serving(function () {
  // Your observables
});
```
