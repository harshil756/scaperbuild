<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Validation\ValidationException;

class MenuItem extends Model
{
    protected $fillable = [
        'menu_id',
        'parent_id',
        'label',
        'url',
        'sort_order',
        'is_external',
        'is_visible',
        'metadata',
    ];

    protected function casts(): array
    {
        return [
            'is_external' => 'boolean',
            'is_visible' => 'boolean',
            'metadata' => 'array',
        ];
    }

    protected static function booted(): void
    {
        static::saving(function (MenuItem $item): void {
            $item->url = self::normalizeUrl($item->url);

            $duplicate = self::query()
                ->where('menu_id', $item->menu_id)
                ->where('parent_id', $item->parent_id)
                ->where('url', $item->url)
                ->when($item->exists, fn ($query) => $query->whereKeyNot($item->id))
                ->exists();

            if ($duplicate) {
                throw ValidationException::withMessages([
                    'url' => "The URL \"{$item->url}\" already exists in this menu section.",
                ]);
            }
        });
    }

    public static function normalizeUrl(string $url): string
    {
        $url = trim($url);

        if ($url === '' || $url === '#') {
            return '#';
        }

        if (str_starts_with($url, 'http://') || str_starts_with($url, 'https://') || str_starts_with($url, 'mailto:') || str_starts_with($url, 'tel:')) {
            return $url;
        }

        return '/'.ltrim($url, '/');
    }

    public function menu(): BelongsTo
    {
        return $this->belongsTo(Menu::class);
    }

    public function parent(): BelongsTo
    {
        return $this->belongsTo(MenuItem::class, 'parent_id');
    }

    public function children(): HasMany
    {
        return $this->hasMany(MenuItem::class, 'parent_id')->orderBy('sort_order');
    }
}
