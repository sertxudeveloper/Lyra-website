<?php

namespace App\Lyra;

use App\Category as Model;
use SertxuDeveloper\Lyra\Fields\HasMany;
use SertxuDeveloper\Lyra\Fields\Id;
use SertxuDeveloper\Lyra\Fields\Slug;
use SertxuDeveloper\Lyra\Fields\Text;
use SertxuDeveloper\Lyra\Http\Resources\Resource;

class Categories extends Resource
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

      HasMany::make('Posts')->setResource(Posts::class)
    ];
  }

}
