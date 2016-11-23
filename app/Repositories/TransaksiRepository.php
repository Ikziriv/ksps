<?php namespace App\Repositories;

use App\Models\Transaksi, App\Models\Akad, App\Models\User;

class TransaksiRepository extends BaseRepository {

	/**
	 * Create a new TransaksiRepository instance.
	 *
	 * @param  App\Models\transaksi $transaksi
	 * @return void
	 */
	public function __construct(Transaksi $transaksi)
	{
		$this->model = $transaksi;
	}

	/**
	 * Store a transaksi.
	 *
	 * @param  array $inputs
	 * @return void
	 */
	public function save($transaksi, $inputs)
	{
		if(isset($inputs['seen'])) 
		{
			$transaksi->seen = $inputs['seen'] == 'true';		
		} else {

			$transaksi->id_pegawai = $inputs['id_pegawai'];
			$transaksi->id_akad = $inputs['id_akad'];
			$transaksi->tgl_transaksi = $inputs['tgl_transaksi'];
			$transaksi->nominal = $inputs['nominal'];
		}
		$transaksi->save();
	}

	public function store($inputs)
	{
		$transaksi = new $this->model;

		$this->save($transaksi, $inputs);

		return $transaksi;
	}

	/**
	 * Update a transaksi.
	 *
	 * @param  bool  $vu
	 * @param  int   $id
	 * @return void
	 */
	public function update($transaksi, $inputs, $id)
	{
		$transaksi = $this->getById($id);

		$this->save($transaksi, $inputs);
	}

	public function destroyTransaksi(Transaksi $transaksi)
	{
		$transaksi->delete();
	}

}