
$(document).ready(function (params) {
    $('#tipo_patrones_modal').modal({ dismissible: false });
})

let tipoPatrones = []

var TableDatatablesManaged = function () {

    var initTable = function () {

        var table = $('#tipoPatrones-table');

        load();



    }

    return {

        //main function to initiate the module
        init: function () {
            if (!jQuery().dataTable) {
                return;
            }
            initTable();
        }

    };

}();

function load() {
    $.ajax({
        url: '/getTipoPatrones',
        type: 'GET',
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        dataType: 'JSON',
    })


        .done(function (response) {
            if (response.tipoPatrones != 0) {
                // console.log(response.tipoPatrones[0])
                tipoPatrones = response.tipoPatrones
                UpdatePatient(response)
            }

        })
        .fail(function (e) {
            console.log("error"+e);
        })
}


jQuery(document).ready(function () {
    TableDatatablesManaged.init();

});




function UpdatePatient(response) {
    if ($.fn.DataTable.isDataTable('#tipoPatrones-table')) {
        $('#tipoPatrones-table').dataTable().fnClearTable();
        $('#tipoPatrones-table').dataTable().fnDestroy();
        $('#tipoPatrones-table thead').empty()
    }
    else {
        $('#tipoPatrones-table thead').empty()
    }


    if (response.tipoPatrones != 0) {
        let my_columns = []
        $.each(response.tipoPatrones[0], function (key, value) {
            var my_item = {};
            let acciones = '';
            // my_item.class = "filter_C";
            my_item.data = key;
            if (key == 'created_at') {

                my_item.title = 'Ver';

                let editar = response.permisos.filter(d => d.slug == "tipoPatrones.edit");
                let ver = response.permisos.filter(d => d.slug == "tipoPatrones.show");
                if (ver) {

                    my_item.render = function (data, type, row) {
                        return `<div align="center" class="row">
                                <a href="#tipo_patrones_modal" data-id="${row.id}" class='ver btn modal-trigger btn btn-info btn-outline btn-circle btn-lg m-r-5 center-icon-lg tooltip-info' data-toggle="tooltip" data-placement="top"
                                    data-original-title="View client">
                                    ver
                                </a>
                            </div>`
                    }
                }
                my_columns.push(my_item);

            }
            if (key == 'updated_at') {

                my_item.title = 'Editar';
                let editar = response.permisos.filter(d => d.slug == "tipoPatrones.edit");
                if (editar) {

                    my_item.render = function (data, type, row) {
                        return `<div align="center" class="row">
                               <a href="#tipo_patrones_modal" data-method="put" data-id="${row.id}"class='editar btn modal-trigger btn btn-success btn-outline btn-circle btn-lg m-r-5 center-icon-lg tooltip-warning' data-toggle="tooltip" data-placement="top"
                                    data-original-title="View client">
                                    editar
                                </a>
                            </div>`
                    }
                }
                my_columns.push(my_item);

            }

            if (key == 'deleted_at') {

                my_item.title = 'Eliminar';
                let eliminar = response.permisos.filter(d => d.slug == "tipoPatrones.destroy");
                if (eliminar) {

                    my_item.render = function (data, type, row) {
                        return `<div align="center" class="row">
                                <a href="#" data-method="delete" data-id="${row.id}"class="eliminar btn btn-danger btn-outline btn-circle btn-lg m-r-5 center-icon-lg tooltip-danger">
                                    Eliminar
                                </a>
                            </div>`

                    }
                }
                my_columns.push(my_item);

            }
            else if (key == 'nombre') {

                my_item.title = 'Nombre';

                my_item.render = function (data, type, row) {
                    return `<div>
                                ${row.nombre}</strong>
                            </div>`
                }
                my_columns.push(my_item);
            }


            else if (key == "descripcion") {
                my_item.title = "Descripcion";

                my_item.render = function (data, type, row) {
                    return `  <div align='center'> 
                                ${row.descripcion}
                            </div>`
                }


                my_columns.push(my_item)

            }

            
        })

        $('#tipoPatrones-table').DataTable({
            responsive: true,
            "destroy": true,



            data: response.tipoPatrones,


            "columns": my_columns,
            "order": [],
            "language": {
                "emptyTable": "No hay datos disponibles en la tabla.",
                "info": "Mostrado del _START_ al _END_ de _TOTAL_ ",
                "infoEmpty": "Mostrando 0 registros de un total de 0.",
                "infoFiltered": "(filtrados de un total de _MAX_ registros)",
                "infoPostFix": "Entradas",
                "lengthMenu": "Mostrar _MENU_ registros",
                'classMenu': "browser-default",
                "loadingRecords": "Cargando...",
                "processing": "Procesando...",
                "search": "BUSQUEDA:",
                "searchPlaceholder": "Ingrese informacion para filtrar",
                "zeroRecords": "No se han encontrado coincidencias.",
                "paginate": {
                    "first": "Primera",
                    "last": "Última",
                    "next": "Siguiente",
                    "previous": "Anterior"
                },
                "aria": {
                    "sortAscending": "Ordenación ascendente",
                    "sortDescending": "Ordenación descendente"
                },
            },
            // buttons: [
            //     { extend: 'print', className: 'btn dark btn-outline' },
            //     { extend: 'copy', className: 'btn red btn-outline' },
            //     { extend: 'pdf', className: 'btn green btn-outline' },
            //     { extend: 'excel', className: 'btn yellow btn-outline ' },
            //     { extend: 'csv', className: 'btn purple btn-outline ' },
            //     { extend: 'colvis', className: 'btn dark btn-outline', text: 'Columns' }
            // ],



            "columnDefs": [
                { "width": "110%", "targets": 0 }
            ],
            "lengthMenu": [[10, 20, 25, 50, -1], [10, 20, 25, 50, "Todos"]],
        });
        $("select[name=tipoPatrones-table_length]").addClass('browser-default');
    }
}
let method = '', url = '', firma = ''


$("body").on('click', '.ver', function () {
    $('input').prop('disabled', true)
    $(".guardar").hide()
    var id = $(this).attr('data-id');
    const tipoPatron = tipoPatrones.filter(d => d.id == id);
    if (tipoPatron.length != 0) {

        $("#nombre").val(tipoPatron[0].nombre)
        $("#descripcion").val(tipoPatron[0].descripcion)
        
    }
})


$("#crear").on('click', function () {
    method = $(this).attr('data-method');
    console.log(method)
    url = 'api/tipo_patrones'
})


$("body").on('click', '.editar', function () {

    var id = $(this).attr('data-id');
    method = $(this).attr('data-method')
    url = "api/tipo_patrones/" + id
    console.log(id + " " + method + " " + url)
    const tipoPatron = tipoPatrones.filter(d => d.id == id);
    console.log(tipoPatron)
    if (tipoPatron.length != 0) {

        $("#nombre").val(tipoPatron[0].nombre)
        $("#descripcion").val(tipoPatron[0].descripcion)
    }

})


$("body").on('click', '.eliminar', function (params) {
    var confirmacion = confirm('Estas seguro que deseas Eliminar este Informe?')

    if (confirmacion == true) {

        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        $.ajax({
            url: 'api/tipo_patrones/' + $(this).attr('data-id'),
            method: 'delete',
            success: function (params) {
                swal("Eliminado!", "Se ha eliminado el Tipo de Patron", "success");
                $("input").val("")
                load()


            },
            error: function (params) {
                console.log('error' + params)
                swal("Error!", "Ha ocurrido un error", "error");
            }
        })
    }
})


$(".guardar").on('click', function (params) {
    guardarTipoPatrones(method, url)
})



$(".cancelar").on('click', function (params) {
    $('input').prop('disabled', false)
    $(".guardar").show()
    $("input").val("")
    $("#tipo_patrones_modal").modal('close')
})

function guardarTipoPatrones(method, url) {
    
        $.ajax({
        url: url,
        method: method,
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        data: {
            nombre: $("#nombre").val(),
            descripcion: $("#descripcion").val()
        },
        success: function (params) {
            toastr.success("informacion guaradada con exito")
            console.log(params)
            method = ''
            url = ''
            $("#tipo_patrones_modal").modal('close')
            load()
        },
        error: function (jqXHR, estado, error) {
            console.log(jqXHR.responseJSON)
            console.log(jqXHR)

            $("#error_nombre").text(jqXHR.responseJSON.errors.nombre).css({ 'color': 'red', 'aling': 'center' })
            $("#error_descripcion").text(jqXHR.responseJSON.errors.descripcion).css({ 'color': 'red', 'aling': 'center' })
            
        }
    })
}

