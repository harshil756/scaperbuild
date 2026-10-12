<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Lead extends Model
{
    public const STATUS_NEW = 'new';

    public const STATUS_CONTACTED = 'contacted';

    public const STATUS_CLOSED = 'closed';

    public const FORM_TYPES = [
        'quote',
        'popup',
        'contact',
        'newsletter',
    ];

    protected $fillable = [
        'form_type',
        'status',
        'name',
        'email',
        'phone',
        'suburb',
        'message',
        'source_page',
        'referer_title',
        'wordpress_post_id',
        'wordpress_form_id',
        'ip_address',
        'user_agent',
    ];

    protected function casts(): array
    {
        return [
            'wordpress_post_id' => 'integer',
        ];
    }
}
