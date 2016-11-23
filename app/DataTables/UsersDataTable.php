<?php

namespace App\DataTables;

use App\Models\User;
use Yajra\Datatables\Services\DataTable;
use App\Http\Requests;

class UsersDataTable extends DataTable
{
    // protected $printPreview = 'path-to-print-preview-view';
    // protected $exportColumns = ['id', 'name'];

    /**
     * Display ajax response.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function ajax()
    {
        return $this->datatables
            ->eloquent($this->query())
            ->make(true);
    }

    /**
     * Get the query object to be processed by datatables.
     *
     * @return \Illuminate\Database\Query\Builder|\Illuminate\Database\Eloquent\Builder
     */
    public function query()
    {
        $users = User::select();

        return $this->applyScopes($users);
    }

    /**
     * Optional method if you want to use html builder.
     *
     * @return \yajra\Datatables\Html\Builder
     */
    public function html()
    {
        return $this->builder()
            ->columns([
                'id',
                'nama',
                'jk',
                'alamat',
                'tempat_lahir',
                'tanggal_lahir',
                'tlp',
                'status',
                'username',
                'email',
            ])
            ->parameters([
                'dom' => 'Bfrtip',
                'buttons' => ['csv', 'excel', 'pdf', 'print', 'reset', 'reload'],
            ]);
    }
}
