@extends('admin.master')

@section('content')

  @include('admin.partials.entete', ['title' => trans('back/akad.add'), 'icone' => 'users', 'fil' => link_to('akad', trans('back/akad.agreements')) . ' / ' . trans('back/akad.add')])


<div class="row">
  <div class="col-sm-12">

    {!! Form::open(['url' => 'akad', 'method' => 'post', 'class' => 'form-horizontal panel']) !!}
    <div class="container-fluid">     
        <div class="col-md-12">   {{-- 
        <input type="hidden" name="id_pegawai" class="form-control" value="{{Auth::user()->id_pegawai}}">
        <input type="hidden" name="id_akad" class="form-control" id="id_akad" value="{{$data->id_akad}}">     --}} 
        
        <div class="col-md-6"> 
            <input type="hidden" name="id_pegawai" class="form-control" value="{{Auth::user()->id}}">
            <input type="hidden" name="id_anggota" class="form-control" value="{{$data->id}}">
            <input type="hidden" name="status" class="form-control" value="Proses">

            <div class="form-group col-lg-12">
                <div class="form-group  ">
                    <label for="nominal" class="control-label">Nominal</label>
                    <input class="form-control" placeholder="Rp." name="nominal" type="number" id="rp">
                </div>
            </div>

            <div class="form-group col-lg-12">
            {!! Form::control('date', 0, 'tgl_transaksi', $errors, trans('back/akad.transaction-date')) !!}
            </div>

            <div class="form-group col-lg-12">
            {!! Form::control('date', 0, 'tgl_jatuh_tempo', $errors, trans('back/akad.expired-date')) !!}
            </div>

        </div>


        <div class="col-md-6"> 

          
        <div class="form-group col-lg-12">
        {!! Form::control('text', 0, 'jangka_waktu', $errors, trans('back/akad.time-period')) !!}
        </div>

        <div class="form-group col-lg-12">
        {!! Form::control('text', 0, 'perpanjang', $errors, trans('back/akad.renew')) !!}
        </div>

        </div>


      </div>
    {{-- end div --}}

    <div class="col-md-6">
      <div class="form-group">
        <div class="col-md-6 col-md-offset-1">
          <button type="submit" class="btn btn-default">
            <i class="fa fa-floppy-o"></i>
            Save
          </button>
          <a href="{!! url('akad') !!}">
            <button type="button" class="btn btn-default">
              <i class="fa fa-times"></i>
              Batal
            </button>
            </a>
        </div>
      </div>
    </div>
    </div>   

    {!! Form::close() !!}

  </div>
</div>
@stop

@section('js') 
$("#rp").maskMoney({prefix:'Rp ', thousands:'.', decimal:',', affixesStay: false});

$('#sandbox-container .input-group.date').datepicker({
    todayBtn: "linked",
    clearBtn: true,
    autoclose: true,
    calendarWeeks: true,
    toggleActive: true
});

@stop
