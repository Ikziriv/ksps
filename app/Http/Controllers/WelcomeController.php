<?php namespace App\Http\Controllers;

use App\Jobs\ChangeLocaleCommand;

class WelcomeController extends Controller {

	/**
	 * Show the application welcome screen to the user.
	 *
	 * @return Response
	 */
	public function index()
	{
		return view('front.index');
	}

	public function language(
		ChangeLocaleCommand $changeLocaleCommand)
	{
		$this->dispatch($changeLocaleCommand);

		return redirect()->back();
	}

}
