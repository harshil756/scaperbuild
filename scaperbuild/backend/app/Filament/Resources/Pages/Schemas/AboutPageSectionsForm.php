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

class AboutPageSectionsForm
{
    public static function sections(): array
    {
        return [
            Section::make('Page sections')
                ->description('Manage About Us page content section by section — text, images, and backgrounds.')
                ->visible(fn (?Page $record): bool => $record?->slug === 'about-us')
                ->columnSpanFull()
                ->schema([
                    Group::make()
                        ->statePath('content')
                        ->schema([
                            Section::make('Hero / intro')
                                ->icon('heroicon-o-home')
                                ->collapsible()
                                ->schema(self::heroSection()),
                            Section::make('Quote form')
                                ->icon('heroicon-o-chat-bubble-left-right')
                                ->collapsible()
                                ->schema(self::quoteFormSection()),
                            Section::make('What we stand for')
                                ->icon('heroicon-o-flag')
                                ->collapsible()
                                ->schema(self::standForSection()),
                            Section::make('Talk to us (CTA)')
                                ->icon('heroicon-o-megaphone')
                                ->collapsible()
                                ->schema(self::ctaSection()),
                            Section::make('Our services')
                                ->icon('heroicon-o-wrench-screwdriver')
                                ->collapsible()
                                ->schema(self::servicesSection()),
                            Section::make('Why choose us')
                                ->icon('heroicon-o-shield-check')
                                ->collapsible()
                                ->schema(self::whyChooseSection()),
                            Section::make('Our process')
                                ->icon('heroicon-o-queue-list')
                                ->collapsible()
                                ->schema(self::processSection()),
                            Section::make('Client reviews')
                                ->icon('heroicon-o-heart')
                                ->collapsible()
                                ->schema(self::reviewsSection()),
                        ]),
                ]),
        ];
    }

    private static function imageField(string $name, string $label, bool $allowSvg = false): FileUpload
    {
        $field = FileUpload::make($name)
            ->label($label)
            ->directory('cms/about')
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
            self::imageField('hero.background_image', 'Section background'),
            TextInput::make('hero.breadcrumb')->label('Breadcrumb label'),
            TextInput::make('hero.title')->label('Section title'),
            TextInput::make('hero.heading')->label('Main heading (H1)')->columnSpanFull(),
            Textarea::make('hero.body')->label('Intro body (HTML)')->rows(6)->columnSpanFull(),
            TextInput::make('hero.button_label')->label('Button text'),
            TextInput::make('hero.button_url')->label('Button URL'),
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

    private static function standForSection(): array
    {
        return [
            TextInput::make('stand_for.counter_title')->label('Counter label'),
            TextInput::make('stand_for.counter_display')->label('Counter display value'),
            TextInput::make('stand_for.counter_to')->label('Counter target number')->numeric(),
            TextInput::make('stand_for.counter_suffix')->label('Counter suffix (e.g. +)'),
            self::imageField('stand_for.image', 'Section image'),
            TextInput::make('stand_for.image_alt')->label('Image alt text'),
            TextInput::make('stand_for.eyebrow')->label('Eyebrow'),
            TextInput::make('stand_for.title')->label('Section title')->columnSpanFull(),
            Textarea::make('stand_for.purpose')->label('Purpose paragraph (HTML)')->rows(3)->columnSpanFull(),
            TextInput::make('stand_for.mission_title')->label('Mission title'),
            Textarea::make('stand_for.mission_text')->label('Mission text')->rows(4)->columnSpanFull(),
            TextInput::make('stand_for.vision_title')->label('Vision title'),
            Textarea::make('stand_for.vision_text')->label('Vision text')->rows(4)->columnSpanFull(),
        ];
    }

    private static function ctaSection(): array
    {
        return [
            self::imageField('cta.background_image', 'Section background'),
            TextInput::make('cta.title')->label('Title')->columnSpanFull(),
            Textarea::make('cta.body')->label('Body (HTML)')->rows(4)->columnSpanFull(),
            TextInput::make('cta.button_label')->label('Button text'),
            TextInput::make('cta.button_url')->label('Button URL'),
        ];
    }

    private static function servicesSection(): array
    {
        return [
            TextInput::make('services.eyebrow')->label('Eyebrow'),
            TextInput::make('services.title')->label('Section title')->columnSpanFull(),
            Textarea::make('services.intro')->label('Intro (HTML)')->rows(3)->columnSpanFull(),
            Repeater::make('services.cards')
                ->label('Service cards')
                ->schema([
                    Hidden::make('slug'),
                    TextInput::make('title')->required(),
                    TextInput::make('price_text')->label('Price text'),
                    TextInput::make('badge')->label('Badge'),
                    TextInput::make('alt')->label('Image alt text'),
                    TextInput::make('call_label')->label('Call button text'),
                    TextInput::make('call_url')->label('Call button URL'),
                    self::imageField('image', 'Card image'),
                    self::imageField('background', 'Card background (decorative)', allowSvg: true),
                ])
                ->columns(2)
                ->collapsible()
                ->itemLabel(fn (array $state): ?string => $state['title'] ?? null)
                ->columnSpanFull(),
            TextInput::make('services.more_button_label')->label('More services button text'),
            TextInput::make('services.more_button_url')->label('More services button URL'),
        ];
    }

    private static function whyChooseSection(): array
    {
        return [
            self::imageField('why_choose.background_image', 'Background image'),
            TextInput::make('why_choose.eyebrow')->label('Eyebrow'),
            TextInput::make('why_choose.title')->label('Title')->columnSpanFull(),
            Textarea::make('why_choose.intro')->label('Intro (HTML)')->rows(3)->columnSpanFull(),
            Repeater::make('why_choose.list_left')
                ->label('Benefits list (left column)')
                ->schema([
                    TextInput::make('text')->label('Item')->required()->columnSpanFull(),
                ])
                ->simple(TextInput::make('text')->required())
                ->collapsible()
                ->columnSpanFull(),
            Repeater::make('why_choose.list_right')
                ->label('Benefits list (right column)')
                ->schema([
                    TextInput::make('text')->label('Item')->required()->columnSpanFull(),
                ])
                ->simple(TextInput::make('text')->required())
                ->collapsible()
                ->columnSpanFull(),
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
                    Textarea::make('body_html')->label('Body (HTML)')->rows(6)->columnSpanFull(),
                    Repeater::make('list_items')
                        ->label('Bullet list items')
                        ->simple(TextInput::make('item')->required())
                        ->columnSpanFull(),
                    TextInput::make('alt')->label('Image alt'),
                    self::imageField('image', 'Step image'),
                    self::imageField('background', 'Step background (preventive column only)'),
                ])
                ->collapsible()
                ->itemLabel(fn (array $state): ?string => $state['title'] ?? null)
                ->columnSpanFull(),
        ];
    }

    private static function reviewsSection(): array
    {
        return [
            TextInput::make('reviews.eyebrow')->label('Eyebrow'),
            TextInput::make('reviews.title')->label('Title')->columnSpanFull(),
            TextInput::make('reviews.subtitle')->label('Subtitle'),
            TextInput::make('reviews.rating_label')->label('Rating label (e.g. EXCELLENT)'),
            Textarea::make('reviews.count_text')->label('Review count text (HTML)')->rows(2)->columnSpanFull(),
        ];
    }
}
