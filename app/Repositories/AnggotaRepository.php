<?php namespace App\Repositories;

use App\Models\Anggota;

class AnggotaRepository extends BaseRepository {


	public function __construct(Anggota $anggota)
	{
		$this->model = $anggota;
	}

	/**
	 * Store a anggota.
	 *
	 * @param  array $inputs
	 * @return void
	 */
	public function save($anggota, $inputs)
	{
		if(isset($inputs['seen'])) 
		{
			$anggota->seen = $inputs['seen'] == 'true';		
		} else {

			$anggota->no_ktp = $inputs['no_ktp'];
			$anggota->nama = $inputs['nama'];
			$anggota->jk = $inputs['jk'];
			$anggota->alamat = $inputs['alamat'];
			$anggota->tempat_lahir = $inputs['tempat_lahir'];
			$anggota->tanggal_lahir = $inputs['tanggal_lahir'];
			$anggota->tlp = $inputs['tlp'];
			$anggota->kelurahan = $inputs['kelurahan'];
			$anggota->kecamatan = $inputs['kecamatan'];
			$anggota->kabupaten = $inputs['kabupaten'];
			$anggota->kodepos = $inputs['kodepos'];
			$anggota->status = $inputs['status'];
		}
		$anggota->save();
	}

	public function store($inputs)
	{
		$anggota = new $this->model;

		$this->save($anggota, $inputs);

		return $anggota;
	}

	/**
	 * Update a anggota.
	 *
	 * @param  bool  $vu
	 * @param  int   $id
	 * @return void
	 */
	public function update($inputs, $id)
	{
		$this->save($inputs, $id);
	}

	public function destroyAnggota(Anggota $anggota)
	{
		$anggota->delete();
	}

}
