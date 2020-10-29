
<div class="form-group col-sm-6">
	{{ Form::label('name', 'Nombre de la etiqueta') }}
	{{ Form::text('name', null, ['class' => 'form-control', 'id' => 'name']) }}
</div>

<div class="form-group col-sm-6">
	{{ Form::label('slug', 'URL Amigable') }}
	{{ Form::text('slug', null, ['class' => 'form-control', 'id' => 'slug']) }}
</div>

<div class="form-group col-sm-6">
    {{ Form::label('description', 'Descripción') }}
    {{ Form::textarea('description', null, ['class' => 'form-control']) }}
</div>
		
<h3>Lista de permisos</h3>
	@foreach($permissions as $permission)
		<p>
		<label>
				{{ Form::checkbox('permissions[]', $permission->id, null, ['id' => $permission->id]) }}
				<span for="{{$permission->id}}">{{ $permission->name }}</span>
				<em>({{$permission->description ?: 'sin descripcion'}})</em>
		</label>
 		
		</p>
	@endforeach

<div class="form-group col-sm-6">
	<div class="form-group col-sm-6 ">
		{{ Form::submit('Guardar', ['class' => 'btn btn-sm btn-primary']) }}
    </div>
	<div class="form-group col-sm-6 col-sm-6">
		<a href="{{ route('roles.index') }}"class="btn btn-sm btn-default">Cancelar </a>
    </div>
</div>