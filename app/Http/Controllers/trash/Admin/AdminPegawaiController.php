<?php namespace App\Http\Controllers\Admin;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Http\Requests\PegawaiRequest;
use Illuminate\Http\Request;
use Carbon\Carbon;

use App\Models\Pegawai;
use yajra\Datatables\Datatables;
use Illuminate\Support\Facades\DB;
use Illuminate\Contracts\Auth\Guard;
use Illuminate\Support\Str;

class AdminPegawaiController extends Controller {

	public function __construct(Guard $auth) {
		$this->auth = $auth;	
	}


	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		$data['title'] = 'MENU PEGAWAI';
		if ($this->auth->user()->status == 'admin') {
			return view('admin.pages.pegawai.index', $data);
		}
		return view('worker.pages.pegawai.index', $data);
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function get_t_pegawai()
	{
		$users = Pegawai::select(['id_pegawai', 'nama', 'jenkel', 'alamat', 'tempat_lahir', 'tanggal_lahir', 'tlp', 'email', 'status', 'username', 'password', 'created_at', 'updated_at'])->get();

		return Datatables::of($users)->make(true);
	}

	public function getDataPegawai()
	{
		$users = Pegawai::all();

		return Datatables::of($users)
			->addColumn('action', function ($user) {
				return '
					<div class="center">
						<div class="btn-group">
							<a href="#" data-toggle="dropdown" class="btn btn-default dropdown-toggle btn-sm">
								<i class="fa fa-cog"></i> <span class="caret"></span>
							</a>
							<ul class="dropdown-menu pull-right" role="menu">
								<li role="presentation">
									<a href="pegawai/'.$user->id_pegawai.'/show" tabindex="-1" role="menuitem">
										<i class="fa fa-eye"></i> Lihat
									</a>
								</li>
								<li role="presentation">
									<a href="pegawai/'.$user->id_pegawai.'/edit" tabindex="-1" role="menuitem">
										<i class="fa fa-pencil-square-o"></i> Ubah
									</a>
								</li>
								<li role="presentation">
									<a href="pegawai/'.$user->id_pegawai.'/delete" data-toggle="modal">
										<i class="fa fa-times"></i> Hapus 
									</a>
								</li>
							</ul>
						</div>
					</div>';
			})
			->editColumn('id_pegawai', '{{$id_pegawai}}')
			->removeColumn('password','created_at','updated_at')
			->make(true);
	}

	public function create()
	{
		$data['title'] = 'TAMBAH PEGAWAI';
		if ($this->auth->user()->status == 'admin') {
			return View('admin.pages.pegawai.create', $data);
		}
		return view('worker.pages.pegawai.create', $data);
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store(PegawaiRequest $request)
	{
		$input = $request->all();
		$pegawai = new Pegawai($input);
		$pegawai->save();        
		return redirect('admin/pegawai')
            ->with('flash_notification.message', 'Data has been save successfully')
            ->with('flash_notification.level', 'success');
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		$data['data'] = Pegawai::find($id);
    	return view('admin.pages.pegawai.show', $data);
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		$data['title'] = 'EDIT PEGAWAI';
		$data['data'] = Pegawai::find($id);
		if ($this->auth->user()->status == 'admin') {
			return view('admin.pages.pegawai.edit', $data);
		}
		return view('worker.pages.pegawai.edit', $data);
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update(PegawaiRequest $request, $id)
	{
		$pegawai = Pegawai::findOrFail($id);
		$input = $request->all();

		$pegawai->fill($input)->save();       
		return redirect('admin/pegawai')
            ->with('flash_notification.message', 'Data has been updated successfully')
            ->with('flash_notification.level', 'success');
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		$data['data'] = Pegawai::findOrFail($id);
        $pegawai->delete();

        return redirect()
            ->route('admin.pages.pegawai.index')
            ->with('flash_notification.message', 'Data has been deleted successfully')
            ->with('flash_notification.level', 'success');
	}

}
