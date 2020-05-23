# Pagination

By default, a link-based pagination system will be displayed on all resources.

You can customize the drop-down values for the number of items that will appear per page.

## Customization
You can customize the amounts you want to display per page on each resource by modifying the `perPageOptions` property within the desired resource:

``` php
/**
 * The pagination per-page options for this resource.
 *
 * @return array
 */
 public static $perPageOptions = [50, 100, 150];
```
