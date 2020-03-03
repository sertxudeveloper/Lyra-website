<?php

namespace App\Lyra\Dashboards\Cards;

use App\User;
use Illuminate\Support\Carbon;
use SertxuDeveloper\Lyra\Dashboards\Cards\Metrics;

class NewUsers extends Metrics {

  protected $title = "New Users";
  protected $icon = "fas fa-user-plus";
  protected $subtitle = "last 7 days";

  protected function value() {
    return User::where(User::CREATED_AT, '>', Carbon::now()->subDays(7))->count();
  }

  protected function difference() {
    $last_week = $this->getLastWeekUsers();
    $this_week = $this->getThisWeekUsers();

    return ($this_week - $last_week) * 100;
  }

  private function getThisWeekUsers() {
    return User::where(User::CREATED_AT, '>', Carbon::now()->subDays(7))->count();
  }

  private function getLastWeekUsers() {
    return User::where([
        [User::CREATED_AT, '>', Carbon::now()->subDays(14)],
        [User::CREATED_AT, '<', Carbon::now()->subDays(7)]]
    )->count();
  }

}
