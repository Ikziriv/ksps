<div id="sidebar-wrapper" class="col-md-6">
    <div id="sidebar">
        <ul class="nav list-group">
            <li>
                <a class="list-group-item text-center" href="{!! url('admin') !!}">
                <i class="fa fa-home fa-3x"></i></i>
                </a>
            </li>
            @if(session('statut') == 'admin')
            <li>
                <a class="list-group-item text-center" href="{!! url('user') !!}">
                <i class="fa fa-user fa-3x"></i></i>
                </a>
            </li>
            @endif 
            <li>
                <a class="list-group-item text-center" href="{!! url('anggota') !!}">
                <i class="fa fa-users fa-3x"></i></i>
                </a>
            </li>
            <li>
                <a class="list-group-item text-center" href="{!! url('akad') !!}">
                <i class="fa fa-briefcase fa-3x"></i>
                </a>
            </li>
            <li>
                <a class="list-group-item text-center" href="{!! url('ahliwaris') !!}">
                <i class="fa fa-user-plus fa-3x"></i></i>
                </a>
            </li>
            <li>
                <a class="list-group-item text-center" href="{!! url('transaksi') !!}">
                <i class="fa fa-usd fa-3x"></i>
                </a>
            </li>
            <li>
                <a class="list-group-item text-center" id="keluar" href="{!! url('') !!}">
                <i class="fa fa-gear fa-3x"></i>
                </a>
            </li>
            <li>
                <a class="list-group-item text-center" href="{!! url('auth/logout') !!}">
                <i class="fa fa-power-off fa-3x"></i>
                </a>
            </li>
        </ul>
    </div>
</div>