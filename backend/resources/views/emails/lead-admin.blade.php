<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>New lead — 7 States Pest Control</title>
</head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:Arial,Helvetica,sans-serif;color:#1f2937;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6;padding:24px 12px;">
    <tr>
        <td align="center">
            <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:8px;overflow:hidden;border:1px solid #e5e7eb;">
                <tr>
                    <td style="background:#0f5132;padding:20px 28px;text-align:center;">
                        <img src="{{ $message->embed(public_path(config('contact.logo_path'))) }}" alt="7 States Pest Control" width="200" style="display:block;margin:0 auto;max-width:200px;height:auto;border:0;">
                    </td>
                </tr>
                <tr>
                    <td style="padding:28px;">
                        <h1 style="margin:0 0 8px;font-size:22px;line-height:1.3;color:#0f5132;">New website lead</h1>
                        <p style="margin:0 0 20px;font-size:15px;line-height:1.5;color:#4b5563;">
                            A new <strong>{{ $typeLabel }}</strong> submission was received from the website.
                        </p>

                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-size:14px;line-height:1.5;">
                            <tr>
                                <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;width:140px;color:#6b7280;vertical-align:top;">Name</td>
                                <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#111827;font-weight:600;">{{ $displayName }}</td>
                            </tr>
                            <tr>
                                <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;vertical-align:top;">Email</td>
                                <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;">
                                    <a href="mailto:{{ $lead->email }}" style="color:#0f5132;text-decoration:none;">{{ $lead->email }}</a>
                                </td>
                            </tr>
                            @if($displayPhone)
                            <tr>
                                <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;vertical-align:top;">Phone</td>
                                <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;">
                                    <a href="tel:{{ preg_replace('/\s+/', '', $displayPhone) }}" style="color:#0f5132;text-decoration:none;">{{ $displayPhone }}</a>
                                </td>
                            </tr>
                            @endif
                            <tr>
                                <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;vertical-align:top;">Form type</td>
                                <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;">{{ $typeLabel }}</td>
                            </tr>
                            @if($lead->source_page)
                            <tr>
                                <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;vertical-align:top;">Source page</td>
                                <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;">{{ $lead->source_page }}</td>
                            </tr>
                            @endif
                            @if($lead->referer_title)
                            <tr>
                                <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;vertical-align:top;">Page title</td>
                                <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;">{{ $lead->referer_title }}</td>
                            </tr>
                            @endif
                            <tr>
                                <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;vertical-align:top;">Submitted</td>
                                <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;">{{ $lead->created_at?->timezone(config('app.timezone'))->format('d M Y, g:ia') }}</td>
                            </tr>
                            @if($lead->message)
                            <tr>
                                <td style="padding:10px 0;color:#6b7280;vertical-align:top;">Message</td>
                                <td style="padding:10px 0;color:#111827;white-space:pre-wrap;">{{ $lead->message }}</td>
                            </tr>
                            @endif
                        </table>

                        <p style="margin:24px 0 0;font-size:13px;color:#6b7280;">
                            Reply directly to this email to contact the customer.
                        </p>
                    </td>
                </tr>
                <tr>
                    <td style="background:#f9fafb;padding:16px 28px;text-align:center;font-size:12px;line-height:1.5;color:#6b7280;border-top:1px solid #e5e7eb;">
                        <a href="{{ $siteUrl }}" style="color:#0f5132;text-decoration:none;">{{ $siteUrl }}</a>
                        &nbsp;·&nbsp;
                        <a href="tel:{{ preg_replace('/\s+/', '', $phone) }}" style="color:#0f5132;text-decoration:none;">{{ $phone }}</a>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>
</body>
</html>
