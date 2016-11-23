<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateForeignKeysAhliwaris extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('ahliwaris', function(Blueprint $table) {
            $table->foreign('id_akad')
                        ->references('id')
                        ->on('akads')
                        ->onDelete('cascade');
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('ahliwaris', function(Blueprint $table) {
            $table->dropForeign('ahliwaris_id_akad_foreign');
        });
    }
}
