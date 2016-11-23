@extends('back.template')

@section('content')

  @include('back.partials.entete', ['title' => trans('back/roles.dashboard'), 'icone' => 'user', 'fil' => link_to('user', trans('back/users.users')) . ' / ' . trans('back/roles.roles')])

	<div class="row">
	  <div class="col-md-12">  

			@if(session()->has('ok'))
				@include('partials/error', ['type' => 'success', 'message' => session('ok')])
			@endif
			{!! Form::open(['url' => 'user/roles', 'method' => 'post', 'class' => 'form-horizontal panel']) !!}	
				@foreach ($roles as $role) 
					{!! Form::control('text', 0, $role->slug, $errors, trans('back/roles.' . $role->slug), $role->title) !!}
				@endforeach
				{!! Form::submit(trans('front/form.send')) !!}
			{!! Form::close() !!}
	      
	  </div>
	</div>


@stop