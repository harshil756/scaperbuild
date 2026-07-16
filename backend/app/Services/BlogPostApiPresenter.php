<?php

namespace App\Services;

use App\Models\BlogPost;
use Illuminate\Support\Str;

class BlogPostApiPresenter
{
    public static function presentSummary(BlogPost $post): array
    {
        return [
            'id' => $post->id,
            'slug' => $post->slug,
            'path' => '/'.$post->slug.'/',
            'title' => $post->title,
            'excerpt' => self::fallbackExcerpt($post),
            'featured_image_url' => PageApiPresenter::mediaUrl($post->featured_image_path),
            'featured_image_alt' => $post->featured_image_alt ?: $post->title,
            'seo_title' => $post->seo_title,
            'seo_description' => $post->seo_description,
            'published_at' => optional($post->published_at)->toIso8601String(),
        ];
    }

    public static function presentDetail(BlogPost $post): array
    {
        return [
            ...self::presentSummary($post),
            'content_html' => $post->content_html,
            'body_class' => $post->body_class,
            'tags' => $post->tags
                ->map(fn ($tag) => [
                    'name' => $tag->name,
                    'slug' => $tag->slug,
                ])
                ->values()
                ->all(),
        ];
    }

    public static function fallbackExcerpt(BlogPost $post): string
    {
        if (filled($post->excerpt)) {
            return $post->excerpt;
        }

        return Str::limit(trim(strip_tags((string) $post->content_html)), 220);
    }
}
