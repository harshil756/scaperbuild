<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('leads', function (Blueprint $table) {
            $table->id();
            $table->string('form_type', 32);
            $table->string('status', 32)->default('new');
            $table->string('name')->nullable();
            $table->string('email');
            $table->string('phone', 64)->nullable();
            $table->text('message')->nullable();
            $table->string('source_page')->nullable();
            $table->string('referer_title')->nullable();
            $table->unsignedBigInteger('wordpress_post_id')->nullable();
            $table->string('wordpress_form_id', 64)->nullable();
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->timestamps();

            $table->index('form_type');
            $table->index('status');
            $table->index('created_at');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('leads');
    }
};
