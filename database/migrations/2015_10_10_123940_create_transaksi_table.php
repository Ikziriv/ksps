<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateTransaksiTable extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		Schema::create('transaksis', function (Blueprint $table) {
			$table->engine = 'InnoDB';

			$table->increments('id_transaksi');
			$table->boolean('seen')->default(false);
			$table->string('tgl_transaksi');
			$table->string('nominal');
			$table->integer('id_pegawai')->unsigned();
			$table->integer('id_akad')->unsigned();
			$table->timestamps();

		});

		Schema::table('transaksis', function (Blueprint $table) {
			$table->foreign('id_pegawai')
				->references('id_pegawai')
				->on('pegawais')
				->onDelete('restrict');
			$table->foreign('id_akad')
				->references('id_akad')
				->on('akads')
				->onDelete('restrict');
		});

		// Schema::create('transaksi_pegawai_akad', function (Blueprint $table) {
		// 	$table->primary('id');
		// 	$table->integer('id_transaksi')->unsigned();
		// 	$table->integer('id_pegawai')->unsigned();
		// 	$table->integer('id_akad')->unsigned();
		// 	$table->foreign('id_transaksi')->references('id')->on('transaksis');
		// 	$table->foreign('id_pegawai')->references('id')->on('pegawais');
		// 	$table->foreign('id_akad')->references('id')->on('akads');
		// 	$table->timestamps();
		// });

	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down() {

		Schema::table('transaksis', function (Blueprint $table) {
			$table->dropForeign('transaksis_id_pegawai_foreign');
			$table->dropForeign('transaksis_id_akad_foreign');
		});

		Schema::drop('transaksis');
		// Schema::drop('transaksi_pegawai_akad');
	}
}
