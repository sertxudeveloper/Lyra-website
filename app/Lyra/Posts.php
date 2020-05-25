<?php

namespace App\Lyra;

use App\Post as Model;
use SertxuDeveloper\Lyra\Fields\BelongsTo;
use SertxuDeveloper\Lyra\Fields\BelongsToMany;
use SertxuDeveloper\Lyra\Fields\Id;
use SertxuDeveloper\Lyra\Fields\Image;
use SertxuDeveloper\Lyra\Fields\Markdown;
use SertxuDeveloper\Lyra\Fields\Slug;
use SertxuDeveloper\Lyra\Fields\Text;
use SertxuDeveloper\Lyra\Fields\Textarea;
use SertxuDeveloper\Lyra\Http\Resources\Resource;

class Posts extends Resource
{

  /**
   * The resource Eloquent model
   *
   * @var string
   */
  public static $model = Model::class;
  public static $search = ["id", "title", "excerpt"];

  public static $title = 'title';

  /**
   * The fields' resource definition
   *
   * @return array
   */
  public function fields() {

    return [
      Id::make('Id')->sortable(),
      Text::make('Title'),
      Slug::make('Slug')->slugify('title')->hideOnIndex(),
      Textarea::make('Excerpt'),
      Image::make('Poster'),
      BelongsTo::make('Category')->setResource(Categories::class),
      BelongsToMany::make('Tags')->setResource(Tags::class),
      Text::make('Views'),
      Markdown::make('Body')
    ];
  }

}
