<?php

namespace App\Services;

use App\Models\Page;
use App\Models\PageBlock;

class HomePageBlockMapper
{
    private const SERVICE_SLUGS = ['cockroach', 'wasp', 'spider', 'moth', 'rodent', 'ant'];

    private const PROCESS_SLUGS = ['inspection', 'treatment_plan', 'extermination', 'monitoring', 'prevention'];

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
                'image' => $block?->image_path,
                'background' => $bg?->background_image_path,
            ];
        }

        $processSteps = [];
        foreach (self::PROCESS_SLUGS as $slug) {
            $block = $blocks->get("process.{$slug}");
            $meta = $block?->metadata ?? [];
            $processSteps[] = [
                'slug' => $slug,
                'title' => $meta['title'] ?? '',
                'description' => $meta['description'] ?? '',
                'alt' => $meta['alt'] ?? '',
                'image' => $block?->image_path,
            ];
        }

        $faqBlock = $blocks->get('faq.items');
        $faqSidebar = $blocks->get('faq.sidebar')?->metadata ?? [];
        $blogBlock = $blocks->get('blog.posts');

        return [
            'hero' => [
                'background_image' => $blocks->get('background.hero')?->background_image_path,
                'eyebrow' => $blocks->get('hero.eyebrow')?->value,
                'title' => $blocks->get('hero.title')?->value,
                'button_contact_label' => $blocks->get('hero.button_contact')?->value,
                'button_contact_url' => $blocks->get('hero.button_contact')?->link_url,
                'button_services_label' => $blocks->get('hero.button_services')?->value,
                'button_services_url' => $blocks->get('hero.button_services')?->link_url,
            ],
            'quote_form' => [
                'title' => $blocks->get('hero.quote_title')?->value,
                'subtitle' => $blocks->get('hero.quote_subtitle')?->value,
                'submit_text' => $blocks->get('quote_form.submit_text')?->value,
            ],
            'services' => [
                'background_image' => null,
                'eyebrow' => $blocks->get('services.eyebrow')?->value,
                'title' => $blocks->get('services.title')?->value,
                'intro' => $blocks->get('services.intro')?->value,
                'cards' => $serviceCards,
            ],
            'about' => [
                'background_image' => $blocks->get('background.about')?->background_image_path,
                'column_image' => $blocks->get('background.about.image_column')?->background_image_path,
                'eyebrow' => $blocks->get('about.eyebrow')?->value,
                'title' => $blocks->get('about.title')?->value,
                'body' => $blocks->get('about.body')?->value,
                'button_label' => $blocks->get('about.button')?->value ?? 'More About Us',
                'button_url' => $blocks->get('about.button')?->link_url ?? '/about-us',
            ],
            'features' => [
                'items' => [
                    ['text' => $blocks->get('features.prompt_service')?->value],
                    ['text' => $blocks->get('features.family_safe')?->value],
                    ['text' => $blocks->get('features.trained_techs')?->value],
                    ['text' => $blocks->get('features.professional')?->value],
                ],
            ],
            'why_choose' => [
                'background_image' => $blocks->get('background.why_choose')?->background_image_path,
                'eyebrow' => $blocks->get('why_choose.eyebrow')?->value,
                'title' => $blocks->get('why_choose.title')?->value,
                'intro' => $blocks->get('why_choose.intro')?->value,
                'benefits' => $blocks->get('why_choose.benefits')?->value,
            ],
            'cta' => [
                'background_image' => $blocks->get('background.cta')?->background_image_path,
                'eyebrow' => $blocks->get('cta.eyebrow')?->value,
                'title' => $blocks->get('cta.title')?->value,
                'body' => $blocks->get('cta.body')?->value,
                'button_label' => $blocks->get('cta.button')?->value ?? 'Contact Us',
                'button_url' => $blocks->get('cta.button')?->link_url ?? '/contact-us',
            ],
            'process' => [
                'eyebrow' => $blocks->get('process.eyebrow')?->value,
                'title' => $blocks->get('process.title')?->value,
                'intro' => $blocks->get('process.intro')?->value,
                'steps' => $processSteps,
            ],
            'reviews' => [
                'background_image' => $blocks->get('background.reviews')?->background_image_path,
                'eyebrow' => $blocks->get('reviews.eyebrow')?->value,
                'title' => $blocks->get('reviews.title')?->value,
                'subtitle' => $blocks->get('reviews.subtitle')?->value,
                'rating_label' => $blocks->get('reviews.rating_label')?->value,
            ],
            'faq' => [
                'eyebrow' => $blocks->get('faq.eyebrow')?->value,
                'title' => $blocks->get('faq.title')?->value,
                'image' => $blocks->get('faq.image')?->image_path,
                'sidebar_title' => $faqSidebar['title'] ?? '',
                'sidebar_text' => $faqSidebar['text'] ?? '',
                'sidebar_link' => $faqSidebar['link'] ?? '/contact-us',
                'items' => $faqBlock?->metadata['items'] ?? [],
            ],
            'blog' => [
                'eyebrow' => $blocks->get('blog.eyebrow')?->value,
                'title' => $blocks->get('blog.title')?->value,
                'posts' => $blogBlock?->metadata['posts'] ?? [],
            ],
        ];
    }

    public static function sync(Page $page, array $content): void
    {
        $blocks = $page->blocks->keyBy('block_key');

        $hero = $content['hero'] ?? [];
        self::setBackground($blocks, 'background.hero', $hero['background_image'] ?? null);
        self::setText($blocks, 'hero.eyebrow', $hero['eyebrow'] ?? null);
        self::setText($blocks, 'hero.title', $hero['title'] ?? null);
        self::setLink($blocks, 'hero.button_contact', $hero['button_contact_label'] ?? null, $hero['button_contact_url'] ?? null);
        self::setLink($blocks, 'hero.button_services', $hero['button_services_label'] ?? null, $hero['button_services_url'] ?? null);

        $quote = $content['quote_form'] ?? [];
        self::setText($blocks, 'hero.quote_title', $quote['title'] ?? null);
        self::setText($blocks, 'hero.quote_subtitle', $quote['subtitle'] ?? null);
        self::setText($blocks, 'quote_form.submit_text', $quote['submit_text'] ?? null);

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
            ]);
        }

        $about = $content['about'] ?? [];
        self::setBackground($blocks, 'background.about', $about['background_image'] ?? null);
        self::setBackground($blocks, 'background.about.image_column', $about['column_image'] ?? null);
        self::setText($blocks, 'about.eyebrow', $about['eyebrow'] ?? null);
        self::setText($blocks, 'about.title', $about['title'] ?? null);
        self::setHtml($blocks, 'about.body', $about['body'] ?? null);
        self::setLink($blocks, 'about.button', $about['button_label'] ?? null, $about['button_url'] ?? null);

        $featureKeys = ['features.prompt_service', 'features.family_safe', 'features.trained_techs', 'features.professional'];
        foreach (($content['features']['items'] ?? []) as $i => $item) {
            if (isset($featureKeys[$i])) {
                self::setText($blocks, $featureKeys[$i], $item['text'] ?? null);
            }
        }

        $why = $content['why_choose'] ?? [];
        self::setBackground($blocks, 'background.why_choose', $why['background_image'] ?? null);
        self::setText($blocks, 'why_choose.eyebrow', $why['eyebrow'] ?? null);
        self::setText($blocks, 'why_choose.title', $why['title'] ?? null);
        self::setHtml($blocks, 'why_choose.intro', $why['intro'] ?? null);
        self::setHtml($blocks, 'why_choose.benefits', $why['benefits'] ?? null);

        $cta = $content['cta'] ?? [];
        self::setBackground($blocks, 'background.cta', $cta['background_image'] ?? null);
        self::setText($blocks, 'cta.eyebrow', $cta['eyebrow'] ?? null);
        self::setText($blocks, 'cta.title', $cta['title'] ?? null);
        self::setHtml($blocks, 'cta.body', $cta['body'] ?? null);
        self::setLink($blocks, 'cta.button', $cta['button_label'] ?? null, $cta['button_url'] ?? null);

        $process = $content['process'] ?? [];
        self::setText($blocks, 'process.eyebrow', $process['eyebrow'] ?? null);
        self::setText($blocks, 'process.title', $process['title'] ?? null);
        self::setHtml($blocks, 'process.intro', $process['intro'] ?? null);
        foreach ($process['steps'] ?? [] as $step) {
            $slug = $step['slug'] ?? null;
            if (! $slug) {
                continue;
            }
            self::setProcessStep($blocks, "process.{$slug}", $step);
        }

        $reviews = $content['reviews'] ?? [];
        self::setBackground($blocks, 'background.reviews', $reviews['background_image'] ?? null);
        self::setText($blocks, 'reviews.eyebrow', $reviews['eyebrow'] ?? null);
        self::setText($blocks, 'reviews.title', $reviews['title'] ?? null);
        self::setText($blocks, 'reviews.subtitle', $reviews['subtitle'] ?? null);
        self::setText($blocks, 'reviews.rating_label', $reviews['rating_label'] ?? null);

        $faq = $content['faq'] ?? [];
        self::setText($blocks, 'faq.eyebrow', $faq['eyebrow'] ?? null);
        self::setText($blocks, 'faq.title', $faq['title'] ?? null);
        self::setImage($blocks, 'faq.image', $faq['image'] ?? null);
        self::setMetadata($blocks, 'faq.sidebar', [
            'title' => $faq['sidebar_title'] ?? '',
            'text' => $faq['sidebar_text'] ?? '',
            'link' => $faq['sidebar_link'] ?? '/contact-us',
        ]);
        self::setMetadata($blocks, 'faq.items', ['items' => $faq['items'] ?? []]);

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
    }

    private static function block(Page $page, $blocks, string $key): ?PageBlock
    {
        $block = $blocks->get($key);
        if ($block) {
            return $block;
        }

        return $page->blocks()->where('block_key', $key)->first();
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
                'description' => $step['description'] ?? '',
                'alt' => $step['alt'] ?? '',
            ]),
        ]);
    }
}
