@extends('admin.master')

@section('content')

  @include('admin.partials.entete', ['title' => trans('back/admin.dashboard'), 'icone' => 'dashboard', 'fil' => trans('back/admin.dashboard')])

  <div class="row">

    @include('admin/partials/pannel', ['color' => 'default', 'icone' => 'envelope', 'nbr' => $nbrAkad, 'name' => trans('back/admin.new-agreement'), 'url' => 'akad', 'total' => trans('back/admin.agreement')])

    @include('admin/partials/pannel', ['color' => 'default', 'icone' => 'user', 'nbr' => $nbrUsers, 'name' => trans('back/admin.new-user'), 'url' => 'user', 'total' => trans('back/admin.users')])

    @include('admin/partials/pannel', ['color' => 'default', 'icone' => 'users', 'nbr' => $nbrAnggota, 'name' => trans('back/admin.new-member'), 'url' => 'anggota', 'total' => trans('back/admin.member')])

    @include('admin/partials/pannel', ['color' => 'default', 'icone' => 'usd', 'nbr' => $nbrTransaksi, 'name' => trans('back/admin.new-transaction'), 'url' => 'transaksi', 'total' => trans('back/admin.transaction')])

  </div>

@stop


