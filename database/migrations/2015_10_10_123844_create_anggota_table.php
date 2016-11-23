<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateAnggotaTable extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		Schema::create('anggotas', function (Blueprint $table) {
			$table->engine = 'InnoDB';

			$table->increments('id_anggota');
			$table->string('no_ktp');
			$table->string('nama');
			$table->string('jk');
			$table->string('alamat');
			$table->string('tempat_lahir');
			$table->string('tanggal_lahir');
			$table->string('tlp');
			$table->string('kelurahan');
			$table->string('kecamatan');
			$table->string('kabupaten');
			$table->string('kodepos');
			$table->string('status');
			$table->boolean('seen')->default(false);
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down() {
		Schema::drop('anggotas');
	}
}
