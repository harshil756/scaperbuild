<?php

namespace App\Console\Commands;

use App\Mail\LeadAdminNotification;
use App\Mail\LeadCustomerThankYou;
use App\Models\Lead;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;

class SendTestLeadMail extends Command
{
    protected $signature = 'mail:test-lead
                            {email? : Address to receive the customer thank-you test}
                            {--admin-only : Only send the admin notification}
                            {--customer-only : Only send the customer thank-you}';

    protected $description = 'Send branded test lead admin + thank-you emails via configured SMTP';

    public function handle(): int
    {
        $testEmail = $this->argument('email')
            ?: (config('contact.mail_bcc')[0] ?? null)
            ?: 'harshilsoni605@gmail.com';

        $lead = new Lead([
            'form_type' => 'contact',
            'status' => Lead::STATUS_NEW,
            'name' => 'Mail Setup Test',
            'email' => $testEmail,
            'phone' => '434660060',
            'message' => 'This is a test message from the 7 States Pest Control mail setup. If you received this, SMTP and templates are working.',
            'source_page' => '/contact-us',
            'referer_title' => 'Contact Us — Mail test',
            'ip_address' => '127.0.0.1',
            'user_agent' => 'artisan mail:test-lead',
        ]);
        $lead->id = 0;
        $lead->created_at = now();
        $lead->updated_at = now();

        $sendAdmin = ! $this->option('customer-only');
        $sendCustomer = ! $this->option('admin-only');

        if ($sendAdmin) {
            $to = config('contact.mail_to');
            $this->info("Sending admin notification to {$to} (cc/bcc from config)...");

            $pending = Mail::to($to);
            $cc = config('contact.mail_cc', []);
            if ($cc !== []) {
                $pending->cc($cc);
            }
            $bcc = config('contact.mail_bcc', []);
            if ($bcc !== []) {
                $pending->bcc($bcc);
            }
            $pending->send(new LeadAdminNotification($lead));
            $this->info('Admin notification sent.');
        }

        if ($sendCustomer) {
            $this->info("Sending customer thank-you to {$testEmail}...");
            Mail::to($testEmail, 'Mail Setup Test')->send(new LeadCustomerThankYou($lead));
            $this->info('Customer thank-you sent.');
        }

        $this->newLine();
        $this->info('Done. Check inboxes (and spam) for:');
        if ($sendAdmin) {
            $this->line('  Admin: '.config('contact.mail_to'));
            foreach (config('contact.mail_cc', []) as $cc) {
                $this->line('  CC: '.$cc);
            }
            foreach (config('contact.mail_bcc', []) as $bcc) {
                $this->line('  BCC: '.$bcc);
            }
        }
        if ($sendCustomer) {
            $this->line('  Customer: '.$testEmail);
        }

        return self::SUCCESS;
    }
}
