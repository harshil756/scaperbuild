<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\Storage;

class PageBlock extends Model
{
    protected $fillable = [
        'page_id',
        'block_key',
        'section',
        'label',
        'type',
        'value',
        'image_path',
        'background_image_path',
        'link_url',
        'metadata',
        'sort_order',
    ];

    protected function casts(): array
    {
        return [
            'metadata' => 'array',
            'sort_order' => 'integer',
        ];
    }

    public function page(): BelongsTo
    {
        return $this->belongsTo(Page::class);
    }

    public function imageUrl(): ?string
    {
        return $this->image_path ? Storage::disk('public')->url($this->image_path) : null;
    }

    public function backgroundImageUrl(): ?string
    {
        return $this->background_image_path ? Storage::disk('public')->url($this->background_image_path) : null;
    }
}
