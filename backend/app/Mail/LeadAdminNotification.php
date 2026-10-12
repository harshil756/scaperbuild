<?php

namespace App\Mail;

use App\Models\Lead;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class LeadAdminNotification extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(public Lead $lead) {}

    public function envelope(): Envelope
    {
        $typeLabel = match ($this->lead->form_type) {
            'newsletter' => 'Newsletter signup',
            'contact' => 'Contact form',
            'popup' => 'Popup quote request',
            default => 'Quote request',
        };

        return new Envelope(
            subject: "[{$typeLabel}] New lead from {$this->displayName()}",
            replyTo: [
                new Address(
                    $this->lead->email,
                    $this->lead->name ?: $this->lead->email,
                ),
            ],
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.lead-admin',
            with: $this->sharedViewData(),
        );
    }

    /**
     * @return array<string, mixed>
     */
    private function sharedViewData(): array
    {
        $submittedAt = ($this->lead->created_at ?? now())->timezone('Australia/Melbourne');
        $siteUrl = rtrim((string) config('contact.site_url'), '/');
        $path = $this->lead->source_page ?: '/';
        $pageUrl = $siteUrl.(str_starts_with($path, '/') ? $path : '/'.$path);

        return [
            'lead' => $this->lead,
            'displayName' => $this->displayName(),
            'displayPhone' => $this->displayPhone(),
            'typeLabel' => match ($this->lead->form_type) {
                'newsletter' => 'Newsletter signup',
                'contact' => 'Contact form',
                'popup' => 'Popup quote request',
                default => 'Quote request',
            },
            'siteUrl' => $siteUrl,
            'phone' => config('contact.phone'),
            'metaDate' => $submittedAt->format('F j, Y'),
            'metaTime' => $submittedAt->format('g:i a'),
            'pageUrl' => $pageUrl,
        ];
    }

    private function displayName(): string
    {
        return $this->lead->name ?: $this->lead->email;
    }

    private function displayPhone(): ?string
    {
        $raw = preg_replace('/\D+/', '', (string) $this->lead->phone);

        if ($raw === '') {
            return null;
        }

        if (strlen($raw) === 9) {
            return '+61 '.substr($raw, 0, 3).' '.substr($raw, 3, 3).' '.substr($raw, 6);
        }

        if (strlen($raw) === 10 && str_starts_with($raw, '0')) {
            return '+61 '.substr($raw, 1, 3).' '.substr($raw, 4, 3).' '.substr($raw, 7);
        }

        return $this->lead->phone;
    }
}
