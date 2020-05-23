# Media Manager

The media manager changes the name of the files when uploading them, to disable this functionality you must put value "true" to the key `keep_original_name` in the configuration file.

``` php
...
"media_manager" => [
  "keep_original_name" => false,
],
...
```
