@extends('front.welcome')

@section('main')
	<div class="row">
		<div class="box">
			<div class="col-lg-12">
				<hr>
				<h2 class="intro-text text-center"><strong>{{ trans('front/home.title') }}</strong></h2>
				<hr>
				<p>{{ trans('front/home.content') }}</p>
				<p>{{ trans('front/home.body') }}</p>
		</div>
	</div>

@stop


