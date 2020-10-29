
$(document).ready(function (params) {
    $('#medico_tipo_patron_modal').modal({ dismissible: false });
})

let medicoTipoPatrones = [],medicos=[],tipo_patron =[]

var TableDatatablesManaged = function () {

    var initTable = function () {

        var table = $('#MedicoTipoPatrones-table');

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
        url: '/getMedicoTipoPatrones',
        type: 'GET',
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        dataType: 'JSON',
    })


        .done(function (response) {
            if (response.medicoTipoPatrones != 0) {
                // console.log(response.medicoTipoPatrones[0])
                medicoTipoPatrones = response.medicoTipoPatrones
                medicos = response.medicos
                tipo_patron = response.tipo_patron
                UpdatePatient(response)
            }

        })
        .fail(function (e) {
            console.log("error" + e);
        })
}


jQuery(document).ready(function () {
    TableDatatablesManaged.init();

});




function UpdatePatient(response) {
    if ($.fn.DataTable.isDataTable('#medicoTipoPatrones-table')) {
        $('#medicoTipoPatrones-table').dataTable().fnClearTable();
        $('#medicoTipoPatrones-table').dataTable().fnDestroy();
        $('#medicoTipoPatrones-table thead').empty()
    }
    else {
        $('#medicoTipoPatrones-table thead').empty()
    }


    if (response.medicoTipoPatrones != 0) {
        let my_columns = []
        $.each(response.medicoTipoPatrones[0], function (key, value) {
            var my_item = {};
            let acciones = '';
            // my_item.class = "filter_C";
            my_item.data = key;
            if (key == 'created_at') {

                my_item.title = 'Ver';

                let ver = response.permisos.filter(d => d.slug == "medicoTipoPatrons.show");
                if (ver) {

                    my_item.render = function (data, type, row) {
                        return `<div align="center" class="row">
                                <a href="#medico_tipo_patron_modal" data-id="${row.medico_tipo_patron_id}" class='ver btn modal-trigger btn btn-info btn-outline btn-circle btn-lg m-r-5 center-icon-lg tooltip-info' data-toggle="tooltip" data-placement="top"
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
                let editar = response.permisos.filter(d => d.slug == "medicoTipoPatrons.edit");
                if (editar) {

                    my_item.render = function (data, type, row) {
                        return `<div align="center" class="row">
                               <a href="#medico_tipo_patron_modal" data-method="put" data-id="${row.medico_tipo_patron_id}"class='editar btn modal-trigger btn btn-success btn-outline btn-circle btn-lg m-r-5 center-icon-lg tooltip-warning' data-toggle="tooltip" data-placement="top"
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
                let eliminar = response.permisos.filter(d => d.slug == "medicoTipoPatrons.destroy");
                if (eliminar) {

                    my_item.render = function (data, type, row) {
                        return `<div align="center" class="row">
                                <a href="#" data-method="delete" data-id="${row.medico_tipo_patron_id}"class="eliminar btn btn-danger btn-outline btn-circle btn-lg m-r-5 center-icon-lg tooltip-danger">
                                    Eliminar
                                </a>
                            </div>`

                    }
                }
                my_columns.push(my_item);

            }
            else if (key == 'nombre') {

                my_item.title = 'Medico';

                my_item.render = function (data, type, row) {
                    return `<div>
                                ${row.nombres+" "+ row.apellidos}</strong>
                            </div>`
                }
                my_columns.push(my_item);
            }


            else if (key == "nombres") {
                my_item.title = "Tipo Patron";

                my_item.render = function (data, type, row) {
                    return `  <div align='center'> 
                                ${row.nombre}
                            </div>`
                }


                my_columns.push(my_item)

            }


        })

        $('#medicoTipoPatrones-table').DataTable({
            responsive: true,
            "destroy": true,



            data: response.medicoTipoPatrones,


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
                { "width": "50%", "targets": 0 }
            ],

            "lengthMenu": [[10, 20, 25, 50, -1], [10, 20, 25, 50, "Todos"]],
        });
        $("select[name=medicoTipoPatrones-table_length]").addClass('browser-default');
    }
}
let method = '', url = '', firma = ''


$("body").on('click', '.ver', function () {
    
    var id = $(this).attr('data-id');
    const medicoTipoPatron = medicoTipoPatrones.filter(d => d.medico_tipo_patron_id == id);
    if (medicoTipoPatron.length != 0) {

        $("#medico_id").select2({
            //theme: "classic",
            allowClear: true,
            width: "80%",
            height: "10%"

        })
        console.log(medicos)
        medicos.forEach(element => {
            $('#medico_id').append(`<option value="${element.id}">${element.nombres + " " + element.apellidos}</option>`);
        })

        $("#tipo_patron_id").select2({
            //theme: "classic",
            allowClear: true,
            width: "80%",
            height: "10%"

        })
        tipo_patron.forEach(element => {
            $('#tipo_patron_id').append(`<option value="${element.id}">${element.nombre}</option>`);
        })

        $("#tipo_patron_id").val(medicoTipoPatron[0].tipo_patron_id)
        $("#medico_id").val(medicoTipoPatron[0].medico_id)

    }
    $('select').prop('disabled', true)
    $('.guardar').hide()
})


$("#crear").on('click', function () {
    method = $(this).attr('data-method');
    url = 'api/medico_tipo_patrons'

    $("#medico_id").select2({
        //theme: "classic",
        allowClear: true,
        width: "80%",
        height: "10%"

    })
    console.log(medicos)
    medicos.forEach(element=>{
        $('#medico_id').append(`<option value="${element.id}">${element.nombres +" "+ element.apellidos}</option>`);
    })

    $("#tipo_patron_id").select2({
        //theme: "classic",
        allowClear: true,
        width: "80%",
        height: "10%"

    })
    tipo_patron.forEach(element => {
        $('#tipo_patron_id').append(`<option value="${element.id}">${element.nombre}</option>`);
    })


})


$("body").on('click', '.editar', function () {

    var id = $(this).attr('data-id');
    method = $(this).attr('data-method')
    url = "api/medico_tipo_patrons/" + id
    console.log(id + " " + method + " " + url)
    const medicoTipoPatron = medicoTipoPatrones.filter(d => d.medico_tipo_patron_id == id);
    console.log(medicoTipoPatron)
    if (medicoTipoPatron.length != 0) {

        $("#medico_id").select2({
            //theme: "classic",
            allowClear: true,
            width: "80%",
            height: "10%"

        })
        console.log(medicos)
        medicos.forEach(element => {
            $('#medico_id').append(`<option value="${element.id}">${element.nombres + " " + element.apellidos}</option>`);
        })

        $("#tipo_patron_id").select2({
            //theme: "classic",
            allowClear: true,
            width: "80%",
            height: "10%"

        })
        tipo_patron.forEach(element => {
            $('#tipo_patron_id').append(`<option value="${element.id}">${element.nombre}</option>`);
        })
        
        $("#tipo_patron_id").val(medicoTipoPatron[0].tipo_patron_id)
        $("#medico_id").val(medicoTipoPatron[0].medico_id)
    }

})


$("body").on('click', '.eliminar', function (params) {
    var confirmacion = confirm('Estas seguro que deseas ELIMINAR Este Registro?')

    if (confirmacion == true) {

        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        $.ajax({
            url: 'api/medico_tipo_patrons/' + $(this).attr('data-id'),
            method: 'delete',
            success: function (params) {
                swal("Eliminado!", "Se ha eliminado el Tipo de Patron", "success");
                // $("table").empty()
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
    guardarMedicos(method, url)
})



$(".cancelar").on('click', function (params) {
    $('select').prop('disabled', false)
    $('.guardar').show()
    $('select').val("")
    $("#medico_tipo_patron_modal").modal('close')
})

function guardarMedicos(method, url) {

    $.ajax({
        url: url,
        method: method,
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        data: {
            tipo_patron_id: $("#tipo_patron_id").val(),
            medico_id: $("#medico_id").val()
        },
        success: function (params) {
            toastr.success("informacion guaradada con exito")
            console.log(params)
            method = ''
            url = ''
            $('select').val("")
            $("#medico_tipo_patron_modal").modal('close')
            load()
        },
        error: function (jqXHR, estado, error) {
            console.log(jqXHR.responseJSON)
            console.log(jqXHR)

            $("#error_medico_id").text(jqXHR.responseJSON.errors.medico_id).css({ 'color': 'red', 'aling': 'center' })
            $("#error_tipo_patron_id").text(jqXHR.responseJSON.errors.tipo_patron_id).css({ 'color': 'red', 'aling': 'center' })

        }
    })
}

