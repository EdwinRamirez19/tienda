@extends('layouts.app')

@section('content')
    <div class="container">
                <div class="row">
                <div class="card">
                    <div class="card-content">

                        <section class="content-header">
                            <h4 class="pull-left"><i class="material-icons dp48">assignment_ind</i> Categorias
                                
                                    <a class="btn-primary pull-right btn modal-trigger" data-method="post" id="crear_medicos" style="margin-top: 7px;margin-bottom: 5px" href="{{ route('categorias.create') }}">
                                        <i class="material-icons left">add</i>Nuevo
                                    </a>
                                
                                    
                            </h4>

                        </section>
                        @include('categorias.table')
                    </div>
                </div>
            
            </div>
        </div>

@endsection

