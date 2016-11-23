<?php

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder {
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run() {
		Model::unguard();

		// $this->call('UsersTableSeeder');
		// $this->call('PostsTableSeeder');

		// $this->call('UserTableSeeder');
		Role::create([
			'title' => 'Administrator',
			'slug' => 'admin',
		]);

		Role::create([
			'title' => 'Worker',
			'slug' => 'worker',
		]);

		User::create([
			'nama' => 'Rizky Ivan Darmawan',
			'jk' => 'L',
			'alamat' => 'Binong Permai Blok F4/1',
			'tempat_lahir' => 'Jakarta',
			'tanggal_lahir' => '08/05/1993',
			'tlp' => '081218936443',
			'status' => 'Lajang',
			'username' => 'GreatAdmin',
			'email' => 'admin@gmail.com',
			'password' => Hash::make('admin'),
			'role_id' => 1,
		]);

		User::create([
			'nama' => 'Poking',
			'jk' => 'L',
			'alamat' => 'Binong Permai Blok F4/1',
			'tempat_lahir' => 'Jakarta',
			'tanggal_lahir' => '08/05/1993',
			'tlp' => '081218936443',
			'status' => 'Lajang',
			'username' => 'GreatWorker',
			'email' => 'worker@gmail.com',
			'password' => Hash::make('worker'),
			'role_id' => 2,
		]);

		Anggota::create([
			'no_ktp' => '1112091000105',
			'nama' => 'Rizky Ivan',
			'jk' => 'L',
			'alamat' => 'Binong Permai Blok F4/1',
			'tempat_lahir' => 'Jakarta',
			'tanggal_lahir' => '08/05/1993',
			'tlp' => '081218936443',
			'kelurahan' => 'Curug',
			'kecamatan' => 'Curug',
			'kabupaten' => 'Tangerang',
			'kodepos' => '15810',
			'status' => 'Lajang',
		]);

		// Ahliwaris::create([
		// 	'id_akad' => 1,
		// 	'no_ktp' => '1112091000105',
		// 	'nama' => 'Rizky Ivan',
		// 	'jk' => 'L',
		// 	'alamat' => 'Binong Permai Blok F4/1',
		// 	'tempat_lahir' => 'Jakarta',
		// 	'tanggal_lahir' => '08/05/1993',
		// 	'tlp' => '081218936443',
		// 	'kelurahan' => 'Curug',
		// 	'kecamatan' => 'Curug',
		// 	'kabupaten' => 'Tangerang',
		// 	'kodepos' => '15810',
		// 	'status' => 'Lajang',
		// 	'jml_anak' => 2,
		// 	'hubungan' => 'Kakak Ipar',
		// ]);

		// Akad::create([
		// 	'id_anggota' => 1,
		// 	'id_pegawai' => 1,
		// 	'status' => 'Aktif',
		// 	'nominal' => '500000',
		// 	'tgl_transaksi' => '05/06/2015',
		// 	'tgl_jatuh_tempo' => '05/06/2016',
		// 	'jangka_waktu' => '05/06/2016',
		// 	'perpanjang' => 'Tidak',
		// ]);

		// Transksi::create([
		// 	'id_pegawai' => 1,
		// 	'id_akad' => 1,
		// 	'tgl_transaksi' => '05/06/2015',
		// 	'nominal' => '500000',
		// ]);

	}
}
