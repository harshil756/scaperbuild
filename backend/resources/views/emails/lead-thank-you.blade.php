<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Thank You — 7 States Pest Control</title>
</head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:Arial,Helvetica,sans-serif;color:#1f2937;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6;padding:24px 12px;">
    <tr>
        <td align="center">
            <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:8px;overflow:hidden;border:1px solid #e5e7eb;">
                <tr>
                    <td style="background:#0f5132;padding:20px 28px;text-align:center;">
                        <a href="{{ $siteUrl }}" style="display:inline-block;text-decoration:none;">
                            <img src="{{ $message->embed(public_path(config('contact.logo_path'))) }}" alt="7 States Pest Control" width="200" style="display:block;margin:0 auto;max-width:200px;height:auto;border:0;">
                        </a>
                    </td>
                </tr>
                <tr>
                    <td style="padding:28px;">
                        @if ($isNewsletter)
                            <h1 style="margin:0 0 12px;font-size:22px;line-height:1.3;color:#0f5132;">Thanks for subscribing!</h1>
                            <p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#4b5563;">
                                Hi {{ $displayName }},
                            </p>
                            <p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#4b5563;">
                                You’re now on the <strong>7 States Pest Control</strong> newsletter list.
                                We’ll share useful pest prevention tips and service updates for Melbourne homes and businesses.
                            </p>
                        @else
                            <h1 style="margin:0 0 12px;font-size:22px;line-height:1.3;color:#0f5132;">Thank You for Your Request!</h1>
                            <p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#4b5563;">
                                Hi {{ $displayName }},
                            </p>
                            <p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#4b5563;">
                                We’ve received your request and will contact you soon.
                            </p>

                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;margin:0 0 20px;">
                                <tr>
                                    <td style="padding:18px 20px;">
                                        <p style="margin:0 0 12px;font-size:15px;font-weight:700;color:#0f5132;">What happens next?</p>
                                        <p style="margin:0 0 8px;font-size:14px;line-height:1.5;color:#166534;">✓ Our team will review your request within 2 hours</p>
                                        <p style="margin:0 0 8px;font-size:14px;line-height:1.5;color:#166534;">✓ We’ll call you to schedule your free quotation</p>
                                        <p style="margin:0;font-size:14px;line-height:1.5;color:#166534;">✓ A licensed technician will visit your property</p>
                                    </td>
                                </tr>
                            </table>
                        @endif

                        <p style="margin:0 0 8px;font-size:15px;line-height:1.6;color:#4b5563;text-align:center;">
                            Need immediate assistance?
                        </p>
                        <p style="margin:0 0 20px;text-align:center;">
                            <a href="tel:{{ $phoneTel }}" style="display:inline-block;background:#0f5132;color:#ffffff;text-decoration:none;font-size:16px;font-weight:700;padding:12px 22px;border-radius:6px;">
                                {{ $phone }}
                            </a>
                        </p>

                        <p style="margin:0;font-size:14px;line-height:1.6;color:#6b7280;text-align:center;">
                            Or email us at
                            <a href="mailto:{{ $publicEmail }}" style="color:#0f5132;text-decoration:none;">{{ $publicEmail }}</a>
                        </p>
                    </td>
                </tr>
                <tr>
                    <td style="background:#f9fafb;padding:16px 28px;text-align:center;font-size:12px;line-height:1.6;color:#6b7280;border-top:1px solid #e5e7eb;">
                        <strong style="color:#0f5132;">7 States Pest Control</strong><br>
                        Licensed pest control across Melbourne &amp; surrounds<br>
                        <a href="{{ $siteUrl }}" style="color:#0f5132;text-decoration:none;">{{ str_replace(['https://', 'http://'], '', $siteUrl) }}</a>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>
</body>
</html>
