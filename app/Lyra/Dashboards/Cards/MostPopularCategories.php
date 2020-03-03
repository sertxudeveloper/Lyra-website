<?php

namespace App\Lyra\Dashboards\Cards;

use App\Category;
use SertxuDeveloper\Lyra\Dashboards\Cards\OrderedList;

class MostPopularCategories extends OrderedList {

  protected $title = "Most popular categories";
  protected $suffix = "posts";

  protected function value() {

    $categories = Category::all()->sortByDesc('posts_count')->take(7);

    $ranking = [];

    foreach ($categories as $category) {
      $ranking[] = [
        "name" => $category->name,
        "link" => "categories/$category->id",
        "value" => $category->posts->count(),
      ];
    }

    return $ranking;
  }

}
