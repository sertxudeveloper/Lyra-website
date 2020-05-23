# Dashboard

By default no configured dashboard is included, to configure one you must first create it using the following command indicating the name of the dashboard.

``` php
$ php artisan lyra:dashboard {name}
```

Once created you can find it in the 'app/Lyra/Dashboards' folder.

You must then register it in the configuration file.

``` php
"dashboard" => \App\Lyra\Dashboards\Dashboard::class,
```

Now we just need to create the different cards to show relevant information.

## Cards

To create a card, the following command must be executed, indicating the name of the card.

``` php
$ php artisan lyra:card {name}
```

You will be asked what type of card you want to create. You can choose between:

- **Simple Card**: Displays a single value next to a title and icon.
- **Metric Card**: Displays a value next to a percentage, a title, and an icon.
- **Sort List Card**: Displays a list of values next to a title.

The cards created can be found in `app/Lyra/Dashboards/Cards`.

To add a card to the dashboard simply import it and add a new instance of it in the array that returns the `dashboard` function.

``` php
protected function dashboard() {
  return [
    [
      // First row
      new ExampleCard(),
    ]
  ];
}
```
