
$(document).ready(function () {
    
    $('#transcribir').modal({ dismissible: false });
    let informe_id = '',cont=0;
    let informesjson = []
    let tipoPatronesjson = []
    let patronesjson = []
    let fecha_Hoy = ""
    
    var TableDatatablesManaged = function () {

        var initTable = function () {
            load()
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

    
    jQuery(document).ready(function () {
        TableDatatablesManaged.init();
    });

    
    function load() {
        
        $.ajax({
            url: '/editInformes',
            method: 'get',
            success: function (response) {
        //        console.log(response)
                // localStorage.setItem('informe', JSON.stringify(response.informes))
                // localStorage.setItem('tipo_patrones', JSON.stringify(response.tipoPatrones))
                // localStorage.setItem('patrones', JSON.stringify(response.patrones))
                // localStorage.setItem('fechaHoy', JSON.stringify(response.fechaHoy))
                informesjson = response.informes
                // console.log(informesjson)
                tipoPatronesjson = response.tipoPatrones
                patronesjson = response.patrones
                fecha_Hoy = response.fechaHoy
                // swal({
                //     title: "Info",
                //     text: "Informacion Cargado con Exito !!",
                //     icon: "success",
                //     timer: 3000,
                //     buttons: false
                // });
                
                UpdateReport(response)
                $(".preloader").hide()
                // $("select[name=informes_length]").addClass('browser-default');
    
            },
            error: function (error) {
                console.log(error)
            }
        })
        
    }

    


        
    function UpdateReport(response) {
        
        console.log($.fn.DataTable.isDataTable('table'))
        if ($.fn.DataTable.isDataTable('#informes-tables')) {
            $('#informes-tables').dataTable().fnClearTable();
            $('#informes-tables').dataTable().fnDestroy();
            $('#informes-tables thead').empty()
            
        }
        else {
            $('#informes-tables thead').empty()
            
            console.log("entre aqui 2")
        }


        if (response.informes != 0) {
            let my_columns = []
            $.each(response.informes[0], function (key, value) {
                var my_item = {};
                let acciones = '';
                // my_item.class = "filter_C";
                my_item.data = key;
                if (key == 'id') {

                    my_item.title = 'Transcribir';
                    let editar = response.permisos.filter(d => d.slug == "informes.edit");

                    
                    my_item.render = function (data, type, row) {
                        if (editar) {
                            return `<div>
                                    <a class="editar  btn-info btn modal-trigger" data-value="${row.id}" href="#transcribir">Trasncribir</a>
                                </div>`
                        }
                    }
                    
                    my_columns.push(my_item);

                } 
                else if (key == 'estado') {

                    my_item.title = 'Estado';

                    my_item.render = function (data, type, row) {
                        return `<div>
                                ${row.estado}</strong>
                            </div>`
                    }
                    my_columns.push(my_item);
                }
                else if (key == 'nombres') {

                    my_item.title = 'Nombres';

                    my_item.render = function (data, type, row) {
                        return `<div>
                                ${row.nombres}</strong>
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

                else if (key == 'fecha') {

                    my_item.title = 'Fecha de Ingreso';

                    my_item.render = function (data, type, row) {
                        return `  <div>
                                ${row.fecha} 
                            </div>`
                    }
                    my_columns.push(my_item);
                }

                else if (key == 'created_at') {

                    my_item.title = 'Crecion del Informe';

                    my_item.render = function (data, type, row) {
                        return `  <div align='center'>
                                ${row.created_at}
                            </div>`
                    }
                    my_columns.push(my_item);
                }
                else if (key == 'tipo_estudio') {

                    my_item.title = 'Modalidad';

                    my_item.render = function (data, type, row) {
                        return `  <div align='center'>
                                ${row.tipo_estudio}
                            </div>`
                    }
                    my_columns.push(my_item);
                } 
                else if (key == 'estudio_solicitado') {

                    my_item.title = 'Estudio Solicitado';

                    my_item.render = function (data, type, row) {
                        return `  <div align='center'>
                                ${row.estudio_solicitado}
                            </div>`
                    }
                    my_columns.push(my_item);
                }
                else if (key == 'edad') {

                    my_item.title = 'Ver';

                    let ver = response.permisos.filter(d => d.slug == "medicos.show");
                    my_item.render = function (data, type, row) {
                     
                        if(ver){
    
                            return `<div align="center" class="row">
                                    <a href="/informes/${row.id}" class='btn btn-info btn-outline btn-circle btn-lg m-r-5 center-icon-lg tooltip-info' data-toggle="tooltip" data-placement="top"
                                        data-original-title="View client">
                                        ver
                                    </a>
                                </div>`
                        }
                    }
                    my_columns.push(my_item);
                }
                else if (key == 'sexo') {

                    my_item.title = 'Eliminar';
                    my_item.render = function (data, type, row) {
                     
                        let eliminar = response.permisos.filter(d => d.slug == "informes.destroy");
                        if (eliminar) {
    
                            return `<div align="center" class="row">
                                    <a href="#" class='eliminar btn btn-danger btn-outline btn-circle btn-lg m-r-5 center-icon-lg tooltip-danger' data-id="${row.id}" data-toggle="tooltip" data-placement="top"
                                        data-original-title="View client">
                                        Eliminar
                                    </a>
                                </div>`
                        }
                    }
                    my_columns.push(my_item);
                }
                else if (key == 'estudio_realizado') {

                    my_item.title = 'Descargar';
                    
                    my_item.render = function (data, type, row) {
                        return `<div align="center" class="row">
                                <a target="blank_new" href="/informederesultados/${row.id}" class='imprimir btn btn-primary btn-outline btn-circle btn-lg m-r-5 center-icon-lg tooltip-warning' data-toggle="tooltip" data-placement="top"
                                    data-original-title="Edit client">
                                    Imprimir  
                                </a>
                                
                            </div>`
                    }
                        
    
                    my_columns.push(my_item);
                }
                else if (key == 'descripcion') {

                    my_item.title = 'Devolver informe';

                    my_item.render = function (data, type, row) {
                        return `<div align="center" class="row">
                                    <a href="#" class="devolverInforme btn btn-danger" data-informe_id="${row.id}" data-estudio_id="${row.estudio_id}"> Devolver Informe</a>
                                </div>`
                    }


                    my_columns.push(my_item);
                }

            })

            var table = $('#informes-tables').DataTable({
                "destroy": true,

                "scrollY": 600,
                "scrollX": true,
                data: response.informes,
                "columns": my_columns,
                "order": [],
                "deferRender": true,
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

                initComplete: function () {
                    var cont = 0
                    $("table").append('<tfoot id="tfooter"></tfoot>');
                    $("table thead tr:eq(1)").clone().appendTo("tfoot");
                    $('tfoot tr:eq(1) th').each(function (index) {
                        // console.log(index)
                        var title = $(this).text();
                        if(title =="Fecha de Ingreso"){
                            $(this).html('<input type="text" id="columna' + cont + '" class="search Fecha" data-index="' + cont + '" placeholder="' + title + '" />');
                            cont++;
                        } else if (title == "Fecha de creacion del Informe"){
                            $(this).html('<input type="text" id="columna' + cont + '" class="search creacion" data-index="' + cont + '" placeholder="' + title + '" />');
                            cont++;
                            
                        }else{
                            $(this).html('<input type="text" id="columna' + cont + '" class="search ' + title + '" data-index="' + cont + '" placeholder="' + title + '" />');
                            cont++;
                        }
                    });

                    

                },
                "fnRowCallback": function (nRow, aData, iDisplayIndex, iDisplayIndexFull) {
                    
                    if (aData.estado == "pendiente para transcripcion") {
                        $('td', nRow).css({'background-color':'#e53935','color':'white'});
                        $('td .imprimir', nRow).hide();
                    }
                    else if (aData.estado == "entrega") {
                    $('td', nRow).css({'background-color':'#1EA80B','color':'white'});
                        $('td .devolverInforme', nRow).hide();
                    } 
                    else if (aData.estado == "pendiente para revision"){
                        $('td', nRow).css({ 'background-color': '#E5DD05', 'color': 'white' });
                        $('td .imprimir', nRow).hide();
                        $('td .devolverInforme', nRow).hide();
                    }
                    else if (aData.estado == "entregado") {
                        $('td', nRow).css({ 'background-color': '#00bfa5', 'color': 'white' });
                        $('td .devolverInforme', nRow).hide();
                    }
                    else if (aData.estado == "entregado por la web") {
                        $('td', nRow).css({ 'background-color': '#0277bd', 'color': 'white' });
                        $('td .devolverInforme', nRow).hide();
                    }
                    else if (aData.estado == "devolucion") {
                        $('td', nRow).css({ 'background-color': '#757575', 'color': 'white' });
                        $('td .devolverInforme', nRow).hide();
                        $('td .imprimir', nRow).hide();
                    }
                    // console.log(iDisplayIndex)
                    
                },

                "lengthMenu": [[10, 20, 25, 50, -1], [10, 20, 25, 50, "Todos"]],
            });


        }
        $("select[name=informes-tables_length]").addClass('browser-default');
        
       
        // $('tfoot tr:eq(0)').remove()
        // $('tfoot tr:eq(1)').remove()

        $('#tfooter .search').on('keyup', function () {
            var column = $(this).attr('data-index')
            // console.log($(this).attr('data-index'))
                table
                .columns(column)
                .search(this.value)
                .draw();
        });

        $("table thead").click()
        
    }

    // $("#filtroFecha").on('change', function (params) {
    //     console.log($(this).val())
    //     $("#columna4").val("")
    //     $("#columna4").val($("#filtroFecha").val())
    //     $("#columna4").keyup();

    // })

    $("#modalidad").change(function (params) {
        $(".Modalidad").val("")
        $(".Modalidad").val($("#modalidad").val())
        $(".Modalidad").keyup();
    })
    $("#estado_informe").change(function (params) {
        $(".Estado").val("")
        $(".Estado").val($("#estado_informe").val())
        $(".Estado").keyup();
    })





    $("body").on('click','.devolverInforme', function (params) {
        var confirmacion = confirm('Estas seguro que deseas Devolver este Informe?')
        var id = $(this).data('estudio_id');
        if(confirmacion===true){

            if ($(this).data('estudio_id') != "") {
                $.ajaxSetup({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    }
                });
    
                $.ajax({
                    url: '/actualizarEstudio/' + id,
                    method: 'post',
                    data: {
                        estado: null
                    },
                    success: function (response) {
    
                        swal("Eliminado!", "Se ha eliminado el Informe", "success");
    
                    },
                    error: function (error) {
                        console.log(error)
                        swal("Error!", "Ha ocurrido un error", "error");
                    }
                })
                $.ajax({
                    url: '/eliminarInforme/' + $(this).data('informe_id'),
                    method: 'delete',
                    success: function (response) {
                        $("table").empty()
    
                        load();
                    },
                    error: function (error) {
                        console.log(error)
                    }
                })
                
    
            } else {
                $(this).prop('disabled', false)
                toastr.info('Este informe no se puede devolver, contacta al Ingeniero a cargo');
            }
        }

    })



$('body').on('click','.eliminar' ,function () {

    var confirmacion = confirm('Estas seguro que deseas Eliminar este Informe?')

    if(confirmacion == true){

        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        $.ajax({
            url: '/informes/' + $(this).attr('data-id'),
            method: 'delete',
            success: function (params) {
                swal("Eliminado!", "Se ha eliminado el paciente", "success");
                $("table").empty()
                load()

                
            },
            error: function (params) {
                console.log('error' + params)
                swal("Error!", "Ha ocurrido un error", "error");
            }
        })    
    }
            
})
    

        


    
    $(".descripcion").ckeditor();


  
    $("body").on('click', '.editar', function () {
        
        $("table tbody tr").attr("id", $(this).attr('data-value'))
        cont++
        $("#tipo_patron").select2({
            //theme: "classic",
            allowClear: true,
            width: "80%",
            height: "10%"

        })
        $("#estudio_solicitado").select2({
            //theme: "classic",
            allowClear: true,
            width: "80%",
            height: "10%"
        })
            informe_id = $(this).attr('data-value');
            $(".descripcion").ckeditor();
            const informes = informesjson.filter(d => d.id == informe_id);
            // console.log(informes)
            

            $("#nombres").val(informes[0].nombres);
            $("#identificacion-paciente").val(informes[0].identificacion);
            $("#edad").val(informes[0].edad);
            $("#medico").val(informes[0].medico);
            $("#estudio_realizado").val(informes[0].estudio_realizado);
            $("#estado").val(informes[0].estado)
            $("#fecha").val(informes[0].fecha);
            $("#observaciones").val(informes[0].observaciones);
            $("#fecha_entregado").val(informes[0].fecha_entregado);
            // $('#tipo_patron').empty()

            if (informes[0].estudio_solicitado != null && informes[0].descripcion != null && informes[0].conclusion != null) {
                $('#estudio_solicitado').empty()
                $('#descripcion').val()
                $('#estudio_solicitado').append($('<option>', { value: informes[0].estudio_solicitado, text: informes[0].estudio_solicitado }));
                $("#descripcion").val(informes[0].descripcion);
                // console.log(informes[0].descripcion)
                $("#conclusion").val(informes[0].conclusion);
            } else {
                $('#descripcion').val()
                $("#descripcion").val(informes[0].descripcion);
                // console.log(informes[0].descripcion)
                $("#conclusion").val(informes[0].conclusion);
            }

            if (informes[0].audio != null) {
                $("#informeAudio").html(`<audio class="my_audio" controls preload = "auto"><source src="${informes[0].audio}"></audio>`)

            }
            // console.log(informes[0].fecha_entregado)
            $("#fecha_entregado").val(informes[0].fecha_entregado);
            if ($("#fecha_entregado").val()===""){
                $("#estado").on('change', function (params) {
                    if ($("#estado").val() === "entrega") {
                        $("#fecha_entregado").val(fecha_Hoy);
                        // console.log(fecha_Hoy)
                    } 

                })
            } else {
                $("#fecha_entregado").val(informes[0].fecha_entregado);
            }

            // console.log(tipoPatronesjson)
            if(cont===1){
                for (var i = 0; i < tipoPatronesjson.length; i++) {
    
                    $('#tipo_patron').append(`<option value="${tipoPatronesjson[i].id}">${tipoPatronesjson[i].nombre}</option>`);
                }
            }


            $("#tipo_patron").on('select2:select', function (params) {
                let tipo_patron = $(this).val()
                // console.log(tipo_patron)
                const patrones = patronesjson.filter(d => d.tipo_patron_id == tipo_patron);
                // console.log(patrones)
                $('#estudio_solicitado').empty()
                $('#estudio_solicitado').append(`<option value="">Seleccione un Patron</option>`);    
                for (let i = 0; i < patrones.length; i++) {
                    
                    $('#estudio_solicitado').append(`<option value="${patrones[i].nombre}">${patrones[i].nombre}</option>`);    
                }
                
            })

        

        $('#estudio_solicitado').on('change', function (params) {
                let patron = $(this).val();
                const patrones = patronesjson.filter(d => d.nombre == patron);
                $("#descripcion").val(patrones[0].descripcion);
                $("#conclusion").val(patrones[0].conclusion);
        })
                
   


        })

    
    $(".guardar").on('click', function (e) {
        $(".preloader").show()
        toastr.info('Estamos guardando tu informe, espere...')
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });

        $.ajax({
            url: '/updateInforme/' + informe_id,
            method: 'post',
            data: {
                nombres: $("#nombres").val(),
                identificacion: $("#identificacion-paciente").val(),
                edad: $("#edad").val(),
                sexo: $("#sexo").val(),
                estudio_realizado: $("#estudio_realizado").val(),
                estudio_solicitado: $("#estudio_solicitado").val(),
                descripcion: $("#descripcion").val(),
                conclusion: $("#conclusion").val(),
                medico: $("#medico").val(),
                estado: $("#estado").val(),
                fecha: $("#fecha").val(),
                fecha_entregado: $("#fecha_entregado").val(),
            },
            success: function (response) {

          
                // for (instance in CKEDITOR.instances) {
                //     CKEDITOR.instances[instance].updateElement();
                    
                // }
                    CKEDITOR.instances["descripcion"].setData('');

                    $("#nombres").val(""),
                    $("#identificacion-paciente").val(""),
                    $("#edad").val(""),
                    $("#estudio_realizado").val(""),
                    $("#estudio_solicitado").val(""),
                    $("#descripcion").val(),
                    $("#conclusion").empty(),
                    $("#fecha").val(""),
                    $("#fecha_entregado").val(""),
                    $("#medico").val(""),
                    $("#audio").val(""),
                    $("#firma").val(""),
                    $("#observaciones").val("")
                    $("." + informe_id).hide()
                    toastr.success('Informe Actualizado exitosamente.')
                    $('.modal').removeData();
                    $('.modal').modal('close');
                    $("table").empty()
                    
                    load();
              
                
                // setTimeout(() => {
                   

                // }, 1000);
            },
            error: function (error) {
                console.log(error)
                toastr.warning('Opss, intenta nuevamente algo va mal.')
            }

        })


        

    })

    $(".cancelar").on('click', function () {
            
            // for (instance in CKEDITOR.instances) {
            //     console.log(instance)
            //     CKEDITOR.instances[instance].updateElement();
            //     console.log(CKEDITOR.instances[instance].getData(''))
            //     CKEDITOR.instances[instance].setData('');
            //     console.log(CKEDITOR.instances[instance].getData(''))
                

            // }

            CKEDITOR.instances['descripcion'].setData('');
            $("#nombres").val(""),
            $("#identificacion-paciente").val(""),
            $("#edad").val(""),
            $("#estudio_realizado").val(""),
            $("#estudio_solicitado").val(""),
            $("#descripcion").val(""),
            $("#conclusion").empty(),
            $("#fecha").val(""),
            $("#fecha_entregado").val(""),
            $("#medico").val(""),
            $("audio").remove(),
            $("#firma").val(""),
            $("#observaciones").val("")
            $('.modal').removeData();
            $('.modal').modal('close');

        toastr.success('Operacion Cancelada');
    })



});

