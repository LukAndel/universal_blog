<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pictures', function (Blueprint $table) {
            $table->id();
            $table->foreignID('user_id');
            $table->foreignID('article_id')->nullable();
            $table->string('url');
            $table->string('alt')->nullable();
            $table->boolean('is_header')->default(false);
            $table->boolean('is_thumbnail')->default(false);
            $table->timestamps();
            $table->unique(['user_id', 'is_header']);
            $table->unique(['article_id', 'is_thumbnail']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pictures');
    }
};
