<div class="container-fluid" id="fade">
      <div class="col-md-6">
        <div class="panel panel-default" style="border: none;"> 
        <div class="controle-header panel-heading panel-heading-landing">
            <h1 class="panel-title panel-title-landing">
                <strong>PENGAJUAN AKAD</strong>
            </h1>
        </div>
        <div class="panel-body panel-body-landing">
          {!! Form::open(['url' => '/admin/akad', 'class' => 'form-horizontal', 'role' => 'form']) !!}
          <input type="hidden" name="id_pegawai" class="form-control" value="{{Auth::user()->id_pegawai}}">
          <input type="hidden" name="id_anggota" class="form-control" id="id_anggota" value="{{$data->id_anggota}}">
          <input type="hidden" name="status" class="form-control" id="status" value="Passive">

          <div class="form-group col-lg-12{{ $errors->has('nominal') ? ' has-error' : '' }}" id="rp">
            {!! Form::label('nominal', 'Nilai Simpanan Berjangka', ['class' => 'control-label']) !!}
            {!! Form::text('nominal', null, ['class' => 'form-control', 'id' => 'rp']) !!}
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
      {!! Form::close() !!}
        </div>
      </div>
      </div>
      {{-- end div --}}
      <div class="col-md-6">
        <div class="panel panel-default" style="border: none;">
            <div class="controle-header panel-heading panel-heading-landing">
                <h1 class="panel-title panel-title-landing">
                    <strong>IDENTITAS ANGGOTA</strong>
                </h1>
            </div>
            <div class="panel-body panel-body-landing">
                <table class="table">
                    <tr>
                        <td width="50px"><i class="fa fa-arrow-right"></i></td>
                        <td>NO KTP</td>
                        <td width="20px">:</td>
                        <td><strong>{{$data->no_ktp}}</strong></td>
                    </tr>
                    <tr>
                        <td width="50px"><i class="fa fa-arrow-right"></i></td>
                        <td>Nama</td>
                        <td width="20px">:</td>
                        <td><strong>{{$data->nama}}</strong></td>
                    </tr>
                    <tr>
                        <td width="50px"><i class="fa fa-arrow-right"></i></td>
                        <td>Jenis Kelamin</td>
                        <td width="20px">:</td>
                        <td><strong> {{$data->jenkel}}</strong></td>
                    </tr>
                    <tr>
                        <td width="50px"><i class="fa fa-arrow-right"></i></td>
                        <td>Tempat/Tanggal Lahir</td>
                        <td width="20px">:</td>
                        <td><strong>{{$data->tempat_lahir}} ,{{$data->tanggal_lahir}}</strong></td>
                    </tr>
                    <tr>
                        <td width="50px"><i class="fa fa-arrow-right"></i></td>
                        <td>Alamat</td>
                        <td width="20px">:</td>
                        <td><strong>{{$data->alamat}}</strong></td>
                    </tr>
                    <tr>
                        <td width="50px"><i class="fa fa-arrow-right"></i></td>
                        <td>Telephone</td>
                        <td width="20px">:</td>
                        <td><strong>{{$data->tlp}}</strong></td>
                    </tr>
                    <tr>
                        <td width="50px"><i class="fa fa-arrow-right"></i></td>
                        <td>Kode Pos</td>
                        <td width="20px">:</td>
                        <td><strong>{{$data->kodepos}}</strong></td>
                    </tr>
                </table>
            </div>
        </div>
      </div> 
        
</div>