
$(document).ready(function () {
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal({ dismissible: false});
    

    let paciente_id=''
    let study_id =''
    let actualizar_estudio = null;
    let enviar_informe = null;

    let pacientesjson = "";
    let tipoPatronesjson = "";
    let patronesjson = "";
    let medicoActual = "";
    let firmaMedicoActual = "";
    let regularidad = ''
    let audio ='',descripcion=''
    
    

    
    $.ajax({
        url: '/redactarInformesModal',
        method: 'get',
        success: function (response) {
            //console.log(response)
            // localStorage.setItem('pacientesjs', JSON.stringify())
            // localStorage.setItem('tipo_patrones', JSON.stringify())
            // localStorage.setItem('patrones', JSON.stringify(response.patrones))
            // localStorage.setItem('medicoActual', JSON.stringify(response.medicoActual))
            // localStorage.setItem('firmaMedicoActual', JSON.stringify(response.firmaMedicoActual))

            pacientesjson = response.pacientes
            tipoPatronesjson = response.tiposPatrones
            patronesjson = response.patrones
            medicoActual = response.medicoActual
            firmaMedicoActual = response.medicoActual
             UpdatePatient(response)
            // $("select[name=scroll-vert-hor_length]").addClass('browser-default');
            

            
        },
        error: function (params) {
            console.log(params);
        }
    })

    function calcularFechaEntrega(fecha, dias_oportunos) {
        var fecha_formateada = new Date(fecha)
        let semanaEnMilisegundos = 1000 * 60 * 60 * 24 * dias_oportunos;
        let suma = fecha_formateada.getTime() + semanaEnMilisegundos; //getTime devuelve milisegundos de esa fecha
        let fecha_entrega = new Date(suma)
        let dia_entrega = '', mes_entrega = '';

        if (fecha_entrega.getDate() > 0 && fecha_entrega.getDate() <= 9) {
            dia_entrega = '0' + fecha_entrega.getDate();
        } else {
            dia_entrega = fecha_entrega.getDate();
        }

        if (fecha_entrega.getMonth() >= 0 && fecha_entrega.getMonth() < 9) {
            mes_entrega = '0' + parseInt(fecha_entrega.getMonth() + 1);
        } else {
            mes_entrega = parseInt(fecha_entrega.getMonth() + 1);
        }
        var fecha_entrega_oportuna = '';
        fecha_entrega_oportuna = fecha_entrega.getFullYear() + '-' + mes_entrega + '-' + dia_entrega

        return fecha_entrega_oportuna;

    }

    //REVISAR POR QUE CUANDO SE DICTA LA VOZ NO SE TRANSCRIBE EN CKEDITOR
    $(".descripcion").ckeditor();

    $("body").on('click', '.redactar', function () {
        $("table tbody tr").attr("id",$(this).attr('data-study_id'))
        regularidad =''
        
        $("#lectura_audio").empty()
        $("#lectura_audio").remove()
        //$("#conclusion_div").hide();
        //$("#descripcion_div").hide()
        $("#descripcion").val("")
        $("#conclusion").val("")
        $("#observaciones_div").hide();
        $("#guardar").prop("disabled", false);
        $("#cancelar").prop("disabled", false);

        paciente_id = $(this).attr('data-value');
        study_id = $(this).attr('data-study_id');
        
        const pacientes = pacientesjson.filter(d => d.study_id == study_id);
        console.table(pacientes)
        $("#nombres").val(pacientes[0].pat_name)
        $("#nombre_paciente").text(pacientes[0].pat_name)
        $("#identificacion").val(pacientes[0].pat_id)
        $("#identificacion_paciente").text(pacientes[0].pat_id)
        $("#estudio_realizado").val(pacientes[0].accession_no)
        $("#estudio-realizado_paciente").text(pacientes[0].accession_no)
        $("#estudio_id").val(pacientes[0].study_id)
        $("#tipo_estudio").val(pacientes[0].modality)
        $("#sexo").val(pacientes[0].pat_sex)
        //console.log(pacientes[0].pat_sex)

        var añoActual = new Date();
        var añoNacimiento =''
        var mesNacimiento = ''
        var edad = ''
        var cadena =""

        if (pacientes[0].pat_birthdate != null)
        {
            
            cadena = pacientes[0].pat_birthdate;

            var ncaracteres = 8;
            
            for (let i = 0; i < ncaracteres - 4; i++) {
                añoNacimiento += cadena[i]
            }
            
            if(añoNacimiento != añoActual.getFullYear())
            {
                edad = parseInt(añoActual.getFullYear() - añoNacimiento) + ' Años';
            }else{
                for (let i = 4; i < ncaracteres - 2; i++) {
                    mesNacimiento += cadena[i]
                }
                edad = parseInt((añoActual.getMonth()+1) - mesNacimiento) + ' meses';
                
                
            }


            
        }else{
            edad = "no definida"   
        }
        
        

        if(edad ===""){
            $("#edad").val("no definida")
            $("#edad_paciente").text('no definida')
        }else{
            $("#edad").val(edad)
            $("#edad_paciente").text(edad)
        }
        
        
        var fecha = new Date(pacientes[0].study_datetime)
        var dia ='',mes ='';
        if(fecha.getDate()>0 && fecha.getDate() <=9){
            
            dia = '0'+ fecha.getDate();
        }else{
            dia = fecha.getDate();
        }

        if (fecha.getMonth() >= 0 && fecha.getMonth() < 9) {
            
            mes = '0' + parseInt(fecha.getMonth() + 1) ;    
        }else{
            
            mes = parseInt(fecha.getMonth()+1);
        }
        $("#fecha").val(fecha.getFullYear()+'-'+mes+'-'+dia)
        $("#fecha_paciente").text(fecha.getFullYear() + '-' + mes + '-' + dia)
        //console.log('mes '+mes)
        //console.log('dia ' + dia)
        //console.log(fecha.getFullYear() + '-' + mes + '-' + dia)

        let days = ['0', '1', '2', '3', '4', '5', '6'];
        //console.log(parseInt(fecha.getDate()+3))
        //console.log(days[fecha.getUTCDay()]);

        var dia_semana = days[fecha.getUTCDay()];
        var fecha_entrega_oportuna = '';
        if (dia_semana == 0) {//lunes falta validar si es fin de mes 
            fecha_entrega_oportuna = calcularFechaEntrega(pacientes[0].study_datetime, 4)
        } else {
            if (dia_semana == 1) {//martes 
                fecha_entrega_oportuna = calcularFechaEntrega(pacientes[0].study_datetime, 3)
            } else {
                if (dia_semana == 2) {//miercoles
                    fecha_entrega_oportuna = calcularFechaEntrega(pacientes[0].study_datetime, 3)
                    
                } else {
                    if (dia_semana == 3) {//jueves
                        fecha_entrega_oportuna = calcularFechaEntrega(pacientes[0].study_datetime, 5)
                    } else {
                        if (dia_semana == 4) {//viernes
                            fecha_entrega_oportuna = calcularFechaEntrega(pacientes[0].study_datetime, 5)
                        } else {
                            if (dia_semana == 5) {//sabado
                                fecha_entrega_oportuna = calcularFechaEntrega(pacientes[0].study_datetime, 5)
                            } else {
                                if (dia_semana == 6) {//domingo
                                    fecha_entrega_oportuna = calcularFechaEntrega(pacientes[0].study_datetime, 5)
                                }
                            }
                        }
                    }
                }
            }

        }
        $("#fecha_entrega_oportuna").val(fecha_entrega_oportuna)


        
        // $("#estado").on('click', function () {
        //     if ($("#estado").val() === "devolucion") {
        //         $("#observaciones_div").show();
        //         console.log($("#estado").val())
        //     }else{
        //         $("#observaciones_div").hide();
        //         $("#observaciones_div").val("");
        //     }
        // })

        

        for (var i = 0; i < tipoPatronesjson.length; i++) {

            $('#tipo_patron').append(`<option value="${tipoPatronesjson[i].id}">${tipoPatronesjson[i].nombre}</option>`);
        }

        $("#tipo_patron").on('click', function (params) {
            let tipo_patron = $("#tipo_patron").val()
            
            const patrones = patronesjson.filter(d => d.tipo_patron_id == tipo_patron);
            $('#estudio_solicitado').val("")
            for (let i = 0; i < patrones.length; i++) {

                $('#estudio_solicitado').append(`<option value="${patrones[i].nombre}">${patrones[i].nombre}</option>`);
            }

            $("#estudio_solicitado_div").show();
            $("#descripcion_div").show();
            $("#conclusion_div").show();
            $("#descripcion_div").css("text-align", "left");
            $("#descripcion").css("text-align", "justify");
        })


        $('#estudio_solicitado').on('click', function (params) {
            let patron = $("#estudio_solicitado").val();
            const patrones = patronesjson.filter(d => d.nombre == patron);
            $("#descripcion").val(patrones[0].descripcion);
            $("#conclusion").val(patrones[0].conclusion);
        })


        $("#medico").val(medicoActual)
        $("#firma").val(firmaMedicoActual)

        $('.regularidad').on('click', function () 
        {
            if ($(this).is(':checked')) {
                regularidad = $(this).val()
                console.log(regularidad)
                
            } else {
                regularidad = $(this).val()
                console.log(regularidad)
            }
        });

  
    

    })//final redactar

    function validarRutas(rol, my_item) {
        let acciones = ''
        my_item.render = function (data, type, row) {
            if (rol === "Transcriptora") {
                my_item.title = 'Transcribir';
                return `<div align="center" class="row">
                        <a class="transcribir btn-primary btn modal-trigger" href="#pacientes-modal" data-value="${row.paciente_id}" data-study_id="${row.study_id}" >Transcribir</a>
                    </div>`
            } else if (rol === "Medico") {
                my_item.title = 'Redactar';
                return `
                        <div align="center" class="row"> 
                            <a class="redactar  btn-primary btn modal-trigger" data-value="${row.paciente_id}" data-backdrop="static" data-keyboard="false" data-study_id="${row.study_id}" href="#modal1">Redactar</a>
                        </div>
                `
            }

        }
    }

    function UpdatePatient(response) {
        if ($.fn.DataTable.isDataTable('#pacientes-table')) {
            $('#pacientes-table').dataTable().fnClearTable();
            $('#pacientes-table').dataTable().fnDestroy();
            $('#pacientes-table thead').empty()
        }
        else {
            $('#pacientes thead').empty()
        }


        if (response.pacientes != 0) {
            let my_columns = []
            $.each(response.pacientes[0], function (key, value) {
                var my_item = {};
                let acciones = '';
                // my_item.class = "filter_C";
                my_item.data = key;
                if (key == 'created_time') {
                    let rol = response.rol
                    console.log(rol)
                    validarRutas(rol, my_item)
                    my_columns.push(my_item);
                }

                else if (key == 'pat_name') {

                    my_item.title = 'Nombres';

                    my_item.render = function (data, type, row) {
                        return `<div>
                                ${row.pat_name}</strong>
                            </div>`
                    }
                    my_columns.push(my_item);
                }


                else if (key == "pat_id") {
                    my_item.title = "Identificación";

                    my_item.render = function (data, type, row) {
                        return `  <div align='center'> 
                                ${row.pat_id}
                            </div>`
                    }


                    my_columns.push(my_item)

                }

                else if (key == 'pat_sex') {

                    my_item.title = 'Sexo';

                    my_item.render = function (data, type, row) {
                        return `  <div>
                                ${row.pat_sex} 
                            </div>`
                    }
                    my_columns.push(my_item);
                }

                else if (key == 'accession_no') {

                    my_item.title = 'Estudio Realizado';

                    my_item.render = function (data, type, row) {
                        return `  <div align='center'>
                                ${row.accession_no}
                            </div>`
                    }
                    my_columns.push(my_item);
                }
                else if (key == 'modality') {

                    my_item.title = 'Modalidad';

                    my_item.render = function (data, type, row) {
                        return `  <div align='center'>
                                ${row.modality}
                            </div>`
                    }
                    my_columns.push(my_item);
                }
                else if (key == 'study_datetime') {

                    my_item.title = 'Fecha del Estudio';

                    my_item.render = function (data, type, row) {
                        return `  <div align='center'>
                                ${row.study_datetime}
                            </div>`
                    }
                    my_columns.push(my_item);
                }

            })



            var table = $('#pacientes-table').DataTable({
                // "destroy": true,

                "scrollY": 700,
                "scrollX": true,
                data: response.pacientes,
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

                initComplete: function () {
                    var cont = 0
                    $("table").append('<tfoot id="tfoot"></tfoot>');
                    $("table thead tr").clone().appendTo("#tfoot");
                    $('#tfoot tr:eq(0) th').each(function () {
                        var title = $(this).text();
                        $(this).html('<input type="text" class="search ' + title + '" data-index="' + cont + '" placeholder="' + title + '" />');
                        cont++;
                    });
                    $('#tfoot tr:eq(1)').remove()

                },

                "lengthMenu": [[10, 20, 25, 50, -1], [10, 20, 25, 50, "Todos"]],
            });;


        }
        $("select[name=pacientes-table_length]").addClass('browser-default');

        $('#tfoot .search').on('keyup', function () {
            var column = $(this).attr('data-index')
            console.log($(this).attr('data-index'))
            table
                .columns(column)
                .search(this.value)
                .draw();


        });

    }


    function guardarFormulario(audio,descripcion) {

        toastr.info('Estamos Guardando su lectura espere por Favor...')

        pat_id = $("#identificacion").val();

        
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });



        enviar_informe = $.ajax({
            url: '/informar',
            method: 'post',
            data: {
                nombres: $("#nombres").val(),
                identificacion: $("#identificacion").val(),
                edad: $("#edad").val(),
                sexo: $("#sexo").val(),
                estudio_realizado: $("#estudio_realizado").val(),
                estudio_solicitado: $("#estudio_solicitado").val(),
                descripcion: descripcion,
                conclusion: $("#conclusion").val(),
                audio: audio,
                medico: $("#medico").val(),
                firma: $("#firma").val(),
                estado: $("#estado").val(),
                observaciones: $("#observaciones").val(),
                fecha: $("#fecha").val(),
                fecha_entrega_oportuna: $("#fecha_entrega_oportuna").val(),
                fecha_entregado: "Null",
                tipo_estudio: $("#tipo_estudio").val(),
                regularidad_estudio: regularidad,
                estudio_id: $("#estudio_id").val(),

            },
            success: function (response) {
                //CKEDITOR.instances["descripcion"].setData('');
                $("#nombres").val(""),
                $("#identificacion").val(""),
                $("#edad").val(""),
                $("#estudio_realizado").val(""),
                $("#tipo_patron").val(""),
                $("#estudio_solicitado").val(""),
                $("#descripcion").val(""),
                $("#conclusion").val(""),
                $("#fecha").val(""),
                $("#fecha_entrega_oportuna").val(""),
                $("#medico").val(""),
                $("#audio").val(""),
                $("#firma").val(""),
                $("#observaciones").val("")
                $("#nombre_paciente").val("")
                $("#duracion").empty()
                $("#estado").val("pendiente para transcripcion")
                $("#lectura_audio").empty()
                $("#lectura_audio").remove()
                $("#tipo_estudio").val("")
                $("#estudio_id").val("")
                $("#" + study_id).hide()
                toastr.success('Informe redactado exitosamente.')
                //document.getElementById('ocultarGrabarAudio').style.display = 'none'
                document.getElementById('info').style.display = 'none'
                $(".regularidad").prop("checked", false);
                //$("#patronAnormalAudio").prop("checked", false);
                //$("#patronNormal").prop("checked", false);
                //$("#patronANormal").prop("checked", false);
                $('.modal').removeData();
                $('.modal').modal('close');
                /*
                setTimeout(() => {
                    

                }, 0);*/
            },
            error: function (error) {
                console.log(error)
                if (error.statusText === "abort") {

                } else {

                    toastr.warning('Opss, intenta nuevamente algo va mal.')
                }
            }

        })
        
    }

    $("#guardar").on('click', function (e) {

        audio = $("#audio").val()
        descripcion = $("#descripcion").val()
        if ($("#descripcion").val() === "" || $("#descripcion").val() === undefined && $("#audio").val() === ""  && regularidad === "" ) 
        {
            toastr.info('Debes seleccionar si el patron es NORMAL o ANORMAL y  debes grabar un AUDIO o redactar el resultado mediante TEXTO o VOZ, o poner el estado en DEVOLUCION')
        }else {
            if ($("#descripcion").val() === undefined && regularidad != "" && $("#audio").val() != "" && $("#estado").val() != "devolucion" ) 
            {
                descripcion = ''
                $(this).prop("disabled", true);
                guardarFormulario(audio,descripcion)
                // console.log($("#descripcion").val())
                // console.log("guarda un audio")
            }else
            {
                if ($("#descripcion").val() === undefined && regularidad === "" && $("#audio").val() != "" && $("#estado").val() != "devolucion") 
                {
                    toastr.info("Seleccione la Patologia Normal o Anormal para guardar el informe")
                }else
                {
                    if ($("#descripcion").val() === undefined && regularidad != "" && $("#audio").val() === "") {
                        toastr.info("Grabe un Audio para guardar el informe")
                    }else
                    {
                        
                        if ($("#descripcion").val() === undefined && regularidad != "" && $("#audio").val() != "" && $("#estado").val() === "devolucion") 
                        {
                            descripcion = ''
                            $("#regularidad").val("")
                            $(this).prop("disabled", true);
                            guardarFormulario(audio, descripcion)
                        }else
                        {
                            if ($("#descripcion").val() === undefined && regularidad === "" && $("#audio").val() != "" && $("#estado").val() === "devolucion") 
                            {
                                descripcion = ''
                                $("#regularidad").val("")
                                $(this).prop("disabled", true);
                                guardarFormulario(audio, descripcion)
                            }else
                            {
                                if ( regularidad != "" && $("#descripcion").val() != "" && $("#estado").val() != "devolucion") {
                                    audio = ''
                                    $(this).prop("disabled", true);
                                    guardarFormulario(audio, descripcion)
                                    // console.log($("#descripcion").val())
                                    // console.log("guarda un audio")
                                }else
                                {
                                    if ( regularidad === "" && $("#descripcion").val() != "" && $("#estado").val() != "devolucion") {
                                        toastr.info("Seleccione la Patologia Normal o Anormal para guardar el informe")
                                    }else
                                    {
                                        if ( regularidad != "" && $("#descripcion").val() === "" && $("#estado").val() != "devolucion") {
                                            toastr.info("Escriba o redacte mediante voz una descripcion para guardar el informe")
                                        }else
                                        {
                                            if (regularidad != "" && $("#descripcion").val() != "" && $("#estado").val() === "devolucion") {
                                                descripcion = ''
                                                $("#regularidad").val("")
                                                $(this).prop("disabled", true);
                                                guardarFormulario(audio, descripcion)
                                            }else
                                            {
                                                if ( regularidad === "" && $("#descripcion").val() != "" && $("#estado").val() === "devolucion") {
                                                    descripcion = ''
                                                    $("#regularidad").val("")
                                                    $(this).prop("disabled", true);
                                                    guardarFormulario(audio, descripcion)
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    

                }
            }
        }
    



    })

    $("#cancelar").on('click', function (params) {

        if ( enviar_informe != null ) {
            
            enviar_informe.abort()
            enviar_informe = null;

        }

        $("#nombres").val(""),
        $("#identificacion").val(""),
        $("#edad").val(""),
        $("#estudio_realizado").val(""),
        $("#tipo_patron").val(""),
        $("#estudio_solicitado").val(""),
        $("#descripcion").val(""),
        $("#conclusion").val(""),
        $("#fecha").val(""),
        $("#fecha_entrega_oportuna").val(""),
        $("#medico").val(""),
        $("#audio").val(""),
        $("#firma").val(""),
        $("#estado").val(""),
        $("#observaciones").val("")
        $("#nombre_paciente").val("")
        $("#duracion").empty("")
        $("#lectura_audio").empty()
        $("#lectura_audio").remove()
        $("#estudio_id").val("")
       // document.getElementById('ocultarGrabarAudio').style.display = 'none'
        document.getElementById('info').style.display = 'none'
        $(".regularidad").prop("checked", false);
        // $("#patronNormal").prop("checked", false);
        // $("#patronAnormalAudio").prop("checked", false);
        // $("#patronANormal").prop("checked", false);
        
        toastr.warning('Operacion Cancelada');
        $('.modal').removeData();
        $('.modal').modal('close');

            /*
        setTimeout(() => {
            

        }, 0);*/


    })

    $(window).on('load', function () {
        if (enviar_informe != null) {rt()
            enviar_informe.abort()
            enviar_informe = null;

        }
    });


});//final document ready

