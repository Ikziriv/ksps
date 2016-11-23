<div class="container-fluid">     
    <div class="col-md-6">   
    <input type="hidden" name="id_pegawai" class="form-control" value="{{Auth::user()->id_pegawai}}">
    <input type="hidden" name="id_akad" class="form-control" id="id_akad" value="{{$data->id_akad}}">     
    <div class="form-group col-lg-12{{ $errors->has('no_ktp') ? ' has-error' : '' }}">
      {!! Form::label('no_ktp', 'NO KTP', ['class' => 'control-label']) !!}
      {!! Form::text('no_ktp', null, ['class' => 'form-control']) !!}
    <span class="help-block text-danger">
        {{ $errors -> first('no_ktp') }}
    </span>
    </div>
      
    <div class="form-group col-lg-12{{ $errors->has('nama') ? ' has-error' : '' }}">
      {!! Form::label('nama', 'Nama', ['class' => 'control-label']) !!}
      {!! Form::text('nama', null, ['class' => 'form-control']) !!}
    <span class="help-block text-danger">
        {{ $errors -> first('nama') }}
    </span>
    </div>

    <div class="form-group col-lg-12">
      <label>Jenis Kelamin</label>
      <select name="jenkel" class="form-control" tabindex="-1">
        <option value="">Select</option>
        <option value="L">Laki - Laki</option>
        <option value="P">Perempuan</option>
      </select>
    </div>

    <div class="form-group col-lg-12{{ $errors->has('alamat') ? ' has-error' : '' }}">
      {!! Form::label('alamat', 'Alamat', ['class' => 'control-label']) !!}
      {!! Form::textarea('alamat', null, ['class' => 'form-control']) !!}
    <span class="help-block text-danger">
        {{ $errors -> first('alamat') }}
    </span>
    </div>

  </div>
{{-- end div --}}
  <div class="col-md-6">
  
    <div class="form-group col-lg-6{{ $errors->has('tempat_lahir') ? ' has-error' : '' }}">
      {!! Form::label('tempat_lahir', 'Tempat Lahir', ['class' => 'control-label']) !!}
      {!! Form::text('tempat_lahir', null, ['class' => 'form-control']) !!}
    <span class="help-block text-danger">
        {{ $errors -> first('tempat_lahir') }}
    </span>
    </div>

    <div class="form-group col-lg-6{{ $errors->has('tanggal_lahir') ? ' has-error' : '' }}" id="sandbox-container">
      {!! Form::label('tanggal_lahir', 'Tanggal Lahir', ['class' => 'control-label']) !!}
      <div class="input-group date">
      {!! Form::text('tanggal_lahir', null, ['class' => 'form-control']) !!}
      <span class="input-group-addon help-block text-danger"><i class="fa fa-calendar"></i>
      {{ $errors -> first('tanggal_lahir') }}
      </span>
      </div>
    </div>

    <div class="form-group col-lg-12{{ $errors->has('tlp') ? ' has-error' : '' }}">
      {!! Form::label('tlp', 'Telphone', ['class' => 'control-label']) !!}
      {!! Form::text('tlp', null, ['class' => 'form-control']) !!}
    <span class="help-block text-danger">
        {{ $errors -> first('tlp') }}
    </span>
    </div>

    <div class="form-group col-lg-6{{ $errors->has('kelurahan') ? ' has-error' : '' }}">
      {!! Form::label('kelurahan', 'Kelurahan', ['class' => 'control-label']) !!}
      {!! Form::text('kelurahan', null, ['class' => 'form-control']) !!}
    <span class="help-block text-danger">
        {{ $errors -> first('kelurahan') }}
    </span>
    </div>
    
    <div class="form-group col-lg-6{{ $errors->has('kecamatan') ? ' has-error' : '' }}">
      {!! Form::label('kecamatan', 'Kecamatan', ['class' => 'control-label']) !!}
      {!! Form::text('kecamatan', null, ['class' => 'form-control']) !!}
    <span class="help-block text-danger">
        {{ $errors -> first('kecamatan') }}
    </span>
    </div>
    
    <div class="form-group col-lg-6{{ $errors->has('kabupaten') ? ' has-error' : '' }}">
      {!! Form::label('kabupaten', 'Kabupaten', ['class' => 'control-label']) !!}
      {!! Form::text('kabupaten', null, ['class' => 'form-control']) !!}
    <span class="help-block text-danger">
        {{ $errors -> first('kabupaten') }}
    </span>
    </div>
    
    <div class="form-group col-lg-6{{ $errors->has('kodepos') ? ' has-error' : '' }}">
      {!! Form::label('kodepos', 'Kode Pos', ['class' => 'control-label']) !!}
      {!! Form::text('kodepos', null, ['class' => 'form-control']) !!}
    <span class="help-block text-danger">
        {{ $errors -> first('kodepos') }}
    </span>
    </div>

    <div class="form-group col-lg-6{{ $errors->has('jml_anak') ? ' has-error' : '' }}">
      {!! Form::label('jml_anak', 'Jumlah Anak', ['class' => 'control-label']) !!}
      {!! Form::text('jml_anak', null, ['class' => 'form-control']) !!}
    <span class="help-block text-danger">
        {{ $errors -> first('jml_anak') }}
    </span>
    </div>
    
    <div class="form-group col-lg-6{{ $errors->has('hubungan') ? ' has-error' : '' }}">
      {!! Form::label('hubungan', 'Hubungan', ['class' => 'control-label']) !!}
      {!! Form::text('hubungan', null, ['class' => 'form-control']) !!}
    <span class="help-block text-danger">
        {{ $errors -> first('hubungan') }}
    </span>
    </div>

    <div class="form-group">
      <div class="col-md-10">
        <button type="submit" class="btn btn-default">
          <i class="fa fa-floppy-o"></i>
          Save
        </button>              
        <a href="{{route('admin.anggota.index')}}">
          <button type="button" class="btn btn-default">
            <i class="fa fa-times"></i>
            Batal
          </button>
          </a>
      </div>
    </div>

  </div>    

</div>