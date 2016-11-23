<?php namespace App\Http\Controllers\Admin;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use App\Http\Requests\AnggotaRequest;
use Carbon\Carbon;

use App\Models\Anggota;
use yajra\Datatables\Datatables;
use Illuminate\Support\Facades\DB;
use Illuminate\Contracts\Auth\Guard;
use Illuminate\Support\Str;

class AdminAnggotaController extends Controller {

	public function __construct(Guard $auth) {
        $this->auth = $auth;
    }
	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
    public function apiListAnggota()
    {
        $data = Anggota::DropdownAnggota();
        return response()->json($data);

    }

    public function get_t_anggota(Request $request)
    {
        $users = Anggota::select([
            DB::raw("CONCAT(anggotas.id_anggota,'-',anggotas.id_anggota) as anggota_id"),
            'nama',  
            'alamat', 
            'tlp']);
        $datatables = Datatables::of($users);
        // Column Search
        $columns = $request->get('columns');
        foreach ($columns as $column) {
            if ($column['searchable'] == 'true' and $column['search']['value'] != '' and $column['name'] == 'anggota_id') {
                $datatables->filterColumn('anggota_id', 'whereRaw', "CONCAT(anggotas.id_anggota,'-',anggotas.id_anggota) like ?", ["%{$column['search']['value']}%"]);
            }
        }

        // Global search function
        if ($keyword = $request->get('search')['value']) {
            $datatables->filterColumn('anggota_id', 'whereRaw', "CONCAT(anggotas.id_anggota,'-',anggotas.id_anggota) like ?", ["%{$keyword}%"]);
        }

        return $datatables->make(true);
    }

    public function getDataAnggota()
    {
        $users = Anggota::all();

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
                                    <a href="anggota/'.$user->id_anggota.'/show" tabindex="-1" role="menuitem">
                                        <i class="fa fa-eye"></i> Lihat
                                    </a>
                                </li>
                                <li role="presentation">
                                    <a href="anggota/'.$user->id_anggota.'/edit" tabindex="-1" role="menuitem">
                                        <i class="fa fa-pencil-square-o"></i> Ubah
                                    </a>
                                </li>
                                <li role="presentation">
                                    <a data-toggle="modal" data-target="#delete">
                                        <i class="fa fa-times"></i> Hapus 
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>';
            })
            ->editColumn('id_anggota', '{{$id_anggota}}')
            ->removeColumn('created_at','updated_at', 'keluarahan', 'kecamatan', 'kabupaten')
            ->make(true);
    }

	public function index()
	{
		$data['title'] = 'MENU ANGGOTA';
        if ($this->auth->user()->status == 'admin') {
            return view('admin.pages.anggota.index', $data);
        }
        return view('worker.pages.anggota.index', $data);
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		$data['title'] = 'TAMBAH ANGGOTA';
        if ($this->auth->user()->status == 'admin') {
            return View('admin.pages.anggota.create', $data);
        }
        return view('worker.pages.anggota.create', $data);
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store(AnggotaRequest $request)
	{
		$input = $request->all();
        $anggota = new Anggota($input);
        $anggota->save();        
        return redirect('admin/anggota')
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
        $data['data'] = Anggota::find($id);
        return view('admin.pages.anggota.show', $data);
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		$data['title'] = 'EDIT ANGGOTA';
        $data['data'] = Anggota::find($id);
        if ($this->auth->user()->status == 'admin') {
            return view('admin.pages.anggota.edit', $data);
        }
        return view('worker.pages.anggota.edit', $data);
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update(AnggotaRequest $request, $id)
	{
        $anggota = Anggota::findOrFail($id);
		$input = $request->all();
        $anggota->fill($input)->save();       
        return redirect('admin/anggota')
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
		$anggota = Anggota::find($id);
        if ($anggota->delete()) {
            return response()->json(array('success' => TRUE));
        }
	}

}
