<?php

namespace App\Support;

use App\Filament\Resources\Pages\PageResource;
use App\Models\Page;
use App\Services\ServicePageBlockMapper;
use Filament\Navigation\NavigationItem;

class CmsPageNavigation
{
    public const GROUP_CONTENT = 'Content';

    public const GROUP_SERVICES = 'Services';

    public const GROUP_COMMERCIAL = 'Commercial';

    public const GROUP_OFFICES = 'Offices';

    /** @return list<array{slug: string, title: string, path: string, sort: int}> */
    public static function corePages(): array
    {
        return [
            ['slug' => 'home', 'title' => 'Home', 'path' => '/', 'sort' => 10],
            ['slug' => 'about-us', 'title' => 'About Us', 'path' => '/about-us', 'sort' => 20],
            ['slug' => 'contact-us', 'title' => 'Contact Us', 'path' => '/contact-us', 'sort' => 30],
        ];
    }

    /** @return list<array{slug: string, title: string, path: string, sort: int}> */
    public static function servicePages(): array
    {
        return [
            ['slug' => 'our-services', 'title' => 'Pest Control Services', 'path' => '/our-services', 'sort' => 5],
            ['slug' => 'solar-panel-bird-proofing', 'title' => 'Solar Panel Bird Proofing', 'path' => '/solar-panel-bird-proofing', 'sort' => 10],
            ['slug' => 'our-services-ant-pest-control', 'title' => 'Ant Pest Control', 'path' => '/our-services/ant-pest-control', 'sort' => 20],
            ['slug' => 'our-services-bed-bug-treatment', 'title' => 'Bed Bug Treatment', 'path' => '/our-services/bed-bug-treatment', 'sort' => 30],
            ['slug' => 'our-services-cockroach-control', 'title' => 'Cockroach Control', 'path' => '/our-services/cockroach-control', 'sort' => 40],
            ['slug' => 'our-services-mosquito-pest-control', 'title' => 'Mosquito Pest Control', 'path' => '/our-services/mosquito-pest-control', 'sort' => 50],
            ['slug' => 'our-services-fly-control', 'title' => 'Fly Control', 'path' => '/our-services/fly-control', 'sort' => 60],
            ['slug' => 'our-services-fox-pest-control-in-melbourne', 'title' => 'Fox Pest Control', 'path' => '/our-services/fox-pest-control-in-melbourne', 'sort' => 70],
            ['slug' => 'our-services-mites-control', 'title' => 'Mites Control', 'path' => '/our-services/mites-control', 'sort' => 80],
            ['slug' => 'our-services-moth-control', 'title' => 'Moth Control', 'path' => '/our-services/moth-control', 'sort' => 90],
            ['slug' => 'our-services-possum-pest-control', 'title' => 'Possum Pest Control', 'path' => '/our-services/possum-pest-control', 'sort' => 100],
            ['slug' => 'rodent-control-in-melbourne', 'title' => 'Rodent Control Melbourne', 'path' => '/rodent-control-in-melbourne', 'sort' => 110],
            ['slug' => 'our-services-silverfish-treatment', 'title' => 'Silverfish Treatment', 'path' => '/our-services/silverfish-treatment', 'sort' => 120],
            ['slug' => 'our-services-spider-control-treatment', 'title' => 'Spider Control Treatment', 'path' => '/our-services/spider-control-treatment', 'sort' => 130],
            ['slug' => 'our-services-termite-pest-control', 'title' => 'Termite Pest Control', 'path' => '/our-services/termite-pest-control', 'sort' => 140],
            ['slug' => 'wasp-removal-melbourne', 'title' => 'Wasp Removal Melbourne', 'path' => '/wasp-removal-melbourne', 'sort' => 150],
            ['slug' => 'our-services-end-of-lease-pest-control', 'title' => 'End of Lease Pest Control', 'path' => '/our-services/end-of-lease-pest-control', 'sort' => 160],
        ];
    }

    /** @return list<array{slug: string, title: string, path: string, sort: int}> */
    public static function commercialPages(): array
    {
        return [
            ['slug' => 'commercial-pest-control', 'title' => 'Commercial Pest Control', 'path' => '/commercial-pest-control', 'sort' => 5],
            ['slug' => 'office-pest-control', 'title' => 'Office Pest Control', 'path' => '/office-pest-control', 'sort' => 10],
            ['slug' => 'restaurant-cafe-pest-control', 'title' => 'Restaurant & Cafe Pest Control', 'path' => '/restaurant-cafe-pest-control', 'sort' => 20],
            ['slug' => 'school-and-hospitality-facility-pest-control', 'title' => 'School & Hospitality Facility Pest Control', 'path' => '/school-and-hospitality-facility-pest-control', 'sort' => 30],
            ['slug' => 'warehouse-and-factory-pest-control-services-melbourne', 'title' => 'Warehouse & Factory Pest Control', 'path' => '/warehouse-and-factory-pest-control-services-melbourne', 'sort' => 40],
        ];
    }

    /** @return list<array{slug: string, title: string, path: string, sort: int}> */
    public static function officePages(): array
    {
        return [
            ['slug' => 'melbourne', 'title' => 'Melbourne', 'path' => '/melbourne', 'sort' => 10],
        ];
    }

    public static function categoryForSlug(?string $slug): ?string
    {
        if (! $slug) {
            return null;
        }

        if (collect(self::corePages())->contains(fn (array $page): bool => $page['slug'] === $slug)) {
            return 'core';
        }

        if (collect(self::servicePages())->contains(fn (array $page): bool => $page['slug'] === $slug)) {
            return 'services';
        }

        if (in_array($slug, ServicePageBlockMapper::COMMERCIAL_PAGE_SLUGS, true)) {
            return 'commercial';
        }

        if (collect(self::officePages())->contains(fn (array $page): bool => $page['slug'] === $slug)) {
            return 'offices';
        }

        return 'other';
    }

    /** @return list<NavigationItem> */
    public static function items(): array
    {
        $items = [];

        foreach (self::corePages() as $page) {
            $items[] = self::pageItem($page, self::GROUP_CONTENT);
        }

        foreach (self::servicePages() as $page) {
            $items[] = self::pageItem($page, self::GROUP_SERVICES);
        }

        foreach (self::commercialPages() as $page) {
            $items[] = self::pageItem($page, self::GROUP_COMMERCIAL);
        }

        foreach (self::officePages() as $page) {
            $items[] = self::pageItem($page, self::GROUP_OFFICES);
        }

        return $items;
    }

    /** @param  array{slug: string, title: string, path: string, sort: int}  $page */
    private static function pageItem(array $page, string $group): NavigationItem
    {
        return NavigationItem::make($page['title'])
            ->group($group)
            ->sort($page['sort'])
            ->url(fn (): string => self::editUrlForSlug($page['slug']))
            ->isActiveWhen(fn (): bool => self::isEditingSlug($page['slug']));
    }

    public static function editUrlForSlug(string $slug): string
    {
        $page = Page::query()->where('slug', $slug)->first();

        if (! $page) {
            return PageResource::getUrl('index');
        }

        return PageResource::getUrl('edit', ['record' => $page]);
    }

    public static function isEditingSlug(string $slug): bool
    {
        if (! request()->routeIs('filament.admin.resources.pages.edit')) {
            return false;
        }

        $record = request()->route('record');

        if ($record instanceof Page) {
            return $record->slug === $slug;
        }

        if (is_numeric($record)) {
            return Page::query()->whereKey($record)->value('slug') === $slug;
        }

        return false;
    }
}
