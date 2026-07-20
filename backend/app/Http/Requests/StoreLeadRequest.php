<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreLeadRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        $isNewsletter = $this->input('form_type') === 'newsletter';

        return [
            'name' => [$isNewsletter ? 'nullable' : 'required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'phone' => [
                Rule::requiredIf(! $isNewsletter),
                'nullable',
                'string',
                'regex:/^\d{9}$/',
            ],
            'suburb' => ['nullable', 'string', 'max:255'],
            'message' => ['nullable', 'string', 'max:5000'],
            'form_type' => ['required', Rule::in(['quote', 'popup', 'contact', 'newsletter'])],
            'post_id' => ['nullable', 'integer'],
            'form_id' => ['nullable', 'string', 'max:64'],
            'referer_title' => ['nullable', 'string', 'max:500'],
            'referrer' => ['nullable', 'string', 'max:2000'],
        ];
    }
}
