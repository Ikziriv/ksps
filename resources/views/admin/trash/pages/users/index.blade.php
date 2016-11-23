@extends('admin.master')


@section('content')
@include('admin.partials.entete', ['title' => trans('back/users.dashboard'). link_to_route('user.create', trans('back/users.add'), [], ['class' => 'btn btn-info pull-right']), 'icone' => 'user', 'fil' => trans('back/users.users')])

<div class="row">
  <div class="col-md-12">  
      <div class="table-responsive">
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
      
  </div>
</div>

@stop
