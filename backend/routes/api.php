<?php

use App\Http\Controllers\Api\BlogPostController;
use App\Http\Controllers\Api\LeadController;
use App\Http\Controllers\Api\MenuController;
use App\Http\Controllers\Api\PageController;
use Illuminate\Support\Facades\Route;

Route::get('/blog-posts', [BlogPostController::class, 'index']);
Route::get('/blog-posts/{slug}', [BlogPostController::class, 'show']);
Route::post('/leads', [LeadController::class, 'store']);
Route::get('/pages/{slug}', [PageController::class, 'show']);
Route::get('/menus/{key}', [MenuController::class, 'show']);
