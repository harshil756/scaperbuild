<?php

namespace Database\Seeders;

use App\Models\Page;
use App\Models\PageBlock;
use App\Support\CmsPageNavigation;
use Illuminate\Database\Seeder;

class SiteAndSimplePagesSeeder extends Seeder
{
    public function run(): void
    {
        $this->seedSiteSettings();
        $this->seedTerms();
        $this->seedThankYou();
        $this->seedBlogIndex();
        $this->seedLocationArchive();
    }

    private function seedSiteSettings(): void
    {
        $page = Page::updateOrCreate(
            ['slug' => 'site-settings'],
            [
                'title' => 'Site settings',
                'seo_title' => 'Site settings',
                'seo_description' => null,
                'is_published' => true,
            ],
        );
        $page->blocks()->delete();

        $blocks = [
            ['block_key' => 'header.sticky_title', 'section' => 'header', 'label' => 'Sticky bar title', 'type' => 'text', 'value' => 'Same-Day Pest Control Available'],
            ['block_key' => 'header.quote_button', 'section' => 'header', 'label' => 'Quote button', 'type' => 'text', 'value' => 'Request A Quote'],
            ['block_key' => 'footer.newsletter_title', 'section' => 'footer', 'label' => 'Newsletter title', 'type' => 'text', 'value' => 'Newsletter Subscribe'],
            ['block_key' => 'footer.newsletter_placeholder', 'section' => 'footer', 'label' => 'Newsletter placeholder', 'type' => 'text', 'value' => 'Your Email'],
            ['block_key' => 'footer.newsletter_button', 'section' => 'footer', 'label' => 'Newsletter button', 'type' => 'text', 'value' => 'Sign Up'],
            ['block_key' => 'footer.services_heading', 'section' => 'footer', 'label' => 'Services heading', 'type' => 'text', 'value' => 'Our Services'],
            ['block_key' => 'footer.contact_heading', 'section' => 'footer', 'label' => 'Contact heading', 'type' => 'text', 'value' => 'Contact Us'],
            ['block_key' => 'footer.copyright', 'section' => 'footer', 'label' => 'Copyright', 'type' => 'text', 'value' => '© '.date('Y').' 7 States Pest Control. All rights reserved.'],
            ['block_key' => 'brand.logo', 'section' => 'brand', 'label' => 'Site logo', 'type' => 'image', 'metadata' => ['alt' => '7 states Pest Control']],
        ];

        foreach ($blocks as $i => $block) {
            PageBlock::create(array_merge($block, [
                'page_id' => $page->id,
                'sort_order' => $i + 1,
                'value' => $block['value'] ?? null,
                'metadata' => $block['metadata'] ?? null,
            ]));
        }
    }

    private function seedTerms(): void
    {
        $html = <<<'HTML'
<p>These Terms &amp; Conditions apply to all pest control services provided by 7 States Pest Control ("we", "us", or "our") to residential and commercial customers in Melbourne and surrounding areas. By requesting a quote, booking a service, or allowing our technicians to carry out work on your property, you agree to these terms.</p>
<h3>1. Quotes and bookings</h3>
<p>All quotes provided by phone, email, website forms, or in person are estimates based on the information available at the time. Final pricing may vary if the scope of work changes after inspection.</p>
<h3>2. Free quotations</h3>
<p>Where we offer a free quotation, this covers assessment and pricing only unless otherwise stated in writing.</p>
<h3>3. Access and preparation</h3>
<p>You agree to provide safe and reasonable access to the property and follow any preparation instructions we provide before treatment.</p>
<h3>4. Service guarantees</h3>
<p>Guarantee periods depend on pest type and package. Guarantees apply only when preparation and aftercare instructions are followed.</p>
<h3>5. Payment terms</h3>
<p>Payment is due as agreed at booking or upon completion unless approved account terms apply.</p>
<h3>6. Cancellations and rescheduling</h3>
<p>Please provide as much notice as possible. Missed appointments may incur a call-out fee.</p>
<h3>7. Health, safety, and chemicals</h3>
<p>We use approved products. Advise us of health concerns, allergies, pets, or sensitive areas before treatment.</p>
<h3>8. Limitation of liability</h3>
<p>To the maximum extent permitted by law, liability is limited to the amount paid for the relevant service.</p>
<h3>9. Contact us</h3>
<p>Questions about these terms? Contact 7 States Pest Control via our contact page or phone.</p>
HTML;

        $this->seedSimple('terms-and-conditions', 'Terms & Conditions', 'Terms & Conditions', $html);
    }

    private function seedThankYou(): void
    {
        $page = Page::updateOrCreate(
            ['slug' => 'thank-you'],
            ['title' => 'Thank You', 'seo_title' => 'Thank You', 'is_published' => true],
        );
        $page->blocks()->delete();
        $blocks = [
            ['block_key' => 'hero.title', 'section' => 'hero', 'type' => 'text', 'label' => 'Hero title', 'value' => 'Thank You'],
            ['block_key' => 'hero.breadcrumb', 'section' => 'hero', 'type' => 'text', 'label' => 'Breadcrumb', 'value' => 'Thank You'],
            ['block_key' => 'thank_you.heading', 'section' => 'thank_you', 'type' => 'text', 'label' => 'Heading', 'value' => 'Thank You for Your Request!'],
            ['block_key' => 'thank_you.subheading', 'section' => 'thank_you', 'type' => 'text', 'label' => 'Subheading', 'value' => "We've received your request and will contact you soon."],
            ['block_key' => 'thank_you.next_title', 'section' => 'thank_you', 'type' => 'text', 'label' => 'Next title', 'value' => 'What happens next?'],
            ['block_key' => 'thank_you.steps', 'section' => 'thank_you', 'type' => 'json', 'label' => 'Steps', 'metadata' => ['items' => [
                'Our team will review your request within 2 hours',
                "We'll call you to schedule your free quotation",
                'A licensed technician will visit your property',
            ]]],
            ['block_key' => 'thank_you.home_button', 'section' => 'thank_you', 'type' => 'text', 'label' => 'Home button', 'value' => 'Return to Home'],
            ['block_key' => 'thank_you.help_title', 'section' => 'thank_you', 'type' => 'text', 'label' => 'Help title', 'value' => 'Need immediate assistance?'],
        ];
        foreach ($blocks as $i => $block) {
            PageBlock::create(array_merge($block, ['page_id' => $page->id, 'sort_order' => $i + 1]));
        }
    }

    private function seedBlogIndex(): void
    {
        $this->seedSimple('blog', 'Blog', 'News & Article', null, 'News & Article');
    }

    private function seedLocationArchive(): void
    {
        $locations = collect(CmsPageNavigation::locationPages())
            ->map(function (array $item) {
                $title = (string) ($item['title'] ?? '');
                $short = trim(preg_replace('/^Pest Control\s+/i', '', $title) ?? $title);

                return [
                    'title' => $short !== '' ? $short : $title,
                    'url' => $item['path'],
                ];
            })
            ->values()
            ->all();

        $page = Page::updateOrCreate(
            ['slug' => 'location'],
            ['title' => 'Locations', 'seo_title' => 'Locations', 'is_published' => true],
        );
        $page->blocks()->delete();
        $blocks = [
            ['block_key' => 'hero.title', 'section' => 'hero', 'type' => 'text', 'label' => 'Hero title', 'value' => 'Locations'],
            ['block_key' => 'hero.breadcrumb', 'section' => 'hero', 'type' => 'text', 'label' => 'Breadcrumb', 'value' => 'Locations'],
            ['block_key' => 'background.hero', 'section' => 'hero', 'type' => 'background', 'label' => 'Hero background', 'background_image_path' => null],
            ['block_key' => 'locations.items', 'section' => 'locations', 'type' => 'json', 'label' => 'Locations', 'metadata' => ['items' => $locations]],
        ];
        foreach ($blocks as $i => $block) {
            PageBlock::create([
                'page_id' => $page->id,
                'block_key' => $block['block_key'],
                'section' => $block['section'],
                'label' => $block['label'],
                'type' => $block['type'],
                'value' => $block['value'] ?? null,
                'background_image_path' => $block['background_image_path'] ?? null,
                'metadata' => $block['metadata'] ?? null,
                'sort_order' => $i + 1,
            ]);
        }
    }

    private function seedSimple(string $slug, string $title, string $heroTitle, ?string $bodyHtml, ?string $breadcrumb = null): void
    {
        $page = Page::updateOrCreate(
            ['slug' => $slug],
            ['title' => $title, 'seo_title' => $title, 'is_published' => true],
        );
        $page->blocks()->delete();
        $blocks = [
            ['block_key' => 'hero.title', 'section' => 'hero', 'type' => 'text', 'label' => 'Hero title', 'value' => $heroTitle],
            ['block_key' => 'hero.breadcrumb', 'section' => 'hero', 'type' => 'text', 'label' => 'Breadcrumb', 'value' => $breadcrumb ?? $heroTitle],
        ];
        if ($bodyHtml !== null) {
            $blocks[] = ['block_key' => 'body.html', 'section' => 'body', 'type' => 'html', 'label' => 'Body HTML', 'value' => $bodyHtml];
        }
        foreach ($blocks as $i => $block) {
            PageBlock::create(array_merge($block, ['page_id' => $page->id, 'sort_order' => $i + 1]));
        }
    }
}
