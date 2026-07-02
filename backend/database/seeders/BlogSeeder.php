<?php

namespace Database\Seeders;

use App\Models\BlogPost;
use App\Models\BlogTag;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BlogSeeder extends Seeder
{
    public function run(): void
    {
        $path = database_path('data/blogs.json');

        if (! file_exists($path)) {
            $this->command?->error('Missing database/data/blogs.json — run: node scripts/extract-blogs-cms.mjs');

            return;
        }

        $data = json_decode(file_get_contents($path), true);
        $tagIds = [];

        foreach ($data['tags'] ?? [] as $tag) {
            $record = BlogTag::updateOrCreate(
                ['slug' => $tag['slug']],
                ['name' => $tag['name']],
            );
            $tagIds[$tag['slug']] = $record->id;
        }

        $seededSlugs = [];

        DB::transaction(function () use ($data, $tagIds, &$seededSlugs): void {
            foreach ($data['posts'] ?? [] as $post) {
                $blogPost = BlogPost::updateOrCreate(
                    ['slug' => $post['slug']],
                    [
                        'title' => $post['title'],
                        'excerpt' => $post['excerpt'] ?? null,
                        'content_html' => $post['content_html'] ?? null,
                        'featured_image_path' => $post['featured_image_path'] ?? null,
                        'featured_image_alt' => $post['featured_image_alt'] ?? null,
                        'seo_title' => $post['seo_title'] ?? null,
                        'seo_description' => $post['seo_description'] ?? null,
                        'body_class' => $post['body_class'] ?? null,
                        'wordpress_id' => $post['wordpress_id'] ?? null,
                        'elementor_id' => $post['elementor_id'] ?? null,
                        'is_published' => $post['is_published'] ?? true,
                        'published_at' => now(),
                    ],
                );

                $ids = collect($post['tags'] ?? [])
                    ->map(fn (array $tag): ?int => $tagIds[$tag['slug']] ?? null)
                    ->filter()
                    ->values()
                    ->all();

                $blogPost->tags()->sync($ids);
                $seededSlugs[] = $post['slug'];
            }
        });

        $this->command?->info(sprintf(
            'Blog posts seeded: %d posts, %d tags.',
            count($seededSlugs),
            count($tagIds),
        ));
    }
}
