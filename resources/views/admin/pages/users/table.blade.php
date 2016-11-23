	@foreach ($users as $user)
		<tr {!! !$user->seen? 'class="warning"' : '' !!}>
			<td class="text-primary"><strong>{{ $user->nama }}</strong></td>
			<td class="text-primary">{{ $user->jk }}</td>
			<td class="text-primary">{{ $user->alamat }}</td>
			<td class="text-primary">{{ $user->tlp }}</td>
			<td class="text-primary">{{ $user->role->title }}</td>
			<td class="text-primary">{!! Form::checkbox('seen', $user->id, $user->seen) !!}</td>
			<td>{!! link_to_route('user.show', trans('back/users.see'), [$user->id], ['class' => 'btn btn-success btn-block btn']) !!}</td>
			<td>{!! link_to_route('user.edit', trans('back/users.edit'), [$user->id], ['class' => 'btn btn-warning btn-block']) !!}</td>
			<td class="delete-user">
				{!! Form::open(['method' => 'DELETE', 'route' => ['user.destroy', $user->id], 'class'=>'js-submit-confirm']) !!}
				{!! Form::submit(trans('back/users.destroy')) !!}
				{!! Form::close() !!}
			</td>
		</tr>
	@endforeach