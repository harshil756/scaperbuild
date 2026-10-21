<?php

namespace App\Filament\Resources\Pages\Schemas;

use App\Filament\Support\CmsImageUpload;
use App\Models\Page;
use App\Services\SiteSettingsBlockMapper;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Group;
use Filament\Schemas\Components\Section;

class SiteSettingsSectionsForm
{
    public static function sections(): array
    {
        return [
            Section::make('Site-wide settings')
                ->description('Logo, header sticky bar, and footer copy used across every page.')
                ->visible(fn (?Page $record): bool => SiteSettingsBlockMapper::isSiteSettings($record?->slug))
                ->columnSpanFull()
                ->schema([
                    Group::make()
                        ->statePath('content')
                        ->schema([
                            Section::make('Brand')->schema([
                                CmsImageUpload::make('brand.logo', 'Logo', 'cms/site'),
                                TextInput::make('brand.logo_alt')->label('Logo alt text')->columnSpanFull(),
                            ]),
                            Section::make('Header')->schema([
                                TextInput::make('header.sticky_title')->label('Sticky bar title')->columnSpanFull(),
                                TextInput::make('header.quote_button')->label('Quote button label'),
                            ]),
                            Section::make('Footer')->schema([
                                TextInput::make('footer.newsletter_title')->label('Newsletter title')->columnSpanFull(),
                                TextInput::make('footer.newsletter_placeholder')->label('Email placeholder'),
                                TextInput::make('footer.newsletter_button')->label('Sign up button'),
                                TextInput::make('footer.services_heading')->label('Services column heading'),
                                TextInput::make('footer.contact_heading')->label('Contact column heading'),
                                TextInput::make('footer.copyright')->label('Copyright text')->columnSpanFull(),
                            ]),
                        ]),
                ]),
        ];
    }
}
