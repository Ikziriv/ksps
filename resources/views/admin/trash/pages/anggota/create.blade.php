@extends('admin.layouts.master')

@section('content')
<br>
<div class="row">
    <div class="col-sm-12">
        {!! Breadcrumbs::render('tambahanggota'); !!}
        <!-- end: PAGE TITLE & BREADCRUMB -->
    </div>
</div>

<div class="row">
  <div class="col-sm-12">
    @include('admin.partials.flash_notification')
    {!! Form::open(['url' => '/admin/anggota', 'class' => 'form-horizontal', 'role' => 'form']) !!}

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
