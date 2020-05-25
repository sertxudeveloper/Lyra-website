<?php

namespace App\Lyra\Dashboards\Cards;

use App\Tag;
use SertxuDeveloper\Lyra\Dashboards\Cards\Card;

class TagsCount extends Card {

  protected $title = "Tags";
  protected $icon = "fas fa-tag";

  protected function value() {
    return Tag::count();
  }

}
