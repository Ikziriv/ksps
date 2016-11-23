@extends('admin.master')

@section('content')

  @include('admin.partials.entete', ['title' => trans('back/ahliwaris.dashboard'), 'icone' => 'user', 'fil' => link_to('ahliwaris', trans('back/ahliwaris.heirs')) . ' / ' . trans('back/ahliwaris.card')])

  <div class="row">
    <div class="col-md-12">  

    <div class="card">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">{{ trans('back/ahliwaris.ktp') . ' : ' .  $data->no_ktp }}</li>
        <li class="list-group-item">{{ trans('back/ahliwaris.name') . ' : ' .  $data->nama }}</li>
        <li class="list-group-item">{{ trans('back/ahliwaris.gender') . ' : ' .  $data->jk }}</li>
        <li class="list-group-item">{{ trans('back/ahliwaris.status') . ' : ' .  $data->status }}</li>
        <li class="list-group-item">{{ trans('back/ahliwaris.address') . ' : ' .  $data->alamat }}</li>
        <li class="list-group-item">{{ trans('back/ahliwaris.number-of-children') . ' : ' .  $data->jml_anak }}</li>
        <li class="list-group-item">{{ trans('back/ahliwaris.relationship') . ' : ' .  $data->hubungan }}</li>
      </ul>
    </div>
    <a href="{!! url('ahliwaris') !!}">
      <button type="button" class="btn btn-default">
        Kembali
      </button>
      </a>
        
    </div>
  </div>
@stop
