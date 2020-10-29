

@extends('layouts.app')

@section('title', 'Crear Roles')
@section('content')

    @include('adminlte-templates::common.errors')
   <div class="panel panel-info">
        <div class="panel-wrapper collapse in" aria-expanded="true">
            <div class="panel-body">
                    {{ Form::open(['route' => 'roles.store','method' => 'POST']) }}

                    <div class="form-body">
                        <h3 class="box-title">Crear Roles </h3>
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