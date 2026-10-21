<?php

namespace App\Services;

use App\Models\Page;
use App\Models\PageBlock;
use Illuminate\Support\Collection;

class SiteSettingsBlockMapper
{
    public const SLUG = 'site-settings';

    public static function isSiteSettings(?string $slug): bool
    {
        return $slug === self::SLUG;
    }

    public static function toForm(Page $page): array
    {
        $blocks = $page->blocks->keyBy('block_key');

        return [
            'brand' => [
                'logo' => $blocks->get('brand.logo')?->image_path,
                'logo_alt' => $blocks->get('brand.logo')?->metadata['alt'] ?? null,
            ],
            'header' => [
                'sticky_title' => $blocks->get('header.sticky_title')?->value,
                'quote_button' => $blocks->get('header.quote_button')?->value,
            ],
            'footer' => [
                'newsletter_title' => $blocks->get('footer.newsletter_title')?->value,
                'newsletter_placeholder' => $blocks->get('footer.newsletter_placeholder')?->value,
                'newsletter_button' => $blocks->get('footer.newsletter_button')?->value,
                'services_heading' => $blocks->get('footer.services_heading')?->value,
                'contact_heading' => $blocks->get('footer.contact_heading')?->value,
                'copyright' => $blocks->get('footer.copyright')?->value,
            ],
        ];
    }

    public static function sync(Page $page, array $content): void
    {
        /** @var Collection<string, PageBlock> $blocks */
        $blocks = $page->blocks->keyBy('block_key');

        $brand = $content['brand'] ?? [];
        self::upsertImage($page, $blocks, 'brand.logo', 'brand', 'Site logo', $brand['logo'] ?? null, [
            'alt' => $brand['logo_alt'] ?? '7 states Pest Control',
        ]);

        $header = $content['header'] ?? [];
        self::upsertText($page, $blocks, 'header.sticky_title', 'header', 'Sticky bar title', $header['sticky_title'] ?? null);
        self::upsertText($page, $blocks, 'header.quote_button', 'header', 'Quote button label', $header['quote_button'] ?? null);

        $footer = $content['footer'] ?? [];
        self::upsertText($page, $blocks, 'footer.newsletter_title', 'footer', 'Newsletter title', $footer['newsletter_title'] ?? null);
        self::upsertText($page, $blocks, 'footer.newsletter_placeholder', 'footer', 'Newsletter placeholder', $footer['newsletter_placeholder'] ?? null);
        self::upsertText($page, $blocks, 'footer.newsletter_button', 'footer', 'Newsletter button', $footer['newsletter_button'] ?? null);
        self::upsertText($page, $blocks, 'footer.services_heading', 'footer', 'Services heading', $footer['services_heading'] ?? null);
        self::upsertText($page, $blocks, 'footer.contact_heading', 'footer', 'Contact heading', $footer['contact_heading'] ?? null);
        self::upsertText($page, $blocks, 'footer.copyright', 'footer', 'Copyright', $footer['copyright'] ?? null);
    }

    private static function upsertText(Page $page, $blocks, string $key, string $section, string $label, ?string $value): void
    {
        self::upsertBlock($page, $blocks, $key, $section, $label, 'text', $value, null);
    }

    private static function upsertImage(Page $page, $blocks, string $key, string $section, string $label, mixed $imagePath, ?array $metadata = null): void
    {
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
