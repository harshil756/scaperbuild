<?php

namespace App\Services;

use App\Models\Page;
use App\Models\PageBlock;
use App\Support\CmsListItems;

class ServicePageBlockMapper
{
    /** @var list<string> */
    public const SERVICE_PAGE_SLUGS = [
        'our-services',
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
        'commercial-pest-control',
    ];

    /** @var list<string> */
    public const COMMERCIAL_PAGE_SLUGS = [
        'commercial-pest-control',
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
        return self::mapForm($page, includeHeavyContent: true);
    }

    /**
     * Lighter payload for Filament edit screens.
     * Body content_blocks stay editable via the Content blocks relation tab
     * (loading 50–70 HTML blocks into the main form exhausts memory and blanks the UI).
     */
    public static function toFilamentForm(Page $page): array
    {
        return self::mapForm($page, includeHeavyContent: false);
    }

    private static function mapForm(Page $page, bool $includeHeavyContent): array
    {
        $blocks = $page->blocks->keyBy('block_key');

        $form = [
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
                'image' => $blocks->get('why_choose.image')?->image_path,
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
                'sidebar_image_elementor_id' => $blocks->get('faq.sidebar_image')?->metadata['elementor_id'] ?? null,
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

        if ($includeHeavyContent) {
            $form['content_blocks'] = $blocks
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
                ->all();
            $form['backgrounds'] = $blocks
                ->filter(fn (PageBlock $block): bool => str_starts_with($block->block_key, 'background.')
                    && ! in_array($block->block_key, ['background.hero', 'background.cta'], true))
                ->sortBy('sort_order')
                ->map(fn (PageBlock $block): array => [
                    'block_key' => $block->block_key,
                    'key' => str_replace('background.', '', $block->block_key),
                    'label' => $block->label,
                    'image' => $block->background_image_path,
                    'elementor_id' => $block->metadata['elementor_id'] ?? null,
                ])
                ->values()
                ->all();
        }

        return $form;
    }

    public static function sync(Page $page, array $content): void
    {
        $blocks = $page->blocks()->get()->keyBy('block_key');

        $hero = $content['hero'] ?? [];
        self::setBackground($page, $blocks, 'background.hero', $hero['background_image'] ?? null);
        self::setText($page, $blocks, 'hero.breadcrumb_parent', $hero['breadcrumb_parent'] ?? null);
        self::setText($page, $blocks, 'hero.breadcrumb_current', $hero['breadcrumb_current'] ?? null);
        self::setText($page, $blocks, 'hero.title', $hero['title'] ?? null);
        self::setText($page, $blocks, 'hero.heading', $hero['heading'] ?? null);
        self::setHtml($page, $blocks, 'hero.intro', $hero['intro'] ?? null);

        $quote = $content['quote_form'] ?? [];
        self::setText($page, $blocks, 'quote_form.title', $quote['title'] ?? null);
        self::setText($page, $blocks, 'quote_form.subtitle', $quote['subtitle'] ?? null);
        self::setText($page, $blocks, 'quote_form.submit_text', $quote['submit_text'] ?? null);

        self::syncCardSection($page, $blocks, 'species', $content['species'] ?? []);
        self::syncCardSection($page, $blocks, 'problems', $content['problems'] ?? []);

        $whyInside = $content['why_inside'] ?? [];
        self::setBackground($page, $blocks, 'background.why_inside', $whyInside['background_image'] ?? null);
        self::setText($page, $blocks, 'why_inside.eyebrow', $whyInside['eyebrow'] ?? null);
        self::setText($page, $blocks, 'why_inside.title', $whyInside['title'] ?? null);
        self::setHtml($page, $blocks, 'why_inside.list_html', $whyInside['list_html'] ?? null);
        self::setHtml($page, $blocks, 'why_inside.footer', $whyInside['footer'] ?? null);
        self::setImage($page, $blocks, 'why_inside.image', $whyInside['image'] ?? null);

        $prevention = $content['prevention'] ?? [];
        self::setText($page, $blocks, 'prevention.eyebrow', $prevention['eyebrow'] ?? null);
        self::setText($page, $blocks, 'prevention.title', $prevention['title'] ?? null);
        self::setHtml($page, $blocks, 'prevention.intro', $prevention['intro'] ?? null);
        self::setMetadata($page, $blocks, 'prevention.tips', ['tips' => self::syncPreventionTipsData($prevention['tips'] ?? [])]);

        self::syncCardItems($page, $blocks, 'features', $content['features']['items'] ?? []);
        self::syncCardItems($page, $blocks, 'cards', $content['cards']['items'] ?? []);

        $about = $content['about'] ?? [];
        self::setText($page, $blocks, 'about.title', $about['title'] ?? null);
        self::setText($page, $blocks, 'about.subtitle', $about['subtitle'] ?? null);
        self::setHtml($page, $blocks, 'about.intro', $about['intro'] ?? null);
        self::setImage($page, $blocks, 'about.image', $about['image'] ?? null);
        self::setText($page, $blocks, 'about.counter_title', $about['counter_title'] ?? null);
        self::setText($page, $blocks, 'about.counter_value', $about['counter_value'] ?? null);
        self::setText($page, $blocks, 'about.counter_suffix', $about['counter_suffix'] ?? null);

        $whyChoose = $content['why_choose'] ?? [];
        self::setText($page, $blocks, 'why_choose.eyebrow', $whyChoose['eyebrow'] ?? null);
        self::setText($page, $blocks, 'why_choose.title', $whyChoose['title'] ?? null);
        self::setHtml($page, $blocks, 'why_choose.intro', $whyChoose['intro'] ?? null);
        self::setImage($page, $blocks, 'why_choose.image', $whyChoose['image'] ?? null);
        self::syncCardItems($page, $blocks, 'why_choose', $whyChoose['items'] ?? []);

        $contact = $content['contact'] ?? [];
        self::setText($page, $blocks, 'contact.eyebrow', $contact['eyebrow'] ?? null);
        self::setText($page, $blocks, 'contact.title', $contact['title'] ?? null);
        self::setHtml($page, $blocks, 'contact.body', $contact['body'] ?? null);
        self::setLink($page, $blocks, 'contact.button', $contact['button_label'] ?? null, $contact['button_url'] ?? null);

        $services = $content['services'] ?? [];
        self::setText($page, $blocks, 'services.eyebrow', $services['eyebrow'] ?? null);
        self::setText($page, $blocks, 'services.title', $services['title'] ?? null);
        self::setHtml($page, $blocks, 'services.intro', $services['intro'] ?? null);
        self::syncServiceItems($page, $blocks, $services['items'] ?? []);

        $expertise = $content['expertise'] ?? [];
        self::setText($page, $blocks, 'expertise.title', $expertise['title'] ?? null);
        self::syncExpertiseItems($page, $blocks, $expertise['items'] ?? []);

        $faq = $content['faq'] ?? [];
        self::setText($page, $blocks, 'faq.title', $faq['title'] ?? null);
        self::setImage($page, $blocks, 'faq.sidebar_image', $faq['sidebar_image'] ?? null);
        self::setText($page, $blocks, 'faq.sidebar_cta_title', $faq['sidebar_cta_title'] ?? null);
        self::setText($page, $blocks, 'faq.sidebar_cta_body', $faq['sidebar_cta_body'] ?? null);
        self::setLink(
            $page,
            $blocks,
            'faq.sidebar_cta_button',
            $faq['sidebar_cta_button_label'] ?? null,
            $faq['sidebar_cta_button_url'] ?? null,
        );
        self::setMetadata($page, $blocks, 'faq.items', ['items' => $faq['items'] ?? []]);

        $reviews = $content['reviews'] ?? [];
        self::setText($page, $blocks, 'reviews.eyebrow', $reviews['eyebrow'] ?? null);
        self::setText($page, $blocks, 'reviews.title', $reviews['title'] ?? null);
        self::setText($page, $blocks, 'reviews.subtitle', $reviews['subtitle'] ?? null);
        self::setText($page, $blocks, 'reviews.rating_label', $reviews['rating_label'] ?? null);
        self::setHtml($page, $blocks, 'reviews.count_text', $reviews['count_text'] ?? null);

        $blog = $content['blog'] ?? [];
        self::setText($page, $blocks, 'blog.eyebrow', $blog['eyebrow'] ?? null);
        self::setText($page, $blocks, 'blog.title', $blog['title'] ?? null);
        self::setMetadata($page, $blocks, 'blog.posts', ['posts' => $blog['posts'] ?? []]);

        $cta = $content['cta'] ?? [];
        self::setBackground($page, $blocks, 'background.cta', $cta['background_image'] ?? null);
        self::setText($page, $blocks, 'cta.eyebrow', $cta['eyebrow'] ?? null);
        self::setText($page, $blocks, 'cta.title', $cta['title'] ?? null);
        self::setHtml($page, $blocks, 'cta.body', $cta['body'] ?? null);
        self::setLink($page, $blocks, 'cta.button', $cta['button_label'] ?? null, $cta['button_url'] ?? null);

        foreach ($content['backgrounds'] ?? [] as $item) {
            $key = $item['block_key'] ?? ('background.'.($item['key'] ?? ''));
            if (! str_starts_with($key, 'background.')) {
                $key = 'background.'.$key;
            }
            self::setBackground($page, $blocks, $key, $item['image'] ?? null);
        }

        foreach ($content['content_blocks'] ?? [] as $item) {
            $key = $item['block_key'] ?? null;
            if (! $key) {
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
                $update['metadata'] = is_array($item['metadata'])
                    ? $item['metadata']
                    : json_decode($item['metadata'] ?? '', true);
            }
            if (array_key_exists('label', $item) && filled($item['label'] ?? null)) {
                $update['label'] = $item['label'];
            }
            if (array_key_exists('type', $item) && filled($item['type'] ?? null)) {
                $update['type'] = $item['type'];
            }

            if ($update === []) {
                continue;
            }

            self::upsert(
                $page,
                $blocks,
                $key,
                array_merge([
                    'section' => 'content',
                    'label' => $item['label'] ?? $key,
                    'type' => $item['type'] ?? 'html',
                    'sort_order' => 900,
                ], $update),
            );
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
                    'widget_id' => $meta['id'] ?? null,
                    'title' => $meta['title'] ?? '',
                    'description' => $meta['description'] ?? '',
                    'image' => $block->image_path,
                    'alt' => $meta['alt'] ?? '',
                ];
            })
            ->values()
            ->all();
    }

    private static function syncCardSection(Page $page, $blocks, string $prefix, array $section): void
    {
        self::setText($page, $blocks, "{$prefix}.eyebrow", $section['eyebrow'] ?? null);
        self::setText($page, $blocks, "{$prefix}.title", $section['title'] ?? null);
        self::setHtml($page, $blocks, "{$prefix}.intro", $section['intro'] ?? null);
        self::syncCardItems($page, $blocks, $prefix, $section['items'] ?? []);
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
                    'widget_id' => $meta['id'] ?? null,
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

    private static function syncServiceItems(Page $page, $blocks, array $items): void
    {
        foreach ($items as $index => $item) {
            $slug = $item['slug'] ?? null;
            if (! $slug) {
                continue;
            }
            self::upsert($page, $blocks, "services.{$slug}", [
                'section' => 'services',
                'label' => 'Service: '.($item['title'] ?? $slug),
                'type' => 'image',
                'sort_order' => 200 + $index,
                'image_path' => $item['image'] ?? null,
                'metadata' => [
                    'slug' => $slug,
                    'title' => $item['title'] ?? '',
                    'alt' => $item['alt'] ?? '',
                    'link' => $item['link'] ?? '',
                    'button_text' => $item['button_text'] ?? 'Learn More',
                ],
            ]);
        }
    }

    private static function syncExpertiseItems(Page $page, $blocks, array $items): void
    {
        foreach ($items as $index => $item) {
            $slug = $item['slug'] ?? null;
            if (! $slug) {
                continue;
            }
            self::upsert($page, $blocks, "expertise.{$slug}", [
                'section' => 'expertise',
                'label' => 'Expertise: '.($item['title'] ?? $slug),
                'type' => 'json',
                'sort_order' => 300 + $index,
                'metadata' => [
                    'slug' => $slug,
                    'title' => $item['title'] ?? '',
                ],
            ]);
        }
    }

    private static function syncCardItems(Page $page, $blocks, string $prefix, array $items): void
    {
        foreach ($items as $index => $item) {
            $slug = $item['slug'] ?? null;
            if (! $slug) {
                continue;
            }
            self::upsert($page, $blocks, "{$prefix}.{$slug}", [
                'section' => $prefix,
                'label' => 'Card: '.($item['title'] ?? $slug),
                'type' => 'image',
                'sort_order' => 100 + $index,
                'image_path' => $item['image'] ?? null,
                'metadata' => [
                    'slug' => $slug,
                    'title' => $item['title'] ?? '',
                    'description' => $item['description'] ?? '',
                    'alt' => $item['alt'] ?? '',
                ],
            ]);
        }
    }

    private static function setText(Page $page, $blocks, string $key, ?string $value): void
    {
        self::upsert($page, $blocks, $key, ['value' => $value, 'type' => 'text']);
    }

    private static function setHtml(Page $page, $blocks, string $key, ?string $value): void
    {
        self::upsert($page, $blocks, $key, ['value' => $value, 'type' => 'html']);
    }

    private static function setLink(Page $page, $blocks, string $key, ?string $label, ?string $url): void
    {
        self::upsert($page, $blocks, $key, [
            'value' => $label,
            'link_url' => $url,
            'type' => 'link',
        ]);
    }

    private static function setBackground(Page $page, $blocks, string $key, mixed $path): void
    {
        self::upsert($page, $blocks, $key, [
            'background_image_path' => self::normalizeUploadPath($path),
            'type' => 'background',
        ]);
    }

    private static function setImage(Page $page, $blocks, string $key, mixed $path): void
    {
        self::upsert($page, $blocks, $key, [
            'image_path' => self::normalizeUploadPath($path),
            'type' => 'image',
        ]);
    }

    private static function normalizeUploadPath(mixed $path): ?string
    {
        if (is_array($path)) {
            $path = \Illuminate\Support\Arr::first($path);
        }

        return filled($path) && is_string($path) ? $path : null;
    }

    private static function setMetadata(Page $page, $blocks, string $key, array $metadata): void
    {
        $existing = $blocks->get($key);
        $merged = array_merge($existing?->metadata ?? [], $metadata);
        self::upsert($page, $blocks, $key, [
            'metadata' => $merged,
            'type' => 'json',
        ]);
    }

    /**
     * @param  \Illuminate\Support\Collection<string, PageBlock>  $blocks
     * @param  array<string, mixed>  $attributes
     */
    private static function upsert(Page $page, $blocks, string $key, array $attributes): void
    {
        $meta = self::blockMetaForKey($key);
        $payload = array_merge([
            'section' => $meta['section'],
            'label' => $meta['label'],
            'type' => $meta['type'],
            'sort_order' => $meta['sort_order'],
        ], $attributes);

        $block = $blocks->get($key);
        if ($block) {
            // Keep existing type/section/label/sort unless explicitly overridden with non-empty values.
            $update = $payload;
            unset($update['section'], $update['label'], $update['type'], $update['sort_order']);

            if (array_key_exists('type', $attributes)) {
                $update['type'] = $attributes['type'];
            }
            if (array_key_exists('label', $attributes) && filled($attributes['label'])) {
                $update['label'] = $attributes['label'];
            }
            if (array_key_exists('section', $attributes) && filled($attributes['section'])) {
                $update['section'] = $attributes['section'];
            }
            if (array_key_exists('sort_order', $attributes)) {
                $update['sort_order'] = $attributes['sort_order'];
            }

            $block->update($update);

            return;
        }

        $created = $page->blocks()->create([
            'block_key' => $key,
            ...$payload,
        ]);

        $blocks->put($key, $created);
    }

    /** @return array{section: string, label: string, type: string, sort_order: int} */
    private static function blockMetaForKey(string $key): array
    {
        $defaults = [
            'background.hero' => ['section' => 'hero', 'label' => 'Hero background', 'type' => 'background', 'sort_order' => 1],
            'hero.breadcrumb_parent' => ['section' => 'hero', 'label' => 'Hero breadcrumb parent', 'type' => 'text', 'sort_order' => 2],
            'hero.breadcrumb_current' => ['section' => 'hero', 'label' => 'Hero breadcrumb current', 'type' => 'text', 'sort_order' => 3],
            'hero.title' => ['section' => 'hero', 'label' => 'Hero title', 'type' => 'text', 'sort_order' => 4],
            'hero.heading' => ['section' => 'hero', 'label' => 'Hero heading', 'type' => 'text', 'sort_order' => 5],
            'hero.intro' => ['section' => 'hero', 'label' => 'Hero intro', 'type' => 'html', 'sort_order' => 6],
            'quote_form.title' => ['section' => 'quote_form', 'label' => 'Quote form title', 'type' => 'text', 'sort_order' => 10],
            'quote_form.subtitle' => ['section' => 'quote_form', 'label' => 'Quote form subtitle', 'type' => 'text', 'sort_order' => 11],
            'quote_form.submit_text' => ['section' => 'quote_form', 'label' => 'Quote form submit', 'type' => 'text', 'sort_order' => 12],
            'faq.title' => ['section' => 'faq', 'label' => 'FAQ title', 'type' => 'text', 'sort_order' => 40],
            'faq.sidebar_image' => ['section' => 'faq', 'label' => 'FAQ sidebar image', 'type' => 'image', 'sort_order' => 41],
            'faq.sidebar_cta_title' => ['section' => 'faq', 'label' => 'FAQ sidebar CTA title', 'type' => 'text', 'sort_order' => 42],
            'faq.sidebar_cta_body' => ['section' => 'faq', 'label' => 'FAQ sidebar CTA body', 'type' => 'text', 'sort_order' => 43],
            'faq.sidebar_cta_button' => ['section' => 'faq', 'label' => 'FAQ sidebar CTA button', 'type' => 'link', 'sort_order' => 44],
            'faq.items' => ['section' => 'faq', 'label' => 'FAQ items', 'type' => 'json', 'sort_order' => 45],
            'reviews.eyebrow' => ['section' => 'reviews', 'label' => 'Reviews eyebrow', 'type' => 'text', 'sort_order' => 50],
            'reviews.title' => ['section' => 'reviews', 'label' => 'Reviews title', 'type' => 'text', 'sort_order' => 51],
            'reviews.subtitle' => ['section' => 'reviews', 'label' => 'Reviews subtitle', 'type' => 'text', 'sort_order' => 52],
            'reviews.rating_label' => ['section' => 'reviews', 'label' => 'Reviews rating label', 'type' => 'text', 'sort_order' => 53],
            'reviews.count_text' => ['section' => 'reviews', 'label' => 'Reviews count text', 'type' => 'html', 'sort_order' => 54],
            'blog.eyebrow' => ['section' => 'blog', 'label' => 'Blog eyebrow', 'type' => 'text', 'sort_order' => 60],
            'blog.title' => ['section' => 'blog', 'label' => 'Blog title', 'type' => 'text', 'sort_order' => 61],
            'blog.posts' => ['section' => 'blog', 'label' => 'Blog posts', 'type' => 'json', 'sort_order' => 62],
            'cta.eyebrow' => ['section' => 'cta', 'label' => 'CTA eyebrow', 'type' => 'text', 'sort_order' => 70],
            'cta.title' => ['section' => 'cta', 'label' => 'CTA title', 'type' => 'text', 'sort_order' => 71],
            'cta.body' => ['section' => 'cta', 'label' => 'CTA body', 'type' => 'html', 'sort_order' => 72],
            'cta.button' => ['section' => 'cta', 'label' => 'CTA button', 'type' => 'link', 'sort_order' => 73],
            'background.cta' => ['section' => 'cta', 'label' => 'CTA background', 'type' => 'background', 'sort_order' => 74],
            'prevention.tips' => ['section' => 'prevention', 'label' => 'Prevention tips', 'type' => 'json', 'sort_order' => 80],
        ];

        if (isset($defaults[$key])) {
            return $defaults[$key];
        }

        $section = explode('.', $key)[0] ?: 'content';

        return [
            'section' => $section,
            'label' => $key,
            'type' => 'text',
            'sort_order' => 99,
        ];
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
