<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Menu;
use App\Services\MenuApiPresenter;
use Illuminate\Http\JsonResponse;

class MenuController extends Controller
{
    public function show(string $key): JsonResponse
    {
        $menu = Menu::query()->where('key', $key)->firstOrFail();

        return response()->json(MenuApiPresenter::present($menu));
    }
}
