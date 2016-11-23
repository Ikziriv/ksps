<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="">    
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="author" content="{{ config('bmt.author') }}">
    <title>{{ $title or config('bmt.name') }}</title>
        <!-- CSS -->
    <link href="{{ asset('/css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('/css/vendor.css') }}" rel="stylesheet">

</head>
<body>

        <div id="wrapper">
                @include('admin.includes.sidebar')
            <div id="main-wrapper" class="col-md-12 pull-center">
            <!-- Page Content -->  
                <div class="col-md-12">
                    <a href="#menu-toggle" class="btn btn-default" id="menu-toggle"><i class="fa fa-bars"></i></a>
                </div>  
                <div id="main">   
                    @yield('content')
                </div>
            </div>

        </div>

        <!-- /#page-content-wrapper -->


    <!-- script references -->

    <script>var base_url = "{{url()}}";</script>
    <script src="{{ asset('js/vendor.js') }}"></script>
    
    <!-- end: JAVASCRIPTS REQUIRED FOR THIS PAGE ONLY -->
    <!-- Menu Toggle Script -->
    <script>
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
    </script>

    <script>
      $('#keluar').click(function(e) {
        e.preventDefault(); // Prevent the href from redirecting directly
        var linkURL = $(this).attr("href");
        warnBeforeRedirect(linkURL);
      });

      function warnBeforeRedirect(linkURL) {
        swal({
          title: "Leave this site?", 
          text: "If you click 'OK', you will be redirected to " + linkURL, 
          type: "warning",
          showCancelButton: true
        }, function() {
          // Redirect the user
          window.location.href = linkURL;
        });
      }
    </script>
    
    @push('scripts')
    <script type="text/javascript">
    @yield('js')
    </script>
    @endpush

    @stack('scripts')
    @if (config('analytics.enabled', false))
        @include('analytics')
    @endif
    
</body>
</html>