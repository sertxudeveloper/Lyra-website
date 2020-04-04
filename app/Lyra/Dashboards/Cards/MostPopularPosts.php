<?php

namespace App\Lyra\Dashboards\Cards;

use App\Post;
use SertxuDeveloper\Lyra\Dashboards\Cards\OrderedList;

class MostPopularPosts extends OrderedList {

  protected $title = "Most popular posts";
  protected $suffix = "views";

  protected function value() {

    $posts = Post::orderBy('views', 'desc')->limit(7)->get();

    $ranking = [];

    foreach ($posts as $post) {
      $ranking[] = [
        "name" => $post->title,
        "link" => "resources/posts/$post->id",
        "value" => $post->views,
      ];
    }

    return $ranking;
  }

}
