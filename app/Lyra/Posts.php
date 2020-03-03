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
  public static $search = ["id", "title", "body"];

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
      BelongsTo::make('Category')->setResource(Categories::class)->setDisplay('name'),
      BelongsToMany::make('Tags')->setResource(Tags::class)->setDisplay('name'),
      Text::make('Views')->hideOnCreate()->hideOnEdit()->sortable(),

      Textarea::make('Excerpt')->hideOnIndex(),
      Markdown::make('Body'),
      Image::make('Poster')->prunable()->folder('posts')->hideOnIndex(),
    ];
  }

}
