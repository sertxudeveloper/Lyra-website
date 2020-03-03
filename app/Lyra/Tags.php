<?php

namespace App\Lyra;

use App\Tag as Model;
use SertxuDeveloper\Lyra\Fields\HasMany;
use SertxuDeveloper\Lyra\Fields\Id;
use SertxuDeveloper\Lyra\Fields\Slug;
use SertxuDeveloper\Lyra\Fields\Text;
use SertxuDeveloper\Lyra\Http\Resources\Resource;

class Tags extends Resource
{

  /**
   * The resource Eloquent model
   *
   * @var string
   */
  public static $model = Model::class;
  public static $search = ["id", "name"];

  public static $title = 'name';

  /**
   * The fields' resource definition
   *
   * @return array
   */
  public function fields() {

    return [
      Id::make('Id')->sortable(),
      Text::make('Name'),
      Slug::make('Slug')->slugify('name'),
      Text::make('Post Count', 'posts_count')->hideOnShow(),

      HasMany::make('Posts')->setResource(Posts::class)->setDisplay('title')
    ];
  }

}
