<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLyraNotificationsTable extends Migration {

  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('lyra_notifications', function (Blueprint $table) {
      $table->uuid('id')->primary();
      $table->string('type');
      $table->morphs('notifiable');
      $table->text('data');
      $table->timestamp('read_at')->nullable();
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::dropIfExists('lyra_notifications');
  }
}
