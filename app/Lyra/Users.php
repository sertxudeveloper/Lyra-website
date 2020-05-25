<?php

namespace App\Lyra;

use App\User as Model;
use SertxuDeveloper\Lyra\Fields\DateTime;
use SertxuDeveloper\Lyra\Fields\Id;
use SertxuDeveloper\Lyra\Fields\Password;
use SertxuDeveloper\Lyra\Fields\Text;
use SertxuDeveloper\Lyra\Http\Resources\Resource;

class Users extends Resource
{

  /**
   * The resource Eloquent model
   *
   * @var string
   */
  public static $model = Model::class;
  public static $search = ["id", "name", "email"];

  public static $title = 'name';
  public static $subtitle = 'email';

  /**
   * The fields' resource definition
   *
   * @return array
   */
  public function fields() {

    return [
      Id::make('Id')->sortable(),
      Text::make('Name'),
      Text::make('Email')->rules('required', 'email'),
      DateTime::make('Email verified at')->hideOnIndex(),
      Password::make('Password')->rules('required', 'string', 'min:8'),
    ];
  }

}
