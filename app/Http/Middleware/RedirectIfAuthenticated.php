<?php namespace App\Http\Middleware;

use Closure;
use Illuminate\Contracts\Auth\Guard;
use Illuminate\Http\RedirectResponse;

class RedirectIfAuthenticated {

	/**
	 * The Guard implementation.
	 *
	 * @var Guard
	 */
	protected $auth;

	/**
	 * Create a new filter instance.
	 *
	 * @param  Guard  $auth
	 * @return void
	 */
	public function __construct(Guard $auth)
	{
		$this->auth = $auth;
	}

	/**
	 * Handle an incoming request.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  \Closure  $next
	 * @return mixed
	 */
	public function handle($request, Closure $next)
	{
		
		if ($this->auth->check())
		{
			return new RedirectResponse(url('/'));
		}

		return $next($request);
  //       if ($this->auth->check()) {
  //           if ($this->auth->user()->status == 'admin') {
  //               return new RedirectResponse(url('/admin'));
  //           } else if ($this->auth->user()->status == 'worker') {
  //               return new RedirectResponse(url('/worker'));
  //           }
  //       }

		// return $next($request);
	}

}
