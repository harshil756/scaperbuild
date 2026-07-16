<?php

namespace Tests\Feature;

use App\Models\BlogPost;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class BlogPostApiTest extends TestCase
{
    use RefreshDatabase;

    public function test_index_returns_only_published_posts_in_latest_first_order(): void
    {
        BlogPost::create([
            'slug' => 'draft-post',
            'title' => 'Draft Post',
            'is_published' => false,
        ]);

        BlogPost::create([
            'slug' => 'older-post',
            'title' => 'Older Post',
            'is_published' => true,
            'published_at' => now()->subDay(),
        ]);

        BlogPost::create([
            'slug' => 'latest-post',
            'title' => 'Latest Post',
            'is_published' => true,
            'published_at' => now(),
        ]);

        $response = $this->getJson('/api/blog-posts');

        $response
            ->assertOk()
            ->assertJsonCount(2, 'items')
            ->assertJsonPath('items.0.slug', 'latest-post')
            ->assertJsonPath('items.1.slug', 'older-post');
    }

    public function test_show_returns_published_post_details(): void
    {
        BlogPost::create([
            'slug' => 'cms-post',
            'title' => 'CMS Post',
            'excerpt' => 'Short summary',
            'content_html' => '<p>Hello from Filament.</p>',
            'is_published' => true,
            'published_at' => now(),
        ]);

        $response = $this->getJson('/api/blog-posts/cms-post');

        $response
            ->assertOk()
            ->assertJsonPath('slug', 'cms-post')
            ->assertJsonPath('title', 'CMS Post')
            ->assertJsonPath('content_html', '<p>Hello from Filament.</p>');
    }
}
