<?php

namespace App\Lyra\Dashboards\Cards;

use App\User;
use SertxuDeveloper\Lyra\Dashboards\Cards\Card;

class UsersCount extends Card {

  protected $title = "Users";
  protected $icon = "fas fa-users";

  protected function value() {
    return User::count();
  }

}
