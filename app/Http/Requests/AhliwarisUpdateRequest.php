<?php

namespace App\Http\Requests;

class AhliwarisUpdateRequest extends Request
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'no_ktp' => 'required',
            'nama' => 'required',
            'alamat' => 'required',
            'tempat_lahir' => 'required',
            'tanggal_lahir' => 'required',
            'tlp' => 'required',
            'kelurahan' => 'required',
            'kecamatan' => 'required',
            'kabupaten' => 'required',
            'kodepos' => 'required',
            'status' => 'required',
            'jml_anak' => 'required',
            'hubungan' => 'required'
        ];
    }
}
