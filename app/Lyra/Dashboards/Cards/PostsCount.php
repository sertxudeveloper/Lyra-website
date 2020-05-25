<?php

namespace App\Lyra\Dashboards\Cards;

use App\Post;
use SertxuDeveloper\Lyra\Dashboards\Cards\Card;

class PostsCount extends Card {

  protected $title = "Posts";
  protected $icon = "fas fa-file-alt";

  protected function value() {
    return Post::count();
  }

}
