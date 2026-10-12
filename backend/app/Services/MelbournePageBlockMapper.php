<?php

namespace App\Services;

use App\Models\Page;
use App\Models\PageBlock;

class MelbournePageBlockMapper
{
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
            'why_choose' => [
                'eyebrow' => $blocks->get('why_choose.eyebrow')?->value,
                'title' => $blocks->get('why_choose.title')?->value,
                'intro' => $blocks->get('why_choose.intro')?->value,
                'items' => self::mapCardItems($blocks, 'why_choose'),
            ],
            'contact' => [
                'background_image' => $blocks->get('background.contact')?->background_image_path,
                'side_background_image' => $blocks->get('background.contact_side')?->background_image_path,
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

        $whyChoose = $content['why_choose'] ?? [];
        self::setText($blocks, 'why_choose.eyebrow', $whyChoose['eyebrow'] ?? null);
        self::setText($blocks, 'why_choose.title', $whyChoose['title'] ?? null);
        self::setHtml($blocks, 'why_choose.intro', $whyChoose['intro'] ?? null);
        self::syncCardItems($blocks, 'why_choose', $whyChoose['items'] ?? []);

        $contact = $content['contact'] ?? [];
        self::setBackground($blocks, 'background.contact', $contact['background_image'] ?? null);
        self::setBackground($blocks, 'background.contact_side', $contact['side_background_image'] ?? null);
        self::setText($blocks, 'contact.eyebrow', $contact['eyebrow'] ?? null);
        self::setText($blocks, 'contact.title', $contact['title'] ?? null);
        self::setHtml($blocks, 'contact.body', $contact['body'] ?? null);
        self::setLink($blocks, 'contact.button', $contact['button_label'] ?? null, $contact['button_url'] ?? null);

        $services = $content['services'] ?? [];
        self::setText($blocks, 'services.eyebrow', $services['eyebrow'] ?? null);
        self::setText($blocks, 'services.title', $services['title'] ?? null);
        self::setHtml($blocks, 'services.intro', $services['intro'] ?? null);
        self::syncServiceItems($blocks, $services['items'] ?? []);
    }

    private static function mapCardItems($blocks, string $prefix): array
    {
        return $blocks
            ->filter(fn (PageBlock $block): bool => str_starts_with($block->block_key, "{$prefix}.")
                && ! in_array($block->block_key, ["{$prefix}.eyebrow", "{$prefix}.title", "{$prefix}.intro"], true))
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
                ];
            })
            ->values()
            ->all();
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
}
