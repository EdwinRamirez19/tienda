<div class="table-responsive">
    <table class="table" id="categorias-table">
        <thead>
            <tr>
                <th>Nombre</th>
        <th>Descripcion</th>
                <th colspan="3">Action</th>
            </tr>
        </thead>
        <tbody>
        @foreach($categorias as $categoria)
            <tr>
                <td>{{ $categoria->nombre }}</td>
            <td>{{ $categoria->descripcion }}</td>
                <td>
                    {!! Form::open(['route' => ['categorias.destroy', $categoria->id], 'method' => 'delete']) !!}
                    <div class='btn-group'>
                        <a href="{{ route('categorias.edit', [$categoria->id]) }}" class='mb-6 btn-floating waves-effect waves-light blue darken-1'><i class="material-icons dp48">create</i></a>
                        {!! Form::button('<i class="material-icons dp48">delete</i>', ['type' => 'submit', 'class' => 'mb-6 btn-floating waves-effect waves-light red darken-1', 'onclick' => "return confirm('Are you sure?')"]) !!}
                    </div>
                    {!! Form::close() !!}
                </td>
            </tr>
        @endforeach
        </tbody>
    </table>
</div>
