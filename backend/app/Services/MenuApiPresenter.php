<?php

namespace App\Services;

use App\Models\Menu;
use App\Models\MenuItem;

class MenuApiPresenter
{
    public static function present(Menu $menu): array
    {
        $menu->load(['topLevelItems.children.children']);

        if ($menu->key === 'footer_social') {
            return [
                'key' => $menu->key,
                'name' => $menu->name,
                'items' => $menu->topLevelItems
                    ->where('is_visible', true)
                    ->map(fn (MenuItem $item): array => [
                        'label' => $item->label,
                        'href' => $item->url,
                        'icon' => $item->metadata['icon'] ?? null,
                        'iconClass' => $item->metadata['iconClass'] ?? null,
                    ])
                    ->values()
                    ->all(),
            ];
        }

        return [
            'key' => $menu->key,
            'name' => $menu->name,
            'items' => self::presentTree($menu->topLevelItems->where('is_visible', true)),
        ];
    }

    private static function presentTree($items): array
    {
        return $items->map(function (MenuItem $item): array {
            $row = [
                'label' => $item->label,
                'path' => $item->url,
            ];

            if ($item->is_external) {
                $row['external'] = true;
            }

            if ($item->relationLoaded('children') && $item->children->where('is_visible', true)->isNotEmpty()) {
                $row['children'] = self::presentTree($item->children->where('is_visible', true));
            }

            return $row;
        })->values()->all();
    }
}
