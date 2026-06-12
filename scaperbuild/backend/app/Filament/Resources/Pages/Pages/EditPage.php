<?php

namespace App\Filament\Resources\Pages\Pages;

use App\Filament\Resources\Pages\PageResource;
use App\Services\HomePageBlockMapper;
use Filament\Actions\DeleteAction;
use Filament\Actions\ViewAction;
use Filament\Resources\Pages\EditRecord;

class EditPage extends EditRecord
{
    protected static string $resource = PageResource::class;

    protected ?array $homeContent = null;

    protected function getHeaderActions(): array
    {
        return [
            ViewAction::make(),
            DeleteAction::make(),
        ];
    }

    protected function mutateFormDataBeforeFill(array $data): array
    {
        if ($this->record->slug === 'home') {
            $this->record->loadMissing('blocks');
            $data['content'] = HomePageBlockMapper::toForm($this->record);
        }

        return $data;
    }

    protected function mutateFormDataBeforeSave(array $data): array
    {
        if ($this->record->slug === 'home') {
            $this->homeContent = $data['content'] ?? null;
            unset($data['content']);
        }

        return $data;
    }

    protected function afterSave(): void
    {
        if ($this->record->slug === 'home' && is_array($this->homeContent)) {
            $this->record->load('blocks');
            HomePageBlockMapper::sync($this->record, $this->homeContent);
        }
    }
}
