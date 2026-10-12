<?php

namespace App\Mail;

use App\Models\Lead;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class LeadCustomerThankYou extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(public Lead $lead) {}

    public function envelope(): Envelope
    {
        $subject = $this->lead->form_type === 'newsletter'
            ? 'Thanks for subscribing — 7 States Pest Control'
            : 'Thank You for Your Request — 7 States Pest Control';

        return new Envelope(subject: $subject);
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.lead-thank-you',
            with: [
                'lead' => $this->lead,
                'displayName' => $this->lead->name ?: 'there',
                'isNewsletter' => $this->lead->form_type === 'newsletter',
                'siteUrl' => config('contact.site_url'),
                'phone' => config('contact.phone'),
                'phoneTel' => config('contact.phone_tel'),
                'publicEmail' => config('contact.email'),
            ],
        );
    }
}
