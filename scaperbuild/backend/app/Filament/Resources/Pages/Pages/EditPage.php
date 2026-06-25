<?php

namespace App\Filament\Resources\Pages\Pages;

use App\Filament\Resources\Pages\PageResource;
use App\Services\AboutPageBlockMapper;
use App\Services\HomePageBlockMapper;
use App\Services\AntPestControlPageBlockMapper;
use App\Services\MelbournePageBlockMapper;
use App\Services\ServicePageBlockMapper;
use App\Services\SolarPanelBirdProofingPageBlockMapper;
use Filament\Actions\DeleteAction;
use Filament\Actions\ViewAction;
use Filament\Resources\Pages\EditRecord;

class EditPage extends EditRecord
{
    protected static string $resource = PageResource::class;

    protected ?array $pageContent = null;

    protected function getHeaderActions(): array
    {
        return [
            ViewAction::make(),
            DeleteAction::make(),
        ];
    }

    protected function mutateFormDataBeforeFill(array $data): array
    {
        $mapper = self::mapperForSlug($this->record->slug);
        if ($mapper) {
            $this->record->loadMissing('blocks');
            $data['content'] = $mapper::toForm($this->record);
        }

        return $data;
    }

    protected function mutateFormDataBeforeSave(array $data): array
    {
        if (self::mapperForSlug($this->record->slug)) {
            $this->pageContent = $data['content'] ?? null;
            unset($data['content']);
        }

        return $data;
    }

    protected function afterSave(): void
    {
        $mapper = self::mapperForSlug($this->record->slug);
        if ($mapper && is_array($this->pageContent)) {
            $this->record->load('blocks');
            $mapper::sync($this->record, $this->pageContent);
        }
    }

    /** @return class-string|null */
    private static function mapperForSlug(?string $slug): ?string
    {
        return match ($slug) {
            'home' => HomePageBlockMapper::class,
            'about-us' => AboutPageBlockMapper::class,
            'solar-panel-bird-proofing' => SolarPanelBirdProofingPageBlockMapper::class,
            'our-services-ant-pest-control' => AntPestControlPageBlockMapper::class,
            'melbourne' => MelbournePageBlockMapper::class,
            default => ServicePageBlockMapper::isServicePage($slug)
                ? ServicePageBlockMapper::class
                : null,
        };
    }
}
