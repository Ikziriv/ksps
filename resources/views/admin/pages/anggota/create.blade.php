@extends('admin.master')

@section('content')

  @include('admin.partials.entete', ['title' => trans('back/anggota.add'), 'icone' => 'users', 'fil' => link_to('anggota', trans('back/anggota.members')) . ' / ' . trans('back/anggota.add')])

<div class="row">
  <div class="col-sm-12">

    {!! Form::open(['url' => 'anggota', 'method' => 'post', 'class' => 'form-horizontal panel']) !!}
    <div class="container-fluid">     
        <div class="col-md-6">   {{-- 
        <input type="hidden" name="id_pegawai" class="form-control" value="{{Auth::user()->id_pegawai}}">
        <input type="hidden" name="id_akad" class="form-control" id="id_akad" value="{{$data->id_akad}}">     --}} 

        <div class="form-group col-lg-12">
        {!! Form::control('text', 0, 'no_ktp', $errors, trans('back/anggota.ktp')) !!}
        </div>
          
        <div class="form-group col-lg-12">
        {!! Form::control('text', 0, 'nama', $errors, trans('back/anggota.name')) !!}
        </div>

        <div class="form-group col-lg-12">
          <div class="form-group">
          {!! Form::label('jk', 'Jenis Kelamin', ['class' => 'control-label']) !!}
          </div>
          {!! Form::selection('jk', array('L' => 'Laki-laki', 'P' => 'Perempuan'), trans('back/anggota.gender')); !!}
        </div>

        <div class="form-group col-lg-12">
        {!! Form::control('textarea', 0, 'alamat', $errors, trans('back/anggota.address')) !!}
        </div>

      </div>
    {{-- end div --}}
      <div class="col-md-6">
      
        <div class="form-group col-lg-6">
        {!! Form::control('text', 0, 'tempat_lahir', $errors, trans('back/anggota.place')) !!}
        </div>
        <div class="form-group col-lg-6">
        {!! Form::control('date', 0, 'tanggal_lahir', $errors, trans('back/anggota.date')) !!}
        </div>
        <div class="form-group col-lg-12">
        {!! Form::control('number', 0, 'tlp', $errors, trans('back/anggota.tlp')) !!}
        </div>

        <div class="form-group col-lg-12">
          <div class="form-group">
          {!! Form::label('status', 'Status', ['class' => 'control-label']) !!}
          </div>
          {!! Form::selection('status', array('menikah' => 'Menikah', 'lajang' => 'Lajang', 'duda' => 'Duda', 'janda' => 'Janda'), trans('back/anggota.gender')); !!}
        </div>
        
        <div class="form-group col-lg-6">
        {!! Form::control('text', 0, 'kelurahan', $errors, trans('back/anggota.headman')) !!}
        </div>
        <div class="form-group col-lg-6">
        {!! Form::control('text', 0, 'kecamatan', $errors, trans('back/anggota.sub-district')) !!}
        </div>
        <div class="form-group col-lg-6">
        {!! Form::control('text', 0, 'kabupaten', $errors, trans('back/anggota.regency')) !!}
        </div>
        <div class="form-group col-lg-6">
        {!! Form::control('text', 0, 'kodepos', $errors, trans('back/anggota.postal-code')) !!}
        </div>
        
        </div>
      <div class="col-md-6">
        <div class="form-group">
          <div class="col-md-10 col-md-offset-1">
            <button type="submit" class="btn btn-default">
              <i class="fa fa-floppy-o"></i>
              Save
            </button>
            <a href="{!! url('anggota') !!}">
              <button type="button" class="btn btn-default">
                <i class="fa fa-times"></i>
                Batal
              </button>
              </a>
          </div>
        </div>
      </div>
      </div>


      {!! Form::close() !!}

  </div>
</div>
@stop

@section('js')
$('#sandbox-container .input-group.date').datepicker({
    todayBtn: "linked",
    clearBtn: true,
    autoclose: true,
    calendarWeeks: true,
    toggleActive: true
});
@stop
