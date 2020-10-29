@extends('layouts.login')
@section('content')
    <form class="login-form" action="{{ route('users.store') }}" method="POST">
        {{ csrf_field() }}
      <div class="row">
        <div class="input-field col s12">
          <h5 class="ml-4">Crear Usuario</h5>
        </div>
      </div>
       <div class="row margin">
        <div class="input-field col s12">
          <i class="material-icons prefix pt-2">person_outline</i>
          <input id="email" type="text"  name="name" value="{{ old('name') }}" required autofocus>
            @if ($errors->has('name'))
            <small class="help-block"> {{ $errors->first('name') }}</small>
                
            @endif
          <label for="username" class="center-align">Nombre de Usuario</label>
        </div>
      </div>
      <div class="row margin">
        <div class="input-field col s12">
          <i class="material-icons prefix pt-2">mail</i>
          <input id="email" type="email"  name="email" value="{{ old('email') }}" required autofocus>
            @if ($errors->has('email'))
            <small class="help-block"> {{ $errors->first('email') }}</small>
                
            @endif
          <label for="username" class="center-align">Correo Electronico</label>
        </div>
      </div>
      
       <div class="row margin">
        <div class="input-field col s12">
          <i class="material-icons prefix pt-2">lock_outline</i>
               <input id="identificacion" type="text"   name="identificacion" required>
                     @if ($errors->has('identificacion'))
                     <small class="help-block"> {{ $errors->first('identificacion') }}</small>
                    @endif
          <label for="password">Ingrese Su Identificacion</label>
        </div>
      </div>
        <input id="password" type="hidden"   name="password" required>
        <input id="password_confirmation" type="hidden"   name="password_confirmation" required>
       
      <div class="row">
        <div class="input-field col s12">
           <button type="submit" class="btn waves-effect waves-light border-round gradient-45deg-amber-amber col s12">
            Crear un Nuevo Usuario 
            </button>
        </div>
      </div>
      
    </form>

    <script>


    $('#identificacion').on('keyup',function (params) {
        console.log($('#identificacion').val())
        $("#password").val($('#identificacion').val())
        $("#password_confirmation").val($('#identificacion').val())
        console.log($('#password').val())
        console.log($('#password_confirmation').val())
    })

    </script>
@endsection

