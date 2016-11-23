<?php namespace App\Repositories;

use App\Models\User, App\Models\Role;

class UserRepository extends BaseRepository{

	/**
	 * The Role instance.
	 *
	 * @var App\Models\Role
	 */	
	protected $role;

	/**
	 * Create a new UserRepository instance.
	 *
   	 * @param  App\Models\User $user
	 * @param  App\Models\Role $role
	 * @return void
	 */
	public function __construct(
		User $user, 
		Role $role)
	{
		$this->model = $user;
		$this->role = $role;
	}

  	private function save($user, $inputs)
	{		
		if(isset($inputs['seen'])) 
		{
			$user->seen = $inputs['seen'] == 'true';		
		} else {

			$user->nama = $inputs['nama'];
			$user->jk = $inputs['jk'];
			$user->alamat = $inputs['alamat'];
			$user->tempat_lahir = $inputs['tempat_lahir'];
			$user->tanggal_lahir = $inputs['tanggal_lahir'];
			$user->tlp = $inputs['tlp'];
			$user->status = $inputs['status'];
			$user->username = $inputs['username'];
			$user->email = $inputs['email'];

			if(isset($inputs['role'])) {
				$user->role_id = $inputs['role'];	
			} else {
				$role_user = $this->role->where('slug', 'user')->first();
				$user->role_id = $role_user->id;
			}
		}

		$user->save();
	}

	public function index($n, $role)
	{
		if($role != 'total')
		{
			return $this->model
			->with('role')
			->whereHas('role', function($q) use($role) {
				$q->whereSlug($role);
			})		
			->oldest('seen')
			->latest()
			->paginate($n);			
		}

		return $this->model
		->with('role')		
		->oldest('seen')
		->latest()
		->paginate($n);
	}
	
	/**
	 * Count the users.
	 *
	 * @param  string  $role
	 * @return int
	 */
	public function count($role = null)
	{
		if($role)
		{
			return $this->model
			->whereHas('role', function($q) use($role) {
				$q->whereSlug($role);
			})->count();			
		}

		return $this->model->count();
	}

	/**
	 * Count the users.
	 *
	 * @param  string  $role
	 * @return int
	 */
	public function counts()
	{
		$counts = [
			'admin' => $this->count('admin'),
			'worker' => $this->count('worker')
		];

		$counts['total'] = array_sum($counts);

		return $counts;
	}

	/**
	 * Create a user.
	 *
	 * @param  array  $inputs
	 * @param  int    $user_id
	 * @return App\Models\User 
	 */
	public function store($inputs)
	{
		$user = new $this->model;

		$user->password = bcrypt($inputs['password']);

		$this->save($user, $inputs);

		return $user;
	}

	/**
	 * Update a user.
	 *
	 * @param  array  $inputs
	 * @param  App\Models\User $user
	 * @return void
	 */
	public function update($inputs, $user)
	{
		$this->save($user, $inputs);
	}

	/**
	 * Get statut of authenticated user.
	 *
	 * @return string
	 */
	public function getStatut()
	{
		return session('statut');
	}

	/**
	 * Valid user.
	 *
     * @param  bool  $valid
     * @param  int   $id
	 * @return void
	 */
	public function valid($valid, $id)
	{
		$user = $this->getById($id);

		$user->valid = $valid == 'true';

		$user->save();
	}

	/**
	 * Destroy a user.
	 *
	 * @param  App\Models\User $user
	 * @return void
	 */
	public function destroyUser(User $user)
	{
		$user->delete();
	}

}