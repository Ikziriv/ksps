<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Repositories\AnggotaRepository;
use App\Http\Requests\AnggotaCreateRequest;
use App\Http\Requests\AnggotaUpdateRequest;
use App\Models\Anggota;
use App\DataTables\AnggotaDataTable;
use Datatables;
use DB;

class AnggotaController extends Controller
{
    /**
     * The AnggotaRepository instance.
     *
     * @var App\Repositories\AnggotaRepository
     */
    protected $anggota_gestion;

    /**
     * Create a new UserController instance.
     *
     * @param  App\Repositories\AnggotaRepository $user_gestion
     */
    public function __construct(
        AnggotaRepository $anggota_gestion)
    {
        $this->anggota_gestion = $anggota_gestion;
        
        $this->middleware('ajax', ['only' => 'updateSeen']);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function dataAnggota()
    {
        $anggota = Anggota::select(['id', 'nama', 'alamat', 'tlp']);

        return Datatables::of($anggota)
            ->addColumn('action', function ($anggota) {
                return '<a href="anggota/'.$anggota->id.'/show" class="btn btn-xs btn-primary" data-toggle="tooltip" data-placement="top" title="Lihat"><i class="fa fa-eye"></i></a>
                        <a href="anggota/'.$anggota->id.'/edit" class="btn btn-xs btn-primary" data-toggle="tooltip" data-placement="top" title="Ubah"><i class="fa fa-pencil-square-o"></i></a>
                        <a href="anggota/'.$anggota->id.'/delete" class="btn btn-xs btn-primary js-submit-confirm" data-toggle="tooltip" data-placement="top" title="Hapus"><i class="fa fa-times"></i></a>';
            })
            ->editColumn('id', 'ID: {{$id}}')
            ->make(true);
    }

    public function index(AnggotaDataTable $dataTable)
    {
        return $dataTable->render('admin.pages.anggota.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.pages.anggota.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(
        AnggotaCreateRequest $request)
    {
        $this->anggota_gestion->store($request->all());

        return redirect('anggota')->with('ok', trans('back/anggota.created'));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
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
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $data['data'] = Anggota::find($id);
        return view('admin.pages.anggota.edit', $data);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(
        AnggotaUpdateRequest $request, 
        $id)
    {
        $anggota = Anggota::findOrFail($id);
        $inputs = $request->all();
        $anggota->fill($inputs)->save();
        return redirect('anggota')->with('ok', trans('back/anggota.updated'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $anggota = Anggota::find($id);
        if ($anggota->delete()) {
        return redirect('anggota')->with('ok', trans('back/anggota.destroyed'));
        }
    }
}
