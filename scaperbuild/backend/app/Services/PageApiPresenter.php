<?php

namespace App\Services;

use App\Models\Page;
use Illuminate\Support\Facades\Storage;

class PageApiPresenter
{
    public static function present(Page $page): array
    {
        $content = $page->slug === 'home'
            ? HomePageBlockMapper::toForm($page)
            : self::blocksToGenericContent($page);

        return [
            'slug' => $page->slug,
            'title' => $page->title,
            'seo_title' => $page->seo_title,
            'seo_description' => $page->seo_description,
            'body_class' => $page->body_class,
            'is_published' => $page->is_published,
            'content' => self::resolveMediaUrls($content),
        ];
    }

    private static function blocksToGenericContent(Page $page): array
    {
        return [
            'blocks' => $page->blocks->map(fn ($block) => [
                'block_key' => $block->block_key,
                'section' => $block->section,
                'label' => $block->label,
                'type' => $block->type,
                'value' => $block->value,
                'image_url' => self::mediaUrl($block->image_path),
                'background_image_url' => self::mediaUrl($block->background_image_path),
                'link_url' => $block->link_url,
                'metadata' => self::resolveMediaUrls($block->metadata ?? []),
                'sort_order' => $block->sort_order,
            ])->values()->all(),
        ];
    }

    private static function resolveMediaUrls(mixed $data): mixed
    {
        if (is_array($data)) {
            $resolved = [];
            foreach ($data as $key => $value) {
                if (is_string($value) && self::isMediaKey($key)) {
                    $resolved[$key] = self::mediaUrl($value);
                    $resolved[$key.'_url'] = $resolved[$key];
                } else {
                    $resolved[$key] = self::resolveMediaUrls($value);
                }
            }

            return $resolved;
        }

        return $data;
    }

    private static function isMediaKey(string|int $key): bool
    {
        if (! is_string($key)) {
            return false;
        }

        return in_array($key, [
            'image',
            'background',
            'background_image',
            'column_image',
            'image_path',
            'background_image_path',
        ], true) || str_ends_with($key, '_image') || str_ends_with($key, '_path');
    }

    public static function mediaUrl(?string $path): ?string
    {
        if (blank($path)) {
            return null;
        }

        if (str_starts_with($path, 'http://') || str_starts_with($path, 'https://')) {
            return $path;
        }

        return Storage::disk('public')->url($path);
    }
}
