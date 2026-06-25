<?php

namespace App\Services;

use App\Models\Page;
use App\Models\PageBlock;
use App\Support\CmsListItems;

class ServicePageBlockMapper
{
    /** @var list<string> */
    public const SERVICE_PAGE_SLUGS = [
        'our-services-bed-bug-treatment',
        'our-services-cockroach-control',
        'our-services-mosquito-pest-control',
        'our-services-fly-control',
        'our-services-fox-pest-control-in-melbourne',
        'our-services-mites-control',
        'our-services-moth-control',
        'our-services-possum-pest-control',
        'our-services-silverfish-treatment',
        'our-services-spider-control-treatment',
        'our-services-termite-pest-control',
        'our-services-end-of-lease-pest-control',
        'rodent-control-in-melbourne',
        'wasp-removal-melbourne',
        'office-pest-control',
        'restaurant-cafe-pest-control',
        'school-and-hospitality-facility-pest-control',
        'warehouse-and-factory-pest-control-services-melbourne',
    ];

    /** @var list<string> */
    public const COMMERCIAL_PAGE_SLUGS = [
        'office-pest-control',
        'restaurant-cafe-pest-control',
        'school-and-hospitality-facility-pest-control',
        'warehouse-and-factory-pest-control-services-melbourne',
    ];

    public static function isServicePage(?string $slug): bool
    {
        return in_array($slug, self::SERVICE_PAGE_SLUGS, true);
    }

    public static function isCommercialPage(?string $slug): bool
    {
        return in_array($slug, self::COMMERCIAL_PAGE_SLUGS, true);
    }

    public static function isGenericServicePage(?string $slug): bool
    {
        return self::isServicePage($slug) && ! self::isCommercialPage($slug);
    }

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
            'species' => self::mapCardSection($blocks, 'species'),
            'why_inside' => [
                'background_image' => $blocks->get('background.why_inside')?->background_image_path,
                'eyebrow' => $blocks->get('why_inside.eyebrow')?->value,
                'title' => $blocks->get('why_inside.title')?->value,
                'list_html' => $blocks->get('why_inside.list_html')?->value,
                'footer' => $blocks->get('why_inside.footer')?->value,
                'image' => $blocks->get('why_inside.image')?->image_path,
            ],
            'problems' => self::mapCardSection($blocks, 'problems'),
            'prevention' => [
                'eyebrow' => $blocks->get('prevention.eyebrow')?->value,
                'title' => $blocks->get('prevention.title')?->value,
                'intro' => $blocks->get('prevention.intro')?->value,
                'tips' => self::mapPreventionTips($blocks),
            ],
            'features' => [
                'items' => self::mapCardItems($blocks, 'features'),
            ],
            'cards' => [
                'items' => self::mapCardItems($blocks, 'cards'),
            ],
            'about' => [
                'title' => $blocks->get('about.title')?->value,
                'subtitle' => $blocks->get('about.subtitle')?->value,
                'intro' => $blocks->get('about.intro')?->value,
                'image' => $blocks->get('about.image')?->image_path,
                'counter_title' => $blocks->get('about.counter_title')?->value,
                'counter_value' => $blocks->get('about.counter_value')?->value,
                'counter_suffix' => $blocks->get('about.counter_suffix')?->value,
            ],
            'why_choose' => [
                'eyebrow' => $blocks->get('why_choose.eyebrow')?->value,
                'title' => $blocks->get('why_choose.title')?->value,
                'intro' => $blocks->get('why_choose.intro')?->value,
                'items' => self::mapCardItems($blocks, 'why_choose'),
            ],
            'contact' => [
                'eyebrow' => $blocks->get('contact.eyebrow')?->value,
                'title' => $blocks->get('contact.title')?->value,
                'body' => $blocks->get('contact.body')?->value,
                'button_label' => $blocks->get('contact.button')?->value,
                'button_url' => $blocks->get('contact.button')?->link_url,
            ],
            'services' => [
                'eyebrow' => $blocks->get('services.eyebrow')?->value,
                'title' => $blocks->get('services.title')?->value,
                'intro' => $blocks->get('services.intro')?->value,
                'items' => self::mapServiceItems($blocks),
            ],
            'expertise' => [
                'title' => $blocks->get('expertise.title')?->value,
                'items' => self::mapExpertiseItems($blocks),
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
            'content_blocks' => $blocks
                ->filter(fn (PageBlock $block): bool => $block->section === 'content')
                ->sortBy('sort_order')
                ->map(fn (PageBlock $block): array => [
                    'block_key' => $block->block_key,
                    'label' => $block->label,
                    'type' => $block->type,
                    'value' => $block->value,
                    'image' => $block->image_path,
                    'metadata' => $block->metadata,
                ])
                ->values()
                ->all(),
            'backgrounds' => $blocks
                ->filter(fn (PageBlock $block): bool => str_starts_with($block->block_key, 'background.')
                    && ! str_starts_with($block->block_key, 'background.section_'))
                ->sortBy('sort_order')
                ->map(fn (PageBlock $block): array => [
                    'block_key' => $block->block_key,
                    'key' => str_replace('background.', '', $block->block_key),
                    'label' => $block->label,
                    'image' => $block->background_image_path,
                ])
                ->values()
                ->all(),
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

        self::syncCardSection($blocks, 'species', $content['species'] ?? []);
        self::syncCardSection($blocks, 'problems', $content['problems'] ?? []);

        $whyInside = $content['why_inside'] ?? [];
        self::setBackground($blocks, 'background.why_inside', $whyInside['background_image'] ?? null);
        self::setText($blocks, 'why_inside.eyebrow', $whyInside['eyebrow'] ?? null);
        self::setText($blocks, 'why_inside.title', $whyInside['title'] ?? null);
        self::setHtml($blocks, 'why_inside.list_html', $whyInside['list_html'] ?? null);
        self::setHtml($blocks, 'why_inside.footer', $whyInside['footer'] ?? null);
        self::setImage($blocks, 'why_inside.image', $whyInside['image'] ?? null);

        $prevention = $content['prevention'] ?? [];
        self::setText($blocks, 'prevention.eyebrow', $prevention['eyebrow'] ?? null);
        self::setText($blocks, 'prevention.title', $prevention['title'] ?? null);
        self::setHtml($blocks, 'prevention.intro', $prevention['intro'] ?? null);
        self::setMetadata($blocks, 'prevention.tips', ['tips' => self::syncPreventionTipsData($prevention['tips'] ?? [])]);

        self::syncCardItems($blocks, 'features', $content['features']['items'] ?? []);
        self::syncCardItems($blocks, 'cards', $content['cards']['items'] ?? []);

        $about = $content['about'] ?? [];
        self::setText($blocks, 'about.title', $about['title'] ?? null);
        self::setText($blocks, 'about.subtitle', $about['subtitle'] ?? null);
        self::setHtml($blocks, 'about.intro', $about['intro'] ?? null);
        self::setImage($blocks, 'about.image', $about['image'] ?? null);
        self::setText($blocks, 'about.counter_title', $about['counter_title'] ?? null);
        self::setText($blocks, 'about.counter_value', $about['counter_value'] ?? null);
        self::setText($blocks, 'about.counter_suffix', $about['counter_suffix'] ?? null);

        $whyChoose = $content['why_choose'] ?? [];
        self::setText($blocks, 'why_choose.eyebrow', $whyChoose['eyebrow'] ?? null);
        self::setText($blocks, 'why_choose.title', $whyChoose['title'] ?? null);
        self::setHtml($blocks, 'why_choose.intro', $whyChoose['intro'] ?? null);
        self::syncCardItems($blocks, 'why_choose', $whyChoose['items'] ?? []);

        $contact = $content['contact'] ?? [];
        self::setText($blocks, 'contact.eyebrow', $contact['eyebrow'] ?? null);
        self::setText($blocks, 'contact.title', $contact['title'] ?? null);
        self::setHtml($blocks, 'contact.body', $contact['body'] ?? null);
        self::setLink($blocks, 'contact.button', $contact['button_label'] ?? null, $contact['button_url'] ?? null);

        $services = $content['services'] ?? [];
        self::setText($blocks, 'services.eyebrow', $services['eyebrow'] ?? null);
        self::setText($blocks, 'services.title', $services['title'] ?? null);
        self::setHtml($blocks, 'services.intro', $services['intro'] ?? null);
        self::syncServiceItems($blocks, $services['items'] ?? []);

        $expertise = $content['expertise'] ?? [];
        self::setText($blocks, 'expertise.title', $expertise['title'] ?? null);
        self::syncExpertiseItems($blocks, $expertise['items'] ?? []);

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
        self::setMetadata($blocks, 'blog.posts', ['posts' => $blog['posts'] ?? []]);

        $cta = $content['cta'] ?? [];
        self::setBackground($blocks, 'background.cta', $cta['background_image'] ?? null);
        self::setText($blocks, 'cta.eyebrow', $cta['eyebrow'] ?? null);
        self::setText($blocks, 'cta.title', $cta['title'] ?? null);
        self::setHtml($blocks, 'cta.body', $cta['body'] ?? null);
        self::setLink($blocks, 'cta.button', $cta['button_label'] ?? null, $cta['button_url'] ?? null);

        foreach ($content['backgrounds'] ?? [] as $item) {
            $key = $item['block_key'] ?? ('background.'.($item['key'] ?? ''));
            if (! str_starts_with($key, 'background.')) {
                $key = 'background.'.$key;
            }
            self::setBackground($blocks, $key, $item['image'] ?? null);
        }

        foreach ($content['content_blocks'] ?? [] as $item) {
            $key = $item['block_key'] ?? null;
            if (! $key) {
                continue;
            }
            $block = $blocks->get($key);
            if (! $block) {
                continue;
            }
            $update = [];
            if (array_key_exists('value', $item)) {
                $update['value'] = $item['value'];
            }
            if (array_key_exists('image', $item)) {
                $update['image_path'] = $item['image'];
            }
            if (array_key_exists('metadata', $item)) {
                $update['metadata'] = is_array($item['metadata']) ? $item['metadata'] : json_decode($item['metadata'] ?? '', true);
            }
            if ($update !== []) {
                $block->update($update);
            }
        }

    }

    private static function mapCardSection($blocks, string $prefix): array
    {
        return [
            'eyebrow' => $blocks->get("{$prefix}.eyebrow")?->value,
            'title' => $blocks->get("{$prefix}.title")?->value,
            'intro' => $blocks->get("{$prefix}.intro")?->value,
            'items' => self::mapCardItems($blocks, $prefix),
        ];
    }

    private static function mapCardItems($blocks, string $prefix): array
    {
        return $blocks
            ->filter(fn (PageBlock $block): bool => str_starts_with($block->block_key, "{$prefix}.")
                && $block->block_key !== "{$prefix}.eyebrow"
                && $block->block_key !== "{$prefix}.title"
                && $block->block_key !== "{$prefix}.intro")
            ->sortBy('sort_order')
            ->map(function (PageBlock $block): array {
                $meta = $block->metadata ?? [];

                return [
                    'slug' => $meta['slug'] ?? '',
                    'title' => $meta['title'] ?? '',
                    'description' => $meta['description'] ?? '',
                    'image' => $block->image_path,
                    'alt' => $meta['alt'] ?? '',
                ];
            })
            ->values()
            ->all();
    }

    private static function syncCardSection($blocks, string $prefix, array $section): void
    {
        self::setText($blocks, "{$prefix}.eyebrow", $section['eyebrow'] ?? null);
        self::setText($blocks, "{$prefix}.title", $section['title'] ?? null);
        self::setHtml($blocks, "{$prefix}.intro", $section['intro'] ?? null);
        self::syncCardItems($blocks, $prefix, $section['items'] ?? []);
    }

    private static function mapServiceItems($blocks): array
    {
        return $blocks
            ->filter(fn (PageBlock $block): bool => str_starts_with($block->block_key, 'services.')
                && ! in_array($block->block_key, ['services.eyebrow', 'services.title', 'services.intro'], true))
            ->sortBy('sort_order')
            ->map(function (PageBlock $block): array {
                $meta = $block->metadata ?? [];

                return [
                    'slug' => $meta['slug'] ?? '',
                    'title' => $meta['title'] ?? '',
                    'image' => $block->image_path,
                    'alt' => $meta['alt'] ?? '',
                    'link' => $meta['link'] ?? '',
                    'button_text' => $meta['button_text'] ?? 'Learn More',
                ];
            })
            ->values()
            ->all();
    }

    private static function mapExpertiseItems($blocks): array
    {
        return $blocks
            ->filter(fn (PageBlock $block): bool => str_starts_with($block->block_key, 'expertise.')
                && $block->block_key !== 'expertise.title')
            ->sortBy('sort_order')
            ->map(function (PageBlock $block): array {
                $meta = $block->metadata ?? [];

                return [
                    'slug' => $meta['slug'] ?? '',
                    'title' => $meta['title'] ?? '',
                ];
            })
            ->values()
            ->all();
    }

    private static function syncServiceItems($blocks, array $items): void
    {
        foreach ($items as $item) {
            $slug = $item['slug'] ?? null;
            if (! $slug) {
                continue;
            }
            $block = $blocks->get("services.{$slug}");
            if (! $block) {
                continue;
            }
            $block->update([
                'image_path' => $item['image'] ?? $block->image_path,
                'metadata' => array_merge($block->metadata ?? [], [
                    'slug' => $slug,
                    'title' => $item['title'] ?? '',
                    'alt' => $item['alt'] ?? '',
                    'link' => $item['link'] ?? '',
                    'button_text' => $item['button_text'] ?? 'Learn More',
                ]),
            ]);
        }
    }

    private static function syncExpertiseItems($blocks, array $items): void
    {
        foreach ($items as $item) {
            $slug = $item['slug'] ?? null;
            if (! $slug) {
                continue;
            }
            $block = $blocks->get("expertise.{$slug}");
            if (! $block) {
                continue;
            }
            $block->update([
                'metadata' => array_merge($block->metadata ?? [], [
                    'slug' => $slug,
                    'title' => $item['title'] ?? '',
                ]),
            ]);
        }
    }

    private static function syncCardItems($blocks, string $prefix, array $items): void
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
                    'slug' => $slug,
                    'title' => $item['title'] ?? '',
                    'description' => $item['description'] ?? '',
                    'alt' => $item['alt'] ?? '',
                ]),
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

    private static function mapPreventionTips($blocks): array
    {
        $tips = $blocks->get('prevention.tips')?->metadata['tips'] ?? [];

        return collect($tips)
            ->map(function (array $tip): array {
                return [
                    'slug' => $tip['slug'] ?? '',
                    'title' => $tip['title'] ?? '',
                    'intro' => $tip['intro'] ?? null,
                    'list' => CmsListItems::forForm($tip['list'] ?? []),
                ];
            })
            ->values()
            ->all();
    }

    /** @param  array<int, array<string, mixed>>  $tips */
    private static function syncPreventionTipsData(array $tips): array
    {
        return collect($tips)
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
    }
}
