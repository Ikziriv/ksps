@extends('admin.layouts.master')

@section('content')
<div class="page-header">
<h1><strong>VIEW ANGGOTA</strong></h1>
</div>

<div class="container">
<div class="col-md-6">
    <div class="col-md-12">    
        <div class="well"><h2>{{$data->nama}}</h2> </div>
        <div class="well">
        <p><strong>Alamat: </strong> {{$data->alamat}}</p>
        <p><strong>Tempat/Tanggal Lahir: </strong>{{$data->tempat_lahir}} ,{{$data->tanggal_lahir}}</p>
        <p><strong>Telephone: </strong>{{$data->tlp}} </p>
        <p><strong>Email: </strong>{{$data->email}} </p>
        </div>
    </div> 
    <div class="col-md-12">
        <div class="form-group">
          <div class="col-md-10">
          <a href="{{route('admin.ahliwaris.index')}}">
            <button type="submit" class="btn btn-default">
              <i class="fa fa-arrow-left"></i>
              Kembali
            </button>
          </a>
          </div>
        </div>
    </div> 
</div>
{{-- end div --}}
<div class="col-md-6">
    <div class="col-md-12">    
        <div class="well"><h2>{{$data->nama}}</h2> </div>
        <div class="well">
        <p><strong>Alamat: </strong> {{$data->alamat}}</p>
        <p><strong>Tempat/Tanggal Lahir: </strong>{{$data->tempat_lahir}} ,{{$data->tanggal_lahir}}</p>
        <p><strong>Telephone: </strong>{{$data->tlp}} </p>
        <p><strong>Email: </strong>{{$data->email}} </p>
        </div>
    </div> 
</div>
</div>
@stop

@section('js')

@stop
