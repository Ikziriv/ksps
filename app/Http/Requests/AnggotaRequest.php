<?php

namespace App\Http\Requests;

use App\Http\Requests\Request;

class AnggotaRequest extends Request {

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize() {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules() {
        return [
            // 'nip' => 'required|numeric|unique:tbl_kepegawaian,nip,'.Request::get('id_kepegawaian').',id_kepegawaian',
            'no_ktp' => 'required',
            'nama' => 'required',
            'jenkel' => 'required',
            'tempat_lahir' => 'required',
            'tanggal_lahir' => 'required',
            'alamat' => 'required',
            'kelurahan' => 'required',
            'kecamatan' => 'required',
            'kabupaten' => 'required',
            'kodepos' => 'required',
            'tlp' => 'required'
        ];
    }

    // public function messages() {
    //     return [
    //         // 'nip.required' => 'NIP Diperlukan!',
    //         // 'nip.numeric' => 'NIP hanya boleh angka saja!',
    //         // 'nip.unique' => 'NIP sudah terpakai!',
    //         'no_ktp.required' => 'No Ktp Anggota Diperlukan',
    //         'nama.required' => 'Nama Anggota Diperlukan',
    //         'jenkel.required' => 'Jenis Kelamin Diperlukan',
    //         'tempat_lahir.required' => 'Tempat Lahir Diperlukan',
    //         'tanggal_lahir.required' => 'Tanggal Lahir Diperlukan',
    //         'alamat.required' => 'Alamat Diperlukan!',
    //         'kelurahan.required' => 'Kelurahan Diperlukan',
    //         'kecamatan.required' => 'Kecamatan Diperlukan',
    //         'kabupaten.required' => 'Kabupaten diperlukan',
    //         'kodepos.required' => 'Kode Pos diperlukan',
    //         'tlp.required' => 'Telephone Diperlukan'
    //     ];
    // }

}
