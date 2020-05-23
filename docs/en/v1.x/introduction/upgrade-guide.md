# Upgrade Guide

Lyra uses [SemVer](https://semver.org/) to provide a version number.
The version number `MAJOR.MINOR.PATCH` will be increased:

- `MAJOR`: When changes are made to the kernel and it is incompatible with previous versions.
- `MINOR`: When features or changes have been added that are backward compatible with previous versions.
- `PATCH`: When bugs or backwards compatible errors have been fixed.

The `MINOR` and `PATCH` versions should never contain breaking changes.

When a new version requires some interaction from you such as modifications to your code or configuration file, an upgrade instruction guide will be added in the release notes.

To update your current version, you must increase the version number of the `composer.json` file and run it:

``` bash
$ composer update
```

In addition, if you use advanced mode, you must use the following command to run the new migrations. 

``` bash
$ php artisan lyra:update
```
