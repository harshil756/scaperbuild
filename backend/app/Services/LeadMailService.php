<?php

namespace App\Services;

use App\Mail\LeadAdminNotification;
use App\Mail\LeadCustomerThankYou;
use App\Models\Lead;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Throwable;

class LeadMailService
{
    public function sendFor(Lead $lead): void
    {
        $this->sendAdminNotification($lead);
        $this->sendCustomerThankYou($lead);
    }

    public function sendAdminNotification(Lead $lead): void
    {
        $to = config('contact.mail_to');

        if (! filled($to)) {
            Log::warning('CONTACT_MAIL_TO is not configured; skipping admin lead email.');

            return;
        }

        try {
            $mailable = new LeadAdminNotification($lead);

            $pending = Mail::to($to);

            $cc = config('contact.mail_cc', []);
            if ($cc !== []) {
                $pending->cc($cc);
            }

            $bcc = config('contact.mail_bcc', []);
            if ($bcc !== []) {
                $pending->bcc($bcc);
            }

            $pending->send($mailable);
        } catch (Throwable $e) {
            Log::error('Failed to send admin lead notification email.', [
                'lead_id' => $lead->id,
                'error' => $e->getMessage(),
            ]);
        }
    }

    public function sendCustomerThankYou(Lead $lead): void
    {
        if (! filled($lead->email)) {
            return;
        }

        try {
            Mail::to($lead->email, $lead->name ?: null)
                ->send(new LeadCustomerThankYou($lead));
        } catch (Throwable $e) {
            Log::error('Failed to send customer thank-you email.', [
                'lead_id' => $lead->id,
                'error' => $e->getMessage(),
            ]);
        }
    }
}
