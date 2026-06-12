<?php

namespace App\Services;

use App\Models\Menu;
use App\Models\MenuItem;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;

class MenuMapper
{
    public static function toForm(Menu $menu): array
    {
        $menu->load(['topLevelItems.children.children']);

        if ($menu->key === 'footer_social') {
            return [
                'items' => $menu->topLevelItems->map(fn (MenuItem $item): array => [
                    'label' => $item->label,
                    'href' => $item->url,
                    'icon' => $item->metadata['icon'] ?? null,
                    'iconClass' => $item->metadata['iconClass'] ?? null,
                ])->values()->all(),
            ];
        }

        return [
            'items' => self::itemsToFormTree($menu->topLevelItems),
        ];
    }

    public static function sync(Menu $menu, array $content): void
    {
        $items = $content['items'] ?? [];

        self::assertNoDuplicateUrls($items, $menu->key === 'footer_social');

        DB::transaction(function () use ($menu, $items): void {
            $menu->items()->delete();
            self::createItems($menu, $items, null, $menu->key === 'footer_social');
        });
    }

    private static function itemsToFormTree($items): array
    {
        return $items->map(function (MenuItem $item): array {
            $row = [
                'label' => $item->label,
                'path' => $item->url,
                'external' => $item->is_external,
            ];

            if ($item->relationLoaded('children') && $item->children->isNotEmpty()) {
                $row['children'] = self::itemsToFormTree($item->children);
            }

            return $row;
        })->values()->all();
    }

    /**
     * @param  array<int, array<string, mixed>>  $items
     */
    private static function createItems(Menu $menu, array $items, ?int $parentId, bool $isSocial): void
    {
        foreach (array_values($items) as $sort => $item) {
            $children = $item['children'] ?? [];
            $url = $isSocial
                ? ($item['href'] ?? $item['url'] ?? '#')
                : ($item['path'] ?? $item['url'] ?? '#');

            $record = MenuItem::create([
                'menu_id' => $menu->id,
                'parent_id' => $parentId,
                'label' => $item['label'] ?? 'Menu item',
                'url' => $url,
                'sort_order' => $sort,
                'is_external' => $isSocial || ($item['external'] ?? str_starts_with($url, 'http')),
                'is_visible' => $item['is_visible'] ?? true,
                'metadata' => $isSocial ? array_filter([
                    'icon' => $item['icon'] ?? null,
                    'iconClass' => $item['iconClass'] ?? null,
                ]) : null,
            ]);

            if (! $isSocial && $children !== []) {
                self::createItems($menu, $children, $record->id, false);
            }
        }
    }

    /**
     * @param  array<int, array<string, mixed>>  $items
     */
    private static function assertNoDuplicateUrls(array $items, bool $isSocial): void
    {
        self::assertNoDuplicateUrlsAtLevel($items, $isSocial);

        if (! $isSocial) {
            foreach ($items as $item) {
                if (! empty($item['children'])) {
                    self::assertNoDuplicateUrlsAtLevel($item['children'], false);
                }
            }
        }
    }

    /**
     * @param  array<int, array<string, mixed>>  $items
     */
    private static function assertNoDuplicateUrlsAtLevel(array $items, bool $isSocial): void
    {
        $seen = [];

        foreach ($items as $item) {
            $url = MenuItem::normalizeUrl($isSocial
                ? ($item['href'] ?? $item['url'] ?? '#')
                : ($item['path'] ?? $item['url'] ?? '#'));

            if (isset($seen[$url])) {
                throw ValidationException::withMessages([
                    'items' => "Duplicate URL \"{$url}\" found at the same menu level. Each sibling link must have a unique URL.",
                ]);
            }

            $seen[$url] = true;
        }
    }
}
