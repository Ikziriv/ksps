var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.less('app.less');

 	mix.styles([
        '../bower/bootstrap/dist/css/bootstrap.min.css',
    	'../bower/font-awesome/css/font-awesome.min.css',
    	'../bower/bootwatch/flatly/bootstrap.css',
    	'../bower/bootstrap-datepicker/dist/css/bootstrap-datepicker3.standalone.min.css',
        '../bower/sweetalert/dist/sweetalert.css',
    	'../css/admin.css',
    	'../css/simple-sidebar.css',
        '../css/datatables.bootstrap.css',
    	'../css/pace-themes-minimal.css'
    ], 'public/css/vendor.css');

    mix.scripts([
        '../bower/jquery/dist/jquery.min.js',
        '../bower/datatables/media/js/jquery.dataTables.min.js',
        '../bower/datatables/media/js/dataTables.bootstrap.js',
        '../bower/ckeditor/ckeditor.js',
	    '../bower/bootstrap/dist/js/bootstrap.min.js',
	    '../bower/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js',
	    '../bower/handlebars/handlebars.js',
	    '../bower/jquery.maskMoney/dist/jquery.maskMoney.min.js',
	    '../bower/ckeditor/ckeditor.js',
        '../bower/sweetalert/dist/sweetalert.min.js',
	    '../bower/PACE/pace.js',
        '../js/app.js'
	], 'public/js/vendor.js');

	mix.copy('../bower/font-awesome/fonts', 'public/fonts');
    mix.copy('resources/assets/images', 'public/images');
});
