<?php

namespace App\Filament\Forms\Components;

use Filament\Forms\Components\RichEditor;
use Filament\Support\Components\Attributes\ExposedLivewireMethod;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;
use Livewire\Attributes\Renderless;
use Livewire\Features\SupportFileUploads\TemporaryUploadedFile;
use Throwable;

class BlogContentEditor extends RichEditor
{
    public static function make(?string $name = null): static
    {
        return parent::make($name)
            ->fileAttachmentsDirectory('cms/blog')
            ->fileAttachmentsDisk('public')
            ->fileAttachmentsVisibility('public')
            ->fileAttachmentsMaxSize(2048)
            ->fileAttachmentsAcceptedFileTypes([
                'image/png',
                'image/jpeg',
                'image/gif',
                'image/webp',
            ]);
    }

    #[ExposedLivewireMethod]
    #[Renderless]
    public function getUploadedFileAttachmentTemporaryUrl(TemporaryUploadedFile | string | null $attachment = null): ?string
    {
        $file = $this->resolveUploadedFileAttachment($attachment);

        if (! $file instanceof TemporaryUploadedFile) {
            throw ValidationException::withMessages([
                'file' => 'The image upload could not be processed. Please try again.',
            ]);
        }

        $maxSize = $this->getFileAttachmentsMaxSize();
        $acceptedFileTypes = $this->getFileAttachmentsAcceptedFileTypes();

        try {
            Validator::validate(
                ['file' => $file],
                rules: [
                    'file' => array_values(array_filter([
                        'file',
                        $maxSize ? "max:{$maxSize}" : null,
                        $acceptedFileTypes ? 'mimetypes:'.implode(',', $acceptedFileTypes) : null,
                    ])),
                ],
            );
        } catch (ValidationException) {
            throw ValidationException::withMessages([
                'file' => 'Please upload a JPEG, PNG, WebP, or GIF image under 2 MB.',
            ]);
        }

        try {
            return $file->temporaryUrl();
        } catch (Throwable) {
            throw ValidationException::withMessages([
                'file' => 'Could not preview this image. Please try again.',
            ]);
        }
    }

    private function resolveUploadedFileAttachment(TemporaryUploadedFile | string | null $attachment): mixed
    {
        if (is_string($attachment)) {
            return data_get($this->getLivewire(), "componentFileAttachments.{$this->getStatePath()}.{$attachment}");
        }

        if ($attachment instanceof TemporaryUploadedFile) {
            return $attachment;
        }

        return data_get($this->getLivewire(), "componentFileAttachments.{$this->getStatePath()}");
    }
}
