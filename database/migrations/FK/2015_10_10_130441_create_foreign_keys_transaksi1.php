<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateForeignKeysTransaksi1 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('transaksis', function(Blueprint $table) {
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
        Schema::table('transaksis', function(Blueprint $table) {
            $table->dropForeign('transaksis_id_pegawai_foreign');
        });
    }
}
