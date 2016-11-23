@extends('admin.master')

@section('content')

  @include('admin.partials.entete', ['title' => trans('back/anggota.dashboard'), 'icone' => 'user', 'fil' => link_to('anggota', trans('back/anggota.members')) . ' / ' . trans('back/anggota.card')])

  <div class="row">
    <div class="col-md-12">  

    <div class="card">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">{{ trans('back/anggota.name') . ' : ' .  $data->nama }}</li>
        <li class="list-group-item">{{ trans('back/anggota.address') . ' : ' .  $data->alamat }}</li>
        <li class="list-group-item">{{ trans('back/anggota.tlp') . ' : ' .  $data->tlp }}</li>
      </ul>
    </div>
        
    </div>
  </div>
@stop
