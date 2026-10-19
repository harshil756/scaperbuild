<?php

namespace Tests\Feature;

use App\Mail\LeadCustomerThankYou;
use App\Models\Lead;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Mail;
use Tests\TestCase;

class LeadApiTest extends TestCase
{
    use RefreshDatabase;

    private function locationQuotePayload(array $overrides = []): array
    {
        return array_merge([
            'name' => 'Jane Citizen',
            'email' => 'jane@example.com',
            'phone' => '412345678',
            'suburb' => 'Armadale',
            'message' => 'Termites',
            'form_type' => 'quote',
            'referer_title' => 'Pest Control Armadale',
            'referrer' => 'http://localhost:5173/pest-control-armadale/',
        ], $overrides);
    }

    public function test_quote_without_email_is_rejected_with_email_error(): void
    {
        Mail::fake();

        $this->postJson('/api/leads', $this->locationQuotePayload(['email' => '']))
            ->assertStatus(422)
            ->assertJsonValidationErrors(['email'])
            ->assertJsonPath('errors.email.0', 'The email field is required.');

        $this->assertDatabaseCount('leads', 0);
    }

    public function test_quote_with_invalid_email_is_rejected(): void
    {
        Mail::fake();

        $this->postJson('/api/leads', $this->locationQuotePayload(['email' => 'not-an-email']))
            ->assertStatus(422)
            ->assertJsonValidationErrors(['email']);

        $this->assertDatabaseCount('leads', 0);
    }

    public function test_location_quote_with_valid_fields_is_stored(): void
    {
        Mail::fake();

        $this->postJson('/api/leads', $this->locationQuotePayload())
            ->assertCreated()
            ->assertJsonPath('success', true)
            ->assertJsonPath('data.redirect_url', '/thank-you');

        $this->assertDatabaseHas('leads', [
            'form_type' => 'quote',
            'status' => Lead::STATUS_NEW,
            'name' => 'Jane Citizen',
            'email' => 'jane@example.com',
            'phone' => '412345678',
            'suburb' => 'Armadale',
            'message' => 'Termites',
            'source_page' => '/pest-control-armadale/',
        ]);

        Mail::assertSent(LeadCustomerThankYou::class, fn ($mail) => $mail->hasTo('jane@example.com'));
    }
}
