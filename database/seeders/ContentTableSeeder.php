<?php

namespace Database\Seeders;

use App\Models\Content;
use Illuminate\Database\Seeder;

class ContentTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Content::create(['title' => 'Header', 'slug' => 'header', 'description' => '', 'content' => '[]', 'online' => '1', 'type' => 'header', 'user_id' => '1']);
        Content::create(['title' => 'Footer', 'slug' => 'footer', 'description' => '', 'content' => '[]', 'online' => '1', 'type' => 'footer', 'user_id' => '1']);
        Content::create(['title' => 'Home', 'slug' => 'home', 'description' => '', 'content' => '[]', 'online' => '1', 'type' => 'page', 'user_id' => '1']);
        Content::create(['title' => 'Blog', 'slug' => 'blog', 'description' => '', 'content' => '[]', 'online' => '1', 'type' => 'template', 'user_id' => '1']);
    }
}
