# Working Modes

Lyra has two modes of operation.
[[toc]]

## Basic

The basic mode is the default, allowing full access to specified users using the existing Laravel authentication system.

To allow access to the desired users, you must modify the Lyra configuration file, the `authenticator` option must have the value `Lyra::MODE_BASIC`, under that option you will find the `authorized_users` array, in this array you must add the email of the users that must be able to access.

Please note that users will have full access to all parts of Lyra.

``` php
"authenticator" => Lyra::MODE_BASIC,
"authorized_users" => [
  "lyra@sertxu.dev"
]
```

## Advanced

The advanced mode is the most complete, offering a role-based access system and a notification system.
When using this mode, the `authorized_users` array will be ignored.

``` php
"authenticator" => Lyra::MODE_ADVANCED,
```

In addition, this mode adds a new separate authentication system so that Laravel users and Lyra users will remain separate.

### Create a role

To create a new role you must execute the following command indicating the name of the role.

``` bash
$ php artisan lyra:role {name}
```

You can assign different permissions to the roles you have created by running the following command.

``` bash
$ php artisan lyra:permission {name}
```

You can decide which resources you have access to and which actions the role can perform.


### Create a user

To create a new user you must execute the following command.

``` bash
$ php artisan lyra:user
```

This command will prompt you to enter the user name, email, password, password confirmation, and the user's role.
