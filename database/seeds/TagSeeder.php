<?php

use App\Tag;
use Illuminate\Database\Seeder;

class TagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Tag::create(['name' => 'Music', 'slug' => 'music']);
        Tag::create(['name' => 'Marketing', 'slug' => 'marketing']);
        Tag::create(['name' => 'News', 'slug' => 'news']);
        Tag::create(['name' => 'Food', 'slug' => 'food']);
        Tag::create(['name' => 'Art', 'slug' => 'business']);
        Tag::create(['name' => 'Fitness', 'slug' => 'fitness']);
        Tag::create(['name' => 'Movies', 'slug' => 'movies']);
        Tag::create(['name' => 'Nature', 'slug' => 'nature']);
        Tag::create(['name' => 'Cooking', 'slug' => 'cooking']);
        Tag::create(['name' => 'Education', 'slug' => 'education']);
        Tag::create(['name' => 'Travel', 'slug' => 'travel']);
        Tag::create(['name' => 'Social media', 'slug' => 'social-media']);
        Tag::create(['name' => 'Web design', 'slug' => 'web-design']);
        Tag::create(['name' => 'Painting', 'slug' => 'painting']);
        Tag::create(['name' => 'Science', 'slug' => 'science']);
        Tag::create(['name' => 'Pictures', 'slug' => 'pictures']);
        Tag::create(['name' => 'Lifestyle', 'slug' => 'lifestyle']);
        Tag::create(['name' => 'Vacation', 'slug' => 'vacation']);
        Tag::create(['name' => 'Recipes', 'slug' => 'recipes']);
        Tag::create(['name' => 'Blogging', 'slug' => 'blogging']);
    }
}
