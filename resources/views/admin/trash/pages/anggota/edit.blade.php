@extends('admin.layouts.master')

@section('content')
<br>
<div class="row">
    <div class="col-sm-12">
        {!! Breadcrumbs::render('editanggota'); !!}
        <!-- end: PAGE TITLE & BREADCRUMB -->
    </div>
</div>

<div class="row">
  <div class="col-sm-12">
    @include('admin.partials.flash_notification')
    {!! Form::model($data, ['method' => 'PUT', 'route' => ['admin.anggota.update', $data->id_anggota], 'class' => 'form-horizontal', 'role' => 'form']) !!}    

      @include('admin.pages.anggota._form')

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
