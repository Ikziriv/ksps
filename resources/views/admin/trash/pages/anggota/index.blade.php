@extends('admin.layouts.master')

@section('content')          
<div class="page-header"><br>
<h1><strong>{{$title}}</strong></h1>
</div>

<div class="row">
    <div class="col-sm-12">
        {!! Breadcrumbs::render('menuanggota'); !!}
        <!-- end: PAGE TITLE & BREADCRUMB -->
    </div>
</div>
@include('admin.partials.flash_notification')
<div class="row">
    <div class="col-md-12">
        <div class="btn-group">
            <a class="btn btn-default" href="{{route('admin.anggota.create')}}">
                <i class="fa fa-plus-square"></i> Tambah Data Baru 
            </a> 
            <a class="btn btn-default" href="#">
                <i class="fa fa-file-excel-o"></i> Export Ke Excel 
            </a>
        </div>
        <table id="anggota-table" class="table table-condensed table-responsive">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>No KTP</th>
                    <th>Nama</th>
                    <th>Jensi Kelamin</th>
                    <th>Tempat Lahir</th>
                    <th>Tanggal Lahir</th>
                    <th>Alamat</th>
                    <th>Kode Pos</th>
                    <th>Telephone</th>
                    <th>Action</th>
                </tr>
            </thead>
        </table>
        
    </div>

</div>

<div class="modal fade" id="delete" tabindex="-1" role="dialog" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
            <h2 class="modal-title custom_align" id="Heading">Delete Confirmation</h2>
          </div>
          <form ng-controller="anggota">
              <div class="modal-body">
                <p class="error-text">Apakah anda yakin ingin menghapus anggota ini ?</p>
              </div>
              <div class="modal-footer ">
               <a href="#" ng-click="delete(id_anggota)"><button type="button" class="btn btn-danger" ><span class="glyphicon glyphicon-ok-sign"></span> Yes</button></a>
                <button type="button" class="btn btn-default" data-dismiss="modal"><span class="glyphicon glyphicon-remove"></span> No</button>
              </div>
          </form>
    </div>
    <!-- /.modal-content --> 
  </div>
      <!-- /.modal-dialog -->
</div>
@stop

@section('js')
    $('#anggota-table').DataTable({
    processing: true,
    serverSide: true,
    ajax: '{{ url("api/anggota") }}',
    columns: [
        {data: 'id_anggota', name: 'id_anggota'},
        {data: 'no_ktp', name: 'no_ktp'},
        {data: 'nama', name: 'nama'},
        {data: 'jenkel', name: 'jenkel'},
        {data: 'tempat_lahir', name: 'tempat_lahir'},
        {data: 'tanggal_lahir', name: 'tanggal_lahir'},
        {data: 'alamat', name: 'alamat'},
        {data: 'kodepos', name: 'kodepos'},
        {data: 'tlp', name: 'tlp'},
        {data: 'action', name: 'action', orderable: false, searchable: false}
    ]
});
@stop