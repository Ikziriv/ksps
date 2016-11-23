<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Models\Akad;
use App\Models\Ahliwaris;
use App\Repositories\AhliwarisRepository;
use App\Http\Requests\AhliwarisCreateRequest;
use App\Http\Requests\AhliwarisUpdateRequest;
use Datatables;
use DB;

class AhliwarisController extends Controller
{
    /**
     * The ahliwarisRepository instance.
     *
     * @var App\Repositories\ahliwarisRepository
     */
    protected $ahliwaris_gestion;

    /**
     * Create a new UserController instance.
     *
     * @param  App\Repositories\Ahliwaris Repository $user_gestion
     */
    public function __construct(
        AhliwarisRepository $ahliwaris_gestion)
    {
        $this->ahliwaris_gestion = $ahliwaris_gestion;

    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */   
    public function dataAhliakad()
    {
        $akad = Akad::join('anggotas', 'akads.id_anggota', '=', 'anggotas.id')
            ->select(['akads.id', 'anggotas.nama', 'anggotas.tlp', 'akads.status', 'akads.nominal', 'akads.tgl_transaksi', 'akads.tgl_jatuh_tempo', 'akads.jangka_waktu', 'akads.perpanjang']);

        return Datatables::of($akad)
            ->addColumn('action', function ($akad) {
                return '<a href="ahliwaris/'.$akad->id.'/create" data-toggle="modal" class="btn btn-xs btn-default" data-toggle="tooltip" data-placement="top" title="Tambah"><i class="fa fa-plus"></i> Ahliwaris</a>';
            })
            ->editColumn('id', 'ID: {{$id}}')
            ->editColumn('nama', '<label>{{$nama}}</label>')
            ->make(true);
    }

    public function dataAhliwaris()
    {
        $ahli = Ahliwaris::select(['id', 'id_akad', 'no_ktp', 'nama', 'jk', 'alamat', 'tempat_lahir', 'tanggal_lahir', 'tlp']);

        return Datatables::of($ahli)
            ->addColumn('action', function ($ahli) {
                return '<a href="ahliwaris/'.$ahli->id.'/show" class="btn btn-xs btn-primary" data-toggle="tooltip" data-placement="top" title="Lihat"><i class="fa fa-eye"></i></a>
                        <a href="ahliwaris/'.$ahli->id.'/edit" class="btn btn-xs btn-primary" data-toggle="tooltip" data-placement="top" title="Ubah"><i class="fa fa-pencil-square-o"></i></a>
                        <a href="#edit-'.$ahli->id.'" class="btn btn-xs btn-danger js-submit-confirm" data-toggle="tooltip" data-placement="top" title="Hapus"><i class="fa fa-times"></i></a>';
            })
            ->editColumn('id', 'ID: {{$id}}')
            ->removeColumn('id_akad')
            ->make(true);
    }

    public function index()
    {
        return view('admin.pages.ahliwaris.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create($id)
    {
        $data['data'] = Akad::find($id);
        return view('admin.pages.ahliwaris.create', $data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(
        AhliwarisCreateRequest $request)
    {
        $this->ahliwaris_gestion->store($request->all());

        return redirect('ahliwaris')->with('ok', trans('back/ahliwaris.created'));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data['data'] = Ahliwaris::find($id);
        return view('admin.pages.ahliwaris.show', $data);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $ahli['ahli'] = Ahliwaris::find($id);
        return view('admin.pages.ahliwaris.edit', $ahli);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(
        AhliwarisUpdateRequest $request, 
        $id)
    {
        $ahliwaris = Ahliwaris::findOrFail($id);
        $inputs = $request->all();
        $ahliwaris->fill($inputs)->save();
        return redirect('ahliwaris')->with('ok', trans('back/ahliwaris.updated'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $ahliwaris = Ahliwaris::find($id);
        if ($ahliwaris->delete()) {
        return redirect('ahliwaris')->with('ok', trans('back/ahliwaris.destroyed'));
        }
    }
}
