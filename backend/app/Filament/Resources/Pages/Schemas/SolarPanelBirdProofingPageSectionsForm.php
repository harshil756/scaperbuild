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

class SolarPanelBirdProofingPageSectionsForm
{
    public static function sections(): array
    {
        return [
            Section::make('Page sections')
                ->description('Manage Solar Panel Bird Proofing page content — text, images, and backgrounds.')
                ->visible(fn (?Page $record): bool => $record?->slug === 'solar-panel-bird-proofing')
                ->columnSpanFull()
                ->schema([
                    Group::make()
                        ->statePath('content')
                        ->schema([
                            Section::make('Hero / intro')->icon('heroicon-o-home')->collapsible()->schema(self::heroSection()),
                            Section::make('Quote form')->icon('heroicon-o-chat-bubble-left-right')->collapsible()->schema(self::quoteFormSection()),
                            Section::make('Intro / video')->icon('heroicon-o-video-camera')->collapsible()->schema(self::introVideoSection()),
                            Section::make('Protection services')->icon('heroicon-o-wrench-screwdriver')->collapsible()->schema(self::servicesSection()),
                            Section::make('Why bird control is essential')->icon('heroicon-o-exclamation-triangle')->collapsible()->schema(self::whyEssentialSection()),
                            Section::make('Signs of infestation')->icon('heroicon-o-eye')->collapsible()->schema(self::signsSection()),
                            Section::make('Sustainable proofing')->icon('heroicon-o-globe-alt')->collapsible()->schema(self::sustainableSection()),
                            Section::make('Advantages')->icon('heroicon-o-check-badge')->collapsible()->schema(self::advantagesSection()),
                            Section::make('Process')->icon('heroicon-o-queue-list')->collapsible()->schema(self::processSection()),
                            Section::make('Cost')->icon('heroicon-o-currency-dollar')->collapsible()->schema(self::costSection()),
                            Section::make('Why choose us')->icon('heroicon-o-shield-check')->collapsible()->schema(self::whyChooseSection()),
                            Section::make('Results')->icon('heroicon-o-photo')->collapsible()->schema(self::resultsSection()),
                            Section::make('Blog previews')->icon('heroicon-o-newspaper')->collapsible()->schema(self::blogSection()),
                            Section::make('Client reviews')->icon('heroicon-o-heart')->collapsible()->schema(self::reviewsSection()),
                            Section::make('FAQ')->icon('heroicon-o-question-mark-circle')->collapsible()->schema(self::faqSection()),
                        ]),
                ]),
        ];
    }

    private static function imageField(string $name, string $label): FileUpload
    {
        return FileUpload::make($name)
            ->label($label)
            ->directory('cms/solar-panel-bird-proofing')
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
            TextInput::make('hero.breadcrumb')->label('Breadcrumb label'),
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

    private static function introVideoSection(): array
    {
        return [
            self::imageField('intro_video.background_image', 'Section background'),
            TextInput::make('intro_video.eyebrow')->label('Eyebrow'),
            TextInput::make('intro_video.title')->label('Section title')->columnSpanFull(),
            Textarea::make('intro_video.body')->label('Body (HTML)')->rows(6)->columnSpanFull(),
            TextInput::make('intro_video.youtube_id')->label('YouTube video ID'),
        ];
    }

    private static function servicesSection(): array
    {
        return [
            self::imageField('services.background_image', 'Section background'),
            TextInput::make('services.title')->label('Section title')->columnSpanFull(),
            Textarea::make('services.intro')->label('Intro (HTML)')->rows(3)->columnSpanFull(),
            Repeater::make('services.items')
                ->label('Service items')
                ->schema([
                    Hidden::make('slug'),
                    TextInput::make('title')->required(),
                    Textarea::make('description')->rows(3)->columnSpanFull(),
                    TextInput::make('alt')->label('Image alt text'),
                    self::imageField('image', 'Icon image'),
                ])
                ->columns(2)
                ->collapsible()
                ->itemLabel(fn (array $state): ?string => $state['title'] ?? null)
                ->columnSpanFull(),
            Textarea::make('services.footer')->label('Footer (HTML)')->rows(3)->columnSpanFull(),
        ];
    }

    private static function whyEssentialSection(): array
    {
        return [
            TextInput::make('why_essential.title')->label('Section title')->columnSpanFull(),
            Textarea::make('why_essential.intro')->label('Intro (HTML)')->rows(3)->columnSpanFull(),
            Repeater::make('why_essential.items')
                ->label('Hazard items')
                ->schema([
                    Hidden::make('slug'),
                    TextInput::make('title')->required(),
                    Textarea::make('description')->rows(3)->columnSpanFull(),
                    self::imageField('image', 'Icon image'),
                ])
                ->columns(2)
                ->collapsible()
                ->itemLabel(fn (array $state): ?string => $state['title'] ?? null)
                ->columnSpanFull(),
        ];
    }

    private static function signsSection(): array
    {
        return [
            self::imageField('signs.background_image', 'Section background'),
            TextInput::make('signs.title')->label('Section title')->columnSpanFull(),
            Textarea::make('signs.intro')->label('Intro (HTML)')->rows(3)->columnSpanFull(),
            Repeater::make('signs.items')
                ->label('Bird sign cards')
                ->schema([
                    Hidden::make('slug'),
                    TextInput::make('title')->required(),
                    Textarea::make('description')->rows(2)->columnSpanFull(),
                    self::imageField('image', 'Card image'),
                ])
                ->columns(2)
                ->collapsible()
                ->itemLabel(fn (array $state): ?string => $state['title'] ?? null)
                ->columnSpanFull(),
        ];
    }

    private static function sustainableSection(): array
    {
        return [
            TextInput::make('sustainable.title')->label('Section title')->columnSpanFull(),
            Textarea::make('sustainable.body_left')->label('Left column (HTML)')->rows(6)->columnSpanFull(),
            Textarea::make('sustainable.body_right_intro')->label('Right intro (HTML)')->rows(3)->columnSpanFull(),
            Repeater::make('sustainable.list')
                ->label('Bullet list')
                ->simple(TextInput::make('text')->required())
                ->collapsible()
                ->columnSpanFull(),
        ];
    }

    private static function advantagesSection(): array
    {
        return [
            TextInput::make('advantages.title')->label('Section title')->columnSpanFull(),
            Repeater::make('advantages.items')
                ->label('Advantage cards')
                ->schema([
                    Hidden::make('slug'),
                    TextInput::make('title')->required(),
                    Textarea::make('description')->rows(3)->columnSpanFull(),
                    self::imageField('image', 'Icon image'),
                ])
                ->columns(2)
                ->collapsible()
                ->itemLabel(fn (array $state): ?string => $state['title'] ?? null)
                ->columnSpanFull(),
        ];
    }

    private static function processSection(): array
    {
        return [
            TextInput::make('process.title')->label('Section title')->columnSpanFull(),
            Textarea::make('process.intro')->label('Intro (HTML)')->rows(2)->columnSpanFull(),
            Repeater::make('process.steps')
                ->label('Process steps')
                ->schema([
                    Hidden::make('slug'),
                    TextInput::make('title')->required(),
                    Textarea::make('description')->rows(3)->columnSpanFull(),
                ])
                ->collapsible()
                ->itemLabel(fn (array $state): ?string => $state['title'] ?? null)
                ->columnSpanFull(),
            TextInput::make('process.call_button_label')->label('Call button text'),
            TextInput::make('process.call_button_url')->label('Call button URL'),
        ];
    }

    private static function costSection(): array
    {
        return [
            TextInput::make('cost.title')->label('Section title')->columnSpanFull(),
            Textarea::make('cost.intro')->label('Intro (HTML)')->rows(2)->columnSpanFull(),
            Repeater::make('cost.list')
                ->label('Cost factors list')
                ->simple(TextInput::make('text')->required())
                ->collapsible()
                ->columnSpanFull(),
            Textarea::make('cost.body')->label('Body (HTML)')->rows(4)->columnSpanFull(),
        ];
    }

    private static function whyChooseSection(): array
    {
        return [
            TextInput::make('why_choose.title')->label('Section title')->columnSpanFull(),
            Repeater::make('why_choose.items')
                ->label('Reason cards')
                ->schema([
                    Hidden::make('slug'),
                    TextInput::make('title')->required(),
                    Textarea::make('description')->rows(3)->columnSpanFull(),
                ])
                ->collapsible()
                ->itemLabel(fn (array $state): ?string => $state['title'] ?? null)
                ->columnSpanFull(),
        ];
    }

    private static function resultsSection(): array
    {
        return [
            self::imageField('results.background_image', 'Section background'),
            TextInput::make('results.title')->label('Section title')->columnSpanFull(),
            Repeater::make('results.images')
                ->label('Before/after carousel images')
                ->schema([
                    Hidden::make('slug'),
                    TextInput::make('alt')->label('Alt text'),
                    self::imageField('image_path', 'Image'),
                ])
                ->collapsible()
                ->columnSpanFull(),
            Repeater::make('results.checklist')
                ->label('Checklist items')
                ->simple(TextInput::make('text')->required())
                ->collapsible()
                ->columnSpanFull(),
            Textarea::make('results.body')->label('Body (HTML)')->rows(4)->columnSpanFull(),
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

    private static function faqSection(): array
    {
        return [
            TextInput::make('faq.title')->label('FAQ title')->columnSpanFull(),
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
}
