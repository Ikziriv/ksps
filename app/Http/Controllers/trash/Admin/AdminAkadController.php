<?php namespace App\Http\Controllers\Admin;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Http\Requests\AkadRequest;
use Carbon\Carbon;

use App\Models\Akad;
use App\Models\Anggota;
use Illuminate\Http\Request;
use yajra\Datatables\Datatables;
use Illuminate\Contracts\Auth\Guard;

class AdminAkadController extends Controller {

	public function __construct(Guard $auth) {
        $this->auth = $auth;
    }
	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */    
    public function apiListAkad()
    {
        $data = Akad::DropdownAkad();
        return response()->json($data);

    }

	public function get_t_akad(Request $request)
	{
        $users = Akad::all();

        return Datatables::of($users)->filter(function ($query) use ($request) {
            if ($request->has('id_akad')) {
                $query->where('id_akad', 'like', "%{$request->get('id_akad')}%");
            }
            if ($request->has('status')) {
                $query->where('status', 'like', "%{$request->get('status')}%");
            }
        })
        ->make(true);

	}

	public function apiAnggota() {
        $users = Anggota::select(['id_anggota', 'no_ktp', 'nama', 'jenkel', 'tempat_lahir', 'tanggal_lahir', 'alamat', 'kelurahan', 'kecamatan', 'kabupaten', 'kodepos', 'tlp', 'created_at', 'updated_at'])->get();

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
                                    <a href="akad/'.$user->id_anggota.'/create" tabindex="-1" role="menuitem">
                                        <i class="fa fa-plus"></i> Akad
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>';
            })
            ->editColumn('id_anggota', '{{$id_anggota}}')
            ->removeColumn('tempat_lahir', 'tanggal_lahir', 'keluarahan', 'kecamatan', 'kabupaten', 'jenkel', 'kodepos', 'created_at','updated_at')
            ->make(true);
    }

    public function getDataAkad()
    {
        $users = Akad::join('anggotas', 'akads.id_anggota', '=', 'anggotas.id_anggota')
            ->select(['akads.id_akad', 'anggotas.nama', 'anggotas.tlp', 'akads.status', 'akads.nominal', 'akads.tgl_transaksi', 'akads.tgl_jatuh_tempo', 'akads.jangka_waktu', 'akads.perpanjang']);

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
                                    <a href="akad/'.$user->id_akad.'/show" tabindex="-1" role="menuitem">
                                        <i class="fa fa-eye"></i> Lihat
                                    </a>
                                </li>
                                <li role="presentation">
                                    <a href="akad/'.$user->id_akad.'/edit" tabindex="-1" role="menuitem">
                                        <i class="fa fa-pencil-square-o"></i> Edit
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
            ->editColumn('id_akad', '{{$id_akad}}')
            ->removeColumn('created_at','updated_at')
            ->make(true);
    }

    public function index()
    {                                  
        $data['title'] = 'MENU AKAD';
        if ($this->auth->user()->status == 'admin') {
            return view('admin.pages.akad.index', $data);  
        }
        return view('worker.pages.akad.index', $data);      
    }

    public function apiAkadBaru()
    {
        $data = Akad::with('anggota')->where('id_anggota', '=', $anggota_id)->orderBy('id_akad','desc')->get();
        return response()->json($data);
    }

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create($id)
	{
        $data['data'] = Anggota::find($id);
		$data['title'] = 'TAMBAH AKAD';
        if ($this->auth->user()->status == 'admin') {
            return View('admin.pages.akad.create', $data);
        }
        return view('worker.pages.akad.create', $data);
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store(AkadRequest $request)
	{
        $input = $request->all();
        $akad = new Akad($input);
        $akad->save();        
        return redirect('admin/akad')
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
		$data = Akad::find($id);
        return response()->json($data);

	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		$data['title'] = 'EDIT AKAD';
        $data['data'] = Akad::find($id);
        if ($this->auth->user()->status == 'admin') {
            return view('admin.pages.akad.edit', $data);
        }
        return view('worker.pages.akad.edit', $data);
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update(AkadRequest $request, $id)
	{
        $akad = Akad::findOrFail($id);
        $input = $request->all();
        $akad->fill($input)->save();       
        return redirect('admin/akad')
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
        $akad = Akad::find($id);
        if ($akad->delete()) {
            return response()->json(array('success' => TRUE));
        }
	}

}
