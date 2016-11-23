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
    <body id="splash">
                

        <div id="main-wrapper" class="col-md-12 pull-center">
        <!-- Page Content -->            
            <div>
              <div class="welcome_body">
                <center>
                    <h1>KSPS Abdi Kerta Raharja</h1>
                    <p>
                    {{ trans('back/login.welcome') }}
                    </p>
                    <a data-toggle="modal" href="#loginworker"> 
                        <button class="btn" type="submit" id="wel_btn">{{ trans('back/login.btn') }} <i class="fa fa-sign-in"></i></button>
                    </a><br>
                    <a href="{!! url('language') !!}"><img width="32" height="32" alt="en" src="{!! asset('images/' . (session('locale') == 'id' ? 'english' : 'indonesia') . '-flag.png') !!}"></a>
                </center>
              </div>
            </div>
        </div>
        <!-- /#page-content-wrapper -->

        {{-- Modal Login start --}}
        <div class="modal fade" id="loginworker">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                  <h4 class="modal-title">{{ trans('back/login.title') }}</h4>
                @if(session()->has('error'))
                    @include('partials/error', ['type' => 'danger', 'message' => session('error')])
                @endif
                </div>
                <div class="modal-body">
                    <div class="row">
                    {!! Form::open(['url' => 'auth/login', 'method' => 'post', 'role' => 'form']) !!}
                        {!! Form::control('text', 6, 'log', $errors, trans('back/login.log')) !!}
                        {!! Form::control('password', 6, 'password', $errors, trans('back/login.password')) !!}
                        {!! Form::submit(trans('back/form.login'), ['col-lg-12']) !!}
                    {!! Form::close() !!}
                    </div>
                </div>
                <div class="modal-footer">
                    {!! Form::check('memory', trans('back/login.remind')) !!} 
                </div>
                
              </div>
            </div>
        </div>


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