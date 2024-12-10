<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('categories')->insert([
            [
                'name' => 'mobile',
                'slug' => 'mobile',
            ],
            [
                'name' => 'tv',
                'slug' => 'tv',
            ],
            [
                'name' => 'laptop',
                'slug' => 'laptop',
            ],
            [
                'name' => 'camera',
                'slug' => 'camera',
            ],
            [
                'name' => 'headphone',
                'slug' => 'headphone',
            ]
        ]);
    }
}
