<?php namespace App\Repositories;

use App\Models\Ahliwaris, App\Models\Akad;

class AhliwarisRepository extends BaseRepository {

	/**
	 * Create a new ahliwarisRepository instance.
	 *
	 * @param  App\Models\ahliwaris $ahliwaris
	 * @return void
	 */
	public function __construct(
		Ahliwaris $ahliwaris,
		Akad $akad)
	{
		$this->model = $ahliwaris;
		$this->akad = $akad;
	}

	/**
	 * Store a ahliwaris.
	 *
	 * @param  array $inputs
	 * @return void
	 */
	private function save($ahliwaris, $inputs)
	{
		if(isset($inputs['seen'])) 
		{
			$akad->seen = $inputs['seen'] == 'true';		
		} else {		
			$ahliwaris->id_akad = $inputs['id_akad'];
			$ahliwaris->no_ktp = $inputs['no_ktp'];
			$ahliwaris->nama = $inputs['nama'];
			$ahliwaris->jk = $inputs['jk'];
			$ahliwaris->alamat = $inputs['alamat'];
			$ahliwaris->tempat_lahir = $inputs['tempat_lahir'];
			$ahliwaris->tanggal_lahir = $inputs['tanggal_lahir'];
			$ahliwaris->tlp = $inputs['tlp'];
			$ahliwaris->kelurahan = $inputs['kelurahan'];
			$ahliwaris->kecamatan = $inputs['kecamatan'];
			$ahliwaris->kabupaten = $inputs['kabupaten'];
			$ahliwaris->kodepos = $inputs['kodepos'];
			$ahliwaris->status = $inputs['status'];
			$ahliwaris->jml_anak = $inputs['jml_anak'];
			$ahliwaris->hubungan = $inputs['hubungan'];
	}

		$ahliwaris->save();
	}

	public function store($inputs)
	{
		$ahliwaris = new $this->model;

		$this->save($ahliwaris, $inputs);
	}

	/**
	 * Update a ahliwaris.
	 *
	 * @param  bool  $vu
	 * @param  int   $id
	 * @return void
	 */
	public function update($ahliwaris, $inputs)
	{
		$this->save($ahliwaris, $inputs);
	}

	public function destroyAhliwaris(Ahliwaris $ahliwaris)
	{
		$ahliwaris->findOrFail($id);
		$ahliwaris->delete();
	}

}