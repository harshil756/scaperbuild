<?php

namespace App\Filament\Resources\Leads\Schemas;

use App\Models\Lead;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class LeadForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Lead details')
                    ->columns(2)
                    ->schema([
                        Select::make('status')
                            ->options([
                                Lead::STATUS_NEW => 'New',
                                Lead::STATUS_CONTACTED => 'Contacted',
                                Lead::STATUS_CLOSED => 'Closed',
                            ])
                            ->required(),
                        Select::make('form_type')
                            ->label('Form type')
                            ->options([
                                'quote' => 'Quote form',
                                'popup' => 'Popup quote',
                                'contact' => 'Contact page',
                                'newsletter' => 'Newsletter',
                            ])
                            ->disabled()
                            ->dehydrated(),
                        TextInput::make('name')
                            ->disabled()
                            ->dehydrated(false),
                        TextInput::make('email')
                            ->disabled()
                            ->dehydrated(false),
                        TextInput::make('phone')
                            ->disabled()
                            ->dehydrated(false),
                        TextInput::make('source_page')
                            ->label('Source page')
                            ->disabled()
                            ->dehydrated(false),
                        TextInput::make('referer_title')
                            ->label('Page title')
                            ->disabled()
                            ->dehydrated(false)
                            ->columnSpanFull(),
                        Textarea::make('message')
                            ->disabled()
                            ->dehydrated(false)
                            ->rows(5)
                            ->columnSpanFull(),
                    ]),
                Section::make('Technical')
                    ->collapsed()
                    ->schema([
                        TextInput::make('wordpress_post_id')
                            ->label('WordPress post ID')
                            ->disabled()
                            ->dehydrated(false),
                        TextInput::make('wordpress_form_id')
                            ->label('WordPress form ID')
                            ->disabled()
                            ->dehydrated(false),
                        TextInput::make('ip_address')
                            ->disabled()
                            ->dehydrated(false),
                        Textarea::make('user_agent')
                            ->disabled()
                            ->dehydrated(false)
                            ->rows(2)
                            ->columnSpanFull(),
                    ]),
            ]);
    }
}
