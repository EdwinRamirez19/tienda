@extends('layouts.login')
@section('content')

    
    <form class="login-form" action="{{ route('login') }}" method="POST">
      
        {{ csrf_field() }}
        
      <div class="row">
        <div class="input-field col s12">
          <img class="imagenLogin"src="/img/gotelemedicina.jpeg" alt="IMG">
          <h5 class="ml-4 center">Inicio de Sesion</h5>
        </div>
      </div>
      <div class="row margin">
        <div class="input-field col s12">
          <i class="material-icons prefix pt-2">person_outline</i>
          <input id="email" type="email"  name="email" value="{{ old('email') }}" required autofocus>
            @if ($errors->has('email'))
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $errors->first('email') }}</strong>
                </span>
            @endif
          <label for="username" class="center-align">Usuario</label>
        </div>
      </div>
      <div class="row margin">
        <div class="input-field col s12">
          <i class="material-icons prefix pt-2">lock_outline</i>
               <input id="password" type="password"   name="password" required>
                     @if ($errors->has('password'))
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $errors->first('password') }}</strong>
                        </span>
                    @endif
          <label for="password">Contraseña</label>
        </div>
      </div>
           
      <div class="row">
        <div class="input-field col s12">
           <button type="submit" class="btn waves-effect waves-light border-round gradient-45deg-amber-amber col s12">
                            {{ __('Login') }}
            </button>
        </div>
      </div>
      
    </form>
@endsection

