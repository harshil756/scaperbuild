<?php

namespace App\Filament\Resources\Pages\Schemas;

use App\Filament\Support\CmsImageUpload;
use App\Models\Page;
use Filament\Forms\Components\Hidden;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Group;
use Filament\Schemas\Components\Section;
use Filament\Forms\Components\FileUpload;

class MelbournePageSectionsForm
{
    public static function sections(): array
    {
        return [
            Section::make('Melbourne page content')
                ->description('Manage Melbourne office page content — text, images, and backgrounds.')
                ->visible(fn (?Page $record): bool => $record?->slug === 'melbourne')
                ->columnSpanFull()
                ->schema([
                    Group::make()
                        ->statePath('content')
                        ->schema([
                            Section::make('Hero / intro')->icon('heroicon-o-home')->collapsible()->schema(self::heroSection()),
                            Section::make('Quote form')->icon('heroicon-o-chat-bubble-left-right')->collapsible()->schema(self::quoteFormSection()),
                            Section::make('Why choose us')->icon('heroicon-o-star')->collapsible()->schema(self::whyChooseSection()),
                            Section::make('Contact section')->icon('heroicon-o-phone')->collapsible()->schema(self::contactSection()),
                            Section::make('Our services grid')->icon('heroicon-o-squares-2x2')->collapsible()->schema(self::servicesSection()),
                        ]),
                ]),
        ];
    }

    private static function imageField(string $name, string $label): FileUpload
    {
        return CmsImageUpload::make($name, $label, 'cms/melbourne');
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

    private static function whyChooseSection(): array
    {
        return [
            TextInput::make('why_choose.eyebrow')->label('Eyebrow'),
            TextInput::make('why_choose.title')->label('Section title')->columnSpanFull(),
            Textarea::make('why_choose.intro')->label('Intro (HTML)')->rows(3)->columnSpanFull(),
            Repeater::make('why_choose.items')
                ->label('Why choose cards')
                ->schema([
                    Hidden::make('slug'),
                    TextInput::make('title')->required(),
                    Textarea::make('description')->rows(4)->columnSpanFull(),
                    TextInput::make('alt')->label('Image alt text'),
                    self::imageField('image', 'Card image'),
                ])
                ->columns(2)
                ->collapsible()
                ->itemLabel(fn (?array $state): ?string => $state['title'] ?? null)
                ->columnSpanFull(),
        ];
    }

    private static function contactSection(): array
    {
        return [
            self::imageField('contact.background_image', 'Section background'),
            self::imageField('contact.side_background_image', 'Side column background'),
            TextInput::make('contact.eyebrow')->label('Eyebrow'),
            TextInput::make('contact.title')->label('Section title')->columnSpanFull(),
            Textarea::make('contact.body')->label('Body (HTML)')->rows(4)->columnSpanFull(),
            TextInput::make('contact.button_label')->label('Button text'),
            TextInput::make('contact.button_url')->label('Button URL'),
        ];
    }

    private static function servicesSection(): array
    {
        return [
            TextInput::make('services.eyebrow')->label('Eyebrow'),
            TextInput::make('services.title')->label('Section title')->columnSpanFull(),
            Textarea::make('services.intro')->label('Intro (HTML)')->rows(3)->columnSpanFull(),
            Repeater::make('services.items')
                ->label('Service cards')
                ->schema([
                    Hidden::make('slug'),
                    TextInput::make('title')->required(),
                    TextInput::make('link')->label('Link URL'),
                    TextInput::make('alt')->label('Image alt text'),
                    self::imageField('image', 'Service icon'),
                ])
                ->columns(2)
                ->collapsible()
                ->itemLabel(fn (?array $state): ?string => $state['title'] ?? null)
                ->columnSpanFull(),
        ];
    }
}
