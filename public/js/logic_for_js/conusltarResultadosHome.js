$(document).ready(function () {
    
    let estudios = [],informes =[],fechaActual="",mesActual=0,diasMesActual=0;
    let tr = "", a;
    let modalidades = [], arrayModalidades = [], cont = 0;
    let fecha_inicial = '', fecha_final='', estado = '', listado_id = '', mensaje = '', modalidad = '', verListado = '', contadorInoportunos = 0, inoportuno = '';
    let consultaEstudios = []
    let consultaEstudiosFechas = [],cont_no_informados=0,cont_transcribir=0,cont_entregas=0,promedio=0;

    $("#descargar-rx").hide();
    $("#table-listadoRX").hide();
    $("#verPendientesRX").hide();

    $("#descargar-informes").hide();
    $("#table-listado").hide();
    $("#verListado").hide();
    $("#rx").hide();


    mesActual = new Date()
    cont_no_informados = 0;
    cont_entregas = 0
    cont_transcribir = 0

    // estudiosMes = estudios.filter(d => d.mes == mesActual.getMonth() + 1);
    // informesMes = informes.filter(d => d.mes == mesActual.getMonth() + 1);

    // console.log(estudiosMes)
    for (let i = 0; i < estudiosMes.length; i++) {
    
            cont_no_informados++
    }
    $("#total_no_informados").text(cont_no_informados)

    let c = 0, d = 0
    for (let j = 0; j < informesMes.length; j++) {
        console.log(informesMes[j].mes)
        if (informesMes[j].estado === "pendiente para transcripcion") {

            cont_transcribir++;
        }
        if (informesMes[j].estado === "entrega") {

            cont_entregas++;
        } else {
            if (informesMes[j].estado === "entregado") {

                cont_entregas++;
            } else {
                if (informesMes[j].estado === "entregado por la web") {

                    cont_entregas++;
                }
            }
        }
        if (informesMes[j].estado === "pendiente para revision") {

            c++;
        }
        if (informesMes[j].estado === "devolucion") {

            d++;
        }

    }
    // console.log(cont_no_informados + "  " + cont_transcribir + "  " + cont_entregas + "  " + " " + c + "  " + d)
    for (let k = 0; k < estudiosPorMes.length; k++) {

        if (estudiosPorMes[k].mes === (mesActual.getMonth() + 1)) {
            promedio = parseFloat(estudiosPorMes[k].total / diasDelMes)
        }

    }
    // console.table(estudiosPorMes)
    $("#promedio_estudio_dia").text(promedio.toFixed())
    $("#total_transcribir").text(cont_transcribir)
    $("#total_entregados").text(cont_entregas)


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


    $("#actualizar").on('click', function () {

        jQuery(document).ready(function () {
            TableDatatablesManaged.init();
        }); 
        toastr.success("Informacion Actualizada");
    })
    function load() {
        $.ajax({
            url: '/buscarEstudios',
            method: 'get',
            success: function (response) {
                // console.log(response)
                estudios = response.estudios
                informes = response.informes
                
            },
            error: function (params) {
                console.log(params);
            }
        })
        
    }


    // setInterval(function () { 
    //     peticion()
    // }, 10000);
    





    $("#titulo").text("Estudios "+$("#estado").val())

    $("#verPendientesRX").on('click', function (params) {
        $("#table-listadoRX").toggle('slow');
    })

    $("#verListado").on('click', function (params) {
        $("#table-listado").toggle('slow');
    })
    console.log(estudiosMes)
    const porInformar = estudiosMes.filter(d => d.study_datetime == fechaHoy);
    console.log(porInformar)
    const estudiosHoy = porInformar.filter(d => d.estado == null);
    if(estudiosHoy != null){
        $("#descargar-informes").attr("href", "/reporteExcelEstados/" + fechaHoy+ '/' + "null"+ '/' + "null" + '/' + "null" + "");
        $("#descargar-informes").show()
        $("#verListado").show();
    }
    let trHoy = ''
    trHoy = ''
    estudiosHoy.forEach(element=>{
        
        trHoy += "<tr><td '>" + element.pat_name + "</td>";
        trHoy += "<td>" + element.pat_id + "</td> " + "<td>" + element.modality + "</td>";
        trHoy += "<td >" + element.study_datetime + "</td></tr>";
        $("#listadoInformados").html(trHoy);
    })
    $("#estudiosinformados").text('Total Estudios : ' + estudiosHoy.length)

    $("#estado").on('change', function (params) {
        $("#titulo").text("Estudios " + $(this).val())
    })
  

    function consultar(listado_id, mensaje,verListado,consulta,inoportuno) {
        
        let tr = ''

        if(consulta === null){
            tr = ''
            contadorInoportunos =0
            $(mensaje).text('No hay resultados Para Estas fechas')
            toastr.success('No se encontraron Resultados')
        }else
        {
            tr = ''
            contadorInoportunos = 0
            consulta.forEach(element => {
                
                if(element.estado === null){
                    
                    $(mensaje).text('Total Estudios Realizados para estas fechas:  ' + consulta.length)
                    $(verListado).show();
                    tr += "<tr><td '>" + element.pat_name + "</td>";
                    tr += "<td>" + element.pat_id + "</td> " + "<td>" + element.modality + "</td>";
                    tr += "<td >" + element.study_datetime + "</td></tr>";
                    $(listado_id).html(tr);
                    // console.log('esta condicion con estado = null')
                }else{
                    if (element.fecha_entregado != "") {
                        if (element.fecha_entregado > element.fecha_entrega_oportuna && inoportuno === "inoportuno") {
                            contadorInoportunos++;
                            $(mensaje).text('Total Estudios Inoportunos para estas fechas :  ' + contadorInoportunos)
                            $(verListado).show();
                            tr += "<tr><td '>" +element.nombres + "</td>";
                            tr += "<td '>" + element.identificacion + "</td>";
                            tr += "<td>" + element.estudio_realizado + "</td>";
                            tr += "<td>" + element.fecha + "</td>";
                            tr += "<td>" + element.fecha_entrega_oportuna + "</td>";
                            tr += "<td >" + element.fecha_entregado + "</td></tr>";
                            $(listado_id).html(tr);
                            // console.log('esta condicion con estado inoportunos')
                        } else {
                            if(inoportuno ===""){

                                $(mensaje).text('Total Estudios Realizados para estas fechas:  ' + consulta.length)
                                $(verListado).show();
                                tr += "<tr><td '>" + element.nombres + "</td>";
                                tr += "<td '>" + element.identificacion + "</td>";
                                tr += "<td>" + element.estudio_realizado + "</td>";
                                tr += "<td>" + element.fecha + "</td>";
                                tr += "<td>" + element.fecha_entrega_oportuna + "</td>";
                                tr += "<td >" + element.fecha_entregado + "</td></tr>";
                                // console.log('esta condicion con estados normales')
                                $(listado_id).html(tr);
                            }
                        } 
                    }
                }
            });
        }


            
    }
       
    

    $("#buscarResultadosInformados").on('click', function (e) {
      
        consultaEstudios = []
        consultaEstudiosFechas = []
        if ($("#fechaInicial").val() != "" && $("#fechaFinal").val() != "") {

            estado = ""
            listado_id = "#listadoInformados";
            mensaje = "#estudiosinformados";
            verListado = '#verListado'
            if ($("#estado").val() === "pendiente por informar") {
                estado = null;

                consultaEstudios = estudios.filter(d => d.estado == estado);
                consultaEstudiosFechas = consultaEstudios.filter(function (estudio) {
                    return estudio.study_datetime >= $("#fechaInicial").val() && estudio.study_datetime <= $("#fechaFinal").val()
                })

                consultar(listado_id, mensaje, verListado, consultaEstudiosFechas, '')
                $("#descargar-informes").attr("href", "/reporteExcelEstados/" + $("#fechaInicial").val() + '/' + $("#fechaFinal").val() + '/' + estado + '/' + "null" + "");
                $("#descargar-informes").show()
            } else {
                estado = $("#estado").val();

                if ($("#estado").val() === 'inoportunos') {
                    estado = "entrega"
                    inoportuno = 'inoportuno'

                    consultaEstudios = informes.filter(function (estudio) {
                        return estudio.estado == "entrega" || estudio.estado == "entregado" || estudio.estado == "entregado por la web";
                    })
                    consultaEstudiosFechas = consultaEstudios.filter(function (estudio) {
                        return estudio.fecha >= $("#fechaInicial").val() && estudio.fecha <= $("#fechaFinal").val()
                    })
                    // console.log("estado " + estado + ": " + consultaEstudiosFechas.length)
                    consultar(listado_id, mensaje, verListado, consultaEstudiosFechas, inoportuno)
                    $("#descargar-informes").attr("href", "/reporteExcelEstados/" + $("#fechaInicial").val() + '/' + $("#fechaFinal").val() + '/' + estado + '/' + inoportuno + "");
                    $("#descargar-informes").show()
                } else {

                    if ($("#estado").val() === 'entrega') {

                        consultaEstudios = informes.filter(function (estudio) {
                            return estudio.estado == "entrega" || estudio.estado == "entregado" || estudio.estado == "entregado por la web";
                        });

                        consultaEstudiosFechas = consultaEstudios.filter(function (estudio) {
                            return estudio.fecha >= $("#fechaInicial").val() && estudio.fecha <= $("#fechaFinal").val()
                        })
                        // console.log("estado " + estado + ": " + consultaEstudiosFechas.length);

                        consultar(listado_id, mensaje, verListado, consultaEstudiosFechas, "")
                        $("#descargar-informes").attr("href", "/reporteExcelEstados/" + $("#fechaInicial").val() + '/' + $("#fechaFinal").val() + '/' + estado + '/' + "null" + "");
                        $("#descargar-informes").show()
                    } else {

                        consultaEstudios = informes.filter(d => d.estado == estado);
                        consultaEstudiosFechas = consultaEstudios.filter(function (estudio) {
                            return estudio.fecha >= $("#fechaInicial").val() && estudio.fecha <= $("#fechaFinal").val()
                        })
                        // console.log("estado " + estado + ": " + consultaEstudiosFechas.length)
                        consultar(listado_id, mensaje, verListado, consultaEstudiosFechas, "")
                        $("#descargar-informes").attr("href", "/reporteExcelEstados/" + $("#fechaInicial").val() + '/' + $("#fechaFinal").val() + '/' + estado + '/' + "null" + "");
                        $("#descargar-informes").show()
                    }
                }
            }
            
        } else {

            if ($("#fechaInicial").val() != "" && $("#fechaFinal").val() === "") {
              
                estado = ""
                listado_id = "#listadoInformados";
                mensaje = "#estudiosinformados";
                verListado = '#verListado'
               
                if ($("#estado").val() === "pendiente por informar") {
                    estado = null;
                    
                    consultaEstudios = estudios.filter(d => d.estado == estado);
                    consultaEstudiosFechas = consultaEstudios.filter(function (estudio) {
                        return estudio.study_datetime == $("#fechaInicial").val()
                    })
                    
                    consultar(listado_id, mensaje, verListado, consultaEstudiosFechas,'')
                    $("#descargar-informes").attr("href", "/reporteExcelEstados/" + $("#fechaInicial").val() + '/' + "null" + '/' + estado + '/' + "null" + "");
                    $("#descargar-informes").show()

                } else {
                    estado = $("#estado").val();
                    
                    if ($("#estado").val() === 'inoportunos') {
                        estado = "entrega"
                        inoportuno = 'inoportuno'
                        
                        consultaEstudios = informes.filter(function (estudio) {
                            return estudio.estado == "entrega" || estudio.estado == "entregado" || estudio.estado == "entregado por la web";
                        })
                         consultaEstudiosFechas = consultaEstudios.filter(function (estudio) {
                            return estudio.fecha == $("#fechaInicial").val()
                        })
                        // console.log("estado "+estado+": "+consultaEstudiosFechas.length)
                        consultar(listado_id, mensaje, verListado, consultaEstudiosFechas, inoportuno)
                        $("#descargar-informes").attr("href", "/reporteExcelEstados/" + $("#fechaInicial").val() + '/' + "null" + '/' + estado + '/' + inoportuno + "");
                        $("#descargar-informes").show()
                    }else{

                        if ($("#estado").val() === 'entrega') {
                            
                             consultaEstudios = informes.filter(function(estudio) {
                                return estudio.estado == "entrega" || estudio.estado == "entregado" || estudio.estado == "entregado por la web" ;
                            });
                            
                             consultaEstudiosFechas = consultaEstudios.filter(function (estudio) {
                                return estudio.fecha == $("#fechaInicial").val()
                            })
                            // console.log("estado " + estado + ": " +consultaEstudiosFechas.length);
                            
                            consultar(listado_id, mensaje, verListado, consultaEstudiosFechas, "")
                            $("#descargar-informes").attr("href", "/reporteExcelEstados/" + $("#fechaInicial").val() + '/' + "null" + '/' + estado + '/' + "null" + "");
                            $("#descargar-informes").show()
                        }else{
                            
                             consultaEstudios = informes.filter(d => d.estado == estado);
                             consultaEstudiosFechas = consultaEstudios.filter(function (estudio) {
                                return estudio.fecha == $("#fechaInicial").val()
                            })
                            // console.log("estado " + estado + ": " +consultaEstudiosFechas.length)
                            consultar(listado_id, mensaje, verListado, consultaEstudiosFechas, "")
                            $("#descargar-informes").attr("href", "/reporteExcelEstados/" + $("#fechaInicial").val() + '/' + "null" + '/' + estado +'/'+ "null"+ "");
                            $("#descargar-informes").show()
                        }
                    }
                }
                
               

            } else {
                if ($("#fechaInicial").val() === "" && $("#fechaFinal").val() === "") {
                    $("#fechaInicial").val("")
                    $("#fechaFinal").val("")
                    toastr.warning('Debes seleccionar un rango de fechas')
                } else {
                    if ($("#fechaInicial").val() === "" && $("#fechaFinal").val() != "") {
                        $("#fechaFinal").val("")
                        toastr.warning('Si deseas Buscar por una fecha especifica, selecciona una en la fecha Inicial')
                    }
                }

            }

        }


    })


    
        $('.modalidad').on('click', function () {
            if ($(this).is(':checked')) {
                if($(this).val() === "todos"){
                
                    $(".modalidad").each(function(index, val) {
                        if(index > 0){
                            $(this).prop("checked", false);
                        }
                    })
                        
                } else {
                    // Hacer algo si el checkbox ha sido deseleccionado
                    $("#todos").prop("checked", false);
                    
                }
            } 
        });
    
        function consultarResultados(estudios,modalidades) {

          
            if (estudios.length === 0) {
    
                //$("#totalEstudios").text('No hay resultados Para Estas Fechas')
                $("#rx").text('No hay resultados Para Estas Fechas')
                $("#rx").show();
                $("#verPendientesRX").hide();
            } else {
    
                if (modalidades.length > 1) {
                    tr = ''
                    cont = 0
    
                    $("#verPendientesRX").show();
                    for (let i = 0; i < estudios.length; i++) {
                        for (let j = 0; j < modalidades.length; j++) {
    
                            if (estudios[i].modality == modalidades[j]) {
    
                                tr += "<tr><td '>" + estudios[i].pat_name + "</td>";
                                tr += "<td>" + estudios[i].modality + "</td>";
                                tr += "<td >" + estudios[i].study_datetime + "</td></tr>";
                                cont++;
                            }
    
                        }
                    }
                    $("#rx").text('Total Estudios ' + modalidades + ' : ' + cont)
                    $("#rx").show();
                    $("#listadoPendientesRX").html(tr);
                    toastr.success("Resultados encontrados Exitosamente")
                    
                } else {
                    if (modalidades.length === 1 && modalidades[0] != "todos") {
                        tr = ''
                        cont = 0
                        $("#verPendientesRX").show()
                        for (let i = 0; i < estudios.length; i++) {
    
                            if (estudios[i].modality === modalidades[0]) {
    
                                tr += "<tr><td '>" + estudios[i].pat_name + "</td>";
                                tr += "<td>" + estudios[i].modality + "</td>";
                                tr += "<td >" + estudios[i].study_datetime + "</td></tr>";
                                cont++
                            }
    
                        }
                        $("#rx").text('Total Estudios ' + modalidades + ' : ' + cont)
                        $("#rx").show();
                        $("#listadoPendientesRX").html(tr);
                        toastr.success("Resultados encontrados Exitosamente")
                    
                    } else {
                        tr = ''
                        cont = 0
                        $("#verPendientesRX").show();
                        for (let i = 0; i < estudios.length; i++) {
    
                            tr += "<tr><td '>" + estudios[i].pat_name + "</td>";
                            tr += "<td>" + estudios[i].modality + "</td>";
                            tr += "<td >" + estudios[i].study_datetime + "</td></tr>";
                            cont++
                        }
    
                        $("#rx").text('Total Estudios ' + modalidades + ' : ' + cont)
                        $("#rx").show();
                        $("#listadoPendientesRX").html(tr);
                        toastr.success("Resultados encontrados Exitosamente")
                      
                    }
                }
    
            } 
    
        }
        $("#buscarResultadosRXCT").on('click', function (e) {
            let fechaInicial = '', fechaFinal = ''

            fechaInicial = $("#fechaInicial6").val()
            fechaFinal = $("#fechaFinal6").val()
            modalidades =[]
            arrayModalidades = []
            $('.modalidad:checked').each(
                function (index) {
                    modalidades.push($(this).val() )
                    arrayModalidades[index]= $(this).val();
                    
                }
            );
            if (modalidades.length===1 && modalidades[0]==="todos") {
                $("#titulo-estudios").text("Todos los Estudios")
            } else {
                console.log("aqui")
                $("#titulo-estudios").text("Estudios " + modalidades + " Seleccionados")
            }
            if ($("#fechaInicial6").val() != "" && $("#fechaFinal6").val() != "" && modalidades.length != 0) {
              
                const estudiosEntreFecha = estudios.filter(function (estudio) {
                    return estudio.study_datetime >= $("#fechaInicial6").val() && estudio.study_datetime <= $("#fechaFinal6").val()
                })
                consultarResultados(estudiosEntreFecha,modalidades);
                $("#descargar-rx").attr("href", "/descasgarExcel/" + fechaInicial + '/' + fechaFinal + '/' + modalidades + "");
                $("#descargar-rx").show()
                
    
            } else {
                if ($("#fechaInicial6").val() != "" && $("#fechaFinal6").val() === "" && modalidades.length !=0) {
    
                    const estudiosPorFecha = estudios.filter(d => d.study_datetime == $("#fechaInicial6").val());
                    consultarResultados(estudiosPorFecha,modalidades);
                    fechaFinal = null
                    $("#descargar-rx").attr("href", "/descasgarExcel/" + fechaInicial + '/' + fechaFinal + '/' + modalidades + "");
                    $("#descargar-rx").show()
                } else {
                    if ($("#fechaInicial6").val() === "" && $("#fechaFinal6").val() === "" && modalidades.length ===0) {
                        $("#fechaInicial6").val("")
                        $("#fechaFinal6").val("")
                        toastr.warning('Debes seleccionar un rango de fechas y una o varias modalidades')
                    } else {
                        if ($("#fechaInicial6").val() === "" && $("#fechaFinal6").val() != "" &&modalidades.length != 0) {
                            $("#fechaFinal6").val("")
                            toastr.warning('Si deseas Buscar por una fecha especifica, selecciona una en la fecha Inicial')
                        }else
                        {
                            if ($("#fechaInicial6").val() != "" && $("#fechaFinal6").val() != "" && modalidades.length === 0) {
                                $("#fechaFinal6").val("")
                                toastr.warning('Debes seleccionar una modalidad o todas las modalidades.')
                            }else{
                                if ($("#fechaInicial6").val() != "" && $("#fechaFinal6").val() === "" && modalidades.length === 0) {
                                    $("#fechaFinal6").val("")
                                    toastr.warning('Debes seleccionar una modalidad o todas las modalidades.')
                                }
                            }

                        }
                    }
                }
            }
    
    
        })
    
        //graficas 



    let numerosEstudiosMes = [12]
    
    for (var i = 0; i < estudiosPorMes.length; i++) {
        if (estudiosPorMes[i].mes == 1) {
            numerosEstudiosMes[1] = (estudiosPorMes[i].total)
        } else {
        if (estudiosPorMes[i].mes == 2) {
            numerosEstudiosMes[2] = (estudiosPorMes[i].total)
        } else {
        if (estudiosPorMes[i].mes == 3) {
            numerosEstudiosMes[3] = (estudiosPorMes[i].total)
        } else {
        if (estudiosPorMes[i].mes == 4) {
            numerosEstudiosMes[4] = (estudiosPorMes[i].total)
        } else {
        if (estudiosPorMes[i].mes == 5) {
            numerosEstudiosMes[5] = (estudiosPorMes[i].total)
        } else {
        if (estudiosPorMes[i].mes == 6) {
            numerosEstudiosMes[6] = (estudiosPorMes[i].total)
        } else {
        if (estudiosPorMes[i].mes == 7) {
            numerosEstudiosMes[7] = (estudiosPorMes[i].total)
        } else {
        if (estudiosPorMes[i].mes == 8) {
            numerosEstudiosMes[8] = (estudiosPorMes[i].total)
        } else {
        if (estudiosPorMes[i].mes == 9) {
            numerosEstudiosMes[9] = (estudiosPorMes[i].total)
        } else {
        if (estudiosPorMes[i].mes == 10) {
            numerosEstudiosMes[10] = (estudiosPorMes[i].total)
        } else {
        if (estudiosPorMes[i].mes == 11) {
            numerosEstudiosMes[11] = (estudiosPorMes[i].total)
        } else {
        if (estudiosPorMes[i].mes == 12) {
            numerosEstudiosMes[12] = (estudiosPorMes[i].total)
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
        }

    }
    var ctx = $("#estudios");

    // Chart Options
    var chartOptions = {
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each horizontal bar to be 2px wide and green
        elements: {
            rectangle: {
                borderWidth: 2,
                borderColor: "rgb(0, 255, 0)",
                borderSkipped: "left"
            }
        },
        responsive: true,
        maintainAspectRatio: false,
        responsiveAnimationDuration: 500,
        legend: {
            position: "top"
        },
        scales: {
            xAxes: [
                {
                    display: true,
                    gridLines: {
                        color: "#f3f3f3",
                        drawTicks: false
                    },
                    scaleLabel: {
                        display: true
                    }
                }
            ],
            yAxes: [
                {
                    display: true,
                    gridLines: {
                        color: "#f3f3f3",
                        drawTicks: false
                    },
                    scaleLabel: {
                        display: true
                    }
                }
            ]
        },
        title: {
            display: false,
            text: "Chart.js Horizontal Bar Chart"
        }
    };

    // Chart Data
    var chartData = {
        labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
        datasets: [
            {

                label: 'Total Estudios de este Mes',
                barThickness: 4,
                maxBarThickness: 2,
                data: [numerosEstudiosMes[1], numerosEstudiosMes[2], numerosEstudiosMes[3],
                numerosEstudiosMes[4], numerosEstudiosMes[5],
                numerosEstudiosMes[6], numerosEstudiosMes[7], numerosEstudiosMes[8],
                numerosEstudiosMes[9], numerosEstudiosMes[10], numerosEstudiosMes[11], numerosEstudiosMes[12]],
                backgroundColor: "#686868",
                hoverBackgroundColor: "#ff8c0d",
                borderColor: "transparent",
                
            },

        ]
    };

    var config = {
        type: "bar",

        // Chart Options
        options: chartOptions,

        data: chartData
    };

    // Create the chart
    var barChart = new Chart(ctx, config);


    })
  
