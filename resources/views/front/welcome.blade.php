<!DOCTYPE html>
<html lang="en">
    <head>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">
    <meta name="author" content="{{ config('bmt.author') }}">
    <title>{{ $title or config('bmt.name') }}</title>
        <!-- CSS -->
    <link href="{{ asset('/css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('/css/vendor.css') }}" rel="stylesheet">


    </head>
    <body>

    <center>
        <h1>KSPS Abdi Kerta Raharja</h1>
        <div class="address-bar">
        <p>{{ trans('front/login.welcome') }}</p></div>
    </center>
    <div class="navbar navbar-default">
            <div class="container">
                <center>
                <div class="navbar-collapse collapse" id="navbar-main">
                    <ul class="nav navbar-nav">
                    <li {!! Request::is('/') ? 'class="active"' : '' !!}>
                        {!! link_to('/', trans('front/site.home')) !!}
                    </li>
                    {{--  --}}
                    @if(Request::is('password/email'))
                        <li class="active">
                            {!! link_to('password/email', trans('front/site.forget-password')) !!}
                        </li>
                    @else
                        @if(session('statut') == 'visitor')
                            <li {!! Request::is('auth/login') ? 'class="active"' : '' !!}>
                                {!! link_to('auth/login', trans('front/site.login')) !!}
                            </li>
                        @else
                            @if(session('statut') == 'admin')
                                <li>
                                    {!! link_to_route('admin', trans('front/site.administration')) !!}
                                </li>
                            @elseif(session('statut') == 'worker') 
                                <li>
                                    {!! link_to('worker', trans('front/site.worker')) !!}
                                </li>
                            @endif
                            <li>
                                {!! link_to('auth/logout', trans('front/site.logout')) !!}
                            </li>
                        @endif
                    @endif
                    <li class="imgflag">
                        <a href="{!! url('language') !!}"><img width="32" height="32" alt="en" src="{!! asset('images/' . (session('locale') == 'id' ? 'english' : 'indonesia') . '-flag.png') !!}"></a>
                    </li>
                    </ul>   
                </div>
                </center>
            </div>
        </div>      

        <main role="main" class="container">
            @if(session()->has('ok'))
                @include('partials/error', ['type' => 'success', 'message' => session('ok')])
            @endif  
            @if(isset($info))
                @include('partials/error', ['type' => 'info', 'message' => $info])
            @endif
            @yield('main')
        </main>
        <!-- /#page-content-wrapper -->

    <!-- script references -->

    <script>var base_url = "{{url()}}";</script>
{{--     <script src="{{ asset('/js/build/angular.min.js') }}"></script>
    <script src="{{ asset('/js/build/angular-route.min.js') }}"></script>
    <script src="{{ asset('/js/build/ui-bootstrap-tpls-0.12.0.min.js') }}"></script>
    <script src="{{ asset('/js/build/admin.js') }}"></script>
    <script src="{{ asset('/js/build/controller/login.js') }}"></script> --}}

    <script src="{{ asset('/js/vendor.js') }}"></script>
    <!-- end: JAVASCRIPTS REQUIRED FOR THIS PAGE ONLY -->
    <script>
        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        })
    </script>
    
    </body>
</html>