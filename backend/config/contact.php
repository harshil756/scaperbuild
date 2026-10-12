<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Lead / contact notification recipients
    |--------------------------------------------------------------------------
    */

    'mail_to' => env('CONTACT_MAIL_TO', '7statespestcontrol@gmail.com'),

    'mail_cc' => array_values(array_filter(array_map(
        'trim',
        explode(',', (string) env('CONTACT_MAIL_CC', 'gbhonu@gmail.com'))
    ))),

    'mail_bcc' => array_values(array_filter(array_map(
        'trim',
        explode(',', (string) env('CONTACT_MAIL_BCC', ''))
    ))),

    'site_url' => rtrim((string) env('CONTACT_SITE_URL', 'https://7statespestcontrol.com.au'), '/'),

    'phone' => env('CONTACT_PHONE', '+61 434 660 060'),

    'phone_tel' => env('CONTACT_PHONE_TEL', '+61434660060'),

    'email' => env('CONTACT_PUBLIC_EMAIL', '7statespestcontrol@gmail.com'),

    'logo_path' => env('CONTACT_LOGO_PATH', 'images/7-states-logo.png'),

];
