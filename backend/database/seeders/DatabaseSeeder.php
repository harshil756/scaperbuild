<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    public function run(): void
    {
        $this->call([
            AdminUserSeeder::class,
            HomePageSeeder::class,
            AboutPageSeeder::class,
            ContactPageSeeder::class,
            SolarPanelBirdProofingPageSeeder::class,
            AntPestControlPageSeeder::class,
            MelbournePageSeeder::class,
            ServicePagesSeeder::class,
            MenuSeeder::class,
            BlogSeeder::class,
        ]);
    }
}
