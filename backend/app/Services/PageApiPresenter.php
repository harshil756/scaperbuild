<?php

namespace App\Services;

use App\Models\Page;
use App\Services\AboutPageBlockMapper;
use App\Services\ContactPageBlockMapper;
use App\Services\HomePageBlockMapper;
use App\Services\AntPestControlPageBlockMapper;
use App\Services\MelbournePageBlockMapper;
use App\Services\ServicePageBlockMapper;
use App\Services\SolarPanelBirdProofingPageBlockMapper;

class PageApiPresenter
{
    public static function present(Page $page): array
    {
        $content = match ($page->slug) {
            'home' => HomePageBlockMapper::toForm($page),
            'about-us' => AboutPageBlockMapper::toForm($page),
            'contact-us' => ContactPageBlockMapper::toForm($page),
            'solar-panel-bird-proofing' => SolarPanelBirdProofingPageBlockMapper::toForm($page),
            'our-services-ant-pest-control' => AntPestControlPageBlockMapper::toForm($page),
            'melbourne' => MelbournePageBlockMapper::toForm($page),
            default => ServicePageBlockMapper::isServicePage($page->slug)
                ? ServicePageBlockMapper::toForm($page)
                : self::blocksToGenericContent($page),
        };

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

        if (str_starts_with($path, '/storage/')) {
            $relative = $path;
        } elseif (str_starts_with($path, 'storage/')) {
            $relative = '/'.$path;
        } else {
            $relative = '/storage/'.ltrim($path, '/');
        }

        // Absolute URL so the public site (different host) can load Laravel storage.
        return rtrim((string) config('app.url'), '/').$relative;
    }

    /**
     * Ensure Filament rich-text <img> tags have a loadable src (from src or data-id).
     */
    public static function rewriteHtmlMedia(?string $html): ?string
    {
        if (blank($html)) {
            return $html;
        }

        return preg_replace_callback(
            '/<img\b([^>]*?)>/i',
            static function (array $matches): string {
                $attrs = $matches[1];
                $dataId = null;
                $src = null;

                if (preg_match('/\bdata-id=["\']([^"\']+)["\']/i', $attrs, $idMatch) === 1) {
                    $dataId = trim($idMatch[1]);
                }

                if (preg_match('/\bsrc=["\']([^"\']*)["\']/i', $attrs, $srcMatch) === 1) {
                    $src = trim($srcMatch[1]);
                }

                $raw = null;
                if (filled($dataId) && (str_contains($dataId, 'cms/') || str_contains($dataId, 'storage/'))) {
                    $raw = $dataId;
                } elseif (filled($src) && (str_contains($src, 'cms/') || str_contains($src, 'storage/') || str_starts_with($src, 'http'))) {
                    $raw = $src;
                }

                if (! filled($raw)) {
                    return $matches[0];
                }

                $url = self::mediaUrl($raw);
                if (! filled($url)) {
                    return $matches[0];
                }

                $escaped = e($url);

                if (preg_match('/\bsrc=["\']/', $attrs) === 1) {
                    $attrs = preg_replace('/\bsrc=["\'][^"\']*["\']/i', 'src="'.$escaped.'"', $attrs, 1);

                    return '<img'.$attrs.'>';
                }

                return '<img src="'.$escaped.'"'.$attrs.'>';
            },
            $html,
        );
    }
}
