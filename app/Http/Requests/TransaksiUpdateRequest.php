<?php

namespace App\Http\Requests;

class TransaksiUpdateRequest extends Request
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
