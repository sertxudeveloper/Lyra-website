<?php

namespace App\Lyra\Dashboards;

use App\Lyra\Dashboards\Cards\MostPopularCategories;
use App\Lyra\Dashboards\Cards\MostPopularPosts;
use App\Lyra\Dashboards\Cards\MostPopularTags;
use App\Lyra\Dashboards\Cards\NewUsers;
use App\Lyra\Dashboards\Cards\PostsCount;
use App\Lyra\Dashboards\Cards\TagsCount;
use App\Lyra\Dashboards\Cards\UsersCount;
use SertxuDeveloper\Lyra\Dashboards\Dashboard as BaseDashboard;

class Dashboard extends BaseDashboard {

  protected function dashboard() {
    return [
      [
        // First row
        new UsersCount(),
        new PostsCount(),
        new TagsCount(),
        new NewUsers(),
      ],
      [
        // Second row
        new MostPopularPosts(),
        new MostPopularTags(),
        new MostPopularCategories(),
      ],
    ];
  }

}
