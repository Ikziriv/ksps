<div class="container-fluid">
    <section class="container">
    <div class="container-page">        
      <div class="col-md-6">
        <div class="form-group col-lg-12">
          {!! Form::label('nama', 'Nama', ['class' => 'control-label']) !!}
          {!! Form::text('nama', null, ['class' => 'form-control']) !!}
        </div>

        <div class="form-group col-lg-12">
          <label>Jenis Kelamin</label>
          <select name="id" class="form-control" tabindex="-1" required>
            <option value="">Select</option>
            <option value="L">Laki - Laki</option>
            <option value="P">Perempuan</option>
          </select>
        </div>

        <div class="form-group col-lg-12">
          {!! Form::label('alamat', 'Alamat', ['class' => 'control-label']) !!}
          {!! Form::textarea('alamat', null, ['class' => 'form-control']) !!}
        </div>

        <div class="form-group col-lg-6">
          {!! Form::label('tempat_lahir', 'Tempat Lahir', ['class' => 'control-label']) !!}
          {!! Form::text('tempat_lahir', null, ['class' => 'form-control']) !!}
        </div>
        
        <div class="form-group col-lg-6" id="sandbox-container">
          {!! Form::label('tanggal_lahir', 'Tanggal Lahir', ['class' => 'control-label']) !!}
          <div class="input-group date">
          {!! Form::text('tanggal_lahir', null, ['class' => 'form-control']) !!}
            <span class="input-group-addon"><i class="fa fa-calendar"></i></span>
          </div>
        </div>

        <div class="form-group col-lg-12">
          {!! Form::label('tlp', 'Telphone', ['class' => 'control-label']) !!}
          {!! Form::text('tlp', null, ['class' => 'form-control']) !!}
        </div>
      </div>
    {{-- end div --}}
      <div class="col-md-6">

        <div class="form-group col-lg-12">
          {!! Form::label('email', 'Email', ['class' => 'control-label']) !!}
          {!! Form::email('email', null, ['class' => 'form-control']) !!} 
        </div>

        <div class="form-group col-lg-12">
          <label>Status</label>
          <select name="id" class="form-control" tabindex="-1" required>
            <option value="">Select</option>
            <option value="admin">Admin</option>
            <option value="worker">Worker</option>
          </select>
        </div>

        <div class="form-group col-lg-12">
          {!! Form::label('username', 'Username', ['class' => 'control-label']) !!}
          {!! Form::text('username', null, ['class' => 'form-control']) !!}
        </div>
        
        <div class="form-group col-lg-12">
          {!! Form::label('password', 'Password', ['class' => 'control-label']) !!}
          {!! Form::password('password', ['class' => 'form-control']) !!}
        </div>

      </div>
    </div>
  </section>
</div>