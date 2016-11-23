@extends('admin.master')

@section('content')      
<div class="row">
    <div class="col-sm-12">
{{--         {!! Breadcrumbs::render('menupegawai'); !!}
        <!-- end: PAGE TITLE & BREADCRUMB --> --}}
    </div>
</div>
@include('admin.partials.flash_notification')
<div class="row">
    <div class="col-md-12">  
        <div class="btn-group">
            <a class="btn btn-default" href="">
                <i class="fa fa-plus-square"></i> Tambah Data Baru 
            </a> 
            <a class="btn btn-default" href="#">
                <i class="fa fa-file-excel-o"></i> Export Ke Excel 
            </a>
        </div>
            <table id="pegawai-table" class="table table-condensed table-responsive">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nama</th>
                        <th>Jensi Kelamin</th>
                        <th>Alamat</th>
                        <th>Tempat Lahir</th>
                        <th>Tanggal Lahir</th>
                        <th>Telephone</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Username</th>
                        <th>Action</th>
                    </tr>
                </thead>
            </table>
        
    </div>

{{-- 

<div class="modal fade" id="delete" tabindex="-1" role="dialog" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
        <h2 class="modal-title custom_align" id="Heading">Delete Confirmation</h2>
      </div>                         
      {!! Form::open(['route' => [''], 'class' => 'form-inline', 'method' => 'delete']) !!}  
          <div class="modal-body">
            <p class="error-text">Apakah anda yakin ingin menghapus anggota ini ?</p>
          </div>
          <div class="modal-footer ">
            {!! Form::submit('Delete', ['class' => 'btn btn-danger']) !!}
            <button type="button" class="btn btn-default" data-dismiss="modal"><span class="glyphicon glyphicon-remove"></span> No</button>
          </div>
       {!! Form::close() !!}
    </div>
    <!-- /.modal-content --> 
  </div>
      <!-- /.modal-dialog -->
</div>
 --}}

</div>

@stop

{{-- @section('js')
    $('#pegawai-table').DataTable({
    processing: true,
    serverSide: true,
    ajax: '{{ url("api/pegawai") }}',
    columns: [
        {data: 'id_pegawai', name: 'id_pegawai'},
        {data: 'nama', name: 'nama'},
        {data: 'jenkel', name: 'jenkel'},
        {data: 'alamat', name: 'alamat'},
        {data: 'tempat_lahir', name: 'tempat_lahir'},
        {data: 'tanggal_lahir', name: 'tanggal_lahir'},
        {data: 'tlp', name: 'tlp'},
        {data: 'email', name: 'email'},
        {data: 'status', name: 'status'},
        {data: 'username', name: 'username'},
        {data: 'action', name: 'action', orderable: false, searchable: false}
    ]
});
@stop --}}