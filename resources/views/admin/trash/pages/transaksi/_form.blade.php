<div class="container-fluid">       
  <div class="col-md-8">
  @include('admin.partials.flash_notification')
   <h3 class="dark-grey">Transaksi Simpanan</h3><hr>


    <table id="takad-table" class="table table-condensed">
        <thead>
            <tr>
                <th>ID</th>
                <th>Status</th>
                <th>Nominal</th>
                <th>Tanggal Transaksi</th>
                <th>Tanggal Expired</th>
                <th>Jangka Waktu</th>
                <th>Perpanjang</th>
                <th>Action</th>
            </tr>
        </thead>
    </table>

  </div>
  {{-- end div --}}
  <div class="col-md-4">
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


  <div class="form-group">
    <div class="col-md-10">
      <button type="submit" class="btn btn-default">
        <i class="fa fa-disk-o"></i>
        Save
      </button>
      <a href="{{route('admin.transaksi.index')}}">
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