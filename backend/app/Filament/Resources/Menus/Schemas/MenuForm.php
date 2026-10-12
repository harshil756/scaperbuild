<?php

namespace App\Filament\Resources\Menus\Schemas;

use App\Models\Menu;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Components\Group;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class MenuForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Menu details')
                    ->columns(2)
                    ->schema([
                        TextInput::make('key')
                            ->label('Menu key')
                            ->disabled()
                            ->dehydrated(false),
                        TextInput::make('name')
                            ->required()
                            ->maxLength(255),
                        TextInput::make('description')
                            ->maxLength(255)
                            ->columnSpanFull(),
                    ]),
                Section::make('Header navigation')
                    ->description('Top navigation with dropdown sub-menus.')
                    ->visible(fn (?Menu $record): bool => $record?->key === 'header')
                    ->schema(self::headerItemsSchema()),
                Section::make('Footer service links')
                    ->description('Service links shown in this footer column.')
                    ->visible(fn (?Menu $record): bool => str_starts_with($record?->key ?? '', 'footer_col_'))
                    ->schema(self::footerItemsSchema()),
                Section::make('Social links')
                    ->description('Social media icons in the footer.')
                    ->visible(fn (?Menu $record): bool => $record?->key === 'footer_social')
                    ->schema(self::socialItemsSchema()),
            ]);
    }

    private static function headerItemsSchema(): array
    {
        return [
            Group::make()
                ->statePath('content')
                ->schema([
                    Repeater::make('items')
                        ->label('Menu items')
                        ->schema([
                            TextInput::make('label')->required()->maxLength(255),
                            TextInput::make('path')
                                ->label('URL path')
                                ->required()
                                ->maxLength(255)
                                ->placeholder('/about-us or # for dropdown-only parent')
                                ->helperText('Use /slug for internal pages. Use # for parent items with sub-menus only.'),
                            Toggle::make('external')->label('External link'),
                            Repeater::make('children')
                                ->label('Sub-menu items')
                                ->schema([
                                    TextInput::make('label')->required()->maxLength(255),
                                    TextInput::make('path')
                                        ->label('URL path')
                                        ->required()
                                        ->maxLength(255)
                                        ->placeholder('/our-services-ant-pest-control'),
                                    Toggle::make('external')->label('External link'),
                                ])
                                ->collapsible()
                                ->itemLabel(fn (array $state): ?string => $state['label'] ?? 'Sub-item')
                                ->columnSpanFull(),
                        ])
                        ->collapsible()
                        ->itemLabel(fn (array $state): ?string => $state['label'] ?? 'Menu item')
                        ->columnSpanFull(),
                ]),
        ];
    }

    private static function footerItemsSchema(): array
    {
        return [
            Group::make()
                ->statePath('content')
                ->schema([
                    Repeater::make('items')
                        ->label('Footer links')
                        ->schema([
                            TextInput::make('label')->required()->maxLength(255),
                            TextInput::make('path')
                                ->label('URL path')
                                ->required()
                                ->maxLength(255)
                                ->placeholder('/our-services-ant-pest-control or #'),
                        ])
                        ->collapsible()
                        ->itemLabel(fn (array $state): ?string => $state['label'] ?? 'Link')
                        ->columnSpanFull(),
                ]),
        ];
    }

    private static function socialItemsSchema(): array
    {
        return [
            Group::make()
                ->statePath('content')
                ->schema([
                    Repeater::make('items')
                        ->label('Social links')
                        ->schema([
                            TextInput::make('label')->required()->maxLength(255),
                            TextInput::make('href')
                                ->label('URL')
                                ->required()
                                ->url()
                                ->maxLength(255),
                            TextInput::make('iconClass')
                                ->label('Icon CSS class')
                                ->maxLength(255)
                                ->placeholder('icon icon-facebook'),
                            TextInput::make('icon')
                                ->label('Icon key')
                                ->maxLength(50)
                                ->placeholder('instagram, twitter, youtube')
                                ->helperText('Use icon class OR icon key — not both.'),
                        ])
                        ->columns(2)
                        ->collapsible()
                        ->itemLabel(fn (array $state): ?string => $state['label'] ?? 'Social link')
                        ->columnSpanFull(),
                ]),
        ];
    }
}
