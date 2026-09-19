<?php

namespace App\Filament\Resources\Pages\Schemas;

use App\Filament\Support\CmsImageUpload;
use App\Models\Page;
use App\Services\ServicePageBlockMapper;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Hidden;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Group;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Utilities\Get;

class ServicePageSectionsForm
{
    public static function sections(): array
    {
        return [
            Section::make('Service page content')
                ->description('Edit hero, quote form, FAQ, reviews and CTA here. Mid-page body headings/paragraphs/images are under the “Content blocks” tab below — edit any block and save; the website updates automatically.')
                ->columnSpanFull()
                ->schema([
                    Group::make()
                        ->statePath('content')
                        ->columnSpanFull()
                        ->schema([
                            Section::make('Hero / intro')->icon('heroicon-o-home')->collapsible()->schema(self::heroSection()),
                            Section::make('Quote form')->icon('heroicon-o-chat-bubble-left-right')->collapsible()->schema(self::quoteFormSection()),
                            Section::make('About section')->icon('heroicon-o-building-office')->collapsible()
                                ->visible(fn (?Page $record, $livewire): bool => self::isCommercial($record, $livewire))
                                ->schema(self::aboutSection()),
                            Section::make('Why choose us / USPs')->icon('heroicon-o-star')->collapsible()->collapsed()
                                ->visible(fn (?Page $record, $livewire): bool => self::isGeneric($record, $livewire))
                                ->schema(self::whyChooseGenericSection()),
                            Section::make('Why choose us')->icon('heroicon-o-star')->collapsible()
                                ->visible(fn (?Page $record, $livewire): bool => self::isCommercial($record, $livewire))
                                ->schema(self::whyChooseSection()),
                            Section::make('Our approach')->icon('heroicon-o-wrench-screwdriver')->collapsible()->collapsed()
                                ->visible(fn (?Page $record, $livewire): bool => self::isGeneric($record, $livewire))
                                ->schema(self::approachSection()),
                            Section::make('Contact section')->icon('heroicon-o-envelope')->collapsible()
                                ->visible(fn (?Page $record, $livewire): bool => self::isCommercial($record, $livewire))
                                ->schema(self::contactSection()),
                            Section::make('Our services grid')->icon('heroicon-o-squares-2x2')->collapsible()
                                ->visible(fn (?Page $record, $livewire): bool => self::isCommercial($record, $livewire))
                                ->schema(self::servicesSection()),
                            Section::make('Our expertise')->icon('heroicon-o-academic-cap')->collapsible()
                                ->visible(fn (?Page $record, $livewire): bool => self::isCommercial($record, $livewire))
                                ->schema(self::expertiseSection()),
                            Section::make('Species / types cards')->icon('heroicon-o-bug-ant')->collapsible()->collapsed()
                                ->visible(fn (?Page $record, $livewire): bool => self::isGeneric($record, $livewire))
                                ->schema(self::cardSection('species', 'Species cards')),
                            Section::make('Why pests come inside')->icon('heroicon-o-question-mark-circle')->collapsible()->collapsed()
                                ->visible(fn (?Page $record, $livewire): bool => self::isGeneric($record, $livewire))
                                ->schema(self::whyInsideSection()),
                            Section::make('Problems caused')->icon('heroicon-o-exclamation-triangle')->collapsible()->collapsed()
                                ->visible(fn (?Page $record, $livewire): bool => self::isGeneric($record, $livewire))
                                ->schema(self::cardSection('problems', 'Problem cards')),
                            Section::make('Prevention tips')->icon('heroicon-o-shield-check')->collapsible()->collapsed()
                                ->visible(fn (?Page $record, $livewire): bool => self::isGeneric($record, $livewire))
                                ->schema(self::preventionSection()),
                            Section::make('Features / trust badges')->icon('heroicon-o-check-badge')->collapsible()->collapsed()
                                ->visible(fn (?Page $record, $livewire): bool => self::isGeneric($record, $livewire))
                                ->schema(self::featuresSection()),
                            Section::make('Image cards')->icon('heroicon-o-squares-2x2')->collapsible()->collapsed()
                                ->visible(fn (?Page $record, $livewire): bool => self::isGeneric($record, $livewire))
                                ->schema(self::cardsSection()),
                            Section::make('FAQ')->icon('heroicon-o-chat-bubble-bottom-center-text')->collapsible()->schema(self::faqSection()),
                            Section::make('Client reviews')->icon('heroicon-o-heart')->collapsible()
                                ->visible(fn (?Page $record, $livewire): bool => self::isGeneric($record, $livewire))
                                ->schema(self::reviewsSection()),
                            Section::make('Blog previews')->icon('heroicon-o-newspaper')->collapsible()->collapsed()
                                ->visible(fn (?Page $record, $livewire): bool => self::isGeneric($record, $livewire))
                                ->schema(self::blogSection()),
                            Section::make('Call to action')->icon('heroicon-o-phone')->collapsible()
                                ->visible(fn (?Page $record, $livewire): bool => self::isGeneric($record, $livewire))
                                ->schema(self::ctaSection()),
                        ]),
                ]),
        ];
    }

    private static function pageSlug(?Page $record, $livewire = null): ?string
    {
        return $record?->slug
            ?? (is_object($livewire) && method_exists($livewire, 'getRecord')
                ? $livewire->getRecord()?->slug
                : null);
    }

    private static function isGeneric(?Page $record, $livewire = null): bool
    {
        return ServicePageBlockMapper::isGenericServicePage(self::pageSlug($record, $livewire));
    }

    private static function isCommercial(?Page $record, $livewire = null): bool
    {
        return ServicePageBlockMapper::isCommercialPage(self::pageSlug($record, $livewire));
    }

    private static function imageField(string $name, string $label): FileUpload
    {
        return CmsImageUpload::make($name, $label, 'cms/service-pages')
            ->directory(fn (?Page $record, $livewire): string => 'cms/'.(self::pageSlug($record, $livewire) ?? 'service-pages'));
    }

    private static function approachSection(): array
    {
        return [
            TextInput::make('services.title')->label('Section title')->columnSpanFull(),
            Textarea::make('services.intro')->label('Intro (HTML)')->rows(4)->columnSpanFull(),
        ];
    }

    private static function whyChooseGenericSection(): array
    {
        return [
            TextInput::make('why_choose.eyebrow')->label('Eyebrow'),
            TextInput::make('why_choose.title')->label('Section title')->columnSpanFull(),
            Textarea::make('why_choose.intro')->label('Intro (HTML)')->rows(3)->columnSpanFull(),
        ];
    }

    private static function heroSection(): array
    {
        return [
            self::imageField('hero.background_image', 'Hero background'),
            TextInput::make('hero.breadcrumb_parent')->label('Breadcrumb parent'),
            TextInput::make('hero.breadcrumb_current')->label('Breadcrumb current'),
            TextInput::make('hero.title')->label('Section title'),
            TextInput::make('hero.heading')->label('Main heading (H1)')->columnSpanFull(),
            Textarea::make('hero.intro')->label('Intro (HTML)')->rows(4)->columnSpanFull(),
        ];
    }

    private static function backgroundsSection(): array
    {
        return [
            Repeater::make('backgrounds')
                ->label('Page section backgrounds')
                ->schema([
                    Hidden::make('block_key')->dehydrated(),
                    Hidden::make('key')->dehydrated(),
                    TextInput::make('label')->disabled()->dehydrated()->columnSpanFull(),
                    self::imageField('image', 'Background image'),
                ])
                ->collapsible()
                ->itemLabel(fn (?array $state): ?string => $state['label'] ?? $state['key'] ?? null)
                ->columnSpanFull()
                ->addable(false)
                ->deletable(false)
                ->reorderable(false),
        ];
    }

    private static function cardsSection(): array
    {
        return [
            Repeater::make('cards.items')
                ->label('Image cards')
                ->schema([
                    Hidden::make('slug'),
                    TextInput::make('title')->required(),
                    Textarea::make('description')->rows(3)->columnSpanFull(),
                    TextInput::make('alt')->label('Image alt text'),
                    self::imageField('image', 'Card image'),
                ])
                ->columns(2)
                ->collapsible()
                ->itemLabel(fn (?array $state): ?string => $state['title'] ?? null)
                ->columnSpanFull(),
        ];
    }

    private static function quoteFormSection(): array
    {
        return [
            TextInput::make('quote_form.title')->label('Form heading'),
            TextInput::make('quote_form.subtitle')->label('Form subtitle')->columnSpanFull(),
            TextInput::make('quote_form.submit_text')->label('Submit button text'),
        ];
    }

    private static function aboutSection(): array
    {
        return [
            TextInput::make('about.title')->label('Section title'),
            TextInput::make('about.subtitle')->label('Section subtitle')->columnSpanFull(),
            Textarea::make('about.intro')->label('Intro (HTML)')->rows(4)->columnSpanFull(),
            self::imageField('about.image', 'Section image'),
            TextInput::make('about.counter_title')->label('Counter label'),
            TextInput::make('about.counter_value')->label('Counter value'),
            TextInput::make('about.counter_suffix')->label('Counter suffix'),
        ];
    }

    private static function whyChooseSection(): array
    {
        return [
            TextInput::make('why_choose.eyebrow')->label('Eyebrow'),
            TextInput::make('why_choose.title')->label('Section title')->columnSpanFull(),
            Textarea::make('why_choose.intro')->label('Intro (HTML)')->rows(3)->columnSpanFull(),
            Repeater::make('why_choose.items')
                ->label('Why choose cards')
                ->schema([
                    Hidden::make('slug'),
                    TextInput::make('title')->required(),
                    Textarea::make('description')->rows(4)->columnSpanFull(),
                    TextInput::make('alt')->label('Image alt text'),
                    self::imageField('image', 'Card image'),
                ])
                ->columns(2)
                ->collapsible()
                ->itemLabel(fn (?array $state): ?string => $state['title'] ?? null)
                ->columnSpanFull(),
        ];
    }

    private static function contactSection(): array
    {
        return [
            TextInput::make('contact.eyebrow')->label('Eyebrow'),
            TextInput::make('contact.title')->label('Section title')->columnSpanFull(),
            Textarea::make('contact.body')->label('Body (HTML)')->rows(4)->columnSpanFull(),
            TextInput::make('contact.button_label')->label('Button text'),
            TextInput::make('contact.button_url')->label('Button URL'),
        ];
    }

    private static function servicesSection(): array
    {
        return [
            TextInput::make('services.eyebrow')->label('Eyebrow'),
            TextInput::make('services.title')->label('Section title')->columnSpanFull(),
            Textarea::make('services.intro')->label('Intro (HTML)')->rows(3)->columnSpanFull(),
            Repeater::make('services.items')
                ->label('Service cards')
                ->schema([
                    Hidden::make('slug'),
                    TextInput::make('title')->required(),
                    TextInput::make('link')->label('Link URL'),
                    TextInput::make('button_text')->label('Button text'),
                    TextInput::make('alt')->label('Image alt text'),
                    self::imageField('image', 'Service icon'),
                ])
                ->columns(2)
                ->collapsible()
                ->itemLabel(fn (?array $state): ?string => $state['title'] ?? null)
                ->columnSpanFull(),
        ];
    }

    private static function expertiseSection(): array
    {
        return [
            TextInput::make('expertise.title')->label('Section title')->columnSpanFull(),
            Repeater::make('expertise.items')
                ->label('Expertise items')
                ->schema([
                    Hidden::make('slug'),
                    TextInput::make('title')->required()->columnSpanFull(),
                ])
                ->collapsible()
                ->itemLabel(fn (?array $state): ?string => $state['title'] ?? null)
                ->columnSpanFull(),
        ];
    }

    private static function cardSection(string $prefix, string $repeaterLabel): array
    {
        return [
            TextInput::make("{$prefix}.eyebrow")->label('Eyebrow'),
            TextInput::make("{$prefix}.title")->label('Section title')->columnSpanFull(),
            Textarea::make("{$prefix}.intro")->label('Intro (HTML)')->rows(3)->columnSpanFull(),
            Repeater::make("{$prefix}.items")
                ->label($repeaterLabel)
                ->schema([
                    Hidden::make('slug'),
                    TextInput::make('title')->required(),
                    Textarea::make('description')->rows(3)->columnSpanFull(),
                    TextInput::make('alt')->label('Image alt text'),
                    self::imageField('image', 'Card image'),
                ])
                ->columns(2)
                ->collapsible()
                ->itemLabel(fn (array $state): ?string => $state['title'] ?? null)
                ->columnSpanFull(),
        ];
    }

    private static function whyInsideSection(): array
    {
        return [
            self::imageField('why_inside.background_image', 'Section background'),
            TextInput::make('why_inside.eyebrow')->label('Eyebrow'),
            TextInput::make('why_inside.title')->label('Section title')->columnSpanFull(),
            Textarea::make('why_inside.list_html')->label('List (HTML)')->rows(6)->columnSpanFull(),
            Textarea::make('why_inside.footer')->label('Footer text (HTML)')->rows(3)->columnSpanFull(),
            self::imageField('why_inside.image', 'Section image'),
        ];
    }

    private static function preventionSection(): array
    {
        return [
            TextInput::make('prevention.eyebrow')->label('Eyebrow'),
            TextInput::make('prevention.title')->label('Section title')->columnSpanFull(),
            Textarea::make('prevention.intro')->label('Intro (HTML)')->rows(3)->columnSpanFull(),
            Repeater::make('prevention.tips')
                ->label('Prevention tips')
                ->schema([
                    Hidden::make('slug'),
                    TextInput::make('title')->required()->columnSpanFull(),
                    Textarea::make('intro')->label('Intro paragraph')->rows(2)->columnSpanFull(),
                    Repeater::make('list')
                        ->label('Bullet list')
                        ->simple(TextInput::make('text')->required())
                        ->collapsible()
                        ->columnSpanFull(),
                ])
                ->collapsible()
                ->itemLabel(fn (array $state): ?string => $state['title'] ?? null)
                ->columnSpanFull(),
        ];
    }

    private static function featuresSection(): array
    {
        return [
            Repeater::make('features.items')
                ->label('Trust badge items')
                ->schema([
                    Hidden::make('slug'),
                    TextInput::make('title')->required(),
                    self::imageField('image', 'Badge image'),
                ])
                ->columns(2)
                ->collapsible()
                ->itemLabel(fn (array $state): ?string => $state['title'] ?? null)
                ->columnSpanFull(),
        ];
    }

    private static function faqSection(): array
    {
        return [
            TextInput::make('faq.title')->label('FAQ title')->columnSpanFull(),
            self::imageField('faq.sidebar_image', 'Sidebar image'),
            TextInput::make('faq.sidebar_cta_title')->label('Sidebar CTA title')->columnSpanFull(),
            Textarea::make('faq.sidebar_cta_body')->label('Sidebar CTA body')->rows(3)->columnSpanFull(),
            TextInput::make('faq.sidebar_cta_button_label')->label('Sidebar CTA button text'),
            TextInput::make('faq.sidebar_cta_button_url')->label('Sidebar CTA button URL'),
            Repeater::make('faq.items')
                ->label('FAQ items')
                ->schema([
                    TextInput::make('question')->required()->columnSpanFull(),
                    Textarea::make('answer_html')->label('Answer (HTML)')->rows(4)->columnSpanFull(),
                ])
                ->collapsible()
                ->itemLabel(fn (array $state): ?string => $state['question'] ?? null)
                ->columnSpanFull(),
        ];
    }

    private static function reviewsSection(): array
    {
        return [
            TextInput::make('reviews.eyebrow')->label('Eyebrow'),
            TextInput::make('reviews.title')->label('Title')->columnSpanFull(),
            TextInput::make('reviews.subtitle')->label('Subtitle'),
            TextInput::make('reviews.rating_label')->label('Rating label'),
            Textarea::make('reviews.count_text')->label('Review count text (HTML)')->rows(2)->columnSpanFull(),
        ];
    }

    private static function blogSection(): array
    {
        return [
            TextInput::make('blog.eyebrow')->label('Eyebrow'),
            TextInput::make('blog.title')->label('Section title')->columnSpanFull(),
            Repeater::make('blog.posts')
                ->label('Blog preview posts')
                ->schema([
                    TextInput::make('title')->required(),
                    Textarea::make('excerpt')->rows(2)->columnSpanFull(),
                    TextInput::make('link')->label('Link URL'),
                    TextInput::make('alt')->label('Image alt text'),
                    self::imageField('image_path', 'Thumbnail'),
                ])
                ->collapsible()
                ->itemLabel(fn (array $state): ?string => $state['title'] ?? null)
                ->columnSpanFull(),
        ];
    }

    private static function ctaSection(): array
    {
        return [
            self::imageField('cta.background_image', 'Section background'),
            TextInput::make('cta.eyebrow')->label('Eyebrow'),
            TextInput::make('cta.title')->label('Section title')->columnSpanFull(),
            Textarea::make('cta.body')->label('Body (HTML)')->rows(4)->columnSpanFull(),
            TextInput::make('cta.button_label')->label('Button text'),
            TextInput::make('cta.button_url')->label('Button URL'),
        ];
    }

    private static function contentBlocksSection(): array
    {
        return [
            Repeater::make('content_blocks')
                ->label('Body content blocks')
                ->schema([
                    Hidden::make('block_key')->dehydrated(),
                    TextInput::make('label')->disabled()->dehydrated()->columnSpanFull(),
                    Select::make('type')
                        ->options([
                            'text' => 'Text',
                            'html' => 'HTML',
                            'image' => 'Image',
                            'json' => 'Structured (JSON)',
                        ])
                        ->disabled()
                        ->dehydrated(),
                    Textarea::make('value')
                        ->label('Content')
                        ->rows(fn (Get $get): int => $get('type') === 'html' ? 8 : 3)
                        ->visible(fn (Get $get): bool => in_array($get('type'), ['text', 'html'], true))
                        ->columnSpanFull(),
                    self::imageField('image', 'Image')
                        ->visible(fn (Get $get): bool => $get('type') === 'image'),
                    Textarea::make('metadata')
                        ->label('Structured data (JSON)')
                        ->formatStateUsing(fn ($state) => is_array($state)
                            ? json_encode($state, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE)
                            : ($state ?? ''))
                        ->dehydrateStateUsing(function (?string $state): ?array {
                            if (blank($state)) {
                                return null;
                            }

                            return json_decode($state, true);
                        })
                        ->rows(6)
                        ->visible(fn (Get $get): bool => $get('type') === 'json')
                        ->columnSpanFull(),
                ])
                ->collapsible()
                ->itemLabel(function (?array $state): ?string {
                    $label = $state['label'] ?? null;
                    $key = $state['block_key'] ?? null;
                    $preview = is_string($state['value'] ?? null)
                        ? trim(strip_tags($state['value']))
                        : '';
                    if ($preview !== '') {
                        $preview = mb_strlen($preview) > 60 ? mb_substr($preview, 0, 60).'…' : $preview;
                    }

                    if (filled($label) && filled($preview) && ! str_contains((string) $label, $preview)) {
                        return "{$label} — {$preview}";
                    }

                    return $label ?? ($preview !== '' ? $preview : $key);
                })
                ->columnSpanFull()
                ->addable(false)
                ->deletable(false)
                ->reorderable(false),
        ];
    }
}
