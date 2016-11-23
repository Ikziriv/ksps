@extends('admin.master')


@section('content')

 <!-- Entête de page -->
  @include('admin.partials.entete', ['title' => trans('back/ahliwaris.dashboard'), 'icone' => 'user-plus', 'fil' => link_to('ahliwaris', trans('back/ahliwaris.Heirs')) . ' / ' . trans('back/ahliwaris.edition')])

<div class="row">
  <div class="col-sm-12">

    {!! Form::model($ahli, ['route' => ['ahliwaris.update', $ahli->id], 'method' => 'PUT', 'class' => 'form-horizontal']) !!}    
    <div class="container-fluid">     
        <div class="col-md-6">   {{-- 
        <input type="hidden" name="id_pegawai" class="form-control" value="{{Auth::user()->id_pegawai}}">
        <input type="hidden" name="id_akad" class="form-control" id="id_akad" value="{{$data->id_akad}}">     --}} 

        <div class="form-group col-lg-12">
        {!! Form::control('text', 0, 'no_ktp', $errors, trans('back/ahliwaris.ktp')) !!}
        </div>
          
        <div class="form-group col-lg-12">
        {!! Form::control('text', 0, 'nama', $errors, trans('back/ahliwaris.name')) !!}
        </div>

        <div class="form-group col-lg-12">
          <div class="form-group">
          {!! Form::label('jk', 'Jenis Kelamin', ['class' => 'control-label']) !!}
          </div>
          {!! Form::selection('jk', array('L' => 'Laki-laki', 'P' => 'Perempuan'), trans('back/ahliwaris.gender')); !!}
        </div>

        <div class="form-group col-lg-12">
        {!! Form::control('textarea', 0, 'alamat', $errors, trans('back/ahliwaris.address')) !!}
        </div>

      </div>
    {{-- end div --}}
      <div class="col-md-6">

        <div class="form-group col-lg-6">
        {!! Form::control('text', 0, 'tempat_lahir', $errors, trans('back/ahliwaris.place')) !!}
        </div>
        <div class="form-group col-lg-6">
        {!! Form::control('date', 0, 'tanggal_lahir', $errors, trans('back/ahliwaris.date')) !!}
        </div>
        <div class="form-group col-lg-12">
        {!! Form::control('number', 0, 'tlp', $errors, trans('back/ahliwaris.tlp')) !!}
        </div>

        <div class="form-group col-lg-12">
          <div class="form-group">
          {!! Form::label('status', 'Status', ['class' => 'control-label']) !!}
          </div>
          {!! Form::selection('status', array('menikah' => 'Menikah', 'lajang' => 'Lajang', 'duda' => 'Duda', 'janda' => 'Janda'), trans('back/ahliwaris.gender')); !!}
        </div>

        <div class="form-group col-lg-6">
        {!! Form::control('text', 0, 'kelurahan', $errors, trans('back/ahliwaris.headman')) !!}
        </div>
        <div class="form-group col-lg-6">
        {!! Form::control('text', 0, 'kecamatan', $errors, trans('back/ahliwaris.sub-district')) !!}
        </div>
        <div class="form-group col-lg-6">
        {!! Form::control('text', 0, 'kabupaten', $errors, trans('back/ahliwaris.regency')) !!}
        </div>
        <div class="form-group col-lg-6">
        {!! Form::control('text', 0, 'kodepos', $errors, trans('back/ahliwaris.postal-code')) !!}
        </div>
        <div class="form-group col-lg-6">
        {!! Form::control('text', 0, 'jml_anak', $errors, trans('back/ahliwaris.number-of-children')) !!}
        </div>
        <div class="form-group col-lg-6">
        {!! Form::control('text', 0, 'hubungan', $errors, trans('back/ahliwaris.relationship')) !!}
        </div>

      </div>

    <div class="col-md-6">
    <div class="form-group">
      <div class="col-md-10 col-md-offset-1">
        <button type="submit" class="btn btn-default">
          <i class="fa fa-floppy-o"></i>
          Edit
        </button>
        <a href="{!! url('ahliwaris') !!}">
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
