<div class="container-fluid">
    <section class="container">
    <div class="container-page"> 
          <h3 class="dark-grey">Pengajuan Akad</h3><hr>
          <input type="hidden" name="id_pegawai" class="form-control" value="{{Auth::user()->id_pegawai}}">
          <input type="hidden" name="id_anggota" class="form-control" id="id_anggota" value="{{$data->id_anggota}}">

          <div class="form-group col-lg-12{{ $errors->has('status') ? ' has-error' : '' }}">
            {!! Form::label('status', 'Status', ['class' => 'control-label']) !!}
            {!! Form::text('status', null, ['class' => 'form-control']) !!}
          <span class="help-block text-danger">
              {{ $errors -> first('status') }}
          </span>
          </div>

          <div class="form-group col-lg-12{{ $errors->has('nominal') ? ' has-error' : '' }}">
            {!! Form::label('nominal', 'Nilai Simpanan Berjangka', ['class' => 'control-label']) !!}
            {!! Form::text('nominal', null, ['class' => 'form-control']) !!}
          <span class="help-block text-danger">
              {{ $errors -> first('nominal') }}
          </span>
          </div>
          
          <div class="form-group col-lg-6{{ $errors->has('tgl_transaksi') ? ' has-error' : '' }}" id="sandbox-container">
            {!! Form::label('tgl_transaksi', 'Tanggal Transaksi', ['class' => 'control-label']) !!}
            <div class="input-group date">
            {!! Form::text('tgl_transaksi', null, ['class' => 'form-control']) !!}
            <span class="input-group-addon help-block text-danger"><i class="fa fa-calendar"></i>
            {{ $errors -> first('tgl_transaksi') }}
            </span>
            </div>
          </div>

          <div class="form-group col-lg-6{{ $errors->has('tgl_jatuh_tempo') ? ' has-error' : '' }}" id="sandbox-container">
            {!! Form::label('tgl_jatuh_tempo', 'Tanggal Jatuh Tempo', ['class' => 'control-label']) !!}
            <div class="input-group date">
            {!! Form::text('tgl_jatuh_tempo', null, ['class' => 'form-control']) !!}
            <span class="input-group-addon help-block text-danger"><i class="fa fa-calendar"></i>
            {{ $errors -> first('tgl_jatuh_tempo') }}
            </span>
            </div>
          </div>
          
          <div class="form-group col-lg-6">
            <label>Jangka Waktu</label>
            <select name="jangka_waktu" class="form-control" tabindex="-1">
              <option value="">Select</option>
              <option value="6B">6 Bulan</option>
              <option value="12B">12 Bulan</option>
            </select>
          </div>

          <div class="form-group col-lg-6">
            <label>Perpanjang Otomatis</label>
            <select name="perpanjang" class="form-control" tabindex="-1">
              <option value="">Select</option>
              <option value="ya">Ya</option>
              <option value="tidak">Tidak</option>
            </select>
          </div>

          <div class="form-group">
            <div class="col-md-10">
              <button type="submit" class="btn btn-default">
                <i class="fa fa-floppy-o"></i>
                Save
              </button>
              <a href="{{route('admin.akad.index')}}">
              <button type="button" class="btn btn-default">
                <i class="fa fa-times"></i>
                Batal
              </button>
              </a>
            </div>
          </div>
      {{-- end div --}}
          
  </div>
  </section>
</div>