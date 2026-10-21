<?php

namespace App\Services;

use App\Models\Page;
use App\Models\PageBlock;
use Illuminate\Support\Collection;

class SimplePageBlockMapper
{
    /** @var list<string> */
    public const SLUGS = [
        'terms-and-conditions',
        'thank-you',
        'location',
        'blog',
    ];

    public static function isSimplePage(?string $slug): bool
    {
        return is_string($slug) && in_array($slug, self::SLUGS, true);
    }

    public static function toForm(Page $page): array
    {
        $blocks = $page->blocks->keyBy('block_key');

        return [
            'hero' => [
                'title' => $blocks->get('hero.title')?->value,
                'breadcrumb' => $blocks->get('hero.breadcrumb')?->value,
                'background_image' => $blocks->get('background.hero')?->background_image_path,
            ],
            'body_html' => $blocks->get('body.html')?->value,
            'locations' => self::metaItems($blocks, 'locations.items'),
            'thank_you' => [
                'heading' => $blocks->get('thank_you.heading')?->value,
                'subheading' => $blocks->get('thank_you.subheading')?->value,
                'next_title' => $blocks->get('thank_you.next_title')?->value,
                'steps' => self::metaTextRows($blocks, 'thank_you.steps'),
                'home_button' => $blocks->get('thank_you.home_button')?->value,
                'help_title' => $blocks->get('thank_you.help_title')?->value,
            ],
        ];
    }

    public static function sync(Page $page, array $content): void
    {
        /** @var Collection<string, PageBlock> $blocks */
        $blocks = $page->blocks->keyBy('block_key');

        $hero = $content['hero'] ?? [];
        self::upsertText($page, $blocks, 'hero.title', 'hero', 'Hero title', $hero['title'] ?? null);
        self::upsertText($page, $blocks, 'hero.breadcrumb', 'hero', 'Breadcrumb label', $hero['breadcrumb'] ?? null);
        self::upsertBackground($page, $blocks, 'background.hero', 'hero', 'Hero background', $hero['background_image'] ?? null);
        self::upsertHtml($page, $blocks, 'body.html', 'body', 'Page body HTML', $content['body_html'] ?? null);
        self::upsertMetaItems($page, $blocks, 'locations.items', 'locations', 'Location links', $content['locations'] ?? []);

        $ty = $content['thank_you'] ?? [];
        self::upsertText($page, $blocks, 'thank_you.heading', 'thank_you', 'Thank you heading', $ty['heading'] ?? null);
        self::upsertText($page, $blocks, 'thank_you.subheading', 'thank_you', 'Thank you subheading', $ty['subheading'] ?? null);
        self::upsertText($page, $blocks, 'thank_you.next_title', 'thank_you', 'Next steps title', $ty['next_title'] ?? null);
        self::upsertMetaList($page, $blocks, 'thank_you.steps', 'thank_you', 'Next steps', $ty['steps'] ?? []);
        self::upsertText($page, $blocks, 'thank_you.home_button', 'thank_you', 'Home button', $ty['home_button'] ?? null);
        self::upsertText($page, $blocks, 'thank_you.help_title', 'thank_you', 'Help title', $ty['help_title'] ?? null);
    }

    private static function metaItems($blocks, string $key): array
    {
        $items = $blocks->get($key)?->metadata['items'] ?? [];

        return is_array($items) ? array_values($items) : [];
    }

    private static function metaTextRows($blocks, string $key): array
    {
        $items = $blocks->get($key)?->metadata['items'] ?? [];
        if (! is_array($items)) {
            return [];
        }

        return collect($items)
            ->map(fn ($item) => is_string($item) ? ['text' => $item] : ['text' => (string) ($item['text'] ?? '')])
            ->filter(fn (array $row) => $row['text'] !== '')
            ->values()
            ->all();
    }

    private static function upsertText(Page $page, $blocks, string $key, string $section, string $label, ?string $value): void
    {
        self::upsertBlock($page, $blocks, $key, $section, $label, 'text', $value, null);
    }

    private static function upsertHtml(Page $page, $blocks, string $key, string $section, string $label, ?string $value): void
    {
        self::upsertBlock($page, $blocks, $key, $section, $label, 'html', $value, null);
    }

    private static function upsertMetaList(Page $page, $blocks, string $key, string $section, string $label, array $items): void
    {
        $clean = [];
        foreach ($items as $item) {
            if (is_string($item) && $item !== '') {
                $clean[] = $item;
            } elseif (is_array($item) && filled($item['text'] ?? null)) {
                $clean[] = (string) $item['text'];
            }
        }
        self::upsertBlock($page, $blocks, $key, $section, $label, 'json', null, ['items' => $clean]);
    }

    private static function upsertMetaItems(Page $page, $blocks, string $key, string $section, string $label, array $items): void
    {
        self::upsertBlock($page, $blocks, $key, $section, $label, 'json', null, ['items' => array_values($items)]);
    }

    private static function upsertBackground(Page $page, $blocks, string $key, string $section, string $label, mixed $path): void
    {
        $block = $blocks->get($key);
        $image = is_array($path) ? ($path[0] ?? null) : $path;
        $payload = [
            'section' => $section,
            'label' => $label,
            'type' => 'background',
            'background_image_path' => filled($image) ? $image : null,
        ];

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

    private static function upsertBlock(Page $page, $blocks, string $key, string $section, string $label, string $type, ?string $value, ?array $metadata): void
    {
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
