@extends('admin.master')


@section('content')
@include('admin.partials.entete', ['title' => trans('back/transaksi.dashboard'), 'icone' => 'user', 'fil' => trans('back/transaksi.transactions')])

<div class="row">
  <div class="col-md-12">  
     <div class="btn-group">
        <a class="btn btn-info" href="#transaksi" data-toggle="modal">
            {!! trans('back/transaksi.add') !!}
        </a> 
     </div>

      <div class="panel-body">
        <table id="transaksi-table" class="table table-hovers table-responsive">
            <thead>
            <tr>
                <th>ID</th>
                <th>{!! trans('back/transaksi.id_ak') !!}</th>
                <th>{!! trans('back/transaksi.transaction-date') !!}</th>
                <th>{!! trans('back/transaksi.nominal') !!}</th>
                <th>Action</th>
            </tr>
            </thead>
        </table>
      </div>
      
  </div>
</div>

{{-- Modal Akad --}}
<div class="modal fade" id="transaksi">
<div class="modal-dialog modal-lg">
  <div class="modal-content">
    <div class="modal-header">
      <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
      <h2 class="modal-title">Daftar Akad</h2>
    </div>
    <div class="modal-body">
        <div class="panel">
            <div class="panel-body">
                <table id="ahliakad-table" class="table table-condensed">
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
        </div>
    </div>
    <div class="modal-footer">
        <a href="#" data-dismiss="modal" class="btn btn-success">Close</a>
    </div>
  </div>
</div>
</div>
@stop

@push('js')
$(function() {
    $('#ahliakad-table').DataTable({
        processing: true,
        serverSide: true,
        ajax: '{{ url("transaksi/akadtransaksi") }}',
        columns: [
            {data: 'id', name: 'akads.id'},
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

    $('#transaksi-table').DataTable({
        processing: true,
        serverSide: true,
        ajax: '{!! url('transaksi/datatransaksi') !!}',
        columns: [
            {data: 'id', name: 'id'},
            {data: 'id_akad', name: 'id_akad'},
            {data: 'tgl_transaksi', name: 'tgl_transaksi'},
            {data: 'nominal', name: 'nominal'},
            {data: 'action', name: 'action', orderable: false, searchable: false}
        ]
    });
});
@endpush