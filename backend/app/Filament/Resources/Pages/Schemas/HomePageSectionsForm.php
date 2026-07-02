<?php

namespace App\Filament\Resources\Pages\Schemas;

use App\Models\Page;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Hidden;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Group;
use Filament\Schemas\Components\Section;
use Illuminate\Support\Arr;

class HomePageSectionsForm
{
    public static function sections(): array
    {
        return [
            Section::make('Page sections')
                ->description('Manage home page content section by section — text, images, and backgrounds.')
                ->visible(fn (?Page $record): bool => $record?->slug === 'home')
                ->columnSpanFull()
                ->schema([
                    Group::make()
                        ->statePath('content')
                        ->schema([
                            Section::make('Hero section')
                                ->icon('heroicon-o-home')
                                ->collapsible()
                                ->schema(self::heroSection()),
                            Section::make('Quote form')
                                ->icon('heroicon-o-chat-bubble-left-right')
                                ->collapsible()
                                ->schema(self::quoteFormSection()),
                            Section::make('Services section')
                                ->icon('heroicon-o-wrench-screwdriver')
                                ->collapsible()
                                ->schema(self::servicesSection()),
                            Section::make('About section')
                                ->icon('heroicon-o-information-circle')
                                ->collapsible()
                                ->schema(self::aboutSection()),
                            Section::make('Features strip')
                                ->icon('heroicon-o-star')
                                ->collapsible()
                                ->schema(self::featuresSection()),
                            Section::make('Why choose us')
                                ->icon('heroicon-o-shield-check')
                                ->collapsible()
                                ->schema(self::whyChooseSection()),
                            Section::make('Call to action')
                                ->icon('heroicon-o-megaphone')
                                ->collapsible()
                                ->schema(self::ctaSection()),
                            Section::make('Our process')
                                ->icon('heroicon-o-queue-list')
                                ->collapsible()
                                ->schema(self::processSection()),
                            Section::make('Client reviews')
                                ->icon('heroicon-o-heart')
                                ->collapsible()
                                ->schema(self::reviewsSection()),
                            Section::make('FAQ section')
                                ->icon('heroicon-o-question-mark-circle')
                                ->collapsible()
                                ->schema(self::faqSection()),
                            Section::make('News items')
                                ->description('Blog preview cards shown on the home page.')
                                ->icon('heroicon-o-newspaper')
                                ->collapsible()
                                ->schema(self::blogSection()),
                        ]),
                ]),
        ];
    }

    private static function imageField(string $name, string $label, bool $allowSvg = false): FileUpload
    {
        $field = FileUpload::make($name)
            ->label($label)
            ->directory('cms/home')
            ->disk('public')
            ->visibility('public')
            ->maxFiles(1)
            ->imagePreviewHeight('120')
            ->fetchFileInformation(false)
            ->dehydrateStateUsing(function (mixed $state): ?string {
                if (is_array($state)) {
                    $state = Arr::first($state);
                }

                return filled($state) && is_string($state) ? $state : null;
            });

        if ($allowSvg) {
            return $field->acceptedFileTypes([
                'image/jpeg',
                'image/png',
                'image/webp',
                'image/gif',
                'image/svg+xml',
            ]);
        }

        return $field->image();
    }

    private static function heroSection(): array
    {
        return [
            self::imageField('hero.background_image', 'Background image'),
            TextInput::make('hero.eyebrow')->label('Eyebrow / small heading'),
            TextInput::make('hero.title')->label('Main heading')->columnSpanFull(),
            TextInput::make('hero.button_contact_label')->label('Contact button text'),
            TextInput::make('hero.button_contact_url')->label('Contact button URL'),
            TextInput::make('hero.button_services_label')->label('Services button text'),
            TextInput::make('hero.button_services_url')->label('Services button URL'),
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

    private static function servicesSection(): array
    {
        return [
            TextInput::make('services.eyebrow')->label('Eyebrow'),
            TextInput::make('services.title')->label('Section title')->columnSpanFull(),
            Textarea::make('services.intro')->label('Intro text (HTML)')->rows(4)->columnSpanFull(),
            Repeater::make('services.cards')
                ->label('Service cards')
                ->schema([
                    Hidden::make('slug'),
                    TextInput::make('title')->required(),
                    TextInput::make('price_text')->label('Price text'),
                    TextInput::make('badge')->label('Badge'),
                    TextInput::make('alt')->label('Image alt text'),
                    self::imageField('image', 'Card image'),
                    self::imageField('background', 'Card background (decorative)', allowSvg: true),
                ])
                ->columns(2)
                ->collapsible()
                ->itemLabel(fn (array $state): ?string => $state['title'] ?? null)
                ->columnSpanFull(),
        ];
    }

    private static function aboutSection(): array
    {
        return [
            self::imageField('about.background_image', 'Section background'),
            self::imageField('about.column_image', 'Side column image'),
            TextInput::make('about.eyebrow')->label('Eyebrow'),
            TextInput::make('about.title')->label('Title')->columnSpanFull(),
            Textarea::make('about.body')->label('Body (HTML)')->rows(8)->columnSpanFull(),
            TextInput::make('about.button_label')->label('Button text'),
            TextInput::make('about.button_url')->label('Button URL'),
        ];
    }

    private static function featuresSection(): array
    {
        return [
            Repeater::make('features.items')
                ->label('Feature highlights')
                ->schema([
                    TextInput::make('text')->label('Feature text')->columnSpanFull(),
                ])
                ->collapsible()
                ->itemLabel(fn (array $state): ?string => isset($state['text']) ? mb_substr($state['text'], 0, 50) : null)
                ->columnSpanFull(),
        ];
    }

    private static function whyChooseSection(): array
    {
        return [
            self::imageField('why_choose.background_image', 'Background image'),
            TextInput::make('why_choose.eyebrow')->label('Eyebrow'),
            TextInput::make('why_choose.title')->label('Title')->columnSpanFull(),
            Textarea::make('why_choose.intro')->label('Intro (HTML)')->rows(4)->columnSpanFull(),
            Textarea::make('why_choose.benefits')->label('Benefits list (HTML)')->rows(8)->columnSpanFull(),
        ];
    }

    private static function ctaSection(): array
    {
        return [
            TextInput::make('cta.eyebrow')->label('Eyebrow'),
            TextInput::make('cta.title')->label('Title')->columnSpanFull(),
            Textarea::make('cta.body')->label('Body (HTML)')->rows(4)->columnSpanFull(),
            TextInput::make('cta.button_label')->label('Button text'),
            TextInput::make('cta.button_url')->label('Button URL'),
        ];
    }

    private static function processSection(): array
    {
        return [
            TextInput::make('process.eyebrow')->label('Eyebrow'),
            TextInput::make('process.title')->label('Title')->columnSpanFull(),
            Textarea::make('process.intro')->label('Intro (HTML)')->rows(3)->columnSpanFull(),
            Repeater::make('process.steps')
                ->label('Process steps')
                ->schema([
                    Hidden::make('slug'),
                    TextInput::make('title')->required(),
                    Textarea::make('description')->label('Description (HTML)')->rows(3)->columnSpanFull(),
                    TextInput::make('alt')->label('Image alt'),
                    self::imageField('image', 'Step image'),
                ])
                ->collapsible()
                ->itemLabel(fn (array $state): ?string => $state['title'] ?? null)
                ->columnSpanFull(),
        ];
    }

    private static function reviewsSection(): array
    {
        return [
            self::imageField('reviews.background_image', 'Background image'),
            TextInput::make('reviews.eyebrow')->label('Eyebrow'),
            TextInput::make('reviews.title')->label('Title')->columnSpanFull(),
            TextInput::make('reviews.subtitle')->label('Subtitle'),
            TextInput::make('reviews.rating_label')->label('Rating label (e.g. EXCELLENT)'),
        ];
    }

    private static function faqSection(): array
    {
        return [
            TextInput::make('faq.eyebrow')->label('Eyebrow'),
            TextInput::make('faq.title')->label('Title')->columnSpanFull(),
            self::imageField('faq.image', 'Sidebar image'),
            TextInput::make('faq.sidebar_title')->label('Sidebar callout title'),
            Textarea::make('faq.sidebar_text')->label('Sidebar text')->rows(2)->columnSpanFull(),
            TextInput::make('faq.sidebar_link')->label('Sidebar link URL'),
            Repeater::make('faq.items')
                ->label('FAQ items')
                ->schema([
                    TextInput::make('question')->required()->columnSpanFull(),
                    Textarea::make('answer_html')->label('Answer (HTML)')->rows(4)->columnSpanFull(),
                ])
                ->collapsible()
                ->itemLabel(fn (array $state): ?string => isset($state['question']) ? mb_substr($state['question'], 0, 60) : null)
                ->columnSpanFull(),
        ];
    }

    private static function blogSection(): array
    {
        return [
            TextInput::make('blog.eyebrow')->label('Section eyebrow'),
            TextInput::make('blog.title')->label('Section title')->columnSpanFull(),
            Repeater::make('blog.posts')
                ->label('News items')
                ->schema([
                    Hidden::make('slug'),
                    TextInput::make('title')->label('Post title')->required()->columnSpanFull(),
                    Textarea::make('excerpt')->label('Excerpt')->rows(3)->columnSpanFull(),
                    TextInput::make('link')->label('Post URL')->columnSpanFull(),
                    TextInput::make('alt')->label('Image alt text'),
                    self::imageField('image_path', 'Featured image'),
                ])
                ->columns(2)
                ->collapsible()
                ->itemLabel(fn (array $state): ?string => $state['title'] ?? 'News item')
                ->columnSpanFull(),
        ];
    }
}
