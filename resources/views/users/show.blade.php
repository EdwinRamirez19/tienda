
@extends('layouts.app')

@section('title', 'Ver Usuario')

@section('breadcrumb')
    <li class="breadcrumb-item "><a href="{{ route('users.index') }}">Usuarios</a></li>
    <li class="breadcrumb-item active">{{ $user->id }}</li>
@endsection

@section('content')

    <div class="panel panel-info">
        <div class="panel-wrapper collapse in" aria-expanded="true">
            <div class="panel-body">
                <div class="form-horizontal" role="form">
                    <div class="form-body">
                        <h3 class="box-title">
                            Datos del Usuario
                            <span class="btn-group pull-right">
                                <a href="{!! route('users.edit', [$user->id]) !!}"
                                    class="fcbtn btn btn-sm btn-outline btn-info btn-1c">
                                    <i class="ti-pencil-alt"></i> Editar</a>
                                <a href="{!! route('users.index') !!}" class="fcbtn btn btn-sm btn-outline btn-danger btn-1c"><i class="ti-back-left"></i> Regresar</a></a>
                            </span>

                        </h3>
                        <hr class="m-t-0 m-b-40">
                        <div class="row">

                    <div class="body table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Email</th>   
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{{$user->name}}</td>
                                    <td>{{$user->email}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                            

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection
