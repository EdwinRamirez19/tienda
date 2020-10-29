
$(document).ready(function (params) {
    $('#medicos_modal').modal({ dismissible: false });
})

let medicos =[]

var TableDatatablesManaged = function () {

    var initTable = function () {

        var table = $('#medicos-table');

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
        url: '/getMedicos',
        type: 'GET',
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        dataType: 'JSON',
    })


        .done(function (response) {
            if (response.medicos != 0) {
                // console.log(response.medicos[0])
                medicos = response.medicos
                UpdatePatient(response)
            }

        })
        .fail(function () {
            console.log("error");
        })
}


    jQuery(document).ready(function () {
        TableDatatablesManaged.init();
        
    });




function UpdatePatient(response) {
    if ($.fn.DataTable.isDataTable('#medicios-table')) {
        $('#medicios-table').dataTable().fnClearTable();
        $('#medicios-table').dataTable().fnDestroy();
        $('#medicios-table thead').empty()
    }
    else {
        $('#medicios-table thead').empty()
    }


    if (response.medicos != 0) {
        let my_columns = []
        $.each(response.medicos[0], function (key, value) {
            var my_item = {};
            let acciones ='';
            // my_item.class = "filter_C";
            my_item.data = key;
            if (key == 'sub_especialidad') {

                my_item.title = 'Ver';
                
                let editar = response.permisos.filter(d => d.slug == "medicos.edit");
                let ver = response.permisos.filter(d => d.slug == "medicos.show");
                if(ver){

                    my_item.render = function (data, type, row) {
                        return `<div align="center" class="row">
                                <a href="#medicos_modal" data-id="${row.id}" class='ver btn modal-trigger btn btn-info btn-outline btn-circle btn-lg m-r-5 center-icon-lg tooltip-info' data-toggle="tooltip" data-placement="top"
                                    data-original-title="View client">
                                    ver
                                </a>
                            </div>`
                    }
                }
                my_columns.push(my_item);

            }
             if (key == 'created_at') {

                my_item.title = 'Editar';
                 let editar = response.permisos.filter(d => d.slug == "medicos.edit");
                 if (editar) {

                     my_item.render = function (data, type, row) {
                         return `<div align="center" class="row">
                               <a href="#medicos_modal" data-method="post" data-id="${row.id}"class='editar btn modal-trigger btn btn-success btn-outline btn-circle btn-lg m-r-5 center-icon-lg tooltip-warning' data-toggle="tooltip" data-placement="top"
                                    data-original-title="View client">
                                    editar
                                </a>
                            </div>`
                     }
                 }
                my_columns.push(my_item);

            }

            if (key == 'updated_at') {

                my_item.title = 'Eliminar';
                let eliminar = response.permisos.filter(d => d.slug == "medicos.destroy");
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
             else if (key == 'nombres') {

                my_item.title = 'Nombres';

                my_item.render = function (data, type, row) {
                    return `<div>
                                ${row.nombres + " " + row.apellidos}</strong>
                            </div>`
                }
                my_columns.push(my_item);
            }


            else if (key == "identificacion") {
                my_item.title = "Identificación";

                my_item.render = function (data, type, row) {
                    return `  <div align='center'> 
                                ${row.identificacion}
                            </div>`
                }
                

                my_columns.push(my_item)

            }

            else if (key == 'correo') {

                my_item.title = 'Email';

                my_item.render = function (data, type, row) {
                    return `  <div>
                                ${row.correo} 
                            </div>`
                }
                my_columns.push(my_item);
            }

            else if (key == 'especialidad') {

                my_item.title = 'Especialidad';

                my_item.render = function (data, type, row) {
                    return `  <div align='center'>
                                ${row.especialidad}
                            </div>`
                }
                my_columns.push(my_item);
            }

        })

        $('#medicos-table').DataTable({
            responsive: true,
            "destroy": true,
            


            data: response.medicos,


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
    }
    $("select[name=medicos-table_length]").addClass('browser-default');
}
let method='',url='',firma=''


$("body").on('click','.ver',function () {
    $('input').prop('disabled',true)
    $(".guardar").hide()
    var id = $(this).attr('data-id');
    const medico = medicos.filter(d => d.id == id);
    if (medico.length != 0) {

        $("#nombres").val(medico[0].nombres)
        $("#apellidos").val(medico[0].apellidos)
        $("#identificacion").val(medico[0].identificacion)
        $("#correo").val(medico[0].correo)
        $("#especialidad").val(medico[0].especialidad)
        $("#registro_medico").val(medico[0].registro_medico)
        $("#sub_especialidad").val(medico[0].sub_especialidad)
        $("#dia_inicio").val(medico[0].dia_inicio)
        $("#dia_fin").val(medico[0].dia_fin)
        $("#firma_edit").val(medico[0].firma)
        $("#div_firma").d()
    }
})


$("#crear_medicos").on('click',function() {
    method = $("#crear_medicos").attr('data-method');
    console.log(method)
    url = 'api/medicos'
})


$("body").on('click','.editar',function () {
    
    var id = $(this).attr('data-id');
    method = $(this).attr('data-method')
    url = "api/medicosEdit/"+id
    console.log(id+" "+method+" "+url)
    const medico = medicos.filter(d=> d.id== id);
    if(medico.length !=0){

        $("#nombres").val(medico[0].nombres)
        $("#apellidos").val(medico[0].apellidos)
        $("#identificacion").val(medico[0].identificacion)
        $("#correo").val(medico[0].correo)
        $("#especialidad").val(medico[0].especialidad)
        $("#registro_medico").val(medico[0].registro_medico)
        $("#sub_especialidad").val(medico[0].sub_especialidad)
        $("#dia_inicio").val(medico[0].dia_inicio)
        $("#dia_fin").val(medico[0].dia_fin)
        $("#firma_edit").val(medico[0].firma)
    }
    
})


$("body").on('click','.eliminar',function (params) {
    var confirmacion = confirm('Estas seguro que deseas Eliminar este Informe?')

    if (confirmacion == true) {

        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        $.ajax({
            url: 'api/medicos/' + $(this).attr('data-id'),
            method: 'delete',
            success: function (params) {
                swal("Eliminado!", "Se ha eliminado el Medico", "success");
                $("input").val("")
                $("#medicos_modal").modal('close')
                load()


            },
            error: function (params) {
                console.log('error' + params)
                swal("Error!", "Ha ocurrido un error", "error");
            }
        })
    }
})


$(".guardar").on('click',function (params) {
    guardarMedicos(method,url)    
})



$(".cancelar").on('click',function (params) {
    $('input').prop('disabled', false)
    $(".guardar").show()
    $("input").val("")
    $("#medicos_modal").modal('close')
})

function guardarMedicos(method,url) {
    var formData;
    formData = new FormData();
    var firma = $("#firma")[0].files[0];
    if (firma != undefined){
        formData.append('firma', firma);
    }else{
        formData.append('firma',$("#firma_edit").val());
        console.log("estoy aqui ")
    }
    
    
    formData.append('nombres', $("#nombres").val());
    formData.append('apellidos', $("#apellidos").val());
    formData.append('identificacion', $("#identificacion").val());
    formData.append('correo', $("#correo").val());
    formData.append('especialidad', $("#especialidad").val());
    formData.append('registro_medico', $("#registro_medico").val());
    formData.append('sub_especialidad', $("#sub_especialidad").val());
    formData.append('dia_inicio', $("#dia_inicio").val());
    formData.append('dia_fin', $("#dia_fin").val());
    
    
    $.ajax({
        url:url,
        method:method,
        data:formData,
        processData:false,
        contentType:false,
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        success : function (params) {
            toastr.success("informacion guaradada con exito")
            method=''
            url =''
            $("#medicos_modal").modal('close')
            load()
        },
        error: function (jqXHR, estado, error){ 
            console.log(jqXHR.responseJSON)
            console.log(jqXHR)
            
            $("#error_nombres").text(jqXHR.responseJSON.errors.nombres).css({ 'color': 'red', 'aling': 'center' })
            $("#error_apellidos").text(jqXHR.responseJSON.errors.apellidos).css({ 'color': 'red', 'aling': 'center' })
            $("#error_identification").text(jqXHR.responseJSON.errors.identification).css({ 'color': 'red', 'aling': 'center' })
            $("#error_correo").text(jqXHR.responseJSON.errors.correo).css({ 'color': 'red', 'aling': 'center' })
            $("#error_especialidad").text(jqXHR.responseJSON.errors.especialidad).css({ 'color': 'red', 'aling': 'center' })
            $("#error_registro_medico").text(jqXHR.responseJSON.errors.registro_medico).css({ 'color': 'red', 'aling': 'center' })
            $("#error_sub_especialidad").text(jqXHR.responseJSON.errors.sub_especialidad).css({ 'color': 'red', 'aling': 'center' })
            $("#error_firma").text(jqXHR.responseJSON.errors.firma).css({ 'color': 'red', 'aling': 'center' })
            $("#error_dia_inicio").text(jqXHR.responseJSON.errors.dia_inicio).css({ 'color': 'red', 'aling': 'center' })
            $("#error_dia_fin").text(jqXHR.responseJSON.errors.dia_fin).css({ 'color': 'red', 'aling': 'center' })
        }
    })
}

