<?php

namespace Database\Seeders;

use App\Models\Page;
use App\Models\PageBlock;
use App\Services\ServicePageBlockMapper;
use Illuminate\Database\Seeder;

class ServicePagesSeeder extends Seeder
{
    public function run(): void
    {
        $totalBlocks = 0;

        foreach (ServicePageBlockMapper::SERVICE_PAGE_SLUGS as $slug) {
            $path = database_path("data/{$slug}-page.json");

            if (! file_exists($path)) {
                $this->command?->warn("Missing {$path} — run: node scripts/extract-service-page-cms.mjs {$slug}");

                continue;
            }

            $data = json_decode(file_get_contents($path), true);
            $page = Page::updateOrCreate(
                ['slug' => $data['slug']],
                [
                    'title' => $data['title'],
                    'seo_title' => $data['seo_title'],
                    'seo_description' => $data['seo_description'],
                    'body_class' => $data['body_class'] ?? null,
                    'elementor_id' => $data['elementor_id'] ?? null,
                    'is_published' => $data['is_published'] ?? true,
                ],
            );

            $page->blocks()->delete();

            foreach ($data['blocks'] as $block) {
                PageBlock::create([
                    'page_id' => $page->id,
                    'block_key' => $block['block_key'],
                    'section' => $block['section'],
                    'label' => $block['label'],
                    'type' => $block['type'],
                    'value' => $block['value'] ?? null,
                    'image_path' => $block['image_path'] ?? null,
                    'background_image_path' => $block['background_image_path'] ?? null,
                    'link_url' => $block['link_url'] ?? null,
                    'metadata' => $block['metadata'] ?? null,
                    'sort_order' => $block['sort_order'] ?? 0,
                ]);
            }

            $count = $page->blocks()->count();
            $totalBlocks += $count;
            $this->command?->info("Seeded {$slug} with {$count} blocks.");
        }

        $this->command?->info("Service pages seeded: {$totalBlocks} total blocks.");
    }
}
