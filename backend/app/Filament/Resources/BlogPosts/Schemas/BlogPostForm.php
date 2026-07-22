<?php

namespace App\Filament\Resources\BlogPosts\Schemas;

use App\Filament\Forms\Components\BlogContentEditor;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;

class BlogPostForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Post details')
                    ->columns(2)
                    ->schema([
                        TextInput::make('title')
                            ->required()
                            ->maxLength(255)
                            ->live(onBlur: true)
                            ->afterStateUpdated(function (?string $state, callable $set, callable $get): void {
                                if (filled($get('slug'))) {
                                    return;
                                }
                                $set('slug', Str::slug($state ?? ''));
                            })
                            ->columnSpanFull(),
                        TextInput::make('slug')
                            ->required()
                            ->maxLength(255)
                            ->unique(ignoreRecord: true)
                            ->helperText('URL path without leading slash, e.g. why-melbourne-homes-need-professional-termite-pest-control'),
                        Toggle::make('is_published')
                            ->label('Published')
                            ->default(true),
                        DateTimePicker::make('published_at')
                            ->label('Published date')
                            ->seconds(false)
                            ->helperText('Controls display order on the blog page. Defaults to now when publishing.'),
                        Textarea::make('excerpt')
                            ->rows(3)
                            ->columnSpanFull(),
                        self::imageField('featured_image_path', 'Featured image'),
                        TextInput::make('featured_image_alt')
                            ->label('Featured image alt text')
                            ->maxLength(255)
                            ->columnSpanFull(),
                        Select::make('tags')
                            ->relationship('tags', 'name')
                            ->multiple()
                            ->preload()
                            ->searchable()
                            ->columnSpanFull(),
                    ]),
                Section::make('Content')
                    ->schema([
                        BlogContentEditor::make('content_html')
                            ->label('Post body')
                            ->columnSpanFull(),
                    ]),
                Section::make('SEO')
                    ->collapsed()
                    ->columns(2)
                    ->schema([
                        TextInput::make('seo_title')
                            ->label('SEO title')
                            ->maxLength(255)
                            ->columnSpanFull(),
                        Textarea::make('seo_description')
                            ->label('SEO description')
                            ->rows(3)
                            ->columnSpanFull(),
                        Textarea::make('body_class')
                            ->rows(2)
                            ->columnSpanFull(),
                        TextInput::make('wordpress_id')
                            ->numeric()
                            ->label('WordPress ID'),
                        TextInput::make('elementor_id')
                            ->numeric()
                            ->label('Elementor ID'),
                    ]),
            ]);
    }

    private static function imageField(string $name, string $label): FileUpload
    {
        return FileUpload::make($name)
            ->label($label)
            ->directory('cms/blog')
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
            })
            ->image();
    }
}
