@extends('admin.master')


@section('content')
@include('admin.partials.entete', ['title' => trans('back/ahliwaris.dashboard'), 'icone' => 'user-plus', 'fil' => trans('back/ahliwaris.heirs')])

<div class="row">
  <div class="col-md-12">  
     <div class="btn-group">
        <a class="btn btn-info" href="#ahliwaris" data-toggle="modal">
            {!! trans('back/ahliwaris.add') !!}
        </a> 
     </div>

      <div class="panel-body">
        <table id="ahliwaris-table" class="table table-hover table-responsive">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>{!! trans('back/ahliwaris.ktp') !!}</th>
                    <th>{!! trans('back/ahliwaris.name') !!}</th>
                    <th>{!! trans('back/ahliwaris.gender') !!}</th>
                    <th>{!! trans('back/ahliwaris.address') !!}</th>
                    <th>{!! trans('back/ahliwaris.place') !!}</th>
                    <th>{!! trans('back/ahliwaris.date') !!}</th>
                    <th>{!! trans('back/ahliwaris.tlp') !!}</th>
                    <th>Action</th>
                </tr>
            </thead>
        </table>
      </div>
  </div>
</div>

{{-- Modal Akad --}}
<div class="modal fade" id="ahliwaris">
<div class="modal-dialog modal-lg">
  <div class="modal-content">
    <div class="modal-header">
      <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
      <h2 class="modal-title">Daftar Anggota</h2>
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
        ajax: '{{ url("ahliwaris/ahliakad") }}',
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
    $('#ahliwaris-table').DataTable({
        processing: true,
        serverSide: true,
        ajax: '{!! url('ahliwaris/dataahli') !!}',
        columns: [
            {data: 'id', name: 'id'},
            {data: 'no_ktp', name: 'no_ktp'},
            {data: 'nama', name: 'nama'},
            {data: 'jk', name: 'jk'},
            {data: 'alamat', name: 'alamat'},
            {data: 'tempat_lahir', name: 'tempat_lahir'},
            {data: 'tanggal_lahir', name: 'tanggal_lahir'},
            {data: 'tlp', name: 'tlp'},
            {data: 'action', name: 'action', orderable: false, searchable: false}
        ]
    });
});
@endpush
