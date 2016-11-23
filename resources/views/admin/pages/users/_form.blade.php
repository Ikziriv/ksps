<div class="container-fluid">   
   
    <div class="col-md-6">
      <div class="form-group col-lg-12{{ $errors->has('nama') ? ' has-error' : '' }}">
        {!! Form::label('nama', 'Nama', ['class' => 'control-label']) !!}
        {!! Form::text('nama', null, ['class' => 'form-control']) !!}
      <span class="help-block text-danger">
          {{ $errors -> first('nama') }}
      </span>
      </div>

      <div class="form-group col-lg-12{{ $errors->has('jk') ? ' has-error' : '' }}">
        {!! Form::label('jk', 'Jenis Kelamin', ['class' => 'control-label']) !!}
        <select name="jk" class="form-control" tabindex="-1" required>
          <option value="">Select</option>
          <option value="L">Laki - laki</option>
          <option value="P">Permpuan</option>
        </select>
      <span class="help-block text-danger">
          {{ $errors -> first('jk') }}
      </span>
      </div>

      <div class="form-group col-lg-12{{ $errors->has('alamat') ? ' has-error' : '' }}">
        {!! Form::label('alamat', 'Alamat', ['class' => 'control-label']) !!}
        {!! Form::textarea('alamat', null, ['class' => 'form-control']) !!}
      <span class="help-block text-danger">
          {{ $errors -> first('alamat') }}
      </span>
      </div>
      
      <div class="form-group col-lg-6{{ $errors->has('tempat_lahir') ? ' has-error' : '' }}">
        {!! Form::label('tempat_lahir', 'Tempat Lahir', ['class' => 'control-label']) !!}
        {!! Form::text('tempat_lahir', null, ['class' => 'form-control']) !!}
      <span class="help-block text-danger">
          {{ $errors -> first('tempat_lahir') }}
      </span>
      </div>
      
      <div class="form-group col-lg-6" id="sandbox-container">
        {!! Form::label('tanggal_lahir', 'Tanggal Lahir', ['class' => 'control-label']) !!}
        <div class="input-group date">
        {!! Form::text('tanggal_lahir', null, ['class' => 'form-control']) !!}
        <span class="input-group-addon help-block text-danger"><i class="fa fa-calendar"></i>
        </span>
        </div>
      </div>
      
    </div>
  {{-- end div --}}
    <div class="col-md-6">

      <div class="form-group col-lg-12{{ $errors->has('tlp') ? ' has-error' : '' }}">
        {!! Form::label('tlp', 'Telphone', ['class' => 'control-label']) !!}
        {!! Form::text('tlp', null, ['class' => 'form-control']) !!}
      <span class="help-block text-danger">
          {{ $errors -> first('tlp') }}
      </span>
      </div>

      <div class="form-group col-lg-12{{ $errors->has('status') ? ' has-error' : '' }}">
        {!! Form::selection('status', ['Lajang', 'Menikah', 'Duda'], null, trans('back/users.status')) !!}
      <span class="help-block text-danger">
          {{ $errors -> first('status') }}
      </span>
      </div>

      <div class="form-group col-lg-12{{ $errors->has('username') ? ' has-error' : '' }}">
        {!! Form::label('username', 'Username', ['class' => 'control-label']) !!}
        {!! Form::text('username', null, ['class' => 'form-control']) !!}
      <span class="help-block text-danger">
          {{ $errors -> first('username') }}
      </span>
      </div>

      <div class="form-group col-lg-12{{ $errors->has('email') ? ' has-error' : '' }}">
        {!! Form::label('email', 'Email', ['class' => 'control-label']) !!}
        {!! Form::email('email', null, ['class' => 'form-control']) !!}
      <span class="help-block text-danger">
          {{ $errors -> first('email') }}
      </span> 
      </div>
      
      <div class="form-group col-lg-12{{ $errors->has('password') ? ' has-error' : '' }}">
        {!! Form::label('password', 'Password', ['class' => 'control-label']) !!}
        {!! Form::password('password', ['class' => 'form-control']) !!}
      <span class="help-block text-danger">
          {{ $errors -> first('password') }}
      </span>
      </div>


      <div class="form-group col-lg-12{{ $errors->has('roles') ? ' has-error' : '' }}">
        {!! Form::selection('role', $select, null, trans('back/users.roles')) !!}
      <span class="help-block text-danger">
          {{ $errors -> first('roles') }}
      </span>
      </div>

    </div>

</div>