<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    public function posts()
    {
        return $this->hasMany(Post::class);
    }

    public function getPostsCountAttribute()
    {
        return $this->posts->count();
    }
}
