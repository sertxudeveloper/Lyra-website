# Notifications

Lyra, in advanced mode, has its own notification system, by default it is disabled, but can easily be activated from the configuration file.

``` php
"notificator" => true,
```

## Creating a notification

To send a notification it is strongly recommended to use the class that includes Lyra, this class requires two parameters, the first has to be the title and the second the text with the message.

Below is an example of how to send a notification to the current Lyra user.

``` php
Lyra::auth()->user()->notify(
 new LyraNotification('Hello World!', 'This is a test notification')
);
```
