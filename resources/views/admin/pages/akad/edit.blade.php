@extends('admin.master')

@section('content')


 <!-- Entête de page -->
  @include('admin.partials.entete', ['title' => trans('back/akad.dashboard'), 'icone' => 'user-plus', 'fil' => link_to('akad', trans('back/akad.agreements')) . ' / ' . trans('back/akad.edition')])

<div class="row">
  <div class="col-sm-12">

    {!! Form::model($akad, ['route' => ['akad.update', $akad->id], 'method' => 'PUT', 'class' => 'form-horizontal panel']) !!}  
    <div class="container-fluid">     
        <div class="col-md-12"> 


        <div class="col-md-6"> 
            <div class="form-group col-lg-12">
            </div>
            <input type="hidden" name="id_pegawai" class="form-control" value="{{$akad->id_pegawai}}">
            <input type="hidden" name="id_anggota" class="form-control" value="{{$akad->id_anggota}}">

            <div class="form-group col-lg-12">
            {!! Form::control('text', 0, 'status', $errors, trans('back/akad.status')) !!}
            </div>


            <div class="form-group col-lg-12">
            {!! Form::control('number', 0, 'nominal', $errors, trans('back/akad.nominal')) !!}
            </div>

            <div class="form-group col-lg-12">
            {!! Form::control('date', 0, 'tgl_transaksi', $errors, trans('back/akad.transaction-date')) !!}
            </div>

            <div class="form-group col-lg-12">
            {!! Form::control('date', 0, 'tgl_jatuh_tempo', $errors, trans('back/akad.expired-date')) !!}
            </div>

        </div>


        <div class="col-md-6"> 

          
        <div class="form-group col-lg-12">
        {!! Form::control('text', 0, 'jangka_waktu', $errors, trans('back/akad.time-period')) !!}
        </div>

        <div class="form-group col-lg-12">
        {!! Form::control('text', 0, 'perpanjang', $errors, trans('back/akad.renew')) !!}
        </div>

        </div>


      </div>
    {{-- end div --}}

        <div class="col-md-6">
          <div class="form-group">
            <div class="col-md-10 col-md-offset-1">
              <button type="submit" class="btn btn-default">
                <i class="fa fa-floppy-o"></i>
                Save
              </button>
              <a href="{!! url('akad') !!}">
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