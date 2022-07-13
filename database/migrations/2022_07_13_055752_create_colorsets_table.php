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
        Schema::create('colorsets', function (Blueprint $table) {
            $table->id();
            $table->string("color_1");
            $table->string("color_2");
            $table->string("color_3");
            $table->string("color_4");
            $table->string("color_5");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('colorsets');
    }
};
