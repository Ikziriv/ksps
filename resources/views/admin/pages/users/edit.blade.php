@extends('admin.master')

@section('content')

 <!-- Entête de page -->
  @include('admin.partials.entete', ['title' => trans('back/users.dashboard'), 'icone' => 'user', 'fil' => link_to('user', trans('back/users.users')) . ' / ' . trans('back/users.edition')])

<div class="row">
	<div class="col-sm-12">
		{!! Form::model($user, ['route' => ['user.update', $user->id], 'method' => 'put', 'class' => 'form-horizontal panel']) !!}

		<div class="container-fluid">     
		        <div class="col-md-6">   {{-- 
		        <input type="hidden" name="id_pegawai" class="form-control" value="{{Auth::user()->id_pegawai}}">
		        <input type="hidden" name="id_akad" class="form-control" id="id_akad" value="{{$data->id_akad}}">     --}} 
		          
		        <div class="form-group col-lg-12">
		        {!! Form::control('text', 0, 'nama', $errors, trans('back/users.name')) !!}
		        </div>

		        <div class="form-group col-lg-12">
		          <div class="form-group">
		          {!! Form::label('jk', 'Jenis Kelamin', ['class' => 'control-label']) !!}
		          </div>
		          {!! Form::selection('jk', array('L' => 'Laki-laki', 'P' => 'Perempuan'), trans('back/users.gender')); !!}
		        </div>

		        <div class="form-group col-lg-12">
		        {!! Form::control('textarea', 0, 'alamat', $errors, trans('back/users.address')) !!}
		        </div>

		        <div class="form-group col-lg-6">
		        {!! Form::control('text', 0, 'tempat_lahir', $errors, trans('back/users.place')) !!}
		        </div>

		        <div class="form-group col-lg-6">
		        {!! Form::control('date', 0, 'tanggal_lahir', $errors, trans('back/users.date')) !!}
		        </div>

		      </div>
		    {{-- end div --}}
		      <div class="col-md-6">

		        <div class="form-group col-lg-12">
		        {!! Form::control('number', 0, 'tlp', $errors, trans('back/users.tlp')) !!}
		        </div>

		        <div class="form-group col-lg-12">
		          <div class="form-group">
		          {!! Form::label('status', 'Status', ['class' => 'control-label']) !!}
		          </div>
		          {!! Form::selection('status', array('menikah' => 'Menikah', 'lajang' => 'Lajang', 'duda' => 'Duda', 'janda' => 'Janda'), trans('back/users.gender')); !!}
		        </div>

		        <div class="form-group col-lg-12">
		          {!! Form::selection('role', $select, null, trans('back/users.role')) !!}
		        </div>


		        <div class="form-group col-lg-12">
		        {!! Form::control('text', 0, 'email', $errors, trans('back/users.email')) !!}
		        </div>
		        <div class="form-group col-lg-12">
		        {!! Form::control('text', 0, 'username', $errors, trans('back/users.username')) !!}
		        </div>
		        <div class="form-group col-lg-12">
		        {!! Form::control('text', 0, 'password', $errors, trans('back/users.password')) !!}
		        </div>
		        </div>

		    </div>

		    <div class="col-md-6">
		      <div class="form-group">
		        <div class="col-md-10 col-md-offset-1">
		          <button type="submit" class="btn btn-default">
		            <i class="fa fa-floppy-o"></i>
		            Edit
		          </button>
		          <a href="{!! url('user') !!}">
		            <button type="button" class="btn btn-default">
		              <i class="fa fa-times"></i>
		              Batal
		            </button>
		            </a>
		        </div>
		      </div>
		    </div>

		{!! Form::close() !!}
	</div>
</div>

@stop