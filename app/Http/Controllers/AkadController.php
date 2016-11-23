<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Models\Anggota;
use App\Models\Akad;
use App\Http\Requests\AkadCreateRequest;
use App\Http\Requests\AkadUpdateRequest;
use App\Repositories\AkadRepository;
use Datatables;
use DB;

class AkadController extends Controller
{
    /**
     * The akadRepository instance.
     *
     * @var App\Repositories\akadRepository
     */
    protected $akad_gestion;

    /**
     * Create a new UserController instance.
     *
     * @param  App\Repositories\akadRepository $user_gestion
     */
    public function __construct(
        AkadRepository $akad_gestion)
    {
        $this->akad_gestion = $akad_gestion;

        $this->middleware('ajax', ['only' => 'updateSeen']);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */    
    public function dataAkadShowanggota()
    {
        $anggotas = Anggota::select(['id', 'nama', 'alamat', 'tlp']);

        return Datatables::of($anggotas)
            ->editColumn('id', '<label>{{$id}}</label>')
            ->editColumn('nama', '<label>{{$nama}}</label>')
            ->make(true);
    }

    public function dataAkadanggota()
    {
        $anggota = Anggota::select(['id', 'nama', 'alamat', 'tlp']);

        return Datatables::of($anggota)
            ->addColumn('action', function ($anggota) {
                return '<a href="akad/'.$anggota->id.'/create" data-toggle="modal" class="btn btn-xs btn-default" data-toggle="tooltip" data-placement="top" title="Tambah"><i class="fa fa-plus"></i> Akad</a>';
            })
            ->editColumn('id', '<label>{{$id}}</label>')
            ->editColumn('nama', '<label>{{$nama}}</label>')
            ->make(true);
    }

    public function dataAkad()
    {
        $akad = Akad::join('anggotas', 'akads.id_anggota', '=', 'anggotas.id')
            ->select(['akads.id', 'anggotas.nama', 'anggotas.tlp', 'akads.status', 'akads.jangka_waktu', 'akads.perpanjang']);
        
        return Datatables::of($akad)
            ->addColumn('action', function ($akad) {
                return '<a href="akad/'.$akad->id.'/show" class="btn btn-xs btn-default" data-toggle="tooltip" data-placement="top" title="Lihat"><i class="fa fa-eye"></i></a>
                        <a href="akad/'.$akad->id.'/edit" class="btn btn-xs btn-default" data-toggle="tooltip" data-placement="top" title="Ubah"><i class="fa fa-pencil-square-o"></i></a>
                        <a href="akad/'.$akad->id.'/destroy" class="btn btn-xs btn-danger js-submit-confirm" id="confirmdelete" data-toggle="tooltip" data-placement="top" title="Hapus"><i class="fa fa-times"></i></a>';
            })
            ->editColumn('id', 'ID: {{$id}}')
            ->make(true);
    }

    public function index()
    {
        return view('admin.pages.akad.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create($id)
    {
        $data['data'] = Anggota::find($id);
        return view('admin.pages.akad.create', $data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(
        AkadCreateRequest $request)
    {
        $this->akad_gestion->store($request->all());

        return redirect('akad')->with('ok', trans('back/akad.created'));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data['data'] = Akad::find($id);
        return view('admin.pages.akad.show', $data);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $akad['akad'] = Akad::find($id);
        return view('admin.pages.akad.edit', $akad);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(
        AkadUpdateRequest $request, 
        $id)
    {
        $akad = Akad::findOrFail($id);
        $inputs = $request->all();
        $akad->fill($inputs)->save();
        return redirect('akad')->with('ok', trans('back/akad.updated'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $akad = Akad::find($id);
        if ($akad->delete()) {
        return redirect('akad')->with('ok', trans('back/akad.destroyed'));
        }
    }
}
