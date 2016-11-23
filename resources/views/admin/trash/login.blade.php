<!DOCTYPE html>
<html lang="en" class="hide-sidebar ls-bottom-footer no-js" lang="en" ng-app="admin">
    <head>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">
    <meta name="author" content="{{ config('bmt.author') }}">
    <title>{{ $title or config('bmt.name') }}</title>
        <!-- CSS -->
    <link href="{{ asset('/assets/css/bootstrap.min.css') }}" rel="stylesheet">
    <link href="{{ asset('/assets/css/bootflat.min.css') }}" rel="stylesheet">
    <link href="{{ asset('/assets/css/font-awesome.min.css') }}" rel="stylesheet">
    <link href="{{ asset('/assets/css/admin.css') }}" rel="stylesheet">
    <link href="{{ asset('/assets/css/pace-themes-minimal.css') }}" rel="stylesheet">


    </head>
    <body id="splash" ng-controller="login">
                {{-- 
        <div id="header" class="navbar navbar-fixed-top" style="background-color:#87D37C">
        Header open
               @include('admin.includes.header')
        <!-- Header close -->
        </div>   --}}

        <div id="main-wrapper" class="col-md-12 pull-center">
        <!-- Page Content -->            
            <div id="main">
                <div class="row">   
                    <form accept-charset="UTF-8" ng-submit="submit()" class="form-signin"  novalidate> 
                        <h1 class="form-signin-heading text-muted text-center">ADMIN</h1>
                        <input type="hidden" name="_token" value="{{ csrf_token()}}">
                        <input type="text" class="form-control" name="username" ng-model='data.username' type="text" data-toggle="tooltip" data-placement="top" title="Masukan Username Anda" placeholder="Username">
                        <input type="password" class="form-control" name="password" placeholder="Masukan Password Anda" ng-model="data.password" type="password" data-toggle="tooltip" data-placement="top" title="Masukan Password Anda">
                        <button type="submit" class="btn btn-lg btn-success btn-block" >
                            Login <i class="fa fa-fw fa-unlock-alt"></i>
                        </button>
                        <br>
                        <alert ng-repeat="alert in alerts" type="<%alert.type%>" close="closeAlert($index)">
                        <% alert.msg %>
                        </alert>
                    </form>
                </div>
                <center>
                    <span style="color:#333;font-weight: bold;">Developed By
                        <a style="color:#333" href="#" style="color:white" target="_blank">
                            Rizky Ivan Darmawan</a>
                    </span>
                </center>
            </div>
        </div>
        <!-- /#page-content-wrapper -->

    <!-- script references -->
    <script src="{{asset('assets/plugins/jQuery-lib/2.0.3/jquery.min.js')}}"></script>
    <script src="{{asset('assets/plugins/bootstrap/js/bootstrap.min.js')}}"></script>

    <script>var base_url = "{{url()}}";</script>

    <script src="{{ asset('/assets/js/angular.min.js') }}"></script>
    <script src="{{ asset('/assets/js/ui-bootstrap-tpls-0.12.0.min.js')}}"></script>
    <script src="{{ asset('/assets/js/angular-file-upload.min.js')}}"></script>
    <script src="{{ asset('/assets/js/angular-block-ui.min.js')}}"></script>
    <script src="{{ asset('/assets/js/admin.js') }}"></script>
    <script src="{{ asset('/assets/js/pace.min.js') }}"></script>
    <script src="{{ asset('/assets/js/controller/login.js')}}"></script>
    <!-- end: JAVASCRIPTS REQUIRED FOR THIS PAGE ONLY -->
    <script>
        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        })
    </script>
    </body>
</html>