<?php

namespace App\Services;

use App\Models\Page;
use App\Models\PageBlock;
use App\Support\CmsListItems;

class SolarPanelBirdProofingPageBlockMapper
{
    private const SERVICE_SLUGS = ['cleaning', 'spikes', 'mesh', 'uv_gel', 'nest_removal', 'maintenance'];

    private const HAZARD_SLUGS = ['energy', 'damage', 'health', 'noise', 'water_leaks', 'gutters', 'mites'];

    private const SIGN_SLUGS = ['pigeons', 'sparrows', 'seagulls', 'starlings', 'indian_mynas'];

    private const ADVANTAGE_SLUGS = ['maintenance', 'efficiency', 'lifespan', 'output', 'eco_friendly'];

    private const PROCESS_SLUGS = ['quote', 'inspection', 'installation'];

    private const WHY_CHOOSE_SLUGS = ['experts', 'quick_service', 'technicians', 'guarantee'];

    public static function toForm(Page $page): array
    {
        $blocks = $page->blocks->keyBy('block_key');

        return [
            'hero' => [
                'background_image' => $blocks->get('background.hero')?->background_image_path,
                'breadcrumb' => $blocks->get('hero.breadcrumb')?->value,
                'title' => $blocks->get('hero.title')?->value,
                'heading' => $blocks->get('hero.heading')?->value,
                'intro' => $blocks->get('hero.intro')?->value,
            ],
            'quote_form' => [
                'title' => $blocks->get('quote_form.title')?->value,
                'subtitle' => $blocks->get('quote_form.subtitle')?->value,
                'submit_text' => $blocks->get('quote_form.submit_text')?->value,
            ],
            'intro_video' => [
                'background_image' => $blocks->get('background.intro_video')?->background_image_path,
                'eyebrow' => $blocks->get('intro_video.eyebrow')?->value,
                'title' => $blocks->get('intro_video.title')?->value,
                'body' => $blocks->get('intro_video.body')?->value,
                'youtube_id' => $blocks->get('intro_video.youtube_id')?->value,
            ],
            'services' => [
                'background_image' => $blocks->get('background.services')?->background_image_path,
                'title' => $blocks->get('services.title')?->value,
                'intro' => $blocks->get('services.intro')?->value,
                'footer' => $blocks->get('services.footer')?->value,
                'items' => self::mapImageItems($blocks, 'services', self::SERVICE_SLUGS),
            ],
            'why_essential' => [
                'title' => $blocks->get('why_essential.title')?->value,
                'intro' => $blocks->get('why_essential.intro')?->value,
                'items' => self::mapImageItems($blocks, 'why_essential', self::HAZARD_SLUGS),
            ],
            'signs' => [
                'background_image' => $blocks->get('background.signs')?->background_image_path,
                'title' => $blocks->get('signs.title')?->value,
                'intro' => $blocks->get('signs.intro')?->value,
                'items' => self::mapImageItems($blocks, 'signs', self::SIGN_SLUGS),
            ],
            'sustainable' => [
                'title' => $blocks->get('sustainable.title')?->value,
                'body_left' => $blocks->get('sustainable.body_left')?->value,
                'body_right_intro' => $blocks->get('sustainable.body_right_intro')?->value,
                'list' => CmsListItems::forForm($blocks->get('sustainable.list')?->metadata['items'] ?? []),
            ],
            'advantages' => [
                'title' => $blocks->get('advantages.title')?->value,
                'items' => self::mapImageItems($blocks, 'advantages', self::ADVANTAGE_SLUGS),
            ],
            'process' => [
                'title' => $blocks->get('process.title')?->value,
                'intro' => $blocks->get('process.intro')?->value,
                'steps' => self::mapTextItems($blocks, 'process', self::PROCESS_SLUGS),
                'call_button_label' => $blocks->get('process.call_button')?->value,
                'call_button_url' => $blocks->get('process.call_button')?->link_url,
            ],
            'cost' => [
                'title' => $blocks->get('cost.title')?->value,
                'intro' => $blocks->get('cost.intro')?->value,
                'list' => CmsListItems::forForm($blocks->get('cost.list')?->metadata['items'] ?? []),
                'body' => $blocks->get('cost.body')?->value,
            ],
            'why_choose' => [
                'title' => $blocks->get('why_choose.title')?->value,
                'items' => self::mapTextItems($blocks, 'why_choose', self::WHY_CHOOSE_SLUGS),
            ],
            'results' => [
                'background_image' => $blocks->get('background.results')?->background_image_path,
                'title' => $blocks->get('results.title')?->value,
                'images' => $blocks->get('results.carousel')?->metadata['images'] ?? [],
                'checklist' => CmsListItems::forForm($blocks->get('results.checklist')?->metadata['items'] ?? []),
                'body' => $blocks->get('results.body')?->value,
            ],
            'blog' => [
                'eyebrow' => $blocks->get('blog.eyebrow')?->value,
                'title' => $blocks->get('blog.title')?->value,
                'posts' => $blocks->get('blog.posts')?->metadata['posts'] ?? [],
            ],
            'reviews' => [
                'eyebrow' => $blocks->get('reviews.eyebrow')?->value,
                'title' => $blocks->get('reviews.title')?->value,
                'subtitle' => $blocks->get('reviews.subtitle')?->value,
                'rating_label' => $blocks->get('reviews.rating_label')?->value,
                'count_text' => $blocks->get('reviews.count_text')?->value,
            ],
            'faq' => [
                'title' => $blocks->get('faq.title')?->value,
                'items' => $blocks->get('faq.items')?->metadata['items'] ?? [],
            ],
        ];
    }

    public static function sync(Page $page, array $content): void
    {
        $blocks = $page->blocks->keyBy('block_key');

        $hero = $content['hero'] ?? [];
        self::setBackground($blocks, 'background.hero', $hero['background_image'] ?? null);
        self::setText($blocks, 'hero.breadcrumb', $hero['breadcrumb'] ?? null);
        self::setText($blocks, 'hero.title', $hero['title'] ?? null);
        self::setText($blocks, 'hero.heading', $hero['heading'] ?? null);
        self::setHtml($blocks, 'hero.intro', $hero['intro'] ?? null);

        $quote = $content['quote_form'] ?? [];
        self::setText($blocks, 'quote_form.title', $quote['title'] ?? null);
        self::setText($blocks, 'quote_form.subtitle', $quote['subtitle'] ?? null);
        self::setText($blocks, 'quote_form.submit_text', $quote['submit_text'] ?? null);

        $intro = $content['intro_video'] ?? [];
        self::setBackground($blocks, 'background.intro_video', $intro['background_image'] ?? null);
        self::setText($blocks, 'intro_video.eyebrow', $intro['eyebrow'] ?? null);
        self::setText($blocks, 'intro_video.title', $intro['title'] ?? null);
        self::setHtml($blocks, 'intro_video.body', $intro['body'] ?? null);
        self::setText($blocks, 'intro_video.youtube_id', $intro['youtube_id'] ?? null);

        $services = $content['services'] ?? [];
        self::setBackground($blocks, 'background.services', $services['background_image'] ?? null);
        self::setText($blocks, 'services.title', $services['title'] ?? null);
        self::setHtml($blocks, 'services.intro', $services['intro'] ?? null);
        self::setHtml($blocks, 'services.footer', $services['footer'] ?? null);
        self::syncImageItems($blocks, 'services', $services['items'] ?? []);

        $whyEssential = $content['why_essential'] ?? [];
        self::setText($blocks, 'why_essential.title', $whyEssential['title'] ?? null);
        self::setHtml($blocks, 'why_essential.intro', $whyEssential['intro'] ?? null);
        self::syncImageItems($blocks, 'why_essential', $whyEssential['items'] ?? []);

        $signs = $content['signs'] ?? [];
        self::setBackground($blocks, 'background.signs', $signs['background_image'] ?? null);
        self::setText($blocks, 'signs.title', $signs['title'] ?? null);
        self::setHtml($blocks, 'signs.intro', $signs['intro'] ?? null);
        self::syncImageItems($blocks, 'signs', $signs['items'] ?? []);

        $sustainable = $content['sustainable'] ?? [];
        self::setText($blocks, 'sustainable.title', $sustainable['title'] ?? null);
        self::setHtml($blocks, 'sustainable.body_left', $sustainable['body_left'] ?? null);
        self::setHtml($blocks, 'sustainable.body_right_intro', $sustainable['body_right_intro'] ?? null);
        self::setMetadata($blocks, 'sustainable.list', ['items' => CmsListItems::forStorage($sustainable['list'] ?? [])]);

        $advantages = $content['advantages'] ?? [];
        self::setText($blocks, 'advantages.title', $advantages['title'] ?? null);
        self::syncImageItems($blocks, 'advantages', $advantages['items'] ?? []);

        $process = $content['process'] ?? [];
        self::setText($blocks, 'process.title', $process['title'] ?? null);
        self::setHtml($blocks, 'process.intro', $process['intro'] ?? null);
        self::syncTextItems($blocks, 'process', $process['steps'] ?? []);
        self::setLink($blocks, 'process.call_button', $process['call_button_label'] ?? null, $process['call_button_url'] ?? null);

        $cost = $content['cost'] ?? [];
        self::setText($blocks, 'cost.title', $cost['title'] ?? null);
        self::setHtml($blocks, 'cost.intro', $cost['intro'] ?? null);
        self::setMetadata($blocks, 'cost.list', ['items' => CmsListItems::forStorage($cost['list'] ?? [])]);
        self::setHtml($blocks, 'cost.body', $cost['body'] ?? null);

        $whyChoose = $content['why_choose'] ?? [];
        self::setText($blocks, 'why_choose.title', $whyChoose['title'] ?? null);
        self::syncTextItems($blocks, 'why_choose', $whyChoose['items'] ?? []);

        $results = $content['results'] ?? [];
        self::setBackground($blocks, 'background.results', $results['background_image'] ?? null);
        self::setText($blocks, 'results.title', $results['title'] ?? null);
        self::setMetadata($blocks, 'results.carousel', ['images' => $results['images'] ?? []]);
        self::setMetadata($blocks, 'results.checklist', ['items' => CmsListItems::forStorage($results['checklist'] ?? [])]);
        self::setHtml($blocks, 'results.body', $results['body'] ?? null);

        $blog = $content['blog'] ?? [];
        self::setText($blocks, 'blog.eyebrow', $blog['eyebrow'] ?? null);
        self::setText($blocks, 'blog.title', $blog['title'] ?? null);
        $posts = collect($blog['posts'] ?? [])
            ->map(function (array $post): array {
                $imagePath = $post['image_path'] ?? null;
                if (is_array($imagePath)) {
                    $imagePath = $imagePath[0] ?? null;
                }

                return array_merge($post, [
                    'image_path' => filled($imagePath) ? $imagePath : ($post['image_path'] ?? null),
                ]);
            })
            ->values()
            ->all();
        self::setMetadata($blocks, 'blog.posts', ['posts' => $posts]);

        $reviews = $content['reviews'] ?? [];
        self::setText($blocks, 'reviews.eyebrow', $reviews['eyebrow'] ?? null);
        self::setText($blocks, 'reviews.title', $reviews['title'] ?? null);
        self::setText($blocks, 'reviews.subtitle', $reviews['subtitle'] ?? null);
        self::setText($blocks, 'reviews.rating_label', $reviews['rating_label'] ?? null);
        self::setHtml($blocks, 'reviews.count_text', $reviews['count_text'] ?? null);

        $faq = $content['faq'] ?? [];
        self::setText($blocks, 'faq.title', $faq['title'] ?? null);
        self::setMetadata($blocks, 'faq.items', ['items' => $faq['items'] ?? []]);
    }

    private static function mapImageItems($blocks, string $prefix, array $slugs): array
    {
        $items = [];
        foreach ($slugs as $slug) {
            $block = $blocks->get("{$prefix}.{$slug}");
            if (! $block) {
                continue;
            }
            $meta = $block->metadata ?? [];
            $items[] = [
                'slug' => $slug,
                'title' => $meta['title'] ?? '',
                'description' => $meta['description'] ?? '',
                'image' => $block->image_path,
                'alt' => $meta['alt'] ?? '',
            ];
        }

        return $items;
    }

    private static function mapTextItems($blocks, string $prefix, array $slugs): array
    {
        $items = [];
        foreach ($slugs as $slug) {
            $block = $blocks->get("{$prefix}.{$slug}");
            if (! $block) {
                continue;
            }
            $meta = $block->metadata ?? [];
            $items[] = [
                'slug' => $slug,
                'title' => $meta['title'] ?? '',
                'description' => $meta['description'] ?? '',
            ];
        }

        return $items;
    }

    private static function syncImageItems($blocks, string $prefix, array $items): void
    {
        foreach ($items as $item) {
            $slug = $item['slug'] ?? null;
            if (! $slug) {
                continue;
            }
            $block = $blocks->get("{$prefix}.{$slug}");
            if (! $block) {
                continue;
            }
            $block->update([
                'image_path' => $item['image'] ?? $block->image_path,
                'metadata' => array_merge($block->metadata ?? [], [
                    'title' => $item['title'] ?? '',
                    'description' => $item['description'] ?? '',
                    'alt' => $item['alt'] ?? '',
                ]),
            ]);
        }
    }

    private static function syncTextItems($blocks, string $prefix, array $items): void
    {
        foreach ($items as $item) {
            $slug = $item['slug'] ?? null;
            if (! $slug) {
                continue;
            }
            self::setMetadata($blocks, "{$prefix}.{$slug}", [
                'title' => $item['title'] ?? '',
                'description' => $item['description'] ?? '',
            ]);
        }
    }

    private static function setText($blocks, string $key, ?string $value): void
    {
        $blocks->get($key)?->update(['value' => $value]);
    }

    private static function setHtml($blocks, string $key, ?string $value): void
    {
        $blocks->get($key)?->update(['value' => $value]);
    }

    private static function setLink($blocks, string $key, ?string $label, ?string $url): void
    {
        $block = $blocks->get($key);
        if (! $block) {
            return;
        }
        $block->update(['value' => $label, 'link_url' => $url]);
    }

    private static function setBackground($blocks, string $key, ?string $path): void
    {
        $blocks->get($key)?->update(['background_image_path' => $path]);
    }

    private static function setMetadata($blocks, string $key, array $metadata): void
    {
        $block = $blocks->get($key);
        if (! $block) {
            return;
        }
        $block->update(['metadata' => array_merge($block->metadata ?? [], $metadata)]);
    }

}
