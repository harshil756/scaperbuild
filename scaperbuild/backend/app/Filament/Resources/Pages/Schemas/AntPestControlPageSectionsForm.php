<?php

namespace App\Filament\Resources\Pages\Schemas;

use App\Models\Page;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Hidden;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Group;
use Filament\Schemas\Components\Section;
use Illuminate\Support\Arr;

class AntPestControlPageSectionsForm
{
    public static function sections(): array
    {
        return [
            Section::make('Page sections')
                ->description('Manage Ant Pest Control page content — text, images, and backgrounds.')
                ->visible(fn (?Page $record): bool => $record?->slug === 'our-services-ant-pest-control')
                ->columnSpanFull()
                ->schema([
                    Group::make()
                        ->statePath('content')
                        ->schema([
                            Section::make('Hero / intro')->icon('heroicon-o-home')->collapsible()->schema(self::heroSection()),
                            Section::make('Quote form')->icon('heroicon-o-chat-bubble-left-right')->collapsible()->schema(self::quoteFormSection()),
                            Section::make('Ant species')->icon('heroicon-o-bug-ant')->collapsible()->schema(self::speciesSection()),
                            Section::make('Why ants come inside')->icon('heroicon-o-question-mark-circle')->collapsible()->schema(self::whyInsideSection()),
                            Section::make('Problems caused by ants')->icon('heroicon-o-exclamation-triangle')->collapsible()->schema(self::problemsSection()),
                            Section::make('Prevention tips')->icon('heroicon-o-shield-check')->collapsible()->schema(self::preventionSection()),
                            Section::make('Features / trust badges')->icon('heroicon-o-check-badge')->collapsible()->schema(self::featuresSection()),
                            Section::make('FAQ')->icon('heroicon-o-chat-bubble-bottom-center-text')->collapsible()->schema(self::faqSection()),
                            Section::make('Client reviews')->icon('heroicon-o-heart')->collapsible()->schema(self::reviewsSection()),
                            Section::make('Blog previews')->icon('heroicon-o-newspaper')->collapsible()->schema(self::blogSection()),
                            Section::make('Call to action')->icon('heroicon-o-phone')->collapsible()->schema(self::ctaSection()),
                        ]),
                ]),
        ];
    }

    private static function imageField(string $name, string $label): FileUpload
    {
        return FileUpload::make($name)
            ->label($label)
            ->directory('cms/our-services-ant-pest-control')
            ->disk('public')
            ->visibility('public')
            ->maxFiles(1)
            ->imagePreviewHeight('120')
            ->fetchFileInformation(false)
            ->image()
            ->dehydrateStateUsing(function (mixed $state): ?string {
                if (is_array($state)) {
                    $state = Arr::first($state);
                }

                return filled($state) && is_string($state) ? $state : null;
            });
    }

    private static function heroSection(): array
    {
        return [
            self::imageField('hero.background_image', 'Hero background'),
            TextInput::make('hero.breadcrumb_parent')->label('Breadcrumb parent'),
            TextInput::make('hero.breadcrumb_current')->label('Breadcrumb current'),
            TextInput::make('hero.title')->label('Section title'),
            TextInput::make('hero.heading')->label('Main heading (H1)')->columnSpanFull(),
            Textarea::make('hero.intro')->label('Intro (HTML)')->rows(4)->columnSpanFull(),
        ];
    }

    private static function quoteFormSection(): array
    {
        return [
            TextInput::make('quote_form.title')->label('Form heading'),
            TextInput::make('quote_form.subtitle')->label('Form subtitle')->columnSpanFull(),
            TextInput::make('quote_form.submit_text')->label('Submit button text'),
        ];
    }

    private static function speciesSection(): array
    {
        return [
            TextInput::make('species.eyebrow')->label('Eyebrow'),
            TextInput::make('species.title')->label('Section title')->columnSpanFull(),
            Textarea::make('species.intro')->label('Intro (HTML)')->rows(3)->columnSpanFull(),
            Repeater::make('species.items')
                ->label('Species cards')
                ->schema([
                    Hidden::make('slug'),
                    TextInput::make('title')->required(),
                    Textarea::make('description')->rows(3)->columnSpanFull(),
                    TextInput::make('alt')->label('Image alt text'),
                    self::imageField('image', 'Card image'),
                ])
                ->columns(2)
                ->collapsible()
                ->itemLabel(fn (array $state): ?string => $state['title'] ?? null)
                ->columnSpanFull(),
        ];
    }

    private static function whyInsideSection(): array
    {
        return [
            self::imageField('why_inside.background_image', 'Section background'),
            TextInput::make('why_inside.eyebrow')->label('Eyebrow'),
            TextInput::make('why_inside.title')->label('Section title')->columnSpanFull(),
            Textarea::make('why_inside.list_html')->label('List (HTML)')->rows(6)->columnSpanFull(),
            Textarea::make('why_inside.footer')->label('Footer text (HTML)')->rows(3)->columnSpanFull(),
            self::imageField('why_inside.image', 'Section image'),
        ];
    }

    private static function problemsSection(): array
    {
        return [
            TextInput::make('problems.eyebrow')->label('Eyebrow'),
            TextInput::make('problems.title')->label('Section title')->columnSpanFull(),
            Textarea::make('problems.intro')->label('Intro (HTML)')->rows(3)->columnSpanFull(),
            Repeater::make('problems.items')
                ->label('Problem cards')
                ->schema([
                    Hidden::make('slug'),
                    TextInput::make('title')->required(),
                    Textarea::make('description')->rows(3)->columnSpanFull(),
                    self::imageField('image', 'Card image'),
                ])
                ->columns(2)
                ->collapsible()
                ->itemLabel(fn (array $state): ?string => $state['title'] ?? null)
                ->columnSpanFull(),
        ];
    }

    private static function preventionSection(): array
    {
        return [
            TextInput::make('prevention.eyebrow')->label('Eyebrow'),
            TextInput::make('prevention.title')->label('Section title')->columnSpanFull(),
            Textarea::make('prevention.intro')->label('Intro (HTML)')->rows(3)->columnSpanFull(),
            Repeater::make('prevention.tips')
                ->label('Prevention tips')
                ->schema([
                    Hidden::make('slug'),
                    TextInput::make('title')->required()->columnSpanFull(),
                    Textarea::make('intro')->label('Intro paragraph')->rows(2)->columnSpanFull(),
                    Repeater::make('list')
                        ->label('Bullet list')
                        ->simple(TextInput::make('text')->required())
                        ->collapsible()
                        ->columnSpanFull(),
                ])
                ->collapsible()
                ->itemLabel(fn (array $state): ?string => $state['title'] ?? null)
                ->columnSpanFull(),
        ];
    }

    private static function featuresSection(): array
    {
        return [
            Repeater::make('features.items')
                ->label('Trust badge items')
                ->schema([
                    Hidden::make('slug'),
                    TextInput::make('title')->required(),
                    self::imageField('image', 'Badge image'),
                ])
                ->columns(2)
                ->collapsible()
                ->itemLabel(fn (array $state): ?string => $state['title'] ?? null)
                ->columnSpanFull(),
        ];
    }

    private static function faqSection(): array
    {
        return [
            TextInput::make('faq.title')->label('FAQ title')->columnSpanFull(),
            self::imageField('faq.sidebar_image', 'Sidebar image'),
            TextInput::make('faq.sidebar_cta_title')->label('Sidebar CTA title')->columnSpanFull(),
            Textarea::make('faq.sidebar_cta_body')->label('Sidebar CTA body')->rows(3)->columnSpanFull(),
            TextInput::make('faq.sidebar_cta_button_label')->label('Sidebar CTA button text'),
            TextInput::make('faq.sidebar_cta_button_url')->label('Sidebar CTA button URL'),
            Repeater::make('faq.items')
                ->label('FAQ items')
                ->schema([
                    TextInput::make('question')->required()->columnSpanFull(),
                    Textarea::make('answer_html')->label('Answer (HTML)')->rows(4)->columnSpanFull(),
                ])
                ->collapsible()
                ->itemLabel(fn (array $state): ?string => $state['question'] ?? null)
                ->columnSpanFull(),
        ];
    }

    private static function reviewsSection(): array
    {
        return [
            TextInput::make('reviews.eyebrow')->label('Eyebrow'),
            TextInput::make('reviews.title')->label('Title')->columnSpanFull(),
            TextInput::make('reviews.subtitle')->label('Subtitle'),
            TextInput::make('reviews.rating_label')->label('Rating label'),
            Textarea::make('reviews.count_text')->label('Review count text (HTML)')->rows(2)->columnSpanFull(),
        ];
    }

    private static function blogSection(): array
    {
        return [
            TextInput::make('blog.eyebrow')->label('Eyebrow'),
            TextInput::make('blog.title')->label('Section title')->columnSpanFull(),
            Repeater::make('blog.posts')
                ->label('Blog preview posts')
                ->schema([
                    TextInput::make('title')->required(),
                    Textarea::make('excerpt')->rows(2)->columnSpanFull(),
                    TextInput::make('link')->label('Link URL'),
                    TextInput::make('alt')->label('Image alt text'),
                    self::imageField('image_path', 'Thumbnail'),
                ])
                ->collapsible()
                ->itemLabel(fn (array $state): ?string => $state['title'] ?? null)
                ->columnSpanFull(),
        ];
    }

    private static function ctaSection(): array
    {
        return [
            self::imageField('cta.background_image', 'Section background'),
            TextInput::make('cta.eyebrow')->label('Eyebrow'),
            TextInput::make('cta.title')->label('Section title')->columnSpanFull(),
            Textarea::make('cta.body')->label('Body (HTML)')->rows(4)->columnSpanFull(),
            TextInput::make('cta.button_label')->label('Button text'),
            TextInput::make('cta.button_url')->label('Button URL'),
        ];
    }
}
