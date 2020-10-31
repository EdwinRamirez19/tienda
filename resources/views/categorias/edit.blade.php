@extends('layouts.app')

@section('content')
   <div class="container">
                <div class="row">
                <div class="card">
                    <div class="card-content">

                        <section class="content-header">
                            <h4 class="pull-left"><i class="material-icons dp48">assignment_ind</i> Categorias
                            </h4>

                        </section>
                        {!! Form::model($categoria, ['route' => ['categorias.update', $categoria->id], 'method' => 'patch']) !!}

                        @include('categorias.fields')

                        {!! Form::close() !!}
                    </div>
                </div>
            
            </div>
        </div>
@endsection