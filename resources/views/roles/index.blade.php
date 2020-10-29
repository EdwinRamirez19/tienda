@extends('layouts.app')

@section('title', 'Roles')

@section('breadcrumb')
    <li class="active">Roles</li>
@endsection

@section('content')

    

    <div class="white-box">
        <h1 class="box-title">
            <span class="text-uppercase">Gestion de  Roles</span>
            @can('roles.create')
            <a class="btn btn-primary pull-right" style="margin-top: 7px;margin-bottom: 5px" href="{!! route('roles.create') !!}">+ Nuevo</a>
            @endcan
        </h1>
        <div class="responsive-table">
            @include('roles.table')
        </div>
        <div class="text-center">
            
        </div>
        <script>
    

    </script>
@endsection

