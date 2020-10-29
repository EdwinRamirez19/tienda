<table id="data-table-simple"  class="display" id="table-users">
    <thead>
        <tr>
            <th width="10px">id</th>
            <th>Nombre</th>
            <th >&nbsp;</th>    
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
    @foreach($users as $user)
        <tr>
            <td>{{$user->id}}</td>
            <td>{{$user->name}}</td>
            <td width="10px">
                @can('users.show')
                    {!! Form::open(['route' => ['users.destroy', $user->id], 'method' => 'delete']) !!}
                    <a href="{!! route('users.show', [$user->id]) !!}" class='btn btn-info btn-outline btn-circle btn-lg m-r-5 center-icon-lg tooltip-info' data-toggle="tooltip" data-placement="top"
                        data-original-title="View client">
                        ver 
                    </a>
                @endcan
            </td>
            <td width="10px">
                @can('users.edit')
                    <a href="{!! route('users.edit', [$user->id]) !!}" class='btn btn-success btn-outline btn-circle btn-lg m-r-5 center-icon-lg tooltip-warning' data-toggle="tooltip" data-placement="top"
                        data-original-title="Edit client">
                        Editar
                    </a>
                @endcan
            </td>
            <td width="10px">
                @can('users.destroy')
                    {!! Form::button('Eliminar', ['type' => 'submit', 'class' => 'btn btn-danger btn-outline btn-circle btn-lg m-r-5 center-icon-lg tooltip-danger', 'onclick' => "return confirm('¿ Estas Seguro que deseas ELIMINAR este Registro ?')",
                        'data-toggle' => 'tooltip', 'data-placement' => 'top', 'data-original-title' => 'Delete client']) !!}
                    {!! Form::close() !!}
                @endcan
            </td>
        </tr>
        @endforeach
        </tbody>
    </table>
