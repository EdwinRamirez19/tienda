
@extends('layouts.app')

@section('title', 'Edit Usuarios')

@section('breadcrumb')
    <li class="breadcrumb-item "><a href="{{ route('users.index') }}">Medicos</a></li>
    <li class="breadcrumb-item"><a href="{{ route('users.show', $user->id) }}">{{ $user->id }}</a></li>
    <li class="breadcrumb-item active">Editar</li>
@endsection

@section('content')

    @include('adminlte-templates::common.errors')
   <div class="panel panel-info">
        <div class="panel-wrapper collapse in" aria-expanded="true">
            <div class="panel-body">
                    {!! Form::model($user, ['route'=>['users.update',$user->id], 'method'=>'PUT']) !!}
                    <div class="form-body">
                        <h3 class="box-title">Editar Usuarios </h3>
                        <hr>
                        <div class="row">

                            @include('users.form')

                        </div>
                    </div>
                {!! Form::close() !!}
            </div>
        </div>
    </div>

@endsection