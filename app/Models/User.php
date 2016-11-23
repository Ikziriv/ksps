<?php namespace App\Models;

use Illuminate\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\CanResetPassword as CanResetPasswordContract;

class User extends Model implements AuthenticatableContract, CanResetPasswordContract {


	use Authenticatable, CanResetPassword;

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'pegawais';

        /**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */


	/**
	 * The attributes excluded from the model's JSON form.
	 *
	 * @var array
	 */
	protected $hidden = ['password', 'remember_token'];
	
	// Relasi table
	public function role() 
	{
		return $this->belongsTo('App\Models\Role');
	}
	
	public function transaksi() {
	    return $this->hasMany('App\Models\Transaki');
	}

	public function akad() {
	    return $this->hasMany('App\Models\Akad');
	}


	/**
	 * Check admin role
	 *
	 * @return bool
	 */
	public function isAdmin()
	{
		return $this->role->slug == 'admin';
	}

	/**
	 * Check not user role
	 *
	 * @return bool
	 */
	public function isNotUser()
	{
		return $this->role->slug != 'user';
	}

}
