<?php

namespace Database\Seeders;

use App\Models\Option;
use Illuminate\Database\Seeder;

class OptionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Option::create(['key' => 'sitename', 'value' => 'Mon site']);
        Option::create(['key' => 'description', 'value' => 'La description de mon site']);
        Option::create(['key' => 'logo', 'value' => '']);
        Option::create(['key' => 'favicon', 'value' => '']);
        Option::create(['key' => 'header', 'value' => '1']);
        Option::create(['key' => 'footer', 'value' => '2']);
        Option::create(['key' => 'homepage', 'value' => '3']);
        Option::create(['key' => 'blog', 'value' => '4']);
        Option::create(['key' => 'contact-email', 'value' => '']);
        Option::create(['key' => 'noreply-email', 'value' => '']);
        Option::create(['key' => 'sav-email', 'value' => '']);
        Option::create(['key' => 'theme', 'value' => 'aymericlhomme']);
        Option::create(['key' => 'facebook', 'value' => '']);
        Option::create(['key' => 'twitter', 'value' => '']);
        Option::create(['key' => 'instagram', 'value' => '']);
        Option::create(['key' => 'linkedin', 'value' => '']);
        Option::create(['key' => 'spam_words', 'value' => '']);
    }
}
