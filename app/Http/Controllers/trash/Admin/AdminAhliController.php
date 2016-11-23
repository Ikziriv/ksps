<?php namespace App\Http\Controllers\Admin;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use App\Http\Requests\AhliwarisRequest;
use Carbon\Carbon;

use App\Models\Akad;
use App\Models\Ahli_waris;
use yajra\Datatables\Datatables;
use Illuminate\Support\Facades\DB;
use Illuminate\Contracts\Auth\Guard;
use Illuminate\Support\Str;

class AdminAhliController extends Controller
{
    public function __construct(Guard $auth) {
        $this->auth = $auth;
    }
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function apiAkadAhli() {
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
                                    <a href="ahliwaris/'.$user->id_akad.'/create" tabindex="-1" role="menuitem">
                                        <i class="fa fa-plus"></i> Ahli Waris
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

    public function getDataAhliwaris()
    {
        $users = Ahli_waris::all();

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
                                    <a href="ahliwaris/'.$user->id_waris.'/show" tabindex="-1" role="menuitem">
                                        <i class="fa fa-eye"></i> Lihat
                                    </a>
                                </li>
                                <li role="presentation">
                                    <a href="ahliwaris/'.$user->id_waris.'/edit" tabindex="-1" role="menuitem">
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
            ->editColumn('id_waris', '{{$id_waris}}')
            ->removeColumn('id_akad',  'jml_anak', 'created_at','updated_at', 'keluarahan', 'kecamatan', 'kabupaten')
            ->make(true);
    }

    public function index()
    {
        $data['title'] = 'MENU AHLI WARIS';
        if ($this->auth->user()->status == 'admin') {
            return view('admin.pages.ahliwaris.index', $data);
        }
        return view('worker.pages.ahliwaris.index', $data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create($id)
    {
        $data['data'] = Akad::find($id);
        $data['title'] = 'TAMBAH AHLI WARIS';
        if ($this->auth->user()->status == 'admin') {
            return View('admin.pages.ahliwaris.create', $data);
        }
        return view('worker.pages.ahliwaris.create', $data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return Response
     */
    public function store(AhliwarisRequest $request)
    {
        $input = $request->all();
        $ahliwaris = new Ahli_waris($input);
        $ahliwaris->save();        
        return redirect('admin/ahliwaris')
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
        $data['data'] = Ahli_waris::find($id);
        return view('admin.pages.ahliwaris.show', $data);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function edit($id)
    {
        $data['title'] = 'EDIT AHLI WARIS';
        $data['data'] = Ahli_waris::find($id);
        if ($this->auth->user()->status == 'admin') {
            return view('admin.pages.ahliwaris.edit', $data);
        }
        return view('worker.pages.ahliwaris.edit', $data);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function update(AhliwarisRequest $request, $id)
    {
        $ahliwaris = Ahli_waris::findOrFail($id);
        $input = $request->all();
        $ahliwaris->fill($input)->save();       
        return redirect('admin/ahliwaris')
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
        $ahliwaris = Ahli_waris::find($id);
        if ($ahliwaris->delete()) {
            return response()->json(array('success' => TRUE));
        }
    }
}
