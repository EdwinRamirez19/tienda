
<li>
    <a href="·" class="waves-effect {{ Request::is('home*') ? 'active' : '' }}">
       
    <div class="icon-preview col s6 m3"><i class="material-icons dp48">home</i><span></span>
    <span class="hide-menu">Inicio</span>
    </div>
    </a>
</li>


<!-- @can('users.index')
<li>
    <a href="{!! route('users.index') !!}" class="waves-effect {{ Request::is('users*') ? 'active' : '' }}">
        
         <div class="icon-preview col s6 m3"><i class="material-icons dp48">person</i><span></span>
        <i class="mdi mdi-pencil fa-fw"></i><span class="hide-menu">Usuarios</span>
    </div>
    </a>
</li>
@endcan
@can('roles.index')
<li>
    <a href="{!! route('roles.index') !!}" class="waves-effect {{ Request::is('roles*') ? 'active' : '' }}">
        
         <div class="icon-preview col s6 m3"><i class="material-icons dp48">supervisor_account</i><span></span>
        <i class="mdi mdi-pencil fa-fw"></i><span class="hide-menu">Roles</span>
    </div>
    </a>
</li>
@endcan -->
<li>
    <a href="{!! route('categorias.index') !!}" class="waves-effect {{ Request::is('categorias*') ? 'active' : '' }}">
        
         <div class="icon-preview col s6 m3"><i class="material-icons dp48">supervisor_account</i><span></span>
        <i class="mdi mdi-pencil fa-fw"></i><span class="hide-menu">Categorias</span>
    </div>
    </a>
</li>

