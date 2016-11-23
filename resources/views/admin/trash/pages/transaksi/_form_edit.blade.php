<div class="container-fluid">       
  @include('admin.partials.flash_notification')
  <div class="col-md-6">
  <h3 class="dark-grey">Form Transaksi</h3><hr>
 {!! Form::open(['url' => '/admin/transaksi', 'class' => 'form-horizontal', 'role' => 'form']) !!}

  <input type="hidden" name="id_pegawai" class="form-control" value="{{Auth::user()->id_pegawai}}">
  <input type="hidden" name="id_akad" class="form-control" id="id_anggota" value="{{$data->id_akad}}">
  
  <div class="form-group col-lg-12">
    <label>Nominal</label>
    <input type="text" name="nominal" class="form-control" id="" placeholder="Rp.(Terbilang)" value="">
  </div>

  <div class="form-group col-lg-12{{ $errors->has('tgl_transaksi') ? ' has-error' : '' }}" id="sandbox-container">
    {!! Form::label('tgl_transaksi', 'Tanggal Transaksi', ['class' => 'control-label']) !!}
    <div class="input-group date">
    {!! Form::text('tgl_transaksi', null, ['class' => 'form-control']) !!}
    <span class="input-group-addon help-block text-danger"><i class="fa fa-calendar"></i>
    {{ $errors -> first('tgl_transaksi') }}
    </span>
    </div>
  </div>
{!! Form::close() !!}
</div>


</div>
      
</div>