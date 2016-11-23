@extends('front.welcome')

@section('main')
    <div class="row">
        <div class="box">
            <div class="col-lg-12">
                @if(session()->has('error'))
                    @include('partials/error', ['type' => 'danger', 'message' => session('error')])
                @endif  
                <hr>    
                <h2 class="intro-text text-center">{{ trans('front/login.login') }}</h2>
                <hr>
                <p>{{ trans('front/login.text') }}</p>              
                
                {!! Form::open(['url' => 'auth/login', 'method' => 'post', 'role' => 'form']) !!}   
                
                <div class="row">

                    {!! Form::control('text', 6, 'log', $errors, trans('front/login.log')) !!}
                    {!! Form::control('password', 6, 'password', $errors, trans('front/login.password')) !!} 
                    <div class="col-lg-6">                 
                    {!! Form::check('memory', trans('front/login.remind')) !!}
                    </div>
                    <div class="col-lg-6">                 
                        {!! link_to('password/email', trans('front/login.forget')) !!}
                    </div>
                    {!! Form::submit(trans('front/form.send'), ['col-lg-12']) !!}
                    {!! Form::text('address', '', ['class' => 'hpet']) !!}       

                </div>
                
                {!! Form::close() !!}

            </div>
        </div>
    </div>
@stop

