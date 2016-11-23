@extends('admin.layouts.master')

@section('content')
<br>
<div class="row">
    <div class="col-sm-12">
        {!! Breadcrumbs::render('tambahakad'); !!}
        <!-- end: PAGE TITLE & BREADCRUMB -->
    </div>
</div>


<div class="row">
  <div class="col-sm-12">
    @include('admin.partials.flash_notification')
      
      @include('admin.pages.akad._form')
  </div>
</div>
@stop

@section('js') 
$("#rp").maskMoney({prefix:'Rp ', thousands:'.', decimal:',', affixesStay: false});

$('#sandbox-container .input-group.date').datepicker({
    todayBtn: "linked",
    clearBtn: true,
    autoclose: true,
    calendarWeeks: true,
    toggleActive: true
});

@stop
