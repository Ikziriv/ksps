<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateAhliwarisTable extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		Schema::create('ahliwaris', function (Blueprint $table) {
			$table->engine = 'InnoDB';

			$table->increments('id_ahliwaris');
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
			$table->string('jml_anak');
			$table->string('hubungan');
			$table->integer('id_akad')->unsigned();
			$table->timestamps();

		});

		Schema::table('ahliwaris', function (Blueprint $table) {
			$table->foreign('id_akad')
				->references('id_akad')
				->on('akads')
				->onDelete('restrict');
		});

		// Schema::create('ahliwaris_akad', function (Blueprint $table) {
		// 	$table->primary('id');
		// 	$table->integer('id_ahliwaris')->unsigned();
		// 	$table->foreign('id_ahliwaris')->references('id')->on('ahliwaris');
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
		Schema::table('ahliwaris', function (Blueprint $table) {
			$table->dropForeign('ahliwaris_id_akad_foreign');
		});
		Schema::drop('ahliwaris');
		// Schema::drop('ahliwaris_akad');
	}
}
