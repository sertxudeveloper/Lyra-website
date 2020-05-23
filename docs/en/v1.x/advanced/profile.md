# Profile

If you wish, you can change the resource used to display the profile in the configuration file.

``` php
"profile_resource" => \SertxuDeveloper\Lyra\Http\Resources\LyraUser::class,
```

The `LyraUser` and `LaravelUser` resources are available by default, generally it will not be necessary to create new resources for the profile.

## Avatar

Users' avatars are obtained by default from Gravatar, but you can use one of the columns in the user table as an avatar if you wish.

To do this, change the `avatar` key in the configuration file by specifying the name of the column.

``` php
"avatar" => "picture",
```

Users in advanced mode have a column called `avatar` designed to store the path of the user's avatar.
