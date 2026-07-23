<?php

namespace App\Filament\Support;

use Filament\Forms\Components\FileUpload;
use Illuminate\Support\Arr;

class CmsImageUpload
{
    public static function make(string $name, string $label, string $directory, bool $allowSvg = false): FileUpload
    {
        $field = FileUpload::make($name)
            ->label($label)
            ->directory($directory)
            ->disk('public')
            ->visibility('public')
            ->maxFiles(1)
            ->deletable()
            ->imagePreviewHeight('160')
            ->fetchFileInformation(false)
            ->formatStateUsing(fn (mixed $state): array => is_array($state)
                ? $state
                : (filled($state) && is_string($state) ? [$state] : []))
            ->dehydrateStateUsing(function (mixed $state): ?string {
                if (is_array($state)) {
                    $state = Arr::first($state);
                }

                return filled($state) && is_string($state) ? $state : null;
            })
            ->helperText('Use the × button on the image to remove it, then save.');

        if ($allowSvg) {
            return $field
                ->acceptedFileTypes([
                    'image/jpeg',
                    'image/png',
                    'image/webp',
                    'image/gif',
                    'image/svg+xml',
                ])
                ->panelLayout('compact')
                ->removeUploadedFileButtonPosition('right')
                ->uploadButtonPosition('right');
        }

        // Call panelLayout AFTER image() so the remove (×) button stays visible.
        return $field
            ->image()
            ->panelLayout('compact')
            ->removeUploadedFileButtonPosition('right')
            ->uploadButtonPosition('right');
    }
}
