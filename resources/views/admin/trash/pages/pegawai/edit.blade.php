@extends('admin.layouts.master')

@section('content')
<br>
<div class="row">
    <div class="col-sm-12">
        {!! Breadcrumbs::render('editpegawai'); !!}
        <!-- end: PAGE TITLE & BREADCRUMB -->
    </div>
</div>

<div class="row">
  <div class="col-sm-12">
    @include('admin.partials.flash_notification')
    {!! Form::model($data, ['method' => 'PUT', 'route' => ['admin.pegawai.update', $data->id_pegawai], 'class' => 'form-horizontal', 'role' => 'form']) !!}
      @include('admin.pages.pegawai._form')

      <div class="col-md-6">
        <div class="form-group">
          <div class="col-md-10 col-md-offset-2">
            <button type="submit" class="btn btn-default">
              <i class="fa fa-disk-o"></i>
              Save
            </button>
            <a href="{{route('admin.pegawai.index')}}">
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