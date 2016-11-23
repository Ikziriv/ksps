@extends('admin.master')

@section('content')

	@include('admin.partials.entete', ['title' => trans('back/users.dashboard'), 'icone' => 'user', 'fil' => link_to('user', trans('back/users.users')) . ' / ' . trans('back/users.card')])

	<div class="row">
	  <div class="col-md-12">  

		<div class="card">
		  <ul class="list-group list-group-flush">
		    <li class="list-group-item">{{ trans('back/users.name') . ' : ' .  $user->nama }}</li>
		    <li class="list-group-item">{{ trans('back/users.address') . ' : ' .  $user->alamat }}</li>
		    <li class="list-group-item">{{ trans('back/users.tlp') . ' : ' .  $user->tlp }}</li>
		    <li class="list-group-item">{{ trans('back/users.email') . ' : ' .  $user->email }}</li>
		    <li class="list-group-item">{{ trans('back/users.role') . ' : ' .  $user->role->title }}</li>
		  </ul>
		</div>
	      
	    <a href="{!! url('user') !!}">
	      <button type="button" class="btn btn-default">
	        Kembali
	      </button>
	      </a>
	  </div>
	</div>

@stop