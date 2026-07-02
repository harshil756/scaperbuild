<?php

use App\Http\Controllers\Api\LeadController;
use App\Http\Controllers\Api\MenuController;
use App\Http\Controllers\Api\PageController;
use Illuminate\Support\Facades\Route;

Route::post('/leads', [LeadController::class, 'store']);
Route::get('/pages/{slug}', [PageController::class, 'show']);
Route::get('/menus/{key}', [MenuController::class, 'show']);
