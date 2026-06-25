<?php

namespace Database\Seeders;

use App\Models\Page;
use App\Models\PageBlock;
use Illuminate\Database\Seeder;

class AntPestControlPageSeeder extends Seeder
{
    public function run(): void
    {
        $path = database_path('data/our-services-ant-pest-control-page.json');

        if (! file_exists($path)) {
            $this->command?->error('Missing database/data/our-services-ant-pest-control-page.json — run: node scripts/extract-our-services-ant-pest-control-cms.mjs');

            return;
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

        $this->command?->info("Ant pest control page seeded with {$page->blocks()->count()} content blocks.");
    }
}
