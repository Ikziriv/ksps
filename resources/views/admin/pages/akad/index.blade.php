@extends('admin.master')


@section('content')
@include('admin.partials.entete', ['title' => trans('back/akad.dashboard'), 'icone' => 'briefcase', 'fil' => trans('back/akad.agreements')])

<div class="row">
  <div class="col-md-12"> 
     <div class="btn-group">
        <a class="btn btn-info" href="#akad" data-toggle="modal">
            {!! trans('back/akad.add') !!}
        </a> 
     </div>

      <div class="panel-body">
        <table id="akad-table" class="table table-hover table-responsive">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>{!! trans('back/anggota.name') !!}</th>
                    <th>{!! trans('back/anggota.tlp') !!}</th>
                    <th>{!! trans('back/akad.status') !!}</th>
                    <th>{!! trans('back/akad.time-period') !!}</th>
                    <th>{!! trans('back/akad.renew') !!}</th>
                    <th>Action</th>
                </tr>
            </thead>
        </table>
      </div>
      
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
                <table id="akadanggota-table" class="table table-hover">
                    <thead>
                    <tr>
                        <th>ID</th>
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

@push('js')
$(function() {
    $('#confirmdelete').click(function(e) {
            e.preventDefault();
            var href = $(this).attr('href');
            return vex.dialog.confirm({
                message: 'Are you sure you want to withdraw job ?',
                callback: function(confirmed) {
                    if (confirmed) {
                        window.location.href = href;
                    }
                }
            });
        });

    $('#akadanggota-table').DataTable({
        processing: true,
        serverSide: true,
        ajax: '{!! url('akad/akadanggota') !!}',
        columns: [
            {data: 'id', name: 'id'},
            {data: 'nama', name: 'nama'},
            {data: 'alamat', name: 'alamat'},
            {data: 'tlp', name: 'tlp'},
            {data: 'action', name: 'action', orderable: false, searchable: false}
        ]
    });

    $('#akad-table').DataTable({
        processing: true,
        serverSide: true,
        ajax: '{!! url('akad/dataakad') !!}',
        columns: [
            {data: 'id', name: 'akads.id'},
            {data: 'nama', name: 'anggotas.nama'},
            {data: 'tlp', name: 'anggotas.tlp'},    
            {data: 'status', name: 'akads.status'},
            {data: 'jangka_waktu', name: 'akads.jangka_waktu'},
            {data: 'perpanjang', name: 'akads.perpanjang'},
            {data: 'action', name: 'action', orderable: false, searchable: false}
        ]
    });
});
@endpush
