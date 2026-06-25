<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class BlogPost extends Model
{
    protected $fillable = [
        'slug',
        'title',
        'excerpt',
        'content_html',
        'featured_image_path',
        'featured_image_alt',
        'seo_title',
        'seo_description',
        'body_class',
        'wordpress_id',
        'elementor_id',
        'is_published',
        'published_at',
    ];

    protected function casts(): array
    {
        return [
            'is_published' => 'boolean',
            'wordpress_id' => 'integer',
            'elementor_id' => 'integer',
            'published_at' => 'datetime',
        ];
    }

    public function tags(): BelongsToMany
    {
        return $this->belongsToMany(BlogTag::class, 'blog_post_tag');
    }
}
