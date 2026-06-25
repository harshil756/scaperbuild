<?php

namespace App\Services;

use App\Models\Page;
use App\Models\PageBlock;
use App\Support\CmsListItems;

class AboutPageBlockMapper
{
    private const SERVICE_SLUGS = ['rodent', 'cockroach', 'bed_bug', 'ant'];

    private const PROCESS_SLUGS = ['inspection', 'treatment_plan', 'eco_friendly', 'preventive'];

    public static function toForm(Page $page): array
    {
        $blocks = $page->blocks->keyBy('block_key');

        $serviceCards = [];
        foreach (self::SERVICE_SLUGS as $slug) {
            $block = $blocks->get("services.{$slug}");
            $bg = $blocks->get("background.services.{$slug}");
            $meta = $block?->metadata ?? [];
            $serviceCards[] = [
                'slug' => $slug,
                'title' => $meta['title'] ?? '',
                'price_text' => $meta['price_text'] ?? '',
                'badge' => $meta['badge'] ?? '',
                'alt' => $meta['alt'] ?? '',
                'call_label' => $meta['call_label'] ?? 'Call Now',
                'call_url' => $meta['call_url'] ?? 'tel:+61434660060',
                'image' => $block?->image_path,
                'background' => $bg?->background_image_path,
            ];
        }

        $processSteps = [];
        foreach (self::PROCESS_SLUGS as $slug) {
            $block = $blocks->get("process.{$slug}");
            $meta = $block?->metadata ?? [];
            $bg = $slug === 'preventive'
                ? $blocks->get('background.process.preventive')?->background_image_path
                : null;
            $processSteps[] = [
                'slug' => $slug,
                'title' => $meta['title'] ?? '',
                'body_html' => $meta['body_html'] ?? '',
                'list_items' => CmsListItems::forForm($meta['list_items'] ?? []),
                'alt' => $meta['alt'] ?? '',
                'image' => $block?->image_path,
                'background' => $bg,
            ];
        }

        $counter = $blocks->get('stand_for.counter')?->metadata ?? [];
        $mission = $blocks->get('stand_for.mission')?->metadata ?? [];
        $vision = $blocks->get('stand_for.vision')?->metadata ?? [];

        return [
            'hero' => [
                'background_image' => $blocks->get('background.hero')?->background_image_path,
                'breadcrumb' => $blocks->get('hero.breadcrumb')?->value,
                'title' => $blocks->get('hero.title')?->value,
                'heading' => $blocks->get('hero.heading')?->value,
                'body' => $blocks->get('hero.body')?->value,
                'button_label' => $blocks->get('hero.button')?->value ?? 'Find Services',
                'button_url' => $blocks->get('hero.button')?->link_url ?? '/pest-control-services',
            ],
            'quote_form' => [
                'title' => $blocks->get('quote_form.title')?->value,
                'subtitle' => $blocks->get('quote_form.subtitle')?->value,
                'submit_text' => $blocks->get('quote_form.submit_text')?->value,
            ],
            'stand_for' => [
                'counter_title' => $blocks->get('stand_for.counter_title')?->value,
                'counter_from' => $counter['from'] ?? 0,
                'counter_to' => $counter['to'] ?? 10000,
                'counter_display' => $counter['display'] ?? '10,000',
                'counter_suffix' => $counter['suffix'] ?? '+',
                'image' => $blocks->get('stand_for.image')?->image_path,
                'image_alt' => $blocks->get('stand_for.image')?->metadata['alt'] ?? '',
                'eyebrow' => $blocks->get('stand_for.eyebrow')?->value,
                'title' => $blocks->get('stand_for.title')?->value,
                'purpose' => $blocks->get('stand_for.purpose')?->value,
                'mission_title' => $mission['title'] ?? '',
                'mission_text' => $mission['text'] ?? '',
                'vision_title' => $vision['title'] ?? '',
                'vision_text' => $vision['text'] ?? '',
            ],
            'cta' => [
                'background_image' => $blocks->get('background.cta')?->background_image_path,
                'title' => $blocks->get('cta.title')?->value,
                'body' => $blocks->get('cta.body')?->value,
                'button_label' => $blocks->get('cta.button')?->value ?? 'Contact Us',
                'button_url' => $blocks->get('cta.button')?->link_url ?? '/contact-us',
            ],
            'services' => [
                'eyebrow' => $blocks->get('services.eyebrow')?->value,
                'title' => $blocks->get('services.title')?->value,
                'intro' => $blocks->get('services.intro')?->value,
                'cards' => $serviceCards,
                'more_button_label' => $blocks->get('services.more_button')?->value ?? 'More Services',
                'more_button_url' => $blocks->get('services.more_button')?->link_url ?? '/our-services',
            ],
            'why_choose' => [
                'background_image' => $blocks->get('background.why_choose')?->background_image_path,
                'eyebrow' => $blocks->get('why_choose.eyebrow')?->value,
                'title' => $blocks->get('why_choose.title')?->value,
                'intro' => $blocks->get('why_choose.intro')?->value,
                'list_left' => CmsListItems::forForm($blocks->get('why_choose.list_left')?->metadata['items'] ?? []),
                'list_right' => CmsListItems::forForm($blocks->get('why_choose.list_right')?->metadata['items'] ?? []),
            ],
            'process' => [
                'eyebrow' => $blocks->get('process.eyebrow')?->value,
                'title' => $blocks->get('process.title')?->value,
                'intro' => $blocks->get('process.intro')?->value,
                'steps' => $processSteps,
            ],
            'reviews' => [
                'eyebrow' => $blocks->get('reviews.eyebrow')?->value,
                'title' => $blocks->get('reviews.title')?->value,
                'subtitle' => $blocks->get('reviews.subtitle')?->value,
                'rating_label' => $blocks->get('reviews.rating_label')?->value,
                'count_text' => $blocks->get('reviews.count_text')?->value,
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
        self::setHtml($blocks, 'hero.body', $hero['body'] ?? null);
        self::setLink($blocks, 'hero.button', $hero['button_label'] ?? null, $hero['button_url'] ?? null);

        $quote = $content['quote_form'] ?? [];
        self::setText($blocks, 'quote_form.title', $quote['title'] ?? null);
        self::setText($blocks, 'quote_form.subtitle', $quote['subtitle'] ?? null);
        self::setText($blocks, 'quote_form.submit_text', $quote['submit_text'] ?? null);

        $stand = $content['stand_for'] ?? [];
        self::setText($blocks, 'stand_for.counter_title', $stand['counter_title'] ?? null);
        self::setMetadata($blocks, 'stand_for.counter', [
            'from' => (int) ($stand['counter_from'] ?? 0),
            'to' => (int) ($stand['counter_to'] ?? 10000),
            'display' => $stand['counter_display'] ?? '10,000',
            'suffix' => $stand['counter_suffix'] ?? '+',
            'duration' => 2000,
        ]);
        self::setImage($blocks, 'stand_for.image', $stand['image'] ?? null);
        if ($blocks->get('stand_for.image') && isset($stand['image_alt'])) {
            self::setMetadata($blocks, 'stand_for.image', ['alt' => $stand['image_alt']]);
        }
        self::setText($blocks, 'stand_for.eyebrow', $stand['eyebrow'] ?? null);
        self::setText($blocks, 'stand_for.title', $stand['title'] ?? null);
        self::setHtml($blocks, 'stand_for.purpose', $stand['purpose'] ?? null);
        self::setMetadata($blocks, 'stand_for.mission', [
            'title' => $stand['mission_title'] ?? '',
            'text' => $stand['mission_text'] ?? '',
        ]);
        self::setMetadata($blocks, 'stand_for.vision', [
            'title' => $stand['vision_title'] ?? '',
            'text' => $stand['vision_text'] ?? '',
        ]);

        $cta = $content['cta'] ?? [];
        self::setBackground($blocks, 'background.cta', $cta['background_image'] ?? null);
        self::setText($blocks, 'cta.title', $cta['title'] ?? null);
        self::setHtml($blocks, 'cta.body', $cta['body'] ?? null);
        self::setLink($blocks, 'cta.button', $cta['button_label'] ?? null, $cta['button_url'] ?? null);

        $services = $content['services'] ?? [];
        self::setText($blocks, 'services.eyebrow', $services['eyebrow'] ?? null);
        self::setText($blocks, 'services.title', $services['title'] ?? null);
        self::setHtml($blocks, 'services.intro', $services['intro'] ?? null);
        foreach ($services['cards'] ?? [] as $card) {
            $slug = $card['slug'] ?? null;
            if (! $slug) {
                continue;
            }
            self::setBackground($blocks, "background.services.{$slug}", $card['background'] ?? null);
            self::setJsonCard($blocks, "services.{$slug}", $card['image'] ?? null, [
                'title' => $card['title'] ?? '',
                'price_text' => $card['price_text'] ?? '',
                'badge' => $card['badge'] ?? '',
                'alt' => $card['alt'] ?? '',
                'call_label' => $card['call_label'] ?? 'Call Now',
                'call_url' => $card['call_url'] ?? 'tel:+61434660060',
            ]);
        }
        self::setLink(
            $blocks,
            'services.more_button',
            $services['more_button_label'] ?? null,
            $services['more_button_url'] ?? null,
        );

        $why = $content['why_choose'] ?? [];
        self::setBackground($blocks, 'background.why_choose', $why['background_image'] ?? null);
        self::setText($blocks, 'why_choose.eyebrow', $why['eyebrow'] ?? null);
        self::setText($blocks, 'why_choose.title', $why['title'] ?? null);
        self::setHtml($blocks, 'why_choose.intro', $why['intro'] ?? null);
        self::setMetadata($blocks, 'why_choose.list_left', ['items' => CmsListItems::forStorage($why['list_left'] ?? [])]);
        self::setMetadata($blocks, 'why_choose.list_right', ['items' => CmsListItems::forStorage($why['list_right'] ?? [])]);

        $process = $content['process'] ?? [];
        self::setText($blocks, 'process.eyebrow', $process['eyebrow'] ?? null);
        self::setText($blocks, 'process.title', $process['title'] ?? null);
        self::setHtml($blocks, 'process.intro', $process['intro'] ?? null);
        foreach ($process['steps'] ?? [] as $step) {
            $slug = $step['slug'] ?? null;
            if (! $slug) {
                continue;
            }
            if ($slug === 'preventive') {
                self::setBackground($blocks, 'background.process.preventive', $step['background'] ?? null);
            }
            self::setProcessStep($blocks, "process.{$slug}", $step);
        }

        $reviews = $content['reviews'] ?? [];
        self::setText($blocks, 'reviews.eyebrow', $reviews['eyebrow'] ?? null);
        self::setText($blocks, 'reviews.title', $reviews['title'] ?? null);
        self::setText($blocks, 'reviews.subtitle', $reviews['subtitle'] ?? null);
        self::setText($blocks, 'reviews.rating_label', $reviews['rating_label'] ?? null);
        self::setHtml($blocks, 'reviews.count_text', $reviews['count_text'] ?? null);
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

    private static function setImage($blocks, string $key, ?string $path): void
    {
        $blocks->get($key)?->update(['image_path' => $path]);
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

    private static function setJsonCard($blocks, string $key, ?string $imagePath, array $meta): void
    {
        $block = $blocks->get($key);
        if (! $block) {
            return;
        }
        $block->update([
            'image_path' => $imagePath,
            'metadata' => array_merge($block->metadata ?? [], $meta),
        ]);
    }

    private static function setProcessStep($blocks, string $key, array $step): void
    {
        $block = $blocks->get($key);
        if (! $block) {
            return;
        }
        $block->update([
            'image_path' => $step['image'] ?? $block->image_path,
            'metadata' => array_merge($block->metadata ?? [], [
                'title' => $step['title'] ?? '',
                'body_html' => $step['body_html'] ?? '',
                'list_items' => CmsListItems::forStorage($step['list_items'] ?? []),
                'alt' => $step['alt'] ?? '',
            ]),
        ]);
    }

}
