<?php

use App\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Category::create(['name' => 'Internet', 'slug' => 'internet']);
        Category::create(['name' => 'Games', 'slug' => 'games']);
        Category::create(['name' => 'Technology', 'slug' => 'technology']);
        Category::create(['name' => 'Software', 'slug' => 'software']);
        Category::create(['name' => 'Reviews', 'slug' => 'reviews']);
    }
}
