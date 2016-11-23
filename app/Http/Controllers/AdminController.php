<?php namespace App\Http\Controllers;

use App\Repositories\AhliwarisRepository;
use App\Repositories\UserRepository;
use App\Repositories\AkadRepository;
use App\Repositories\AnggotaRepository;
use App\Repositories\TransaksiRepository;

class AdminController extends Controller {

    /**
     * The UserRepository instance.
     *
     * @var App\Repositories\UserRepository
     */
    protected $user_gestion;

    /**
     * Create a new AdminController instance.
     *
     * @param  App\Repositories\UserRepository $user_gestion
     * @return void
     */
    public function __construct(UserRepository $user_gestion)
    {
		$this->user_gestion = $user_gestion;
    }

	/**
	* Show the admin panel.
	*
	* @param  App\Repositories\ContactRepository $contact_gestion
	* @param  App\Repositories\BlogRepository $blog_gestion
	* @param  App\Repositories\CommentRepository $comment_gestion
	* @return Response
	*/
	public function admin( 
		AkadRepository $akad_gestion,
		AnggotaRepository $anggota_gestion,
		TransaksiRepository $transaksi_gestion)
	{	
		$nbrUsers = $this->user_gestion->getNumber();
		$nbrAnggota = $anggota_gestion->getNumber();
		$nbrAkad = $akad_gestion->getNumber();
		$nbrTransaksi = $transaksi_gestion->getNumber();

		return view('admin.index', compact('nbrUsers', 'nbrAnggota', 'nbrAkad', 'nbrTransaksi'));
	}

	/**
	 * Show the media panel.
	 *
     * @return Response
	 */
	public function worker(
		AkadRepository $akad_gestion,
		AnggotaRepository $anggota_gestion,
		TransaksiRepository $transaksi_gestion)
	{	
		$nbrUsers = $this->user_gestion->getNumber();
		$nbrAnggota = $anggota_gestion->getNumber();
		$nbrAkad = $akad_gestion->getNumber();
		$nbrTransaksi = $transaksi_gestion->getNumber();

		return view('admin.index', compact('nbrUsers', 'nbrAnggota', 'nbrAkad', 'nbrTransaksi'));
	}
}
