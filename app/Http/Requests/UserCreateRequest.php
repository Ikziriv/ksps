<?php namespace App\Http\Requests;

class UserCreateRequest extends Request {

	/**
	 * Get the validation rules that apply to the request.
	 *
	 * @return array
	 */
	public function rules()
	{
		return [
			'nama' => 'required',
			'jk' => 'required',
			'alamat' => 'required',
			'tempat_lahir' => 'required',
			'tanggal_lahir' => 'required',
			'tlp' => 'required|max:12',
			'status' => 'required',
			'username' => 'required|max:30|alpha',
			'email' => 'required|email',
			'password' => 'required|min:8'
		];
	}

}