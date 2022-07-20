<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Section;


class SectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $sections = [
            [
                'name' => 'Home'
            ],
            [
                'name' => 'Categories'
            ],
            [
                'name' => 'Portfolio'
            ],
            [
                'name' => 'Gallery'
            ],
            [
                'name' => 'Calendar'
            ],
            [
                'name' => 'About'
            ],
            [
                'name' => 'Contact'
            ]
        ];
        foreach ($sections as $section) {
            Section::create([
                'name' => $section['name']
            ]);
        }
    }
}
