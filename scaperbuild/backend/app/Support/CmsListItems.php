<?php

namespace App\Support;

class CmsListItems
{
    /**
     * Filament simple repeaters store a flat array of scalar values, not objects.
     *
     * @param  array<int, mixed>  $items
     * @return list<string>
     */
    public static function forForm(array $items): array
    {
        return self::normalize($items);
    }

    /**
     * @param  array<int, mixed>  $items
     * @return list<string>
     */
    public static function forStorage(array $items): array
    {
        return self::normalize($items);
    }

    /** @param  array<int, mixed>  $items */
    private static function normalize(array $items): array
    {
        return collect($items)
            ->map(function (mixed $item): ?string {
                if (is_string($item)) {
                    $text = trim($item);

                    return $text !== '' ? $text : null;
                }

                if (is_array($item)) {
                    $text = $item['text'] ?? $item['item'] ?? $item['value'] ?? null;
                    if (! is_string($text)) {
                        return null;
                    }
                    $text = trim($text);

                    return $text !== '' ? $text : null;
                }

                if (is_scalar($item)) {
                    $text = trim((string) $item);

                    return $text !== '' ? $text : null;
                }

                return null;
            })
            ->filter()
            ->values()
            ->all();
    }
}
