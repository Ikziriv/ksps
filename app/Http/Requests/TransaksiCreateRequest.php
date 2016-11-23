<?php

namespace App\Http\Requests;

class TransaksiCreateRequest extends Request
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'nominal' => 'required',
            'tgl_transaksi' => 'required'
        ];
    }
}
