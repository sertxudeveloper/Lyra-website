<?php

namespace App\Lyra\Dashboards\Cards;

use App\Category;
use SertxuDeveloper\Lyra\Dashboards\Cards\OrderedList;

class MostPopularCategories extends OrderedList {

  protected $title = "Most popular categories";
  protected $suffix = "posts";

  protected function value() {

    $categories = Category::all()->sortByDesc('posts')->take(7);

    $ranking = [];

    foreach ($categories as $category) {
      $ranking[] = [
        "name" => $category->name,
        "link" => "resources/categories/$category->id",
        "value" => $category->posts->count(),
      ];
    }

    return $ranking;
  }

}
