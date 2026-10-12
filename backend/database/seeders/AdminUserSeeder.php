<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class AdminUserSeeder extends Seeder
{
    public function run(): void
    {
        User::query()->updateOrCreate(
            ['email' => 'admin@7statespestcontrol.com.au'],
            [
                'name' => 'Admin',
                'password' => 'StrongPassword123',
                'email_verified_at' => now(),
            ],
        );
    }
}
