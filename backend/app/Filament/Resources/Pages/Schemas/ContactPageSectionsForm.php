<?php

namespace App\Filament\Resources\Pages\Schemas;

use App\Models\Page;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Group;
use Filament\Schemas\Components\Section;
use Illuminate\Support\Arr;

class ContactPageSectionsForm
{
    public static function sections(): array
    {
        return [
            Section::make('Page sections')
                ->description('Manage Contact Us page content — hero, intro, contact details, quote form, and map.')
                ->visible(fn (?Page $record): bool => $record?->slug === 'contact-us')
                ->columnSpanFull()
                ->schema([
                    Group::make()
                        ->statePath('content')
                        ->schema([
                            Section::make('Hero')
                                ->icon('heroicon-o-home')
                                ->collapsible()
                                ->schema(self::heroSection()),
                            Section::make('Intro')
                                ->icon('heroicon-o-document-text')
                                ->collapsible()
                                ->schema(self::introSection()),
                            Section::make('Opening hours')
                                ->icon('heroicon-o-clock')
                                ->collapsible()
                                ->schema(self::hoursSection()),
                            Section::make('Phone')
                                ->icon('heroicon-o-phone')
                                ->collapsible()
                                ->schema(self::phoneSection()),
                            Section::make('Email')
                                ->icon('heroicon-o-envelope')
                                ->collapsible()
                                ->schema(self::emailSection()),
                            Section::make('Address')
                                ->icon('heroicon-o-map-pin')
                                ->collapsible()
                                ->schema(self::addressSection()),
                            Section::make('Quote form')
                                ->icon('heroicon-o-chat-bubble-left-right')
                                ->collapsible()
                                ->schema(self::quoteFormSection()),
                            Section::make('Map')
                                ->icon('heroicon-o-globe-alt')
                                ->collapsible()
                                ->schema(self::mapSection()),
                        ]),
                ]),
        ];
    }

    private static function imageField(string $name, string $label): FileUpload
    {
        return FileUpload::make($name)
            ->label($label)
            ->directory('cms/contact')
            ->disk('public')
            ->visibility('public')
            ->maxFiles(1)
            ->image()
            ->imagePreviewHeight('120')
            ->fetchFileInformation(false)
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
            TextInput::make('hero.title')->label('Hero title'),
            TextInput::make('hero.breadcrumb')->label('Breadcrumb label'),
        ];
    }

    private static function introSection(): array
    {
        return [
            TextInput::make('intro.eyebrow')->label('Eyebrow'),
            TextInput::make('intro.heading')->label('Main heading (H1)')->columnSpanFull(),
            Textarea::make('intro.body_1')->label('Body paragraph 1 (HTML)')->rows(5)->columnSpanFull(),
            Textarea::make('intro.body_2')->label('Body paragraph 2 (HTML)')->rows(5)->columnSpanFull(),
        ];
    }

    private static function hoursSection(): array
    {
        return [
            TextInput::make('hours.title')->label('Title'),
            Textarea::make('hours.body')->label('Hours text (HTML allowed)')->rows(3)->columnSpanFull(),
        ];
    }

    private static function phoneSection(): array
    {
        return [
            TextInput::make('phone.title')->label('Title'),
            TextInput::make('phone.number')
                ->label('Display number')
                ->helperText('Used site-wide (header, footer, contact page, and call CTAs).'),
            TextInput::make('phone.url')
                ->label('Phone link (tel:...)')
                ->helperText('Optional — auto-generated from the display number on save if left empty.')
                ->columnSpanFull(),
        ];
    }

    private static function emailSection(): array
    {
        return [
            TextInput::make('email.title')->label('Title'),
            TextInput::make('email.address')->label('Email address')->email(),
            TextInput::make('email.url')->label('Email link (mailto:...)')->columnSpanFull(),
        ];
    }

    private static function addressSection(): array
    {
        return [
            TextInput::make('address.title')->label('Title'),
            TextInput::make('address.text')->label('Address text')->columnSpanFull(),
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

    private static function mapSection(): array
    {
        return [
            TextInput::make('map.embed_url')
                ->label('Google Maps embed URL')
                ->url()
                ->columnSpanFull(),
        ];
    }
}
