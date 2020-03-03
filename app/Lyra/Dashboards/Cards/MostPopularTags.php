<?php

namespace App\Lyra\Dashboards\Cards;

use App\Tag;
use SertxuDeveloper\Lyra\Dashboards\Cards\OrderedList;

class MostPopularTags extends OrderedList {

  protected $title = "Most popular tags";
  protected $suffix = "posts";

  protected function value() {

    $tags = Tag::all()->sortByDesc('posts_count')->take(7);

    $ranking = [];

    foreach ($tags as $tag) {
      $ranking[] = [
        "name" => $tag->name,
        "link" => "tags/$tag->id",
        "value" => $tag->posts->count(),
      ];
    }

    return $ranking;
  }

}
