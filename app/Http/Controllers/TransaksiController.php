<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Models\Akad;
use App\Models\Transaksi;
use App\Http\Requests\TransaksiCreateRequest;
use App\Http\Requests\TransaksiUpdateRequest;
use App\Repositories\TransaksiRepository;
use Datatables;
use DB;

class TransaksiController extends Controller
{

    /**
     * The TransaksiRepository instance.
     *
     * @var App\Repositories\TransaksiRepository
     */
    protected $transaksi_gestion;

    /**
     * Create a new TransaksiController instance.
     *
     * @param  App\Repositories\TransaksiRepository $Transaksi_gestion
     * @param  App\Repositories\RoleRepository $role_gestion
     * @return void
     */
    public function __construct(
        TransaksiRepository $transaksi_gestion)
    {
        $this->transaksi_gestion = $transaksi_gestion;

        $this->middleware('ajax', ['only' => 'updateSeen']);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function dataTransaksidetail()
    {
        $transaksi = Transaksi::join('akads', 'transaksis.id_akad', '=', 'akads.id')
            ->select(['transaksis.id', 'akads.id', 'transaksis.tgl_transaksi', 'akads.tgl_jatuh_tempo', 'transaksis.nominal']);

        return Datatables::of($transaksi)
            ->editColumn('id', 'ID: {{$id}}')
            ->make(true);
    }

    public function dataTransaksiakad()
    {
        $akad = Akad::join('anggotas', 'akads.id_anggota', '=', 'anggotas.id')
            ->select(['akads.id', 'anggotas.nama', 'anggotas.tlp', 'akads.status', 'akads.nominal', 'akads.tgl_transaksi', 'akads.tgl_jatuh_tempo', 'akads.jangka_waktu', 'akads.perpanjang']);

        return Datatables::of($akad)
            ->addColumn('action', function ($akad) {
                return '<a href="transaksi/'.$akad->id.'/create" data-toggle="modal" class="btn btn-xs btn-default" data-toggle="tooltip" data-placement="top" title="Tambah"><i class="fa fa-plus"></i> Transaksi</a>';
            })
            ->editColumn('id', 'ID: {{$id}}')
            ->editColumn('nama', '<label>{{$nama}}</label>')
            ->make(true);
    }

    public function dataTransaksi()
    {
        $transaksi = Transaksi::select(['id', 'id_akad', 'tgl_transaksi', 'nominal']);

        return Datatables::of($transaksi)
            ->addColumn('action', function ($transaksi) {
                return '<a href="transaksi/'.$transaksi->id.'/show" class="btn btn-xs btn-primary" data-toggle="tooltip" data-placement="top" title="Lihat"><i class="fa fa-eye"></i> Lihat</a>';
            })
            ->editColumn('id', 'ID: {{$id}}')
            ->make(true);
    }

    public function index()
    {
        return view('admin.pages.transaksi.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create($id)
    {
        $data['data'] = Akad::find($id);
        return view('admin.pages.transaksi.create', $data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(
        TransaksiCreateRequest $request)
    {
        $this->transaksi_gestion->store($request->all());

        return redirect('transaksi')->with('ok', trans('back/transaksi.created'));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data = Transaksi::find($id);
        return view('admin.pages.transaksi.show', compact('data'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
