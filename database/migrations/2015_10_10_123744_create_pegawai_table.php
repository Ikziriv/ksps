<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreatePegawaiTable extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		Schema::create('pegawais', function (Blueprint $table) {
			$table->engine = 'InnoDB';

			$table->increments('id_pegawai');
			$table->string('nama');
			$table->string('jk');
			$table->string('alamat');
			$table->string('tempat_lahir');
			$table->string('tanggal_lahir');
			$table->string('tlp');
			$table->string('status');
			$table->boolean('seen')->default(false);
			$table->string('username', 30)->unique();
			$table->string('email')->unique();
			$table->string('password', 60);
			$table->integer('role_id')->unsigned();
			$table->timestamps();
			$table->rememberToken();

		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down() {
		Schema::drop('pegawais');
	}
}
