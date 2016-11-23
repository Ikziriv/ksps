<?php

namespace App\Http\Requests;

use App\Http\Requests\Request;

class AkadRequest extends Request
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'nominal' => 'required',
            'tgl_transaksi' => 'required',
            'tgl_jatuh_tempo' => 'required',
            'jangka_waktu' => 'required',
            'perpanjang' => 'required'
        ];
    }

    // public function messages() {
    //     return [
    //         // 'nip.required' => 'NIP Diperlukan!',
    //         // 'nip.numeric' => 'NIP hanya boleh angka saja!',
    //         // 'nip.unique' => 'NIP sudah terpakai!',
    //         'id_anggota.required' => 'ID Anggota Diperlukan',
    //         'nominal.required' => 'Nominal Diperlukan',
    //         'tanggal_transaksi.required' => 'Tanggal Transaksi Diperlukan',
    //         'tanggal_jatuh_tempo.required' => 'Tempat Jatuh Tempo Diperlukan',
    //         'jangka_waktu.required' => 'Jangka Waktu Diperlukan',
    //         'perpanjang.required' => 'Perpanjang Diperlukan!'
    //     ];
    // }
}
