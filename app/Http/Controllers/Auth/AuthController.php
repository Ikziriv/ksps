<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;

use Illuminate\Contracts\Auth\Guard;
use App\Http\Requests\Auth\LoginRequest;
use App\Repositories\UserRepository;
use App\Services\MaxValueDelay;
use Illuminate\Foundation\Auth\AuthenticatesAndRegistersUsers;

class AuthController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Registration & Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users, as well as the
    | authentication of existing users. By default, this controller uses
    | a simple trait to add these behaviors. Why don't you explore it?
    |
    */

    use AuthenticatesAndRegistersUsers;

    /**
     * Create a new authentication controller instance.
     *
     * @return void
     */
    public function __construct(Guard $auth)
    {
        $this->auth = $auth;
        $this->middleware('guest', ['except' => 'getLogout']);
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    
    public function postLogin(LoginRequest $request, MaxValueDelay $maxValueDelay)
    {
        $logValue = $request->input('log');

        if($maxValueDelay->check($logValue))
        {
            return redirect('/auth/login')
            ->with('error', trans('front/login.maxattempt'));
        }

        $logAccess = filter_var($logValue, FILTER_VALIDATE_EMAIL) ? 'email' : 'username';
        
        $credentials = [$logAccess => $logValue, 'password' => $request->input('password')];

        if ($this->auth->attempt($credentials, $request->has('memory')))
        {
            return redirect('/');
        }

        $maxValueDelay->increment($logValue);

        return redirect('/auth/login')
        ->with('error', trans('front/login.credentials'))
        ->withInput($request->only('email'));
    }

    // public function postRegister(
    //     RegisterRequest $request,
    //     UserRepository $user_gestion)
    // {
    //     $user = $user_gestion->store($request->all());

    //     $this->auth->login($user);

    //     return redirect('/')->with('ok', trans('front/register.ok'));
    // }
}
