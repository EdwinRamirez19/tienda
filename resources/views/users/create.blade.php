
@extends('layouts.app')

@section('title', 'Crear Usuarios')


@section('content')

    @include('adminlte-templates::common.errors')
   <div >
        <div class="panel-wrapper collapse in" aria-expanded="true">
            <div class="panel-body">
                    {!! Form::model(['route'=>['users.store'], 'method'=>'POST']) !!}
                    <div class="form-body">
                        <h3 class="box-title">Crear Usuarios </h3>
                        <hr>
                        <div class="row">

                            @include('auth.register')

                        </div>
                    </div>
                {!! Form::close() !!}
            </div>
        </div>
    </div>

@endsection