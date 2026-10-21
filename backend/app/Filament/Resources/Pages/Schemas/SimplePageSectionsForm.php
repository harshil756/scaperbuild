<?php

namespace App\Filament\Resources\Pages\Schemas;

use App\Filament\Support\CmsImageUpload;
use App\Models\Page;
use App\Services\SimplePageBlockMapper;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Group;
use Filament\Schemas\Components\Section;

class SimplePageSectionsForm
{
    public static function sections(): array
    {
        return [
            Section::make('Page content')
                ->description('Hero, body HTML, and page-specific fields. Save → website updates.')
                ->visible(fn (?Page $record): bool => SimplePageBlockMapper::isSimplePage($record?->slug))
                ->columnSpanFull()
                ->schema([
                    Group::make()
                        ->statePath('content')
                        ->schema([
                            Section::make('Hero')->schema([
                                TextInput::make('hero.title')->label('Title')->columnSpanFull(),
                                TextInput::make('hero.breadcrumb')->label('Breadcrumb label'),
                                CmsImageUpload::make('hero.background_image', 'Background image', 'cms/simple'),
                            ]),
                            Section::make('Body HTML')
                                ->visible(fn (?Page $record): bool => $record?->slug === 'terms-and-conditions')
                                ->schema([
                                    Textarea::make('body_html')->label('Body (HTML)')->rows(16)->columnSpanFull(),
                                ]),
                            Section::make('Thank you content')
                                ->visible(fn (?Page $record): bool => $record?->slug === 'thank-you')
                                ->schema([
                                    TextInput::make('thank_you.heading')->label('Heading')->columnSpanFull(),
                                    TextInput::make('thank_you.subheading')->label('Subheading')->columnSpanFull(),
                                    TextInput::make('thank_you.next_title')->label('Next steps title')->columnSpanFull(),
                                    Repeater::make('thank_you.steps')
                                        ->label('Steps')
                                        ->schema([
                                            TextInput::make('text')->label('Step')->required()->columnSpanFull(),
                                        ])
                                        ->defaultItems(0)
                                        ->columnSpanFull(),
                                    TextInput::make('thank_you.home_button')->label('Home button'),
                                    TextInput::make('thank_you.help_title')->label('Help title')->columnSpanFull(),
                                ]),
                            Section::make('Location links')
                                ->visible(fn (?Page $record): bool => $record?->slug === 'location')
                                ->schema([
                                    Repeater::make('locations')
                                        ->label('Suburbs')
                                        ->schema([
                                            TextInput::make('title')->label('Title')->required(),
                                            TextInput::make('url')->label('URL')->required()->columnSpanFull(),
                                        ])
                                        ->columns(2)
                                        ->defaultItems(0)
                                        ->collapsible()
                                        ->itemLabel(fn (?array $state): ?string => $state['title'] ?? null)
                                        ->columnSpanFull(),
                                ]),
                        ]),
                ]),
        ];
    }
}
