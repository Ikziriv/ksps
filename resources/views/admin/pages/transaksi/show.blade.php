@extends('admin.master')

@section('content')

  @include('admin.partials.entete', ['title' => trans('back/transaksi.dashboard'), 'icone' => 'user', 'fil' => link_to('transaksi', trans('back/transaksi.transactions')) . ' / ' . trans('back/transaksi.card')])

    <div class="row">
        <div class="col-xs-12">
    		<div class="row">
    			<div class="col-xs-6">
    				<address>
    				<strong>{!! trans('back/transaksi.profile') !!}  :</strong><br>
    					John Smith<br> 
    					1234 Main<br>
    					Apt. 4B<br>
    					Springfield, ST 54321
    				</address>
    			</div>
    		</div>
    		<div class="row">
    			<div class="col-xs-6">
                    <address>
                        <strong>{!! trans('back/transaksi.transaction-date') !!} :</strong><br>
                        {{$data->tgl_transaksi}}<br><br>
                    </address>
    			</div>
    		</div>
    	</div>
    </div>
    
    <div class="row">
    	<div class="col-md-12">
    		<div class="panel panel-default">
    			<div class="panel-heading">
    				<h3 class="panel-title"><strong>{!! trans('back/transaksi.transactions') !!} summary</strong></h3>
    			</div>
    			<div class="panel-body">
					<table id="transaksidetail-table" class="table table-condensed table-responsive">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>{!! trans('back/transaksi.id_ak') !!}</th>
                                <th>{!! trans('back/transaksi.transaction-date') !!}</th>
                                <th>{!! trans('back/akad.expired-date') !!}</th>
                                <th>{!! trans('back/transaksi.nominal') !!}</th>
                            </tr>
                        </thead>
					</table>
    			</div>
    		</div>
    	</div>
    </div>

@stop

@section('js')
$(function() {
    $('#transaksidetail-table').DataTable({
        processing: true,
        serverSide: true,
        ajax: '{!! url('transaksi/transaksidetail') !!}',
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
