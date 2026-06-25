<?php

namespace App\Filament\Resources\Pages\Tables;

use App\Support\CmsPageNavigation;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Actions\ViewAction;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;

class PagesTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('title')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('slug')
                    ->searchable()
                    ->badge(),
                TextColumn::make('category')
                    ->label('Group')
                    ->badge()
                    ->getStateUsing(fn ($record): string => CmsPageNavigation::categoryForSlug($record->slug) ?? 'other')
                    ->formatStateUsing(fn (string $state): string => match ($state) {
                        'services' => 'Services',
                        'commercial' => 'Commercial',
                        'offices' => 'Offices',
                        'core' => 'Core',
                        default => 'Other',
                    })
                    ->color(fn (string $state): string => match ($state) {
                        'services' => 'info',
                        'commercial' => 'warning',
                        'offices' => 'success',
                        'core' => 'primary',
                        default => 'gray',
                    }),
                TextColumn::make('blocks_count')
                    ->counts('blocks')
                    ->label('Blocks'),
                IconColumn::make('is_published')
                    ->boolean()
                    ->label('Published'),
                TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->defaultSort('title')
            ->filters([
                SelectFilter::make('category')
                    ->label('Page group')
                    ->options([
                        'services' => 'Services',
                        'commercial' => 'Commercial',
                        'offices' => 'Offices',
                        'core' => 'Core pages',
                        'other' => 'Other',
                    ])
                    ->query(function ($query, array $data) {
                        $value = $data['value'] ?? null;
                        if (! $value) {
                            return $query;
                        }

                        $slugs = match ($value) {
                            'services' => collect(CmsPageNavigation::servicePages())->pluck('slug')->all(),
                            'commercial' => collect(CmsPageNavigation::commercialPages())->pluck('slug')->all(),
                            'offices' => collect(CmsPageNavigation::officePages())->pluck('slug')->all(),
                            'core' => collect(CmsPageNavigation::corePages())->pluck('slug')->all(),
                            default => null,
                        };

                        if ($value === 'other') {
                            $known = collect(CmsPageNavigation::servicePages())
                                ->pluck('slug')
                                ->merge(collect(CmsPageNavigation::commercialPages())->pluck('slug'))
                                ->merge(collect(CmsPageNavigation::officePages())->pluck('slug'))
                                ->merge(collect(CmsPageNavigation::corePages())->pluck('slug'))
                                ->all();

                            return $query->whereNotIn('slug', $known);
                        }

                        return $query->whereIn('slug', $slugs ?? []);
                    }),
            ])
            ->recordActions([
                EditAction::make(),
                ViewAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}
