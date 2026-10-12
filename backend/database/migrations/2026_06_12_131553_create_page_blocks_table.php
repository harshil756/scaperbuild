<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('page_blocks', function (Blueprint $table) {
            $table->id();
            $table->foreignId('page_id')->constrained()->cascadeOnDelete();
            $table->string('block_key');
            $table->string('section');
            $table->string('label');
            $table->string('type'); // text, html, image, background, link, json
            $table->longText('value')->nullable();
            $table->string('image_path')->nullable();
            $table->string('background_image_path')->nullable();
            $table->string('link_url')->nullable();
            $table->json('metadata')->nullable();
            $table->unsignedInteger('sort_order')->default(0);
            $table->timestamps();

            $table->unique(['page_id', 'block_key']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('page_blocks');
    }
};
