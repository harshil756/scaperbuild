<?php

namespace App\Filament\Resources\Pages\Schemas;

use App\Models\Page;
use App\Services\ServicePageBlockMapper;
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
            ->components(function (?Page $record): array {
                return [
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
                    // Only mount the matching CMS form. Multiple forms all use
                    // statePath('content') — loading them together hides/empties fields.
                    ...self::contentSectionsFor($record),
                ];
            });
    }

    /** @return array<int, mixed> */
    private static function contentSectionsFor(?Page $record): array
    {
        $slug = $record?->slug;

        return match (true) {
            $slug === 'home' => HomePageSectionsForm::sections(),
            $slug === 'about-us' => AboutPageSectionsForm::sections(),
            $slug === 'contact-us' => ContactPageSectionsForm::sections(),
            $slug === 'solar-panel-bird-proofing' => SolarPanelBirdProofingPageSectionsForm::sections(),
            $slug === 'our-services-ant-pest-control' => AntPestControlPageSectionsForm::sections(),
            $slug === 'melbourne' => MelbournePageSectionsForm::sections(),
            ServicePageBlockMapper::isServicePage($slug) => ServicePageSectionsForm::sections(),
            default => [],
        };
    }
}
