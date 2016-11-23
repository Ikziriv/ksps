@extends('admin.layouts.master')

@section('content')
<br>
<div class="row">
    <div class="col-sm-12">
        {!! Breadcrumbs::render('edittransaksi'); !!}
        <!-- end: PAGE TITLE & BREADCRUMB -->
    </div>
</div>

<div class="row">
  <div class="col-sm-12">

    {!! Form::model($transaksi, ['route' => ['transaksi.update', $transaksi->id], 'method' => 'PUT', 'class' => 'form-horizontal']) !!} 
    <div class="container-fluid">     
        <div class="col-md-12">   {{-- 
        <input type="hidden" name="id_pegawai" class="form-control" value="{{Auth::user()->id_pegawai}}">
        <input type="hidden" name="id_transaksi" class="form-control" id="id_transaksi" value="{{$data->id_transaksi}}">     --}} 

        <div class="form-group col-lg-12">
        {!! Form::control('number', 0, 'nominal', $errors, trans('back/transaksi.nominal')) !!}
        </div>

        <div class="form-group col-lg-6">
        {!! Form::control('date', 0, 'tgl_transaksi', $errors, trans('back/transaksi.transaction-date')) !!}
        </div>


      </div>
    {{-- end div --}}

    </div>   

    <div class="col-md-6">
      <div class="form-group">
        <div class="col-md-10 col-md-offset-1">
          <button type="submit" class="btn btn-default">
            <i class="fa fa-floppy-o"></i>
            Save
          </button>
          <a href="{!! url('transaksi') !!}">
            <button type="button" class="btn btn-default">
              <i class="fa fa-times"></i>
              Batal
            </button>
            </a>
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