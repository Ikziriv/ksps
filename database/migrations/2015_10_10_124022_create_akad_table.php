<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateAkadTable extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		Schema::create('akads', function (Blueprint $table) {
			$table->engine = 'InnoDB';

			$table->increments('id_akad');
			$table->boolean('seen')->default(false);
			$table->string('status');
			$table->string('nominal');
			$table->string('tgl_transaksi');
			$table->string('tgl_jatuh_tempo');
			$table->string('jangka_waktu');
			$table->string('perpanjang');
			$table->integer('id_pegawai')->unsigned();
			$table->integer('id_anggota')->unsigned();
			$table->timestamps();

		});

		Schema::table('akads', function (Blueprint $table) {
			$table->foreign('id_pegawai')
				->references('id_pegawai')
				->on('pegawais')
				->onDelete('restrict');
			$table->foreign('id_anggota')
				->references('id_anggota')
				->on('anggotas')
				->onDelete('restrict');
		});

		// Schema::create('akad_anggota_pegawai', function (Blueprint $table) {
		// 	$table->primary('id');
		// 	$table->integer('id_akad')->unsigned();
		// 	$table->integer('id_pegawai')->unsigned();
		// 	$table->integer('id_anggota')->unsigned();
		// 	$table->foreign('id_akad')->references('id')->on('akads');
		// 	$table->foreign('id_pegawai')->references('id')->on('pegawais');
		// 	$table->foreign('id_anggota')->references('id')->on('anggotas');
		// 	$table->timestamps();
		// });

	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down() {

		Schema::table('akads', function (Blueprint $table) {
			$table->dropForeign('akads_id_pegawai_foreign');
			$table->dropForeign('akads_id_anggota_foreign');
		});

		Schema::drop('akads');
		// Schema::drop('akad_anggota_pegawai');
	}
}
