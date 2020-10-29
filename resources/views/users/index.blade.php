@extends('layouts.app')

@section('title', 'Usuarios')

@section('breadcrumb')
    <li class="active">Usuarios</li>
@endsection

@section('content')

    

    <div class="white-box">
        <h1 class="box-title">
            <span class="text-uppercase">Gestion de  Usuarios</span>
            
            <a class="btn btn-primary pull-right" style="margin-top: 7px;margin-bottom: 5px" href="{{route('users.create') }}">+ Nuevo</a>
            
        </h1>
        <div class="table-responsive">
            @include('users.table')
        </div>
        <div class="text-center">
            
        </div>
    </div>
@endsection

