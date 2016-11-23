<?php namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Akad extends Model {

	protected $table = 'akads';
    protected $primaryKey = 'id';
    protected $fillable = array('id_pegawai', 'id_anggota', 'seen', 'status', 'tgl_transaksi', 'nominal', 'tgl_jatuh_tempo', 'jangka_waktu', 'perpanjang');

	public function user() {
	    return $this->belongTo('App\Models\User');
	}

    public function anggota() {
	    return $this->belongTo('App\Models\Anggota');
	}    

	public function ahliwaris() {
	    return $this->belongTo('App\Models\Ahli_waris');
	}

	public function transaksi() {
	    return $this->hasMany('App\Models\Transaki');
	}

	public function scopeDropdownAkad($query) {
	    $data = array();
	    $q = $query->select(array('id'))->get();
	    if (count($q) > 0) {
	        foreach ($q as $es) {
	            $data[] = array('id' => $es->id_anggota);
	        }
	    }
	    return $data;
	}
}

