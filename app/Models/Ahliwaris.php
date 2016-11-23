<?php namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Ahliwaris extends Model {

	protected $table = 'ahliwaris';
    protected $primaryKey = 'id';
    protected $fillable = array('no_ktp', 'nama', 'jk', 'tempat_lahir', 'tanggal_lahir', 'alamat', 'kelurahan', 'kecamatan', 'kabupaten', 'kodepos', 'tlp', 'status', 'jml_anak', 'hubungan');

	public function akad() {
	    return $this->belongTo('App\Models\Akad');
	}
}
