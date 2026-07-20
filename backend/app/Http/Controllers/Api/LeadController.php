<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreLeadRequest;
use App\Models\Lead;
use App\Services\LeadMailService;
use Illuminate\Http\JsonResponse;

class LeadController extends Controller
{
    public function store(StoreLeadRequest $request, LeadMailService $leadMail): JsonResponse
    {
        $validated = $request->validated();

        $lead = Lead::create([
            'form_type' => $validated['form_type'],
            'status' => Lead::STATUS_NEW,
            'name' => $validated['name'] ?? null,
            'email' => $validated['email'],
            'phone' => $validated['phone'] ?? null,
            'suburb' => $validated['suburb'] ?? null,
            'message' => $validated['message'] ?? null,
            'source_page' => $this->sourcePageFromReferrer($validated['referrer'] ?? null),
            'referer_title' => $validated['referer_title'] ?? null,
            'wordpress_post_id' => $validated['post_id'] ?? null,
            'wordpress_form_id' => $validated['form_id'] ?? null,
            'ip_address' => $request->ip(),
            'user_agent' => $request->userAgent(),
        ]);

        $leadMail->sendFor($lead);

        return response()->json([
            'success' => true,
            'data' => [
                'redirect_url' => '/thank-you',
            ],
        ], 201);
    }

    private function sourcePageFromReferrer(?string $referrer): ?string
    {
        if (! $referrer) {
            return null;
        }

        $path = parse_url($referrer, PHP_URL_PATH);

        return is_string($path) && $path !== '' ? $path : null;
    }
}
