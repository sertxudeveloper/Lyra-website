<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    public function posts()
    {
        return $this->belongsToMany(Post::class, 'post_tags');
    }

    public function getPostsCountAttribute()
    {
        return $this->posts->count();
    }
}
