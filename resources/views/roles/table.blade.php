<table id="data-table-simple"  class="display" id="roles-table">
                        <thead>
                            <tr>
                                
                                <th>Nombre</th>
                                <th>Opciones</th>
                                <th ></th>
                                <th></th>
                                
                                
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($roles as $role)
                            <tr>
                                
                                <td>{{ $role->name }}</td>
                                
                                <td width="10px">
                                @can('roles.show')
                                    <a href="{{ route('roles.show', $role->id) }}" 
                                    class='btn btn-info btn-outline btn-circle btn-lg m-r-5 center-icon-lg tooltip-warning' data-toggle="tooltip" data-placement="top"
                                    data-original-title="Edit client">
                                        ver
                                    </a>
                                @endcan
                                </td>
                                
                                
                                <td width="10px">
                                    @can('roles.edit')
                                    <a href="{{ route('roles.edit', $role->id) }}" 
                                    class='btn btn-success btn-outline btn-circle btn-lg m-r-5 center-icon-lg tooltip-warning' data-toggle="tooltip" data-placement="top"
                                    data-original-title="Edit client">
                                        editar
                                    </a>
                                    @endcan
                                </td>
                                
                                
                                <td width="10px">
                                     @can('roles.destroy')
                                        {!! Form::button('Eliminar', ['type' => 'submit', 'class' => 'btn btn-danger btn-outline btn-circle btn-lg m-r-5 center-icon-lg tooltip-danger', 'onclick' => "return confirm('¿ Estas Seguro que deseas ELIMINAR este Registro ?')",
                                            'data-toggle' => 'tooltip', 'data-placement' => 'top', 'data-original-title' => 'Delete client']) !!}
                                        {!! Form::close() !!}
                                    @endcan
                                </td>
                                
                            </tr>
                            @endforeach
                        </tbody>
                    </table>