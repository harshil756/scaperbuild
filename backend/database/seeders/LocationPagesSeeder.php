<?php

namespace Database\Seeders;

use App\Models\Page;
use App\Models\PageBlock;
use Illuminate\Database\Seeder;

class LocationPagesSeeder extends Seeder
{
    public function run(): void
    {
        $path = database_path('data/location-pages.json');

        if (! file_exists($path)) {
            $this->command?->error('Missing database/data/location-pages.json');

            return;
        }

        $rows = json_decode(file_get_contents($path), true);
        if (! is_array($rows)) {
            $this->command?->error('Invalid location-pages.json');

            return;
        }

        $defaultServices = [
            ['type' => 'cockroach', 'name' => 'Cockroach control', 'desc' => 'We treat the warm, hidden spots roaches prefer, like behind the dishwasher, under sinks and around plumbing gaps, so the whole colony is dealt with.', 'url' => '/our-services/cockroach-control'],
            ['type' => 'termite', 'name' => 'Termite treatment', 'desc' => 'We check timber, subfloors and roof voids for early activity, then protect your home before hidden damage turns into a costly repair.', 'url' => '/our-services/termite-pest-control'],
            ['type' => 'rodent', 'name' => 'Rodent control', 'desc' => 'We remove rats and mice from ceilings and walls, then close up the gaps they used to get in, so they don’t return.', 'url' => '/rodent-control-in-melbourne'],
            ['type' => 'spider', 'name' => 'Spider control', 'desc' => 'Web clearing and outdoor treatment for garages, patios and letterboxes, so you can use your space without checking every corner first.', 'url' => '/our-services/spider-control-treatment'],
            ['type' => 'bedbug', 'name' => 'Bed bug treatment', 'desc' => 'A discreet service for family homes, rentals and holiday stays, with a return check to make sure every last bug is gone.', 'url' => '/our-services/bed-bug-treatment'],
            ['type' => 'ant', 'name' => 'Ant control', 'desc' => 'We trace the trail back to the nest and treat it at the source, then add protection around doors, windows and garden edges.', 'url' => '/our-services/ant-pest-control'],
            ['type' => 'commercial', 'name' => 'Commercial pest control', 'desc' => 'Regular visits for cafes, shops, offices and warehouses, planned around your trading hours, with records ready for audits.', 'url' => '/commercial-pest-control'],
            ['type' => 'preventative', 'name' => 'Preventative plans', 'desc' => 'Scheduled visits through the year that catch small problems early and keep your property protected once the infestation is cleared.', 'url' => '/contact-us'],
        ];

        $defaultInfographic = [
            ['title' => '1. Moisture Around Foundations', 'desc' => 'Damp areas attract termites and accelerate pest control needs.'],
            ['title' => '2. Wood-to-Soil Contact', 'desc' => 'Direct timber contact allows easy colony access and nesting.'],
            ['title' => '3. Cracks in Walls & Slabs', 'desc' => 'Common entry points that require professional inspection.'],
            ['title' => '4. Poor Ventilation', 'desc' => 'Creates ideal dark, humid breeding conditions for hidden infestations.'],
            ['title' => '5. No Termite Barrier Installed', 'desc' => 'Properties without barriers face significantly higher infestation risk.'],
        ];

        $count = 0;

        foreach ($rows as $data) {
            $slug = $data['slug'] ?? null;
            if (! filled($slug)) {
                continue;
            }

            $name = $data['location_name'] ?? 'Melbourne';

            $page = Page::updateOrCreate(
                ['slug' => $slug],
                [
                    'title' => $data['title'] ?? $slug,
                    'seo_title' => $data['seo_title'] ?? ($data['title'] ?? $slug),
                    'seo_description' => $data['seo_description'] ?? null,
                    'body_class' => $data['body_class'] ?? null,
                    'is_published' => $data['is_published'] ?? true,
                ],
            );

            $page->blocks()->delete();

            $processSteps = $data['process_steps'] ?? [
                ['num' => '1', 'title' => 'Inspection', 'desc' => 'A technician checks your property to identify the pest, entry points and the extent of the issue.'],
                ['num' => '2', 'title' => 'Treatment plan', 'desc' => 'You get a written plan and quote matched to what was found — no generic package.'],
                ['num' => '3', 'title' => 'Treatment', 'desc' => 'We apply eco-friendly, pet- and family-safe products, with clear instructions for the hours after.'],
                ['num' => '4', 'title' => 'Follow-up', 'desc' => 'A check-in visit confirms the pests are gone and covers how to prevent them returning.'],
            ];

            $blocks = [
                ['block_key' => 'location.name', 'section' => 'meta', 'label' => 'Location name', 'type' => 'text', 'value' => $name],
                ['block_key' => 'hero.headline', 'section' => 'hero', 'label' => 'Hero headline', 'type' => 'text', 'value' => $data['hero_headline'] ?? null],
                ['block_key' => 'hero.subhead', 'section' => 'hero', 'label' => 'Hero subhead', 'type' => 'text', 'value' => $data['hero_subhead'] ?? null],
                ['block_key' => 'hero.trust_badge', 'section' => 'hero', 'label' => 'Trust badge', 'type' => 'text', 'value' => $data['hero_trust_badge'] ?? "4.9 rated 45+ {$name} reviews"],
                ['block_key' => 'hero.cta_primary', 'section' => 'hero', 'label' => 'Primary CTA', 'type' => 'text', 'value' => $data['hero_cta_primary'] ?? 'Get a free quote'],
                ['block_key' => 'hero.cta_secondary', 'section' => 'hero', 'label' => 'Secondary CTA', 'type' => 'text', 'value' => $data['hero_cta_secondary'] ?? 'Call now'],
                ['block_key' => 'hero.stats', 'section' => 'hero', 'label' => 'Hero stats', 'type' => 'json', 'metadata' => ['items' => $data['hero_stats'] ?? [
                    ['value' => '15+ yrs', 'label' => 'Local experience'],
                    ['value' => '100%', 'label' => 'Licensed & insured'],
                    ['value' => '24-48h', 'label' => 'Response time'],
                    ['value' => '45+', 'label' => '5-star reviews'],
                ]]],
                ['block_key' => 'local.heading', 'section' => 'local', 'label' => 'Local heading', 'type' => 'text', 'value' => $data['local_heading'] ?? null],
                ['block_key' => 'local.paragraphs', 'section' => 'local', 'label' => 'Local paragraphs', 'type' => 'json', 'metadata' => ['items' => array_values($data['local_paragraphs'] ?? [])]],
                ['block_key' => 'local.signs_title', 'section' => 'local', 'label' => 'Signs title', 'type' => 'text', 'value' => $data['signs_title'] ?? null],
                ['block_key' => 'local.signs_subtitle', 'section' => 'local', 'label' => 'Signs subtitle', 'type' => 'text', 'value' => $data['signs_subtitle'] ?? null],
                ['block_key' => 'local.signs_list', 'section' => 'local', 'label' => 'Signs list', 'type' => 'json', 'metadata' => ['items' => array_values($data['signs_list'] ?? [])]],
                ['block_key' => 'local.infographic_tag', 'section' => 'local', 'label' => 'Infographic tag', 'type' => 'text', 'value' => $data['infographic_tag'] ?? 'WHY PESTS & TERMITES INVADE'],
                ['block_key' => 'local.infographic_title', 'section' => 'local', 'label' => 'Infographic title', 'type' => 'text', 'value' => $data['infographic_title'] ?? 'Why Are Termites Coming Into Your Property?'],
                ['block_key' => 'local.infographic_note', 'section' => 'local', 'label' => 'Infographic note', 'type' => 'text', 'value' => $data['infographic_note'] ?? 'If pest or termite activity continues, professional treatment is the safest and most effective solution for long-term protection.'],
                ['block_key' => 'local.infographic_points', 'section' => 'local', 'label' => 'Infographic points', 'type' => 'json', 'metadata' => ['items' => $data['infographic_points'] ?? $defaultInfographic]],
                ['block_key' => 'why.heading', 'section' => 'why', 'label' => 'Why heading', 'type' => 'text', 'value' => $data['why_heading'] ?? null],
                ['block_key' => 'why.paragraphs', 'section' => 'why', 'label' => 'Why paragraphs', 'type' => 'json', 'metadata' => ['items' => array_values($data['why_paragraphs'] ?? [])]],
                ['block_key' => 'why.trust_subtext', 'section' => 'why', 'label' => 'Why trust subtext', 'type' => 'text', 'value' => $data['why_trust_subtext'] ?? null],
                ['block_key' => 'why.benefits', 'section' => 'why', 'label' => 'Why benefits', 'type' => 'json', 'metadata' => ['items' => array_values($data['why_benefits'] ?? [])]],
                ['block_key' => 'services.title', 'section' => 'services', 'label' => 'Services title', 'type' => 'text', 'value' => $data['services_title'] ?? null],
                ['block_key' => 'services.subtitle', 'section' => 'services', 'label' => 'Services subtitle', 'type' => 'text', 'value' => $data['services_subtitle'] ?? null],
                ['block_key' => 'services.items', 'section' => 'services', 'label' => 'Service items', 'type' => 'json', 'metadata' => ['items' => $data['services_items'] ?? $defaultServices]],
                ['block_key' => 'process.title', 'section' => 'process', 'label' => 'Process title', 'type' => 'text', 'value' => $data['process_title'] ?? 'How a treatment works'],
                ['block_key' => 'process.subtitle', 'section' => 'process', 'label' => 'Process subtitle', 'type' => 'text', 'value' => $data['process_subtitle'] ?? 'Four steps from first call to a pest-free property.'],
                ['block_key' => 'process.steps', 'section' => 'process', 'label' => 'Process steps', 'type' => 'json', 'metadata' => ['items' => $processSteps]],
                ['block_key' => 'detailed.title', 'section' => 'detailed', 'label' => 'Detailed title', 'type' => 'text', 'value' => $data['detailed_title'] ?? null],
                ['block_key' => 'detailed.preview_html', 'section' => 'detailed', 'label' => 'Detailed preview HTML', 'type' => 'html', 'value' => $data['detailed_preview_html'] ?? null],
                ['block_key' => 'detailed.expanded_html', 'section' => 'detailed', 'label' => 'Detailed expanded HTML', 'type' => 'html', 'value' => $data['detailed_expanded_html'] ?? null],
                ['block_key' => 'reviews.rating_text', 'section' => 'reviews', 'label' => 'Reviews rating', 'type' => 'text', 'value' => $data['reviews_rating_text'] ?? 'EXCELLENT'],
                ['block_key' => 'reviews.count_text', 'section' => 'reviews', 'label' => 'Reviews count text', 'type' => 'text', 'value' => $data['reviews_count_text'] ?? 'Based on 45 reviews'],
                ['block_key' => 'faqs.items', 'section' => 'faqs', 'label' => 'FAQs', 'type' => 'json', 'metadata' => ['items' => array_values($data['faqs'] ?? [])]],
            ];

            foreach ($blocks as $i => $block) {
                PageBlock::create([
                    'page_id' => $page->id,
                    'block_key' => $block['block_key'],
                    'section' => $block['section'],
                    'label' => $block['label'],
                    'type' => $block['type'],
                    'value' => $block['value'] ?? null,
                    'metadata' => $block['metadata'] ?? null,
                    'sort_order' => $i + 1,
                ]);
            }

            $count++;
        }

        $this->command?->info("Seeded {$count} location pages.");
    }
}
