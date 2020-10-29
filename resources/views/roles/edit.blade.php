
@extends('layouts.app')

@section('title', 'Editar Roles')

@section('breadcrumb')
    <li class="breadcrumb-item "><a href="{{ route('roles.index') }}">Roles</a></li>
    <li class="breadcrumb-item"><a href="{{ route('roles.show', $role->id) }}">{{ $role->id }}</a></li>
    <li class="breadcrumb-item active">Editar</li>
@endsection

@section('content')

    @include('adminlte-templates::common.errors')
   <div class="panel panel-info">
        <div class="panel-wrapper collapse in" aria-expanded="true">
            <div class="panel-body">
                    {!! Form::model($role, ['route' => ['roles.update', $role->id],'method' => 'PUT']) !!}

                    <div class="form-body">
                        <h3 class="box-title"> Editar Roles </h3>
                        <hr>
                        <div class="row">

                            @include('roles.partials.form')

                        </div>
                    </div>
                {!! Form::close() !!}
            </div>
        </div>
    </div>

@endsection