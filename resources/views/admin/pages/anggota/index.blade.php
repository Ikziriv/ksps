@extends('admin.master')


@section('content')
@include('admin.partials.entete', ['title' => trans('back/anggota.dashboard'). link_to_route('anggota.create', trans('back/anggota.add'), [], ['class' => 'btn btn-info pull-right']), 'icone' => 'users', 'fil' => trans('back/anggota.members')])

<div class="row">
  <div class="col-md-12">  
	
    <div class="panel with-nav-tabs panel-default">
        <div class="panel-heading">
                <ul class="nav nav-tabs">
                    <li class="active"><a href="#data" data-toggle="tab"><i class="fa fa-database"></i> Data</a></li>
                    <li><a href="#print" data-toggle="tab"><i class="fa fa-print"></i> Print</a></li>
                </ul>
        </div>
        <div class="panel-body">
            <div class="tab-content">
                <div class="tab-pane fade in active" id="data">
			      <div class="panel-body">
			        <table id="anggota-table" class="table table-hovers">
			            <thead>
			            <tr>
			                <th>ID</th>
			                <th>{!! trans('back/anggota.name') !!}</th>
			                <th>{!! trans('back/anggota.address') !!}</th>
			                <th>{!! trans('back/anggota.tlp') !!}</th>
			                <th>Action</th>
			            </tr>
			            </thead>
			            <tbody></tbody>
			        </table>
			      </div>
                </div>
                <div class="tab-pane fade" id="print">
				{!! $dataTable->table() !!}
                </div>
            </div>
        </div>
    </div>
      
  </div>
</div>
@stop


@push('scripts')
<link href="{{ asset('js/buttons/css/buttons.dataTables.min.css') }}" rel="stylesheet">
<script src="{{ asset('js/buttons/js/dataTables.buttons.min.js') }}"></script>
<script src="/vendor/datatables/buttons.server-side.js"></script>
{!! $dataTable->scripts() !!}
@stop

@push('js')
$(function() {
    $('#anggota-table').DataTable({
        processing: true,
        serverSide: true,
        ajax: '{!! url('anggota/dataanggota') !!}',
        columns: [
            {data: 'id', name: 'id'},
            {data: 'nama', name: 'nama'},
            {data: 'alamat', name: 'alamat'},
            {data: 'tlp', name: 'tlp'},
            {data: 'action', name: 'action', orderable: false, searchable: false}
        ]
    });
});
@endpush