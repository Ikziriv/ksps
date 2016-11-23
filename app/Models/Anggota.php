<?php namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Anggota extends Model {

	protected $table = 'anggotas';
    protected $primaryKey = 'id';
    protected $fillable = array('no_ktp', 'nama', 'jk', 'tempat_lahir', 'tanggal_lahir', 'alamat', 'kelurahan', 'kecamatan', 'kabupaten', 'kodepos', 'tlp', 'status', 'seen');

	public function akad() {
	    return $this->hasMany('App\Models\Akad');
	}

	protected $hidden = ['keluarahan', 'kecamatan', 'kabupaten', 'kodepos'];

	public function scopeDropdownAnggota($query) {
	    $data = array();
	    $q = $query->select(array('id', 'nama'))->get();
	    if (count($q) > 0) {
	        foreach ($q as $es) {
	            $data[] = array('id' => $es->id_anggota, 'label' => $es->nama);
	        }
	    }
	    return $data;
	}

}
