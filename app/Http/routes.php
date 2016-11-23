<?php
/*
|--------------------------------------------------------------------------
| Home Routes
|--------------------------------------------------------------------------
|
*/
Route::get('/', [
    'uses' => 'WelcomeController@index', 
    'as' => 'home'
]);
Route::get('language', 'WelcomeController@language');

/*
|--------------------------------------------------------------------------
| Admin Routes
|--------------------------------------------------------------------------
|
*/
// Admin
Route::get('admin', [
    'uses' => 'AdminController@admin', 
    'as' => 'admin', 
    'middleware' => 'admin'
]);

Route::get('worker', [
    'uses' => 'AdminController@worker',
    'as' => 'worker',
    'middleware' => 'worker'
]);

// User / Pegawai Controller
// 
// Route::get('user/userdata', 'UserController@getUserdata');
// 
Route::get('user/sort/{role}', 'UserController@indexSort');
Route::get('user/roles', 'UserController@getRoles');
Route::post('user/roles', 'UserController@postRoles');
Route::put('userseen/{user}', 'UserController@updateSeen');

Route::resource('user', 'UserController');

// Anggota Controller
Route::resource('anggota/{id}/delete', 'AnggotaController@destroy');
Route::resource('anggota/{id}/show', 'AnggotaController@show');
Route::get('anggota/{id}/edit', 'AnggotaController@edit');
Route::get('anggota/dataanggota', 'AnggotaController@dataAnggota');
Route::resource('anggota', 'AnggotaController');
// Route::get('anggota/dataanggota', 'AnggotaController@getanggota');
// Akad Controller
Route::get('akad/{id}/show', 'AkadController@show');
Route::get('akad/{id}/create', 'AkadController@create');
Route::get('akad/{id}/edit', 'AkadController@edit');
Route::get('akad/{id}/destroy', 'AkadController@destroy');
Route::get('akad/akadshowanggota', 'AkadController@dataAkadShowanggota');
Route::get('akad/akadanggota', 'AkadController@dataAkadanggota');
Route::get('akad/dataakad', 'AkadController@dataAkad');
Route::resource('akad', 'AkadController');
// Ahliwaris Controller
Route::resource('ahliwaris/{id}/show', 'AhliwarisController@show');
Route::resource('ahliwaris/{id}/create', 'AhliwarisController@create');
Route::get('ahliwaris/{id}/edit', 'AhliwarisController@edit');
Route::get('ahliwaris/ahliakad', 'AhliwarisController@dataAhliakad');
Route::get('ahliwaris/dataahli', 'AhliwarisController@dataAhliwaris');
Route::resource('ahliwaris', 'AhliwarisController');
// Transaksi Controller
Route::resource('transaksi/{id}/show', 'TransaksiController@show');
Route::resource('transaksi/{id}/create', 'TransaksiController@create');
Route::get('transaksi/transaksidetail', 'TransaksiController@dataTransaksidetail');
Route::get('transaksi/akadtransaksi', 'TransaksiController@dataTransaksiakad');
Route::get('transaksi/datatransaksi', 'TransaksiController@dataTransaksi');
Route::resource('transaksi', 'TransaksiController');
// Auth
Route::controllers([
    'auth' => 'Auth\AuthController',
    'password' => 'Auth\PasswordController',
]);


