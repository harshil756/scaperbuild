<?php

namespace App\Services;

use App\Models\Page;

class ContactPageBlockMapper
{
    /** @var array<string, array{section: string, label: string, type: string, sort_order: int}> */
    private const BLOCK_META = [
        'background.hero' => ['section' => 'hero', 'label' => 'Hero background', 'type' => 'background', 'sort_order' => 1],
        'hero.title' => ['section' => 'hero', 'label' => 'Hero title', 'type' => 'text', 'sort_order' => 2],
        'hero.breadcrumb' => ['section' => 'hero', 'label' => 'Hero breadcrumb', 'type' => 'text', 'sort_order' => 3],
        'intro.eyebrow' => ['section' => 'intro', 'label' => 'Intro eyebrow', 'type' => 'text', 'sort_order' => 4],
        'intro.heading' => ['section' => 'intro', 'label' => 'Intro heading', 'type' => 'text', 'sort_order' => 5],
        'intro.body_1' => ['section' => 'intro', 'label' => 'Intro body 1', 'type' => 'html', 'sort_order' => 6],
        'intro.body_2' => ['section' => 'intro', 'label' => 'Intro body 2', 'type' => 'html', 'sort_order' => 7],
        'hours.title' => ['section' => 'info', 'label' => 'Opening hours title', 'type' => 'text', 'sort_order' => 8],
        'hours.body' => ['section' => 'info', 'label' => 'Opening hours body', 'type' => 'html', 'sort_order' => 9],
        'phone.title' => ['section' => 'info', 'label' => 'Phone title', 'type' => 'text', 'sort_order' => 10],
        'phone.number' => ['section' => 'info', 'label' => 'Phone number display', 'type' => 'text', 'sort_order' => 11],
        'email.title' => ['section' => 'info', 'label' => 'Email title', 'type' => 'text', 'sort_order' => 12],
        'email.address' => ['section' => 'info', 'label' => 'Email address', 'type' => 'text', 'sort_order' => 13],
        'address.title' => ['section' => 'info', 'label' => 'Address title', 'type' => 'text', 'sort_order' => 14],
        'address.text' => ['section' => 'info', 'label' => 'Address text', 'type' => 'text', 'sort_order' => 15],
        'quote_form.title' => ['section' => 'quote_form', 'label' => 'Quote form title', 'type' => 'text', 'sort_order' => 16],
        'quote_form.subtitle' => ['section' => 'quote_form', 'label' => 'Quote form subtitle', 'type' => 'text', 'sort_order' => 17],
        'quote_form.submit_text' => ['section' => 'quote_form', 'label' => 'Quote form submit', 'type' => 'text', 'sort_order' => 18],
        'map.embed_url' => ['section' => 'map', 'label' => 'Map embed URL', 'type' => 'text', 'sort_order' => 19],
    ];

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
        $blocks = $page->blocks()->get()->keyBy('block_key');

        $hero = $content['hero'] ?? [];
        self::setBackground($page, $blocks, 'background.hero', $hero['background_image'] ?? null);
        self::setText($page, $blocks, 'hero.title', $hero['title'] ?? null);
        self::setText($page, $blocks, 'hero.breadcrumb', $hero['breadcrumb'] ?? null);

        $intro = $content['intro'] ?? [];
        self::setText($page, $blocks, 'intro.eyebrow', $intro['eyebrow'] ?? null);
        self::setText($page, $blocks, 'intro.heading', $intro['heading'] ?? null);
        self::setHtml($page, $blocks, 'intro.body_1', $intro['body_1'] ?? null);
        self::setHtml($page, $blocks, 'intro.body_2', $intro['body_2'] ?? null);

        $hours = $content['hours'] ?? [];
        self::setText($page, $blocks, 'hours.title', $hours['title'] ?? null);
        self::setHtml($page, $blocks, 'hours.body', $hours['body'] ?? null);

        $phone = $content['phone'] ?? [];
        $phoneNumber = $phone['number'] ?? null;
        // Keep tel: link in sync with the display number (derive when blank or stale).
        $phoneUrl = self::phoneToTel($phoneNumber) ?? ($phone['url'] ?? null);
        if (filled($phone['url'] ?? null) && ! filled($phoneNumber)) {
            $phoneUrl = $phone['url'];
        }
        self::setText($page, $blocks, 'phone.title', $phone['title'] ?? null);
        self::setLink($page, $blocks, 'phone.number', $phoneNumber, $phoneUrl);

        $email = $content['email'] ?? [];
        $emailAddress = $email['address'] ?? null;
        $emailUrl = filled($emailAddress)
            ? 'mailto:'.$emailAddress
            : ($email['url'] ?? null);
        self::setText($page, $blocks, 'email.title', $email['title'] ?? null);
        self::setLink($page, $blocks, 'email.address', $emailAddress, $emailUrl);

        $address = $content['address'] ?? [];
        self::setText($page, $blocks, 'address.title', $address['title'] ?? null);
        self::setText($page, $blocks, 'address.text', $address['text'] ?? null);

        $quote = $content['quote_form'] ?? [];
        self::setText($page, $blocks, 'quote_form.title', $quote['title'] ?? null);
        self::setText($page, $blocks, 'quote_form.subtitle', $quote['subtitle'] ?? null);
        self::setText($page, $blocks, 'quote_form.submit_text', $quote['submit_text'] ?? null);

        $map = $content['map'] ?? [];
        self::setText($page, $blocks, 'map.embed_url', $map['embed_url'] ?? null);
    }

    public static function phoneToTel(?string $number): ?string
    {
        if (! filled($number)) {
            return null;
        }

        $digits = preg_replace('/\D+/', '', $number);

        return filled($digits) ? 'tel:'.$digits : null;
    }

    private static function setText(Page $page, $blocks, string $key, ?string $value): void
    {
        self::upsert($page, $blocks, $key, ['value' => $value]);
    }

    private static function setHtml(Page $page, $blocks, string $key, ?string $value): void
    {
        self::upsert($page, $blocks, $key, ['value' => $value]);
    }

    private static function setLink(Page $page, $blocks, string $key, ?string $label, ?string $url): void
    {
        self::upsert($page, $blocks, $key, ['value' => $label, 'link_url' => $url]);
    }

    private static function setBackground(Page $page, $blocks, string $key, ?string $path): void
    {
        self::upsert($page, $blocks, $key, ['background_image_path' => $path]);
    }

    /**
     * @param  \Illuminate\Support\Collection<string, PageBlock>  $blocks
     * @param  array<string, mixed>  $attributes
     */
    private static function upsert(Page $page, $blocks, string $key, array $attributes): void
    {
        $block = $blocks->get($key);
        if ($block) {
            $block->update($attributes);

            return;
        }

        $meta = self::BLOCK_META[$key] ?? [
            'section' => 'info',
            'label' => $key,
            'type' => 'text',
            'sort_order' => 99,
        ];

        $created = $page->blocks()->create([
            'block_key' => $key,
            'section' => $meta['section'],
            'label' => $meta['label'],
            'type' => $meta['type'],
            'sort_order' => $meta['sort_order'],
            ...$attributes,
        ]);

        $blocks->put($key, $created);
    }
}
