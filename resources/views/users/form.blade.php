
 <div class="row margin">
        <div class="input-field col s12">
          <i class="material-icons prefix pt-2">person_outline</i>
          {{Form::text('name',null,['class'=>'form-control'])}}
            @if ($errors->has('name'))
            <small class="help-block"> {{ $errors->first('name') }}</small>
                
            @endif
          <label for="username" class="center-align">Nombre de Usuario</label>
        </div>
      </div>
<div class="row margin">
        <div class="input-field col s12">
          <i class="material-icons prefix pt-2">mail</i>
          {{Form::text('email',null,['class'=>'form-control'])}}
            @if ($errors->has('email'))
            <small class="help-block"> {{ $errors->first('email') }}</small>
                
            @endif
          <label for="username" class="center-align">Correo Electronico</label>
        </div>
      </div>
      
       <div class="row margin">
        <div class="input-field col s12">
          <i class="material-icons prefix pt-2">lock_outline</i>
               {{Form::text('identificacion',null,['class'=>'form-control'])}}
                     @if ($errors->has('identificacion'))
                     <small class="help-block"> {{ $errors->first('identificacion') }}</small>
                    @endif
          <label for="password">Ingrese Su Identificacion</label>
        </div>
      </div>
      



<h5>Lista de roles </h5>
@foreach($roles as $role)
  <p>
  <label>
      {{ Form::checkbox('roles[]', $role->id, null, ['class' => 'filled-in', 'id' => $role->id]) }}
      
      <span for="{{$role->id}}">{{ $role->name }}</span>
  </label>
  
  </p>
@endforeach

<div class="form-group col-sm-6">
  {{ Form::submit('Guardar', ['class'=>'btn btn-sm btn-primary']) }}
  <a href="{{ route('users.index') }}"class="btn btn-sm btn-default">Cancelar </a>
</div>
      

  


                          
                              


                             

                           

                           

                                      
