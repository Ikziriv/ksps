<?php namespace App\Repositories;

use App\Models\Akad, App\Models\Anggota, App\Models\User;

class AkadRepository extends BaseRepository {

	/**
	 * Create a new akadRepository instance.
	 *
	 * @param  App\Models\akad $akad
	 * @return void
	 */
	public function __construct(Akad $akad)
	{
		$this->model = $akad;
	}

	/**
	 * Store a akad.
	 *
	 * @param  array $inputs
	 * @return void
	 */
	public function save($akad, $inputs)
	{
		if(isset($inputs['seen'])) 
		{
			$akad->seen = $inputs['seen'] == 'true';		
		} else {

			$akad->id_anggota = $inputs['id_anggota'];
			$akad->id_pegawai = $inputs['id_pegawai'];
			$akad->status = $inputs['status'];
			$akad->nominal = $inputs['nominal'];
			$akad->tgl_transaksi = $inputs['tgl_transaksi'];
			$akad->tgl_jatuh_tempo = $inputs['tgl_jatuh_tempo'];
			$akad->jangka_waktu = $inputs['jangka_waktu'];
			$akad->perpanjang = $inputs['perpanjang'];
		}
		$akad->save();
	}

	public function store($inputs)
	{
		$akad = new $this->model;

		$this->save($akad, $inputs);

		return $akad;
	}

	/**
	 * Update a akad.
	 *
	 * @param  bool  $vu
	 * @param  int   $id
	 * @return void
	 */
	public function update($inputs, $akad)
	{
		$this->save($akad, $inputs);
	}

	public function destroyAkad(Akad $akad)
	{
		$akad->delete();
	}

}
