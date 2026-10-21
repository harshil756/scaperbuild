<?php

namespace App\Services;

use App\Models\Page;
use App\Models\PageBlock;
use Illuminate\Support\Collection;

class LocationPageBlockMapper
{
    public static function isLocationPage(?string $slug): bool
    {
        return is_string($slug) && str_starts_with($slug, 'location-');
    }

    public static function toForm(Page $page): array
    {
        $blocks = $page->blocks->keyBy('block_key');

        return [
            'location_name' => $blocks->get('location.name')?->value,
            'hero' => [
                'headline' => $blocks->get('hero.headline')?->value,
                'subhead' => $blocks->get('hero.subhead')?->value,
                'trust_badge' => $blocks->get('hero.trust_badge')?->value,
                'cta_primary' => $blocks->get('hero.cta_primary')?->value,
                'cta_secondary' => $blocks->get('hero.cta_secondary')?->value,
                'stats' => self::metaItems($blocks, 'hero.stats'),
            ],
            'local' => [
                'heading' => $blocks->get('local.heading')?->value,
                'paragraphs' => self::metaTextRows($blocks, 'local.paragraphs'),
                'signs_title' => $blocks->get('local.signs_title')?->value,
                'signs_subtitle' => $blocks->get('local.signs_subtitle')?->value,
                'signs_list' => self::metaTextRows($blocks, 'local.signs_list'),
                'image' => $blocks->get('local.image')?->image_path,
                'image_alt' => $blocks->get('local.image')?->metadata['alt'] ?? null,
                'infographic_tag' => $blocks->get('local.infographic_tag')?->value,
                'infographic_title' => $blocks->get('local.infographic_title')?->value,
                'infographic_note' => $blocks->get('local.infographic_note')?->value,
                'infographic_points' => self::metaItems($blocks, 'local.infographic_points'),
            ],
            'why' => [
                'heading' => $blocks->get('why.heading')?->value,
                'paragraphs' => self::metaTextRows($blocks, 'why.paragraphs'),
                'trust_subtext' => $blocks->get('why.trust_subtext')?->value,
                'benefits' => self::metaItems($blocks, 'why.benefits'),
            ],
            'services' => [
                'title' => $blocks->get('services.title')?->value,
                'subtitle' => $blocks->get('services.subtitle')?->value,
                'items' => self::metaItems($blocks, 'services.items'),
            ],
            'process' => [
                'title' => $blocks->get('process.title')?->value,
                'subtitle' => $blocks->get('process.subtitle')?->value,
                'steps' => self::metaItems($blocks, 'process.steps'),
            ],
            'detailed' => [
                'title' => $blocks->get('detailed.title')?->value,
                'preview_html' => $blocks->get('detailed.preview_html')?->value,
                'expanded_html' => $blocks->get('detailed.expanded_html')?->value,
            ],
            'reviews' => [
                'rating_text' => $blocks->get('reviews.rating_text')?->value,
                'count_text' => $blocks->get('reviews.count_text')?->value,
            ],
            'faqs' => self::metaItems($blocks, 'faqs.items'),
        ];
    }

    public static function sync(Page $page, array $content): void
    {
        /** @var Collection<string, PageBlock> $blocks */
        $blocks = $page->blocks->keyBy('block_key');

        self::upsertText($page, $blocks, 'location.name', 'meta', 'Location name', $content['location_name'] ?? null);

        $hero = $content['hero'] ?? [];
        self::upsertText($page, $blocks, 'hero.headline', 'hero', 'Hero headline', $hero['headline'] ?? null);
        self::upsertText($page, $blocks, 'hero.subhead', 'hero', 'Hero subhead', $hero['subhead'] ?? null);
        self::upsertText($page, $blocks, 'hero.trust_badge', 'hero', 'Trust badge', $hero['trust_badge'] ?? null);
        self::upsertText($page, $blocks, 'hero.cta_primary', 'hero', 'Primary CTA', $hero['cta_primary'] ?? null);
        self::upsertText($page, $blocks, 'hero.cta_secondary', 'hero', 'Secondary CTA', $hero['cta_secondary'] ?? null);
        self::upsertMetaItems($page, $blocks, 'hero.stats', 'hero', 'Hero stats', $hero['stats'] ?? []);

        $local = $content['local'] ?? [];
        self::upsertText($page, $blocks, 'local.heading', 'local', 'Local heading', $local['heading'] ?? null);
        self::upsertMetaList($page, $blocks, 'local.paragraphs', 'local', 'Local paragraphs', $local['paragraphs'] ?? []);
        self::upsertText($page, $blocks, 'local.signs_title', 'local', 'Signs title', $local['signs_title'] ?? null);
        self::upsertText($page, $blocks, 'local.signs_subtitle', 'local', 'Signs subtitle', $local['signs_subtitle'] ?? null);
        self::upsertMetaList($page, $blocks, 'local.signs_list', 'local', 'Signs list', $local['signs_list'] ?? []);
        self::upsertImage(
            $page,
            $blocks,
            'local.image',
            'local',
            'Local side image',
            $local['image'] ?? null,
            ['alt' => $local['image_alt'] ?? ''],
        );
        self::upsertText($page, $blocks, 'local.infographic_tag', 'local', 'Infographic tag', $local['infographic_tag'] ?? null);
        self::upsertText($page, $blocks, 'local.infographic_title', 'local', 'Infographic title', $local['infographic_title'] ?? null);
        self::upsertText($page, $blocks, 'local.infographic_note', 'local', 'Infographic note', $local['infographic_note'] ?? null);
        self::upsertMetaItems($page, $blocks, 'local.infographic_points', 'local', 'Infographic points', $local['infographic_points'] ?? []);

        $why = $content['why'] ?? [];
        self::upsertText($page, $blocks, 'why.heading', 'why', 'Why heading', $why['heading'] ?? null);
        self::upsertMetaList($page, $blocks, 'why.paragraphs', 'why', 'Why paragraphs', $why['paragraphs'] ?? []);
        self::upsertText($page, $blocks, 'why.trust_subtext', 'why', 'Why trust subtext', $why['trust_subtext'] ?? null);
        self::upsertMetaItems($page, $blocks, 'why.benefits', 'why', 'Why benefits', $why['benefits'] ?? []);

        $services = $content['services'] ?? [];
        self::upsertText($page, $blocks, 'services.title', 'services', 'Services title', $services['title'] ?? null);
        self::upsertText($page, $blocks, 'services.subtitle', 'services', 'Services subtitle', $services['subtitle'] ?? null);
        self::upsertMetaItems($page, $blocks, 'services.items', 'services', 'Service items', $services['items'] ?? []);

        $process = $content['process'] ?? [];
        self::upsertText($page, $blocks, 'process.title', 'process', 'Process title', $process['title'] ?? null);
        self::upsertText($page, $blocks, 'process.subtitle', 'process', 'Process subtitle', $process['subtitle'] ?? null);
        self::upsertMetaItems($page, $blocks, 'process.steps', 'process', 'Process steps', $process['steps'] ?? []);

        $detailed = $content['detailed'] ?? [];
        self::upsertText($page, $blocks, 'detailed.title', 'detailed', 'Detailed title', $detailed['title'] ?? null);
        self::upsertHtml($page, $blocks, 'detailed.preview_html', 'detailed', 'Detailed preview HTML', $detailed['preview_html'] ?? null);
        self::upsertHtml($page, $blocks, 'detailed.expanded_html', 'detailed', 'Detailed expanded HTML', $detailed['expanded_html'] ?? null);

        $reviews = $content['reviews'] ?? [];
        self::upsertText($page, $blocks, 'reviews.rating_text', 'reviews', 'Reviews rating', $reviews['rating_text'] ?? null);
        self::upsertText($page, $blocks, 'reviews.count_text', 'reviews', 'Reviews count text', $reviews['count_text'] ?? null);

        self::upsertMetaItems($page, $blocks, 'faqs.items', 'faqs', 'FAQs', $content['faqs'] ?? []);
    }

    /** @param Collection<string, PageBlock> $blocks */
    private static function metaTextRows($blocks, string $key): array
    {
        $items = $blocks->get($key)?->metadata['items'] ?? [];
        if (! is_array($items)) {
            return [];
        }

        return collect($items)
            ->map(function (mixed $item): array {
                if (is_string($item)) {
                    return ['text' => $item];
                }
                if (is_array($item)) {
                    return ['text' => (string) ($item['text'] ?? '')];
                }

                return ['text' => ''];
            })
            ->filter(fn (array $row): bool => $row['text'] !== '')
            ->values()
            ->all();
    }

    /** @param Collection<string, PageBlock> $blocks */
    private static function metaItems($blocks, string $key): array
    {
        $items = $blocks->get($key)?->metadata['items'] ?? [];

        return is_array($items) ? array_values($items) : [];
    }

    /** @param Collection<string, PageBlock> $blocks */
    private static function upsertText(Page $page, $blocks, string $key, string $section, string $label, ?string $value): void
    {
        self::upsertBlock($page, $blocks, $key, $section, $label, 'text', $value, null);
    }

    /** @param Collection<string, PageBlock> $blocks */
    private static function upsertHtml(Page $page, $blocks, string $key, string $section, string $label, ?string $value): void
    {
        self::upsertBlock($page, $blocks, $key, $section, $label, 'html', $value, null);
    }

    /** @param Collection<string, PageBlock> $blocks */
    private static function upsertMetaList(Page $page, $blocks, string $key, string $section, string $label, array $items): void
    {
        $clean = [];
        foreach ($items as $item) {
            if (is_string($item) && $item !== '') {
                $clean[] = $item;
            } elseif (is_array($item) && isset($item['text']) && filled($item['text'])) {
                $clean[] = (string) $item['text'];
            }
        }
        self::upsertBlock($page, $blocks, $key, $section, $label, 'json', null, ['items' => $clean]);
    }

    /** @param Collection<string, PageBlock> $blocks */
    private static function upsertMetaItems(Page $page, $blocks, string $key, string $section, string $label, array $items): void
    {
        self::upsertBlock($page, $blocks, $key, $section, $label, 'json', null, ['items' => array_values($items)]);
    }

    /** @param Collection<string, PageBlock> $blocks */
    private static function upsertImage(
        Page $page,
        $blocks,
        string $key,
        string $section,
        string $label,
        mixed $imagePath,
        ?array $metadata = null,
    ): void {
        $block = $blocks->get($key);
        $path = is_array($imagePath) ? ($imagePath[0] ?? null) : $imagePath;
        $payload = [
            'section' => $section,
            'label' => $label,
            'type' => 'image',
            'image_path' => filled($path) ? $path : null,
        ];
        if ($metadata !== null) {
            $payload['metadata'] = array_merge($block?->metadata ?? [], $metadata);
        }

        if ($block) {
            $block->update($payload);

            return;
        }

        $created = $page->blocks()->create(array_merge($payload, [
            'block_key' => $key,
            'sort_order' => ($page->blocks()->max('sort_order') ?? 0) + 1,
        ]));
        $blocks->put($key, $created);
    }

    /** @param Collection<string, PageBlock> $blocks */
    private static function upsertBlock(
        Page $page,
        $blocks,
        string $key,
        string $section,
        string $label,
        string $type,
        ?string $value,
        ?array $metadata,
    ): void {
        $block = $blocks->get($key);
        $payload = [
            'section' => $section,
            'label' => $label,
            'type' => $type,
            'value' => $value,
        ];
        if ($metadata !== null) {
            $payload['metadata'] = $metadata;
        }

        if ($block) {
            $block->update($payload);

            return;
        }

        $created = $page->blocks()->create(array_merge($payload, [
            'block_key' => $key,
            'sort_order' => ($page->blocks()->max('sort_order') ?? 0) + 1,
        ]));
        $blocks->put($key, $created);
    }
}
