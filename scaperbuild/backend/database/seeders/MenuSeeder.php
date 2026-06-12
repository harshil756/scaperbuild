<?php

namespace Database\Seeders;

use App\Models\Menu;
use App\Services\MenuMapper;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;

class MenuSeeder extends Seeder
{
    public function run(): void
    {
        $path = database_path('data/menus.json');

        if (! File::exists($path)) {
            return;
        }

        $data = json_decode(File::get($path), true, flags: JSON_THROW_ON_ERROR);

        foreach ($data['menus'] as $menuData) {
            $menu = Menu::query()->updateOrCreate(
                ['key' => $menuData['key']],
                [
                    'name' => $menuData['name'],
                    'description' => $menuData['description'] ?? null,
                ],
            );

            MenuMapper::sync($menu, ['items' => $menuData['items'] ?? []]);
        }
    }
}
