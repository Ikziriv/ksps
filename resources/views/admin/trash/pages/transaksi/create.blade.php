@extends('admin.layouts.master')

@section('content')
<br>
<div class="row">
    <div class="col-sm-12">
        {!! Breadcrumbs::render('tambahtransaksi'); !!}
        <!-- end: PAGE TITLE & BREADCRUMB -->
    </div>
</div>


<div class="row">
  <div class="col-sm-12">

      @include('admin.pages.transaksi._form')

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

$('#takad-table').DataTable({
    processing: true,
    serverSide: true,
    ajax: '{{ url("api/transaksiakad") }}',
    columns: [
        {data: 'id_akad', name: 'id_akad'},
        {data: 'status', name: 'status'},
        {data: 'nominal', name: 'nominal'},
        {data: 'tgl_transaksi', name: 'tgl_transaksi'},
        {data: 'tgl_jatuh_tempo', name: 'tgl_jatuh_tempo'},
        {data: 'jangka_waktu', name: 'jangka_waktu'},
        {data: 'perpanjang', name: 'perpanjang'},
        {data: 'action', name: 'action', orderable: false, searchable: false}
    ]
});

$.fn.datepicker.defaults.format = "mm/dd/yyyy";
$('.datepicker').datepicker({
})
@stop
