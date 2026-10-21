<?php

namespace App\Filament\Resources\Pages\Schemas;

use App\Filament\Support\CmsImageUpload;
use App\Models\Page;
use App\Services\LocationPageBlockMapper;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Group;
use Filament\Schemas\Components\Section;

class LocationPageSectionsForm
{
    public static function sections(): array
    {
        return [
            Section::make('Location page content')
                ->description('Edit suburb location page copy and images. Save → website updates via API.')
                ->visible(fn (?Page $record): bool => LocationPageBlockMapper::isLocationPage($record?->slug))
                ->columnSpanFull()
                ->schema([
                    Group::make()
                        ->statePath('content')
                        ->schema([
                            TextInput::make('location_name')->label('Location name')->required(),
                            Section::make('Hero')->collapsible()->schema([
                                TextInput::make('hero.headline')->label('Headline')->columnSpanFull(),
                                Textarea::make('hero.subhead')->label('Subhead')->rows(3)->columnSpanFull(),
                                TextInput::make('hero.trust_badge')->label('Trust badge text')->columnSpanFull(),
                                TextInput::make('hero.cta_primary')->label('Primary button'),
                                TextInput::make('hero.cta_secondary')->label('Secondary button'),
                                Repeater::make('hero.stats')
                                    ->label('Stats')
                                    ->schema([
                                        TextInput::make('value')->label('Value')->required(),
                                        TextInput::make('label')->label('Label')->required(),
                                    ])
                                    ->columns(2)
                                    ->defaultItems(0)
                                    ->collapsible()
                                    ->columnSpanFull(),
                            ]),
                            Section::make('Local info')->collapsible()->schema([
                                TextInput::make('local.heading')->label('Heading')->columnSpanFull(),
                                Repeater::make('local.paragraphs')
                                    ->label('Lead paragraphs')
                                    ->schema([
                                        Textarea::make('text')->label('Paragraph')->rows(3)->required()->columnSpanFull(),
                                    ])
                                    ->defaultItems(0)
                                    ->collapsible()
                                    ->columnSpanFull(),
                                TextInput::make('local.signs_title')->label('Signs title'),
                                TextInput::make('local.signs_subtitle')->label('Signs subtitle')->columnSpanFull(),
                                Repeater::make('local.signs_list')
                                    ->label('Signs list')
                                    ->schema([
                                        TextInput::make('text')->label('Sign')->required()->columnSpanFull(),
                                    ])
                                    ->defaultItems(0)
                                    ->collapsible()
                                    ->columnSpanFull(),
                                self::imageField('local.image', 'Side image'),
                                TextInput::make('local.image_alt')->label('Image alt text')->columnSpanFull(),
                                TextInput::make('local.infographic_tag')->label('Infographic tag'),
                                TextInput::make('local.infographic_title')->label('Infographic title')->columnSpanFull(),
                                Textarea::make('local.infographic_note')->label('Infographic note')->rows(2)->columnSpanFull(),
                                Repeater::make('local.infographic_points')
                                    ->label('Infographic points')
                                    ->schema([
                                        TextInput::make('title')->required()->columnSpanFull(),
                                        Textarea::make('desc')->label('Description')->rows(2)->required()->columnSpanFull(),
                                    ])
                                    ->defaultItems(0)
                                    ->collapsible()
                                    ->columnSpanFull(),
                            ]),
                            Section::make('Why choose us')->collapsible()->schema([
                                TextInput::make('why.heading')->label('Heading')->columnSpanFull(),
                                Repeater::make('why.paragraphs')
                                    ->label('Paragraphs')
                                    ->schema([
                                        Textarea::make('text')->label('Paragraph')->rows(3)->required()->columnSpanFull(),
                                    ])
                                    ->defaultItems(0)
                                    ->collapsible()
                                    ->columnSpanFull(),
                                Textarea::make('why.trust_subtext')->label('Trust subtext')->rows(2)->columnSpanFull(),
                                Repeater::make('why.benefits')
                                    ->label('Benefits')
                                    ->schema([
                                        TextInput::make('num')->label('Number')->maxLength(4),
                                        TextInput::make('text')->label('Text')->required()->columnSpanFull(),
                                    ])
                                    ->columns(2)
                                    ->collapsible()
                                    ->itemLabel(fn (?array $state): ?string => $state['text'] ?? null)
                                    ->columnSpanFull(),
                            ]),
                            Section::make('Services grid')->collapsible()->schema([
                                TextInput::make('services.title')->label('Title')->columnSpanFull(),
                                TextInput::make('services.subtitle')->label('Subtitle')->columnSpanFull(),
                                Repeater::make('services.items')
                                    ->label('Service cards')
                                    ->schema([
                                        TextInput::make('type')->label('Icon type')->helperText('cockroach, termite, rodent, spider, bedbug, ant, commercial, preventative'),
                                        TextInput::make('name')->label('Name')->required(),
                                        Textarea::make('desc')->label('Description')->rows(2)->columnSpanFull(),
                                        TextInput::make('url')->label('Link URL')->columnSpanFull(),
                                    ])
                                    ->columns(2)
                                    ->defaultItems(0)
                                    ->collapsible()
                                    ->itemLabel(fn (?array $state): ?string => $state['name'] ?? null)
                                    ->columnSpanFull(),
                            ]),
                            Section::make('Process steps')->collapsible()->schema([
                                TextInput::make('process.title')->label('Title')->columnSpanFull(),
                                TextInput::make('process.subtitle')->label('Subtitle')->columnSpanFull(),
                                Repeater::make('process.steps')
                                    ->label('Steps')
                                    ->schema([
                                        TextInput::make('num')->label('#')->maxLength(4),
                                        TextInput::make('title')->required(),
                                        Textarea::make('desc')->label('Description')->rows(2)->required()->columnSpanFull(),
                                    ])
                                    ->columns(2)
                                    ->defaultItems(0)
                                    ->collapsible()
                                    ->itemLabel(fn (?array $state): ?string => $state['title'] ?? null)
                                    ->columnSpanFull(),
                            ]),
                            Section::make('Detailed content')->collapsible()->schema([
                                TextInput::make('detailed.title')->label('Title')->columnSpanFull(),
                                Textarea::make('detailed.preview_html')->label('Preview HTML')->rows(8)->columnSpanFull(),
                                Textarea::make('detailed.expanded_html')->label('Expanded HTML (Read more)')->rows(12)->columnSpanFull(),
                            ]),
                            Section::make('Reviews')->collapsible()->schema([
                                TextInput::make('reviews.rating_text')->label('Rating badge (e.g. EXCELLENT)'),
                                TextInput::make('reviews.count_text')->label('Review count text')->columnSpanFull(),
                            ]),
                            Section::make('FAQs')->collapsible()->schema([
                                Repeater::make('faqs')
                                    ->label('FAQ items')
                                    ->schema([
                                        TextInput::make('question')->required()->columnSpanFull(),
                                        Textarea::make('answer')->rows(3)->required()->columnSpanFull(),
                                    ])
                                    ->collapsible()
                                    ->itemLabel(fn (?array $state): ?string => $state['question'] ?? null)
                                    ->columnSpanFull(),
                            ]),
                        ]),
                ]),
        ];
    }

    private static function imageField(string $name, string $label): FileUpload
    {
        return CmsImageUpload::make($name, $label, 'cms/locations');
    }
}
