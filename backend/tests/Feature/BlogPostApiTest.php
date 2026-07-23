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

    public function test_new_cms_post_without_wordpress_id_appears_before_older_migrated_post(): void
    {
        BlogPost::create([
            'slug' => 'migrated-post',
            'title' => 'Migrated Post',
            'is_published' => true,
            'wordpress_id' => 10631,
            'published_at' => now()->subYear(),
        ]);

        BlogPost::create([
            'slug' => 'new-cms-post',
            'title' => 'New CMS Post',
            'is_published' => true,
            'published_at' => now(),
        ]);

        $response = $this->getJson('/api/blog-posts');

        $response
            ->assertOk()
            ->assertJsonPath('items.0.slug', 'new-cms-post')
            ->assertJsonPath('items.1.slug', 'migrated-post');
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

    public function test_featured_image_url_is_root_relative_storage_path(): void
    {
        BlogPost::create([
            'slug' => 'with-image',
            'title' => 'With Image',
            'featured_image_path' => 'cms/blog/example.jpeg',
            'featured_image_alt' => 'Example alt',
            'is_published' => true,
            'published_at' => now(),
        ]);

        $expected = rtrim((string) config('app.url'), '/').'/storage/cms/blog/example.jpeg';

        $this->getJson('/api/blog-posts/with-image')
            ->assertOk()
            ->assertJsonPath('featured_image_url', $expected)
            ->assertJsonPath('featured_image_alt', 'Example alt');
    }

    public function test_content_html_images_get_src_from_data_id(): void
    {
        BlogPost::create([
            'slug' => 'html-images',
            'title' => 'HTML Images',
            'content_html' => '<p><img data-id="cms/blog/demo.webp"></p>',
            'is_published' => true,
            'published_at' => now(),
        ]);

        $expected = rtrim((string) config('app.url'), '/').'/storage/cms/blog/demo.webp';

        $this->getJson('/api/blog-posts/html-images')
            ->assertOk()
            ->assertJsonPath('content_html', '<p><img src="'.$expected.'" data-id="cms/blog/demo.webp"></p>');
    }
}
