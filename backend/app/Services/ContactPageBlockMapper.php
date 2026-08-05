<?php

namespace App\Services;

use App\Models\Page;

class ContactPageBlockMapper
{
    public static function toForm(Page $page): array
    {
        $blocks = $page->blocks->keyBy('block_key');

        return [
            'hero' => [
                'background_image' => $blocks->get('background.hero')?->background_image_path,
                'title' => $blocks->get('hero.title')?->value,
                'breadcrumb' => $blocks->get('hero.breadcrumb')?->value,
            ],
            'intro' => [
                'eyebrow' => $blocks->get('intro.eyebrow')?->value,
                'heading' => $blocks->get('intro.heading')?->value,
                'body_1' => $blocks->get('intro.body_1')?->value,
                'body_2' => $blocks->get('intro.body_2')?->value,
            ],
            'hours' => [
                'title' => $blocks->get('hours.title')?->value,
                'body' => $blocks->get('hours.body')?->value,
            ],
            'phone' => [
                'title' => $blocks->get('phone.title')?->value,
                'number' => $blocks->get('phone.number')?->value,
                'url' => $blocks->get('phone.number')?->link_url,
            ],
            'email' => [
                'title' => $blocks->get('email.title')?->value,
                'address' => $blocks->get('email.address')?->value,
                'url' => $blocks->get('email.address')?->link_url,
            ],
            'address' => [
                'title' => $blocks->get('address.title')?->value,
                'text' => $blocks->get('address.text')?->value,
            ],
            'quote_form' => [
                'title' => $blocks->get('quote_form.title')?->value,
                'subtitle' => $blocks->get('quote_form.subtitle')?->value,
                'submit_text' => $blocks->get('quote_form.submit_text')?->value,
            ],
            'map' => [
                'embed_url' => $blocks->get('map.embed_url')?->value,
            ],
        ];
    }

    public static function sync(Page $page, array $content): void
    {
        $blocks = $page->blocks->keyBy('block_key');

        $hero = $content['hero'] ?? [];
        self::setBackground($blocks, 'background.hero', $hero['background_image'] ?? null);
        self::setText($blocks, 'hero.title', $hero['title'] ?? null);
        self::setText($blocks, 'hero.breadcrumb', $hero['breadcrumb'] ?? null);

        $intro = $content['intro'] ?? [];
        self::setText($blocks, 'intro.eyebrow', $intro['eyebrow'] ?? null);
        self::setText($blocks, 'intro.heading', $intro['heading'] ?? null);
        self::setHtml($blocks, 'intro.body_1', $intro['body_1'] ?? null);
        self::setHtml($blocks, 'intro.body_2', $intro['body_2'] ?? null);

        $hours = $content['hours'] ?? [];
        self::setText($blocks, 'hours.title', $hours['title'] ?? null);
        self::setHtml($blocks, 'hours.body', $hours['body'] ?? null);

        $phone = $content['phone'] ?? [];
        self::setText($blocks, 'phone.title', $phone['title'] ?? null);
        self::setLink($blocks, 'phone.number', $phone['number'] ?? null, $phone['url'] ?? null);

        $email = $content['email'] ?? [];
        self::setText($blocks, 'email.title', $email['title'] ?? null);
        self::setLink($blocks, 'email.address', $email['address'] ?? null, $email['url'] ?? null);

        $address = $content['address'] ?? [];
        self::setText($blocks, 'address.title', $address['title'] ?? null);
        self::setText($blocks, 'address.text', $address['text'] ?? null);

        $quote = $content['quote_form'] ?? [];
        self::setText($blocks, 'quote_form.title', $quote['title'] ?? null);
        self::setText($blocks, 'quote_form.subtitle', $quote['subtitle'] ?? null);
        self::setText($blocks, 'quote_form.submit_text', $quote['submit_text'] ?? null);

        $map = $content['map'] ?? [];
        self::setText($blocks, 'map.embed_url', $map['embed_url'] ?? null);
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
