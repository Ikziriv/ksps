<?php namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Transaksi extends Model
{
	protected $table = 'transaksis';
    protected $primaryKey = 'id';
    protected $fillable = array('id_pegawai', 'id_akad', 'seen', 'tgl_transaksi', 'nominal');

    public function user() {
	    return $this->belongTo('App\Models\User');
	}

	public function akad() {
	    return $this->belongTo('App\Models\Akad');
	}
}
