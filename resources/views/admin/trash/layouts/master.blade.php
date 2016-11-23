<!DOCTYPE html>
<html lang="en" class="hide-sidebar ls-bottom-footer no-js" lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="author" content="{{ config('bmt.author') }}">
    <title>{{ $title or config('bmt.name') }}</title>
        <!-- CSS -->
    <link href="{{ asset('/css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('/css/vendor.css') }}" rel="stylesheet">
{{--     <link href="{{ asset('/assets/css/bootstrap.min.css') }}" rel="stylesheet">
    <link href="{{ asset('/assets/css/bootflat.min.css') }}" rel="stylesheet">
    <link href="{{ asset('/assets/css/font-awesome.min.css') }}" rel="stylesheet">
    <link href="{{ asset('/assets/css/pace-themes-minimal.css') }}" rel="stylesheet">
    <link href="{{ asset('/assets/css/datatables.bootstrap.css') }}" rel="stylesheet">
    <link href="{{ asset('/assets/css/angular-block-ui.min.css') }}" rel="stylesheet">
    <link href="{{ asset('/assets/css/uikit.min.css') }}" rel="stylesheet">
    <link href="{{ asset('/assets/css/bootstrap-datepicker3.standalone.min.css')}}" rel="stylesheet"> --}}

</head>
<body>
                
        <div id="header" class="navbar navbar-inverse navbar-fixed-top" style="background-color:#">
        <!-- Header open -->
                @section('header')
                    @include('admin.includes.header')
                @show
        <!-- Header close -->
        </div>  

        <div id="wrapper">
                @include('admin.includes.sidebar')
            <div id="main-wrapper" class="col-md-12 pull-center">
            <!-- Page Content -->            
                <div id="main">   
                    @yield('content')
                </div>
            </div>

        </div>

        <!-- /#page-content-wrapper -->


    <!-- script references -->

    <script>var base_url = "{{url()}}";</script>
    <script src="{{ asset('/js/vendor.js') }}"></script>

{{--     <script src="{{ asset('/assets/js/angular.min.js') }}"></script>
    <script src="{{ asset('/assets/js/jquery-2.1.4.min.js') }}"></script>
    <script src="{{ asset('/assets/js/ui-bootstrap-tpls-0.12.0.min.js')}}"></script> 
    <script src="{{ asset('/assets/js/angular-file-upload.min.js')}}"></script>
    <script src="{{ asset('/assets/js/angular-block-ui.min.js')}}"></script>
    <script src="{{ asset('/assets/js/pace.min.js') }}"></script>
    <script src="{{ asset('/assets/js/jquery.dataTables.min.js') }}"></script>
    <script src="{{ asset('/assets/js/datatables.bootstrap.js') }}"></script>
    <script src="{{ asset('/assets/js/datatables.min.js') }}"></script>
    <script src="{{ asset('/assets/js/handlebars.js') }}"></script>
    <script src="{{ asset('/assets/js/bootstrap.min.js') }}"></script>
    <script src="{{ asset('/assets/js/uikit.min.js') }}"></script>
    <script src="{{ asset('/assets/js/bootstrap-datepicker.min.js') }}"></script>
    <script src="{{ asset('/assets/js/handlebars.js') }}"></script>
    <script src="{{ asset('/assets/js/jquery.maskMoney.min.js') }}"></script> --}}

    <!-- end: JAVASCRIPTS REQUIRED FOR THIS PAGE ONLY -->
    <script>
        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        });
    </script>

        @yield('scripts')
        
    <script type="text/javascript">
        @yield('js')
    </script>
    @stack('scripts')
</body>
</html>