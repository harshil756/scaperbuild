<?php

namespace App\Filament\Resources\Pages\Schemas;

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
use Illuminate\Support\Arr;

class ServicePageSectionsForm
{
    public static function sections(): array
    {
        return [
            Section::make('Service page content')
                ->description('Manage pest control service page content — text, images, and backgrounds.')
                ->visible(fn (?Page $record): bool => ServicePageBlockMapper::isServicePage($record?->slug))
                ->columnSpanFull()
                ->schema([
                    Group::make()
                        ->statePath('content')
                        ->schema([
                            Section::make('Hero / intro')->icon('heroicon-o-home')->collapsible()->schema(self::heroSection()),
                            Section::make('Quote form')->icon('heroicon-o-chat-bubble-left-right')->collapsible()->schema(self::quoteFormSection()),
                            Section::make('About section')->icon('heroicon-o-building-office')->collapsible()
                                ->visible(fn (?Page $record): bool => ServicePageBlockMapper::isCommercialPage($record?->slug))
                                ->schema(self::aboutSection()),
                            Section::make('Why choose us')->icon('heroicon-o-star')->collapsible()
                                ->visible(fn (?Page $record): bool => ServicePageBlockMapper::isCommercialPage($record?->slug))
                                ->schema(self::whyChooseSection()),
                            Section::make('Contact section')->icon('heroicon-o-envelope')->collapsible()
                                ->visible(fn (?Page $record): bool => ServicePageBlockMapper::isCommercialPage($record?->slug))
                                ->schema(self::contactSection()),
                            Section::make('Our services grid')->icon('heroicon-o-squares-2x2')->collapsible()
                                ->visible(fn (?Page $record): bool => ServicePageBlockMapper::isCommercialPage($record?->slug))
                                ->schema(self::servicesSection()),
                            Section::make('Our expertise')->icon('heroicon-o-academic-cap')->collapsible()
                                ->visible(fn (?Page $record): bool => ServicePageBlockMapper::isCommercialPage($record?->slug))
                                ->schema(self::expertiseSection()),
                            Section::make('Species / types cards')->icon('heroicon-o-bug-ant')->collapsible()->collapsed()
                                ->visible(fn (?Page $record): bool => ServicePageBlockMapper::isGenericServicePage($record?->slug))
                                ->schema(self::cardSection('species', 'Species cards')),
                            Section::make('Why pests come inside')->icon('heroicon-o-question-mark-circle')->collapsible()->collapsed()
                                ->visible(fn (?Page $record): bool => ServicePageBlockMapper::isGenericServicePage($record?->slug))
                                ->schema(self::whyInsideSection()),
                            Section::make('Problems caused')->icon('heroicon-o-exclamation-triangle')->collapsible()->collapsed()
                                ->visible(fn (?Page $record): bool => ServicePageBlockMapper::isGenericServicePage($record?->slug))
                                ->schema(self::cardSection('problems', 'Problem cards')),
                            Section::make('Prevention tips')->icon('heroicon-o-shield-check')->collapsible()->collapsed()
                                ->visible(fn (?Page $record): bool => ServicePageBlockMapper::isGenericServicePage($record?->slug))
                                ->schema(self::preventionSection()),
                            Section::make('Features / trust badges')->icon('heroicon-o-check-badge')->collapsible()->collapsed()
                                ->visible(fn (?Page $record): bool => ServicePageBlockMapper::isGenericServicePage($record?->slug))
                                ->schema(self::featuresSection()),
                            Section::make('Image cards')->icon('heroicon-o-squares-2x2')->collapsible()->collapsed()
                                ->visible(fn (?Page $record): bool => ServicePageBlockMapper::isGenericServicePage($record?->slug))
                                ->schema(self::cardsSection()),
                            Section::make('FAQ')->icon('heroicon-o-chat-bubble-bottom-center-text')->collapsible()->schema(self::faqSection()),
                            Section::make('Client reviews')->icon('heroicon-o-heart')->collapsible()->collapsed()
                                ->visible(fn (?Page $record): bool => ServicePageBlockMapper::isGenericServicePage($record?->slug))
                                ->schema(self::reviewsSection()),
                            Section::make('Blog previews')->icon('heroicon-o-newspaper')->collapsible()->collapsed()
                                ->visible(fn (?Page $record): bool => ServicePageBlockMapper::isGenericServicePage($record?->slug))
                                ->schema(self::blogSection()),
                            Section::make('Call to action')->icon('heroicon-o-phone')->collapsible()->collapsed()
                                ->visible(fn (?Page $record): bool => ServicePageBlockMapper::isGenericServicePage($record?->slug))
                                ->schema(self::ctaSection()),
                            Section::make('Section backgrounds')->icon('heroicon-o-photo')->collapsible()->collapsed()
                                ->visible(fn (?Page $record): bool => ServicePageBlockMapper::isGenericServicePage($record?->slug))
                                ->schema(self::backgroundsSection()),
                            Section::make('Additional content blocks')->icon('heroicon-o-document-text')->collapsible()->collapsed()
                                ->visible(fn (?Page $record): bool => ServicePageBlockMapper::isGenericServicePage($record?->slug))
                                ->schema(self::contentBlocksSection()),
                        ]),
                ]),
        ];
    }

    private static function imageField(string $name, string $label): FileUpload
    {
        return FileUpload::make($name)
            ->label($label)
            ->directory(fn (?Page $record): string => 'cms/'.($record?->slug ?? 'service-pages'))
            ->disk('public')
            ->visibility('public')
            ->maxFiles(1)
            ->imagePreviewHeight('120')
            ->fetchFileInformation(false)
            ->image()
            ->dehydrateStateUsing(function (mixed $state): ?string {
                if (is_array($state)) {
                    $state = Arr::first($state);
                }

                return filled($state) && is_string($state) ? $state : null;
            });
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
                ->default([])
                ->schema([
                    Hidden::make('block_key'),
                    Hidden::make('key'),
                    TextInput::make('label')->disabled()->columnSpanFull(),
                    self::imageField('image', 'Background image'),
                ])
                ->collapsible()
                ->itemLabel(fn (?array $state): ?string => $state['label'] ?? $state['key'] ?? null)
                ->columnSpanFull(),
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
                ->label('Page-specific content blocks')
                ->default([])
                ->schema([
                    Hidden::make('block_key'),
                    TextInput::make('label')->disabled()->columnSpanFull(),
                    Select::make('type')
                        ->options([
                            'text' => 'Text',
                            'html' => 'HTML',
                            'image' => 'Image',
                            'json' => 'Structured (JSON)',
                        ])
                        ->disabled(),
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
                ->itemLabel(fn (?array $state): ?string => $state['label'] ?? $state['block_key'] ?? null)
                ->columnSpanFull(),
        ];
    }
}
