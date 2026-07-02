<?php

namespace App\Filament\Resources\Menus\Pages;

use App\Filament\Resources\Menus\MenuResource;
use App\Services\MenuMapper;
use Filament\Resources\Pages\EditRecord;

class EditMenu extends EditRecord
{
    protected static string $resource = MenuResource::class;

    protected ?array $menuContent = null;

    protected function getHeaderActions(): array
    {
        return [];
    }

    protected function mutateFormDataBeforeFill(array $data): array
    {
        $this->record->loadMissing('items');
        $data['content'] = MenuMapper::toForm($this->record);

        return $data;
    }

    protected function mutateFormDataBeforeSave(array $data): array
    {
        $this->menuContent = $data['content'] ?? null;
        unset($data['content']);

        return $data;
    }

    protected function afterSave(): void
    {
        if (is_array($this->menuContent)) {
            MenuMapper::sync($this->record, $this->menuContent);
        }
    }
}
