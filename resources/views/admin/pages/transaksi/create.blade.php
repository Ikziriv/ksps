@extends('admin.master')

@section('content')

  @include('admin.partials.entete', ['title' => trans('back/transaksi.add'), 'icone' => 'users', 'fil' => link_to('transaksi', trans('back/transaksi.transactions')) . ' / ' . trans('back/transaksi.add')])

<div class="row">
  <div class="col-md-8">

     <div class="panel-body">
        <table id="transaksidetail-table" class="table table-condensed table-responsive">
          <thead>
              <tr>
                  <th>ID</th>
                  <th>ID Akad</th>
                  <th>Tanggal Transaksi</th>
                  <th>Tanggal Expired</th>
                  <th>Nominal</th>
              </tr>
          </thead>

          <tbody>
          
          </tbody>
        </table>
    </div>
  </div>


  <div class="col-md-4">
    {!! Form::open(['url' => 'transaksi', 'method' => 'post', 'class' => 'form-horizontal panel']) !!}
    <div class="container-fluid">   
        <input type="hidden" name="id_pegawai" class="form-control" value="{{Auth::user()->id}}">
        <input type="hidden" name="id_akad" class="form-control" id="id_akad" value="{{$data->id}}"> 

        <div class="form-group col-lg-12">
        {!! Form::control('number', 0, 'nominal',  $errors, trans('back/transaksi.nominal')) !!}
        </div>

        <div class="form-group col-lg-12">
        {!! Form::control('date', 0, 'tgl_transaksi', $errors, trans('back/transaksi.transaction-date')) !!}
        </div>

    {{-- end div --}}

    <div class="col-md-10">
      <div class="form-group">
        <div class="col-md-10 col-md-offset-1">
          <button type="submit" class="btn btn-default">
            <i class="fa fa-floppy-o"></i>
            Save
          </button>
          <a href="{!! url('transaksi') !!}">
            <button type="button" class="btn btn-default">
              <i class="fa fa-times"></i>
              Batal
            </button>
            </a>
        </div>
      </div>
    </div>
    </div>   
    {!! Form::close() !!}

  </div>
</div>
@stop

@section('js')
$(function() {
    $('#transaksidetail-table').DataTable({
        processing: true,
        serverSide: true,
        ajax: '{{ url("transaksi/transaksidetail") }}',
        columns: [
            {data: 'id', name: 'transaksis.id'},
            {data: 'id', name: 'akads.id'},
            {data: 'tgl_transaksi', name: 'transaksis.tgl_transaksi'},
            {data: 'tgl_jatuh_tempo', name: 'akads.tgl_jatuh_tempo'},
            {data: 'nominal', name: 'transaksis.nominal'}
        ]
    });
});
@stop
