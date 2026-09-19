<?php

namespace App\Filament\Resources\Pages\RelationManagers;

use App\Filament\Support\CmsImageUpload;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\CreateAction;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Schemas\Components\Utilities\Get;
use Filament\Schemas\Schema;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class BlocksRelationManager extends RelationManager
{
    protected static string $relationship = 'blocks';

    protected static ?string $title = 'Page body content';

    protected static ?string $navigationLabel = 'Page body content';

    public static function getBadge(Model $ownerRecord, string $pageClass): ?string
    {
        $count = $ownerRecord->blocks()->where('section', 'content')->count();

        return $count > 0 ? (string) $count : null;
    }

    public function form(Schema $schema): Schema
    {
        $slug = $this->getOwnerRecord()->slug ?? 'pages';

        return $schema
            ->components([
                TextInput::make('block_key')
                    ->required()
                    ->maxLength(255)
                    ->disabled(fn (?string $operation): bool => $operation === 'edit')
                    ->dehydrated(),
                TextInput::make('section')
                    ->required()
                    ->maxLength(255)
                    ->default('content'),
                TextInput::make('label')
                    ->required()
                    ->maxLength(255)
                    ->columnSpanFull(),
                Select::make('type')
                    ->options([
                        'text' => 'Text',
                        'html' => 'HTML',
                        'image' => 'Image',
                        'background' => 'Background image',
                        'link' => 'Link / button',
                        'json' => 'Structured (JSON)',
                    ])
                    ->required()
                    ->live(),
                Textarea::make('value')
                    ->label(fn (Get $get): string => match ($get('type')) {
                        'html' => 'HTML content',
                        'link' => 'Button label',
                        default => 'Text content',
                    })
                    ->rows(fn (Get $get): int => $get('type') === 'html' ? 14 : 4)
                    ->visible(fn (Get $get): bool => in_array($get('type'), ['text', 'html', 'link'], true))
                    ->columnSpanFull(),
                TextInput::make('link_url')
                    ->label('Link URL')
                    ->maxLength(255)
                    ->visible(fn (Get $get): bool => $get('type') === 'link'),
                CmsImageUpload::make('image_path', 'Image', 'cms/'.$slug)
                    ->visible(fn (Get $get): bool => in_array($get('type'), ['image', 'json'], true)),
                CmsImageUpload::make('background_image_path', 'Background image', 'cms/'.$slug)
                    ->visible(fn (Get $get): bool => in_array($get('type'), ['background', 'json'], true)),
                Textarea::make('metadata')
                    ->label('Metadata (JSON)')
                    ->formatStateUsing(fn ($state) => is_array($state)
                        ? json_encode($state, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE)
                        : ($state ?? ''))
                    ->dehydrateStateUsing(function (?string $state): ?array {
                        if (blank($state)) {
                            return null;
                        }

                        return json_decode($state, true);
                    })
                    ->visible(fn (Get $get): bool => $get('type') === 'json')
                    ->rows(10)
                    ->columnSpanFull(),
                TextInput::make('sort_order')
                    ->numeric()
                    ->default(0),
            ]);
    }

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('label')
            ->defaultSort('sort_order')
            ->modifyQueryUsing(fn (Builder $query) => $query->orderBy('sort_order'))
            ->columns([
                TextColumn::make('sort_order')
                    ->label('#')
                    ->sortable(),
                TextColumn::make('section')
                    ->badge()
                    ->sortable(),
                TextColumn::make('label')
                    ->searchable()
                    ->wrap()
                    ->description(fn ($record): ?string => filled($record->value)
                        ? str($record->value)->stripTags()->limit(80)->toString()
                        : null),
                TextColumn::make('type')
                    ->badge(),
                TextColumn::make('value')
                    ->label('Preview')
                    ->formatStateUsing(fn (?string $state): string => filled($state)
                        ? str($state)->stripTags()->limit(50)->toString()
                        : '—')
                    ->wrap()
                    ->toggleable(),
                ImageColumn::make('image_path')
                    ->disk('public')
                    ->toggleable(isToggledHiddenByDefault: true),
                ImageColumn::make('background_image_path')
                    ->label('Background')
                    ->disk('public')
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                SelectFilter::make('section')
                    ->options(fn (): array => $this->getOwnerRecord()
                        ->blocks()
                        ->reorder()
                        ->select('section')
                        ->distinct()
                        ->orderBy('section')
                        ->pluck('section', 'section')
                        ->all())
                    ->default('content'),
                SelectFilter::make('type')
                    ->options([
                        'text' => 'Text / heading',
                        'html' => 'HTML paragraph',
                        'image' => 'Image',
                        'background' => 'Background',
                        'link' => 'Link',
                        'json' => 'JSON / list',
                    ]),
            ])
            ->headerActions([
                CreateAction::make(),
            ])
            ->recordActions([
                EditAction::make(),
                DeleteAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}
