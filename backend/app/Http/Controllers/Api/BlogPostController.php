<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\BlogPost;
use App\Services\BlogPostApiPresenter;
use Illuminate\Http\JsonResponse;

class BlogPostController extends Controller
{
    public function index(): JsonResponse
    {
        $posts = BlogPost::query()
            ->where('is_published', true)
            ->orderByRaw('wordpress_id IS NULL')
            ->orderByDesc('wordpress_id')
            ->orderByDesc('published_at')
            ->orderByDesc('id')
            ->get();

        return response()->json([
            'items' => $posts->map(fn (BlogPost $post) => BlogPostApiPresenter::presentSummary($post))->values(),
        ]);
    }

    public function show(string $slug): JsonResponse
    {
        $post = BlogPost::query()
            ->where('slug', $slug)
            ->where('is_published', true)
            ->with('tags')
            ->firstOrFail();

        return response()->json(BlogPostApiPresenter::presentDetail($post));
    }
}
