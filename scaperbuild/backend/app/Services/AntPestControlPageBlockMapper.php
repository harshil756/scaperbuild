<?php

namespace App\Services;

use App\Models\Page;
use App\Models\PageBlock;
use App\Support\CmsListItems;

class AntPestControlPageBlockMapper
{
    private const SPECIES_SLUGS = ['argentine', 'carpenter', 'white_footed', 'coastal_brown'];

    private const PROBLEM_SLUGS = [
        'food_contamination',
        'structural_damage',
        'bites_stings',
        'electrical_damage',
        'infestation_growth',
        'business_disruptions',
    ];

    private const PREVENTION_SLUGS = [
        'clean_home',
        'seal_entries',
        'eliminate_moisture',
        'natural_deterrents',
        'outdoor_clean',
        'baits_traps',
        'control_moisture',
        'professional',
    ];

    private const FEATURE_SLUGS = ['free_quotes', 'five_star_reviews', 'licensed', 'satisfaction', 'local_owned'];

    public static function toForm(Page $page): array
    {
        $blocks = $page->blocks->keyBy('block_key');

        return [
            'hero' => [
                'background_image' => $blocks->get('background.hero')?->background_image_path,
                'breadcrumb_parent' => $blocks->get('hero.breadcrumb_parent')?->value,
                'breadcrumb_current' => $blocks->get('hero.breadcrumb_current')?->value,
                'title' => $blocks->get('hero.title')?->value,
                'heading' => $blocks->get('hero.heading')?->value,
                'intro' => $blocks->get('hero.intro')?->value,
            ],
            'quote_form' => [
                'title' => $blocks->get('quote_form.title')?->value,
                'subtitle' => $blocks->get('quote_form.subtitle')?->value,
                'submit_text' => $blocks->get('quote_form.submit_text')?->value,
            ],
            'species' => [
                'eyebrow' => $blocks->get('species.eyebrow')?->value,
                'title' => $blocks->get('species.title')?->value,
                'intro' => $blocks->get('species.intro')?->value,
                'items' => self::mapImageItems($blocks, 'species', self::SPECIES_SLUGS),
            ],
            'why_inside' => [
                'background_image' => $blocks->get('background.why_inside')?->background_image_path,
                'eyebrow' => $blocks->get('why_inside.eyebrow')?->value,
                'title' => $blocks->get('why_inside.title')?->value,
                'list_html' => $blocks->get('why_inside.list_html')?->value,
                'footer' => $blocks->get('why_inside.footer')?->value,
                'image' => $blocks->get('why_inside.image')?->image_path,
            ],
            'problems' => [
                'eyebrow' => $blocks->get('problems.eyebrow')?->value,
                'title' => $blocks->get('problems.title')?->value,
                'intro' => $blocks->get('problems.intro')?->value,
                'items' => self::mapImageItems($blocks, 'problems', self::PROBLEM_SLUGS),
            ],
            'prevention' => [
                'eyebrow' => $blocks->get('prevention.eyebrow')?->value,
                'title' => $blocks->get('prevention.title')?->value,
                'intro' => $blocks->get('prevention.intro')?->value,
                'tips' => self::mapPreventionTips($blocks),
            ],
            'features' => [
                'items' => self::mapImageItems($blocks, 'features', self::FEATURE_SLUGS, titleOnly: true),
            ],
            'faq' => [
                'title' => $blocks->get('faq.title')?->value,
                'sidebar_image' => $blocks->get('faq.sidebar_image')?->image_path,
                'sidebar_cta_title' => $blocks->get('faq.sidebar_cta_title')?->value,
                'sidebar_cta_body' => $blocks->get('faq.sidebar_cta_body')?->value,
                'sidebar_cta_button_label' => $blocks->get('faq.sidebar_cta_button')?->value,
                'sidebar_cta_button_url' => $blocks->get('faq.sidebar_cta_button')?->link_url,
                'items' => $blocks->get('faq.items')?->metadata['items'] ?? [],
            ],
            'reviews' => [
                'eyebrow' => $blocks->get('reviews.eyebrow')?->value,
                'title' => $blocks->get('reviews.title')?->value,
                'subtitle' => $blocks->get('reviews.subtitle')?->value,
                'rating_label' => $blocks->get('reviews.rating_label')?->value,
                'count_text' => $blocks->get('reviews.count_text')?->value,
            ],
            'blog' => [
                'eyebrow' => $blocks->get('blog.eyebrow')?->value,
                'title' => $blocks->get('blog.title')?->value,
                'posts' => $blocks->get('blog.posts')?->metadata['posts'] ?? [],
            ],
            'cta' => [
                'background_image' => $blocks->get('background.cta')?->background_image_path,
                'eyebrow' => $blocks->get('cta.eyebrow')?->value,
                'title' => $blocks->get('cta.title')?->value,
                'body' => $blocks->get('cta.body')?->value,
                'button_label' => $blocks->get('cta.button')?->value,
                'button_url' => $blocks->get('cta.button')?->link_url,
            ],
        ];
    }

    public static function sync(Page $page, array $content): void
    {
        $blocks = $page->blocks->keyBy('block_key');

        $hero = $content['hero'] ?? [];
        self::setBackground($blocks, 'background.hero', $hero['background_image'] ?? null);
        self::setText($blocks, 'hero.breadcrumb_parent', $hero['breadcrumb_parent'] ?? null);
        self::setText($blocks, 'hero.breadcrumb_current', $hero['breadcrumb_current'] ?? null);
        self::setText($blocks, 'hero.title', $hero['title'] ?? null);
        self::setText($blocks, 'hero.heading', $hero['heading'] ?? null);
        self::setHtml($blocks, 'hero.intro', $hero['intro'] ?? null);

        $quote = $content['quote_form'] ?? [];
        self::setText($blocks, 'quote_form.title', $quote['title'] ?? null);
        self::setText($blocks, 'quote_form.subtitle', $quote['subtitle'] ?? null);
        self::setText($blocks, 'quote_form.submit_text', $quote['submit_text'] ?? null);

        $species = $content['species'] ?? [];
        self::setText($blocks, 'species.eyebrow', $species['eyebrow'] ?? null);
        self::setText($blocks, 'species.title', $species['title'] ?? null);
        self::setHtml($blocks, 'species.intro', $species['intro'] ?? null);
        self::syncImageItems($blocks, 'species', $species['items'] ?? []);

        $whyInside = $content['why_inside'] ?? [];
        self::setBackground($blocks, 'background.why_inside', $whyInside['background_image'] ?? null);
        self::setText($blocks, 'why_inside.eyebrow', $whyInside['eyebrow'] ?? null);
        self::setText($blocks, 'why_inside.title', $whyInside['title'] ?? null);
        self::setHtml($blocks, 'why_inside.list_html', $whyInside['list_html'] ?? null);
        self::setHtml($blocks, 'why_inside.footer', $whyInside['footer'] ?? null);
        self::setImage($blocks, 'why_inside.image', $whyInside['image'] ?? null);

        $problems = $content['problems'] ?? [];
        self::setText($blocks, 'problems.eyebrow', $problems['eyebrow'] ?? null);
        self::setText($blocks, 'problems.title', $problems['title'] ?? null);
        self::setHtml($blocks, 'problems.intro', $problems['intro'] ?? null);
        self::syncImageItems($blocks, 'problems', $problems['items'] ?? []);

        $prevention = $content['prevention'] ?? [];
        self::setText($blocks, 'prevention.eyebrow', $prevention['eyebrow'] ?? null);
        self::setText($blocks, 'prevention.title', $prevention['title'] ?? null);
        self::setHtml($blocks, 'prevention.intro', $prevention['intro'] ?? null);
        self::syncPreventionTips($blocks, $prevention['tips'] ?? []);

        $features = $content['features'] ?? [];
        self::syncImageItems($blocks, 'features', $features['items'] ?? [], titleOnly: true);

        $faq = $content['faq'] ?? [];
        self::setText($blocks, 'faq.title', $faq['title'] ?? null);
        self::setImage($blocks, 'faq.sidebar_image', $faq['sidebar_image'] ?? null);
        self::setText($blocks, 'faq.sidebar_cta_title', $faq['sidebar_cta_title'] ?? null);
        self::setText($blocks, 'faq.sidebar_cta_body', $faq['sidebar_cta_body'] ?? null);
        self::setLink(
            $blocks,
            'faq.sidebar_cta_button',
            $faq['sidebar_cta_button_label'] ?? null,
            $faq['sidebar_cta_button_url'] ?? null,
        );
        self::setMetadata($blocks, 'faq.items', ['items' => $faq['items'] ?? []]);

        $reviews = $content['reviews'] ?? [];
        self::setText($blocks, 'reviews.eyebrow', $reviews['eyebrow'] ?? null);
        self::setText($blocks, 'reviews.title', $reviews['title'] ?? null);
        self::setText($blocks, 'reviews.subtitle', $reviews['subtitle'] ?? null);
        self::setText($blocks, 'reviews.rating_label', $reviews['rating_label'] ?? null);
        self::setHtml($blocks, 'reviews.count_text', $reviews['count_text'] ?? null);

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

        $cta = $content['cta'] ?? [];
        self::setBackground($blocks, 'background.cta', $cta['background_image'] ?? null);
        self::setText($blocks, 'cta.eyebrow', $cta['eyebrow'] ?? null);
        self::setText($blocks, 'cta.title', $cta['title'] ?? null);
        self::setHtml($blocks, 'cta.body', $cta['body'] ?? null);
        self::setLink($blocks, 'cta.button', $cta['button_label'] ?? null, $cta['button_url'] ?? null);
    }

    private static function mapImageItems($blocks, string $prefix, array $slugs, bool $titleOnly = false): array
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
                'description' => $titleOnly ? '' : ($meta['description'] ?? ''),
                'image' => $block->image_path,
                'alt' => $meta['alt'] ?? '',
            ];
        }

        return $items;
    }

    private static function mapPreventionTips($blocks): array
    {
        $tips = $blocks->get('prevention.tips')?->metadata['tips'] ?? [];
        $indexed = collect($tips)->keyBy('slug');

        return collect(self::PREVENTION_SLUGS)
            ->map(function (string $slug) use ($indexed): array {
                $tip = $indexed->get($slug, []);

                return [
                    'slug' => $slug,
                    'title' => $tip['title'] ?? '',
                    'intro' => $tip['intro'] ?? null,
                    'list' => CmsListItems::forForm($tip['list'] ?? []),
                ];
            })
            ->all();
    }

    private static function syncImageItems($blocks, string $prefix, array $items, bool $titleOnly = false): void
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
            $metadata = array_merge($block->metadata ?? [], [
                'title' => $item['title'] ?? '',
                'alt' => $item['alt'] ?? '',
            ]);
            if (! $titleOnly) {
                $metadata['description'] = $item['description'] ?? '';
            }
            $block->update([
                'image_path' => $item['image'] ?? $block->image_path,
                'metadata' => $metadata,
            ]);
        }
    }

    private static function syncPreventionTips($blocks, array $tips): void
    {
        $normalized = collect($tips)
            ->map(function (array $tip): array {
                return [
                    'slug' => $tip['slug'] ?? '',
                    'title' => $tip['title'] ?? '',
                    'intro' => $tip['intro'] ?? null,
                    'list' => CmsListItems::forStorage($tip['list'] ?? []),
                ];
            })
            ->filter(fn (array $tip): bool => filled($tip['slug']))
            ->values()
            ->all();

        self::setMetadata($blocks, 'prevention.tips', ['tips' => $normalized]);
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

    private static function setImage($blocks, string $key, ?string $path): void
    {
        $blocks->get($key)?->update(['image_path' => $path]);
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
