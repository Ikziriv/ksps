<?php

namespace App\Http\Requests;

class AkadUpdateRequest extends Request
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'status' => 'required',
            'nominal' => 'required',
            'tgl_transaksi' => 'required',
            'tgl_jatuh_tempo' => 'required',
            'jangka_waktu' => 'required',
            'perpanjang' => 'required'
        ];
    }
}
