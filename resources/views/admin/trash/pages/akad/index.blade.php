@extends('admin.layouts.master')

@section('content')         
<div class="page-header"><br>
<h1><strong>{{$title}}</strong></h1>
</div>

<div class="row">
    <div class="col-sm-12">
        {!! Breadcrumbs::render('menuakad'); !!}
        <!-- end: PAGE TITLE & BREADCRUMB -->
    </div>
</div>
@include('admin.partials.flash_notification')
<div class="row">
    <div class="col-md-12">
    <div class="btn-group">
        <a class="btn btn-default" href="#akad" data-toggle="modal">
            <i class="fa fa-plus-square"></i> Tambah Akad
        </a> 
        <a class="btn btn-default" href="#">
            <i class="fa fa-file-excel-o"></i> Export Ke Excel 
        </a>
    </div>
    
    <table id="takad-table" class="table table-condensed table-responsive">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nama</th>
                <th>Telephone</th>
                <th>Status</th>
                <th>Nominal</th>
                <th>Tanggal Transaksi</th>
                <th>Tanggal Expired</th>
                <th>Jangka Waktu</th>
                <th>Perpanjang</th>
                <th>Action</th>
            </tr>
        </thead>
    </table>

  	</div>

    {{-- Modal Akad --}}
  <div class="modal fade" id="akad">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
          <h2 class="modal-title">Daftar Anggota</h2>
        </div>
        <div class="modal-body">
            <div class="panel">
                <div class="panel-body">
                <table id="tanggota-table" class="table table-hover">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>No KTP</th>
                        <th>Nama</th>
                        <th>Alamat</th>
                        <th>Telephone</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                </table>
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <a href="#" data-dismiss="modal" class="btn btn-success">Close</a>
        </div
        </form>
      </div>
    </div>
  </div>

</div>
@stop

@section('js')
$('#tanggota-table').DataTable({
    processing: true,
    serverSide: true,
    ajax: '{{ url("api/akadanggota") }}',
    columns: [
        {data: 'id_anggota', name: 'id_anggota'},
        {data: 'no_ktp', name: 'no_ktp'},
        {data: 'nama', name: 'nama'},
        {data: 'alamat', name: 'alamat'},
        {data: 'tlp', name: 'tlp'},
        {data: 'action', name: 'action', orderable: false, searchable: false}
    ]
});
$('#takad-table').DataTable({
    processing: true,
    serverSide: true,
    ajax: '{{ url("api/akad") }}',
    columns: [
        {data: 'id_akad', name: 'akads.id_akad'},
        {data: 'nama', name: 'anggotas.nama'},
        {data: 'tlp', name: 'anggotas.tlp'},
        {data: 'status', name: 'akads.status'},
        {data: 'nominal', name: 'akads.nominal'},
        {data: 'tgl_transaksi', name: 'akads.tgl_transaksi'},
        {data: 'tgl_jatuh_tempo', name: 'akads.tgl_jatuh_tempo'},
        {data: 'jangka_waktu', name: 'akads.jangka_waktu'},
        {data: 'perpanjang', name: 'akads.perpanjang'},
        {data: 'action', name: 'action', orderable: false, searchable: false}
    ]
});
@stop