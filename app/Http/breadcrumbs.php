<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this templates file, choose Tools | Templates
 * and open the templates in the editor.
 */
// Admin
Breadcrumbs::register('home', function($breadcrumbs) {
    $breadcrumbs->push('Home', '/admin', ['icon' => 'clip-home-3']);
});
//pegawai
Breadcrumbs::register('menupegawai', function($breadcrumbs) {
    $breadcrumbs->parent('home');
    $breadcrumbs->push('Pegawai', route('admin.pegawai.index'), ['icon' => '']);
});

Breadcrumbs::register('tambahpegawai', function($breadcrumbs) {
    $breadcrumbs->parent('menupegawai');
    $breadcrumbs->push('Tambah Pegawai', route('admin.pegawai.create'), ['icon' => '']);
});

Breadcrumbs::register('editpegawai', function($breadcrumbs) {
    $breadcrumbs->parent('menupegawai');
    $breadcrumbs->push('Edit Pegawai', route('admin.pegawai.edit'), ['icon' => '']);
});
//anggota
Breadcrumbs::register('menuanggota', function($breadcrumbs) {
    $breadcrumbs->parent('home');
    $breadcrumbs->push('Anggota', route('admin.anggota.index'), ['icon' => '']);
});

Breadcrumbs::register('tambahanggota', function($breadcrumbs) {
    $breadcrumbs->parent('menuanggota');
    $breadcrumbs->push('Tambah Anggota', route('admin.anggota.create'), ['icon' => '']);
});

Breadcrumbs::register('editanggota', function($breadcrumbs) {
    $breadcrumbs->parent('menuanggota');
    $breadcrumbs->push('Edit Anggota', route('admin.anggota.edit'), ['icon' => '']);
});
//akad
Breadcrumbs::register('menuakad', function($breadcrumbs) {
    $breadcrumbs->parent('home');
    $breadcrumbs->push('Akad', route('admin.akad.index'), ['icon' => '']);
});

Breadcrumbs::register('tambahakad', function($breadcrumbs) {
    $breadcrumbs->parent('menuakad');
    $breadcrumbs->push('Tambah Akad', route('admin.akad.create'), ['icon' => '']);
});

Breadcrumbs::register('editakad', function($breadcrumbs) {
    $breadcrumbs->parent('menuakad');
    $breadcrumbs->push('Edit Akad', route('admin.akad.edit'), ['icon' => '']);
});
// Transaksi
Breadcrumbs::register('menutransaksi', function($breadcrumbs) {
    $breadcrumbs->parent('home');
    $breadcrumbs->push('Transaksi', route('admin.transaksi.index'), ['icon' => '']);
});

Breadcrumbs::register('tambahtransaksi', function($breadcrumbs) {
    $breadcrumbs->parent('menutransaksi');
    $breadcrumbs->push('Tambah Transaksi', route('admin.transaksi.create'), ['icon' => '']);
});

Breadcrumbs::register('edittransaksi', function($breadcrumbs) {
    $breadcrumbs->parent('menutransaksi');
    $breadcrumbs->push('Edit Transaksi', route('admin.transaksi.edit'), ['icon' => '']);
});

// Ahli Waris
// 
Breadcrumbs::register('menuahliwaris', function($breadcrumbs) {
    $breadcrumbs->parent('home');
    $breadcrumbs->push('Ahli Waris', route('admin.ahliwaris.index'), ['icon' => '']);
});

Breadcrumbs::register('tambahahliwaris', function($breadcrumbs) {
    $breadcrumbs->parent('menuahliwaris');
    $breadcrumbs->push('Tambah Ahli Waris', route('admin.ahliwaris.create'), ['icon' => '']);
});

Breadcrumbs::register('editahliwaris', function($breadcrumbs) {
    $breadcrumbs->parent('menuahliwaris');
    $breadcrumbs->push('Edit Ahli Waris', route('admin.ahliwaris.edit'), ['icon' => '']);
});

// Worker

Breadcrumbs::register('homeworker', function($breadcrumbs) {
    $breadcrumbs->push('Home', '/worker', ['icon' => 'clip-home-3']);
});