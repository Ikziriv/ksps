<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateForeignKeysAkad2 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('akads', function(Blueprint $table) {
            $table->foreign('id_pegawai')
                        ->references('id')
                        ->on('pegawais')
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
        Schema::table('akads', function(Blueprint $table) {
            $table->dropForeign('akads_id_pegawai_foreign');
        });
    }
}
