<?php

use App\Post;
use App\Tag;
use Illuminate\Database\Seeder;

class PostTagsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Post::all()->map(function (Post $post) {
            $tags = Tag::all()->pluck('id')->random(3);
            $post->tags()->attach($tags);
        });
    }
}
