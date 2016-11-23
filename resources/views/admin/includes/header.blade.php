<div class="navbar-header">      
    @if(session('statut') == 'admin')
        {!! link_to_route('admin', trans('back/admin.administration'), [], ['class' => 'navbar-brand']) !!}
    @else
        {!! link_to_route('blog.index', trans('back/admin.redaction'), [], ['class' => 'navbar-brand']) !!}
    @endif
</div>
<nav class="collapse navbar-collapse">
    <ul class="nav navbar-nav">
        @if(session('statut') == 'admin')
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">Pegawai <i class="fa fa-caret-down"></i></b></a>
            <ul class="dropdown-menu">
                <li><a href=""><i class="fa fa-plus-square"></i> Tambah</a></li>
                <li><a href=""><i class="fa fa-eye"></i> Lihat</a></li>
            </ul>
        </li>
        @endif 
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">Anggota <i class="fa fa-caret-down"></i></a>
            <ul class="dropdown-menu">
                <li><a href=""><i class="fa fa-plus-square"></i> Tambah</a></li>
                <li><a href=""><i class="fa fa-eye"></i> Lihat</a></li>
            </ul>
        </li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">Ahli Waris <i class="fa fa-caret-down"></i></a>
            <ul class="dropdown-menu">
                <li><a href=""><i class="fa fa-eye"></i> Lihat</a></li>
            </ul>
        </li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">Akad <i class="fa fa-caret-down"></i></a>
            <ul class="dropdown-menu">
                <li><a href=""><i class="fa fa-eye"></i> Lihat</a></li>
            </ul>
        </li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">Transaksi <i class="fa fa-caret-down"></i></a>
            <ul class="dropdown-menu">
                <li><a href=""><i class="fa fa-eye"></i> Lihat</a></li>
            </ul>
        </li>
    </ul>
    <ul class="nav navbar-nav pull-right">
        <li>{!! link_to_route('home', trans('back/admin.home')) !!}</li>
        <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown"><span class="fa fa-user"></span> {{ auth()->user()->username }}<b class="caret"></b></a>
            <ul class="dropdown-menu">
                <li>
                    <a href="{!! url('auth/logout') !!}"><span class="fa fa-fw fa-power-off"></span> {{ trans('back/admin.logout') }}</a>
                </li>
            </ul>
        </li>
    </ul>
</nav>