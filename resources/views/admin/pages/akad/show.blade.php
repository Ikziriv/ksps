@extends('admin.master')

@section('content')

  @include('admin.partials.entete', ['title' => trans('back/akad.dashboard'), 'icone' => 'user', 'fil' => link_to('akad', trans('back/akad.agreements')) . ' / ' . trans('back/akad.card')])

  <div class="row">
    <div class="col-md-12">  
   
    <div class="col-md-6"> 
    <div class="panel-body">
        <div class="tab-content">
            <div class="panel-body">
              <table id="showanggota-table" class="table table-hovers">
                  <thead>
                  <tr>
                      <th>ID</th>
                      <th>{!! trans('back/anggota.name') !!}</th>
                      <th>{!! trans('back/anggota.address') !!}</th>
                      <th>{!! trans('back/anggota.tlp') !!}</th>
                  </tr>
                  </thead>
                  <tbody></tbody>
              </table>
            </div>
        </div>
    </div>
    </div> 

    <div class="col-md-6"> 
    <div class="card">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">{{ trans('back/akad.id_a') . ' : ' .  $data->id_anggota }}</li>
        <li class="list-group-item">{{ trans('back/akad.status') . ' : ' .  $data->status }}</li>
        <li class="list-group-item">{{ trans('back/akad.nominal') . ' : ' .  $data->nominal }}</li>
        <li class="list-group-item">{{ trans('back/akad.transaction-date') . ' : ' .  $data->tgl_transaksi }}</li>
        <li class="list-group-item">{{ trans('back/akad.expired-date') . ' : ' .  $data->tgl_jatuh_tempo }}</li>
        <li class="list-group-item">{{ trans('back/akad.time-period') . ' : ' .  $data->jangka_waktu }}</li>
        <li class="list-group-item">{{ trans('back/akad.renew') . ' : ' .  $data->perpanjang }}</li>
      </ul>
    </div>
    <a href="{!! url('akad') !!}">
      <button type="button" class="btn btn-default">
        Kembali
      </button>
      </a>
    </div> 

        
    </div>
  </div>
@stop


@push('js')
$(function() {
    $('#showanggota-table').DataTable({
        processing: true,
        serverSide: true,
        ajax: '{!! url('akad/akadshowanggota') !!}',
        columns: [
            {data: 'id', name: 'id'},
            {data: 'nama', name: 'nama'},
            {data: 'alamat', name: 'alamat'},
            {data: 'tlp', name: 'tlp'}
        ]
    });
});
@endpush