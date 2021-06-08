<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Scripts extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('scripts', function (Blueprint $table) {
            $table->integer('nb_omg');
            $table->unsignedBigInteger('id_personnage');
            $table->unsignedBigInteger('id_saison');
            $table->foreign('id_personnage')->references('id')->on('personnages');
            $table->foreign('id_saison')->references('id')->on('saisons');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('scripts');
    }
}
