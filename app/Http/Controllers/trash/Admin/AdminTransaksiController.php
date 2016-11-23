<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Http\Requests\TransaksiRequest;

use App\Models\Akad;
use App\Models\Anggota;
use App\Models\Transaksi;
use yajra\Datatables\Datatables;
use Illuminate\Support\Facades\DB;
use App\Http\Requests;
use Illuminate\Contracts\Auth\Guard;
use Illuminate\Support\Str;

class AdminTransaksiController extends Controller
{
    public function __construct(Guard $auth) {
        $this->auth = $auth;
    }
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function apiAkadTrans() {
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
                                    <a href="transaksi/'.$user->id_akad.'/create" tabindex="-1" role="menuitem">
                                        <i class="fa fa-plus"></i> Transaksi
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

    public function getDataTransaksi()
    {
        $users = Transaksi::select(['id_transaksi', 'id_pegawai', 'id_akad',  'tgl_transaksi', 'nominal'])->get();

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
                                    <a href="transaksi/'.$user->id_transaksi.'/edit" tabindex="-1" role="menuitem">
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
            ->editColumn('id_transaksi', '{{$id_transaksi}}')
            ->removeColumn('id_pegawai')
            ->make(true);
    }

    public function index()
    {
        $data['title'] = 'MENU TRANSAKSI';
        if ($this->auth->user()->status == 'admin') {
            return view('admin.pages.transaksi.index', $data);
        }
        return view('worker.pages.transaksi.index', $data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create($id)
    {
        $data['data'] = Akad::find($id);
        $data['title'] = 'TAMBAH TRANSAKSI';
        if ($this->auth->user()->status == 'admin') {
            return View('admin.pages.transaksi.create', $data);
        }
        return view('worker.pages.transaksi.create', $data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return Response
     */
    public function store(TransaksiRequest $request)
    {
        $input = $request->all();
        $transaksi = new Transaksi($input);
        $transaksi->save();        
        return redirect('admin/transaksi')
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
        $data = Transaksi::find($id);
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
        $data['title'] = 'EDIT TRANSAKSI';
        $data['data'] = Transaksi::find($id);
        if ($this->auth->user()->status == 'admin') {
            return view('admin.pages.transaksi.edit', $data);
        }
        return view('worker.pages.transaksi.edit', $data);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function update(TransaksiRequest $request, $id)
    {
        $transaksi = Transaksi::findOrFail($id);
        $input = $request->all();
        $transaksi->fill($input)->save();       
        return redirect('admin/transaksi')
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
        $transaksi = Akad::find($id);
        if ($transaksi->delete()) {
            return response()->json(array('success' => TRUE));
        }
    }
}
