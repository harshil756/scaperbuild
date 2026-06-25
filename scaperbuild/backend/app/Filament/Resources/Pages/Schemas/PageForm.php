<?php

namespace App\Filament\Resources\Pages\Schemas;

use App\Models\Page;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class PageForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Page settings')
                    ->columns(2)
                    ->schema([
                        TextInput::make('title')
                            ->required()
                            ->maxLength(255),
                        TextInput::make('slug')
                            ->required()
                            ->maxLength(255)
                            ->unique(ignoreRecord: true)
                            ->disabled(fn (?Page $record): bool => filled($record?->slug))
                            ->dehydrated(),
                        TextInput::make('seo_title')
                            ->label('SEO title')
                            ->maxLength(255)
                            ->columnSpanFull(),
                        Textarea::make('seo_description')
                            ->label('SEO description')
                            ->rows(3)
                            ->columnSpanFull(),
                        TextInput::make('body_class')
                            ->maxLength(255)
                            ->columnSpanFull(),
                        TextInput::make('elementor_id')
                            ->numeric(),
                        Toggle::make('is_published')
                            ->default(true),
                    ]),
                ...HomePageSectionsForm::sections(),
                ...AboutPageSectionsForm::sections(),
                ...SolarPanelBirdProofingPageSectionsForm::sections(),
                ...AntPestControlPageSectionsForm::sections(),
                ...MelbournePageSectionsForm::sections(),
                ...ServicePageSectionsForm::sections(),
            ]);
    }
}
