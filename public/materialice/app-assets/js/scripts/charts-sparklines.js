/*
 * Sparkline - Charts
 */

$(document).ready(function() {
  // Bar chart ( New Clients)

  $("#clients-bar").sparkline([70, 80, 65, 78, 58, 80, 78, 80, 70, 50, 75, 65, 80, 70, 65, 90, 65, 80, 70, 65, 90], {
    type: 'bar',
    height: '150',
    barWidth: 8,
    barSpacing: 4,
    barColor: '#8bc34a',
    negBarColor: '#689f38',
    zeroColor: '#689f38',
  });

  //clientsBar.setOptions({chartArea: {width: 100}});


  // Line chart ( New Invoice)
  $("#invoice-line").sparkline([5, 6, 7, 9, 9, 5, 3, 2, 2, 4, 6, 7, 5, 6, 7, 9, 9, 5], {
    type: 'line',
    width: '100%',
    height: '150',
    lineWidth: 2,
    lineColor: '#5c6bc0',
    fillColor: 'rgba(159, 168, 218, 1)',
    highlightSpotColor: '#5c6bc0',
    highlightLineColor: '#5c6bc0',
    minSpotColor: '#f44336',
    maxSpotColor: '#4caf50',
    spotColor: '#5c6bc0',
    spotRadius: 4,

    // //tooltipFormat: $.spformat('{{value}}', 'tooltip-class')
  });


  // Tristate chart (Today Profit)
  $("#profit-tristate").sparkline([2, 3, 0, 4, -5, -6, 7, -2, 3, 0, 2, 3, -1, 0, 2, 3, 3, -1, 0, 2, 3], {
    type: 'tristate',
    width: '100%',
    height: '80',
    posBarColor: '#ba68c8',
    negBarColor: '#e1bee7',
    barWidth: 7,
    barSpacing: 4,
    zeroAxis: false,
    //tooltipFormat: $.spformat('{{value}}', 'tooltip-class')
  });

  // Bar + line composite charts (Total Sales)
  $('#sales-compositebar').sparkline([4, 6, 7, 7, 4, 3, 2, 3, 1, 4, 6, 5, 9, 4, 6, 7, 7, 4, 6, 5, 9, 4, 6, 7], {
    type: 'bar',
    barColor: '#F6CAFD',
    height: '80',
    width: '100%',
    barWidth: '7',
    barSpacing: 2,
    //tooltipFormat: $.spformat('{{value}}', 'tooltip-class')
  });
  $('#sales-compositebar').sparkline([4, 1, 5, 7, 9, 9, 8, 8, 4, 2, 5, 6, 7], {
    composite: true,
    type: 'line',
    width: '100%',
    lineWidth: 2,
    lineColor: '#fff3e0',
    fillColor: 'rgba(153,114,181,0.3)',
    highlightSpotColor: '#fff3e0',
    highlightLineColor: '#fff3e0',
    minSpotColor: '#f44336',
    maxSpotColor: '#4caf50',
    spotColor: '#fff3e0',
    spotRadius: 4,
    //tooltipFormat: $.spformat('{{value}}', 'tooltip-class')
  });


  // Project Line chart ( Project Box )
  $("#project-line-1").sparkline([5, 6, 7, 9, 9, 5, 3, 2, 2, 4, 6, 7, 5, 6, 7, 9, 9, 5, 3, 2, 2, 4, 6, 7], {
    type: 'line',
    width: '100%',
    height: '100',
    lineWidth: 2,
    lineColor: '#00bcd4',
    fillColor: 'rgba(0, 188, 212, 0.5)',
  });

  $("#project-line-2").sparkline([6, 7, 5, 6, 7, 9, 9, 5, 3, 2, 2, 4, 6, 7, 5, 6, 7, 9, 9, 5, 3, 2, 2, 4], {
    type: 'line',
    width: '100%',
    height: '30',
    lineWidth: 2,
    lineColor: '#00bcd4',
    fillColor: 'rgba(0, 188, 212, 0.5)',
    //tooltipFormat: $.spformat('{{value}}', 'tooltip-class')
  });

  $("#project-line-3").sparkline([2, 4, 6, 7, 5, 6, 7, 9, 5, 6, 7, 9, 9, 5, 3, 2, 9, 5, 3, 2, 2, 4, 6, 7], {
    type: 'line',
    width: '100%',
    height: '30',
    lineWidth: 2,
    lineColor: '#00bcd4',
    fillColor: 'rgba(0, 188, 212, 0.5)',
    //tooltipFormat: $.spformat('{{value}}', 'tooltip-class')
  });

  $("#project-line-4").sparkline([9, 5, 3, 2, 2, 4, 6, 7, 5, 6, 7, 9, 5, 6, 7, 9, 9, 5, 3, 2, 2, 4, 6, 7], {
    type: 'line',
    width: '100%',
    height: '30',
    lineWidth: 2,
    lineColor: '#00bcd4',
    fillColor: 'rgba(0, 188, 212, 0.5)',
    //tooltipFormat: $.spformat('{{value}}', 'tooltip-class')
  });




  // Sales chart (Sider Bar Chat)
  $("#sales-line-1").sparkline([5, 6, 7, 9, 9, 5, 3, 2, 2, 4, 6], {
    type: 'line',
    height: '80',
    width: '80',
    lineWidth: 3,
    lineColor: '#2196f3',
    fillColor: 'rgba(114, 202, 249, 1)',
    //tooltipFormat: $.spformat('{{value}}', 'tooltip-class')
  });

  $("#sales-line-2").sparkline([6, 7, 5, 6, 7, 9, 9, 5, 3, 2, 2], {
    type: 'line',
    height: '80',
    width: '80',
    lineColor: '#ffc107',
    fillColor: 'rgba(225, 213, 79, 1)',
    //tooltipFormat: $.spformat('{{value}}', 'tooltip-class')
  });

  $("#sales-bar-1").sparkline([2, 5, 3, 2, 2, 4, 6, 7, 5, 6, 7], {
    type: 'bar',
    height: '50',
    width: '80',
    barSpacing: 2,
    barColor: '#FF4081',
    //tooltipFormat: $.spformat('{{value}}', 'tooltip-class')
  });

  $("#sales-bar-2").sparkline([2, 5, 3, 2, 2, 4, 6, 7, 5, 6, 7], {
    type: 'bar',
    height: '50',
    width: '80',
    barSpacing: 2,
    barColor: '#2196f3',
    //tooltipFormat: $.spformat('{{value}}', 'tooltip-class')
  });

  $("#sales-bar-3").sparkline([2, 5, 3, 2, 2, 4, 6, 7, 5, 6, 7], {
    type: 'bar',
    height: '50',
    width: '80',
    barSpacing: 2,
    barColor: '#8bc34a',
    //tooltipFormat: $.spformat('{{value}}', 'tooltip-class')
  });

  $("#sales-bar-4").sparkline([2, 5, 3, 2, 2, 4, 6, 7, 5, 6, 7], {
    type: 'bar',
    height: '50',
    width: '80',
    barSpacing: 2,
    barColor: '#ffd740',
    //tooltipFormat: $.spformat('{{value}}', 'tooltip-class')
  });


  /*
  Sparkline sample charts
  */


  $("#bar-chart-sample").sparkline([70, 80, 65, 78, 58, 80, 78, 80, 70,], {
    type: 'bar',
    height: '80',
    width: '50%',
    barWidth: 20,
    barSpacing: 10,
    barColor: '#ec407a',
    //tooltipFormat: $.spformat('{{value}}', 'tooltip-class')
  });


  $("#line-chart-sample").sparkline([5, 6, 7, 9, 9, 5, 3, 2, 2, 4, 6, 7, 5, 6, 7, 9, 9], {
    type: 'line',
    width: '100%',
    height: '100',
    lineWidth: 2,
    lineColor: '#673ab7',
    fillColor: 'rgba(179, 157, 219, 1)',
    highlightSpotColor: '#7e57c2',
    highlightLineColor: '#7e57c2',
    minSpotColor: '#bbdefb',
    maxSpotColor: '#4caf50',
    spotColor: '#7e57c2',
    spotRadius: 4,
    //tooltipFormat: $.spformat('{{value}}', 'tooltip-class')
  });


  $("#pie-chart-sample").sparkline([50, 60, 80, 110], {
    type: 'pie',
    width: '150',
    height: '150',
    //tooltipFormat: $.spformat('{{value}}', 'tooltip-class'),
    sliceColors: ['#ab47bc', '#03a9f4', '#cddc39', '#ff7043',]
  });

  //aqui va n mis graficas 
  // ocultar link para imprimir excel
  $("#descargar-informados").hide();
  $("#descargar-transcripcion").hide();
  $("#descargar-revision").hide();
  $("#descargar-entrega").hide();
  $("#descargar-devueltos").hide();
  $("#descargar-inoportunos").hide();
  
  $("#descargar-ct").hide();
  $("#descargar-dx").hide();
  let numeroCT =[], numeroRX=[] ;
  let trRX='';
  let trCT = '';
  let trDX = '';
  $("#table-listadoRX").hide();
  $("#verPendientesRX").hide();

  $("#verPendientesRX").on('click', function (params) {
    $("#table-listadoRX").toggle('slow');
  })
  if(estudiosRX.length != 0){
    $("#descargar-rx").show();
  }
  if(estudiosCT.length != 0){
    
    $("#descargar-ct").show();
  }
  if (estudiosDX.length != 0) {

    $("#descargar-dx").show();
  }
  for(let i=0; i<estudiosRX.length;i++){
    
    $("#verPendientesRX").show();
    
    trRX += "<tr><td '>" + estudiosRX[i].pat_name + "</td>";
    trRX += "<td>" + estudiosRX[i].modality + "</td>";
    trRX += "<td >" + estudiosRX[i].study_datetime + "</td></tr>";
    $("#listadoPendientesRX").html(trRX);
  }

  $("#table-listadoCT").hide();
  $("#verPendientesCT").hide();

  $("#verPendientesCT").on('click', function (params) {
    $("#table-listadoCT").toggle('slow');
  })

  
  for (var i = 0; i < estudiosCT.length; i++) {
    
    $("#verPendientesCT").show();
    trCT += "<tr><td '>" + estudiosCT[i].pat_name + "</td>";
    trCT += "<td>" + estudiosCT[i].modality + "</td>";
    trCT += "<td >" + estudiosCT[i].study_datetime + "</td></tr>";
    $("#listadoPendientesCT").html(trCT);
  }
  
  //estudios dx
  $("#table-listadoDX").hide();
  $("#verPendientesDX").hide();

  $("#verPendientesDX").on('click', function (params) {
    $("#table-listadoDX").toggle('slow');
  })

console.log(estudiosDX)
  for (var i = 0; i < estudiosDX.length; i++) {

    $("#verPendientesDX").show();
    trDX += "<tr><td '>" + estudiosDX[i].pat_name + "</td>";
    trDX += "<td>" + estudiosDX[i].modality + "</td>";
    trDX += "<td >" + estudiosDX[i].study_datetime + "</td></tr>";
    $("#listadoPendientesDX").html(trDX);
  }
  $("#rx").text('Total Estudios RX Realizados Hoy : ' + estudiosRX.length)
  $("#ct").text('Total Estudios CT Realizados Hoy : ' + estudiosCT.length)
  $("#dx").text('Total Estudios DX Realizados Hoy : ' + estudiosDX.length)
$("#totalEstudios").text('Total de Estudios Realizados Hoy : '+ (parseInt(estudiosRX.length) + parseInt(estudiosCT.length) + parseInt(estudiosDX.length)))

  let fecha_inicial = '', fecha_final, estado = '', listado_id = '', mensaje = '', modalidad = '', verListado = '', contadorInoportunos = 0, inoportuno = '';
  
  function consultar(fecha_inicial, fecha_final, estado, listado_id, mensaje, modalidad, verListado, inoportuno) {
    toastr.success('Buscando resultados, Espere...')
    let tr = ''


    $.ajax({
      url: '/buscarResultados',
      method: 'get',
      data: {
        fechaInicial: fecha_inicial,
        fechaFinal: fecha_final,
        estado: estado,
        modalidad: modalidad,
      },
      success: function (response) {

        tr = ''
        console.table(response)
        if (response.length === 0) {
          $(mensaje).text('No hay resultados Para Estas fechas')
          toastr.success('No se encontraron Resultados')

        } else {
          toastr.success('Resultados encontrados')
          response.forEach(element => {



            if (element.estado === null) {

              $(mensaje).text('Total Estudios Realizados para estas fechas:  ' + response.length)
              $(verListado).show();
              tr += "<tr><td '>" + element.pat_name + "</td>";
              tr += "<td>" + element.pat_id + "</td> " + "<td>" + element.modality + "</td>";
              tr += "<td >" + element.fecha + "</td></tr>";
              $(listado_id).html(tr);
              console.log('esta condicion con estado = null')
            } else {
              if (element.fecha_entregado != "") {
                if (element.fecha_entregado > element.fecha_entrega_oportuna && inoportuno === "inoportuno") {
                  contadorInoportunos++;



                  $(mensaje).text('Total Estudios Inoportunos para estas fechas :  ' + contadorInoportunos)
                  $(verListado).show();
                  tr += "<tr><td '>" + element.nombres + "</td>";
                  tr += "<td>" + element.estudio_realizado + "</td>";
                  tr += "<td>" + element.fecha + "</td>";
                  tr += "<td>" + element.fecha_entrega_oportuna + "</td>";
                  tr += "<td >" + element.fecha_entregado + "</td></tr>";
                  $(listado_id).html(tr);
                  console.log('esta condicion con estado != null')

                } else {

                  $(mensaje).text('Total Estudios Realizados para estas fechas:  ' + response.length)
                  $(verListado).show();
                  tr += "<tr><td '>" + element.nombres + "</td>";
                  tr += "<td>" + element.estudio_realizado + "</td>";
                  tr += "<td>" + element.fecha + "</td>";
                  tr += "<td>" + element.fecha_entrega_oportuna + "</td>";
                  tr += "<td >" + element.fecha_entregado + "</td></tr>";
                  console.log('esta condicion con estado != null')
                  $(listado_id).html(tr);
                }
              }
              
            }
          });
        }
      }
    })
  }


  
  // $("#buscarResultadosRXCT").on('click', function (e) {

  //   let nrx = 0;
  //   let nct = 0;
  //   let ndx = 0;  
    
  //   if ($("#fechaInicial6").val() != "" && $("#fechaFinal6").val() != "") {
  //     $.ajax({
  //       url: '/buscarResultadosRX',
  //       method: 'get',
  //       data: {
  //         fechaInicial: $("#fechaInicial6").val(),
  //         fechaFinal: $("#fechaFinal6").val()
  //       },
  //       success: function (response) {
          
  //         if (response.length === 0) {
  //             trRX = ''
  //             $("#totalEstudios").text('No hay resultados Para Estas Fechas')
  //             $("#rx").text('No hay resultados Para Estas Fechas')
  //             $("#verPendientesRX").hide();
          
  //           } else {
  //             trRX = ''
  //           $("#descargar-rx").show();
  //             response.forEach(element => {
  //               nrx = response.length;
  //             $("#rx").text('Total Estudios RX :  ' + response.length)
  //               $("#verPendientesRX").show();
  //             trRX += "<tr><td '>" + element.pat_name + "</td>";
  //             trRX += "<td>" + element.modality + "</td>";
  //             trRX += "<td >" + element.study_datetime + "</td></tr>";
  //             $("#listadoPendientesRX").html(trRX);
  //           });
          
  //         }

  //         $.ajax({
  //           url: '/buscarResultadosCT',
  //           method: 'get',
  //           data: {
  //             fechaInicial: $("#fechaInicial6").val(),
  //             fechaFinal: $("#fechaFinal6").val()
  //           },
  //           success: function (response) {
  //             if (response.length === 0) {
  //               trCT = ''
  //               $("#totalEstudios").text('No hay resultados Para Estas Fechas')
  //               $("#ct").text('No hay resultados Para Estas Fechas')
  //               $("#verPendientesCT").hide();
                

  //             } else {
  //               trCT = ''
  //               nct = response.length;
  //               response.forEach(element => {
  //                 $("#ct").text('Total Estudios CT :  ' + response.length)
  //                 $("#verPendientesCT").show();
  //                 trCT += "<tr><td '>" + element.pat_name + "</td>";
  //                 trCT += "<td>" + element.modality + "</td>";
  //                 trCT += "<td >" + element.study_datetime + "</td></tr>";
  //                 $("#listadoPendientesCT").html(trCT);
  //               });

  //               $("#totalEstudios").text('Total de Estudios Realizados entre ' + $("#fechaInicial6").val() + ' Y ' + $("#fechaFinal6").val() + ' : ' + (parseInt(nrx) + parseInt(nct)+ parseInt(ndx)))

  //             }


  //           }
  //         })

  //         $.ajax({
  //           url: '/buscarResultadosDX',
  //           method: 'get',
  //           data: {
  //             fechaInicial: $("#fechaInicial6").val(),
  //             fechaFinal: $("#fechaFinal6").val()
  //           },
  //           success: function (response) {
  //             if (response.length === 0) {
  //               trDX = ''
  //               $("#totalEstudios").text('No hay resultados Para Estas Fechas')
  //               $("#DX").text('No hay resultados Para Estas Fechas')
  //               $("#verPendientesDX").hide();


  //             } else {
  //               trDX = ''
  //               ndx = response.length;
  //               $("#descargar-dx").show();
  //               response.forEach(element => {
  //                 $("#dx").text('Total Estudios DX :  ' + response.length)
  //                 $("#verPendientesDX").show();
  //                 trDX += "<tr><td '>" + element.pat_name + "</td>";
  //                 trDX += "<td>" + element.modality + "</td>";
  //                 trDX += "<td >" + element.study_datetime + "</td></tr>";
  //                 $("#listadoPendientesDX").html(trDX);
  //               });

  //               $("#totalEstudios").text('Total de Estudios Realizados entre ' + $("#fechaInicial6").val() + ' Y ' + $("#fechaFinal6").val() + ' : ' + (parseInt(nrx) + parseInt(nct)+parseInt(ndx)))

  //             }


  //           }
  //         })

          

  //       }
  //     })

      
  //   } else {
  //     if($("#fechaInicial6").val() != "" && $("#fechaFinal6").val() === "") {
        
  //       fecha_inicial = $("#fechaInicial6").val(),
  //       fecha_final = $("#fechaFinal6").val()
  //       estado = "";
  //       listado_id = "";
  //       mensaje = "";
  //       verListado = ''
  //       inoportuno = ''
  //       modalidad = "allModality"
  //       consultar(fecha_inicial, fecha_final, estado, listado_id, mensaje, '', verListado, inoportuno)
        
        
        
        
  //       // $.ajax({
  //       //   url: '/buscarResultadosRXPorFecha',
  //       //   method: 'get',
  //       //   data: {
  //       //     fechaInicial: $("#fechaInicial6").val(),
            
  //       //   },
  //       //   success: function (response) {

  //       //     if (response.length === 0) {
  //       //       trRX = ''
  //       //       $("#totalEstudios").text('No hay resultados Para Estas Fechas')
  //       //       $("#rx").text('No hay resultados Para Estas Fechas')
  //       //       $("#verPendientesRX").hide();

              

  //       //     } else {
  //       //       trRX = ''
  //       //       nrx = response.length;
  //       //       $("#descargar-rx").show();
  //       //       response.forEach(element => {
  //       //         $("#rx").text('Total Estudios RX :  ' + response.length)
  //       //         $("#verPendientesRX").show();
  //       //         trRX += "<tr><td '>" + element.pat_name + "</td>";
  //       //         trRX += "<td>" + element.modality + "</td>";
  //       //         trRX += "<td >" + element.study_datetime + "</td></tr>";
  //       //         $("#listadoPendientesRX").html(trRX);
  //       //       });

  //       //       }

  //       //     $.ajax({
  //       //       url: '/buscarResultadosDXPorFecha',
  //       //       method: 'get',
  //       //       data: {
  //       //         fechaInicial: $("#fechaInicial6").val(),
                
  //       //       },
  //       //       success: function (response) {
  //       //         if (response.length === 0) {
  //       //           trDX = ''
  //       //           $("#totalEstudios").text('No hay resultados Para Estas Fechas')
  //       //           $("#DX").text('No hay resultados Para Estas Fechas')
  //       //           $("#verPendientesDX").hide();


  //       //         } else {
  //       //           trDX = ''
  //       //           ndx = response.length;
  //       //           $("#descargar-dx").show();
  //       //           response.forEach(element => {
  //       //             $("#dx").text('Total Estudios DX :  ' + response.length)
  //       //             $("#verPendientesDX").show();
  //       //             trDX += "<tr><td '>" + element.pat_name + "</td>";
  //       //             trDX += "<td>" + element.modality + "</td>";
  //       //             trDX += "<td >" + element.study_datetime + "</td></tr>";
  //       //             $("#listadoPendientesDX").html(trDX);
  //       //           });

  //       //           $("#totalEstudios").text('Total de Estudios Realizados entre ' + $("#fechaInicial6").val() + ' Y ' + $("#fechaFinal6").val() + ' : ' + (parseInt(nrx) + parseInt(nct) + parseInt(ndx)))

  //       //         }


  //       //       }
  //       //     })

  //       //     $.ajax({
  //       //       url: '/buscarResultadosCTPorFecha',
  //       //       method: 'get',
  //       //       data: {
  //       //         fechaInicial: $("#fechaInicial6").val(),

  //       //       },
  //       //       success: function (response) {

  //       //         if (response.length === 0) {
  //       //           trCT = ''

  //       //           $("#totalEstudios").text('No hay resultados Para Estas Fechas')
  //       //           $("#ct").text('No hay resultados Para Esta Fecha')
  //       //           $("#verPendientesCT").hide();


  //       //         } else {
  //       //           $("#descargar-ct").show();
  //       //           trCT = ''
  //       //           nct = response.length;
  //       //           response.forEach(element => {
  //       //             $("#ct").text('Total Estudios CT :  ' + response.length)
  //       //             $("#verPendientesCT").show();
  //       //             trCT += "<tr><td '>" + element.pat_name + "</td>";
  //       //             trCT += "<td>" + element.modality + "</td>";
  //       //             trCT += "<td >" + element.study_datetime + "</td></tr>";
  //       //             $("#listadoPendientesCT").html(trCT);
  //       //           });

  //       //           $("#totalEstudios").text('Total de Estudios Realizados En Esta Fecha ' + $("#fechaInicial6").val() + ' : ' + (parseInt(nrx) + parseInt(nct) + parseInt(ndx)))

  //       //         }


  //       //       }
  //       //     })

            

  //       //   },
  //       //   error:function (params) {
            
  //       //   }
  //       // })

        
        
  //     }else{
  //       if ($("#fechaInicial6").val() === "" && $("#fechaFinal6").val() === "") {
  //         $("#fechaInicial6").val("")
  //         $("#fechaFinal6").val("")
  //         toastr.warning('Debes seleccionar un rango de fechas')
  //       } else {
  //         if ($("#fechaInicial6").val() === "" && $("#fechaFinal6").val() != "") {
  //           $("#fechaFinal6").val("")
  //           toastr.warning('Si deseas Buscar por una fecha especifica, selecciona una en la fecha Inicial')
  //         }
  //       }
  //     }
  //   }


  // })

  
  $("#tiposEstudios").sparkline([numeroRX,numeroCT], {
    type: 'pie',
    width: '150',
    height: '150',
    
    //tooltipFormat: $.spformat('{{value}}', 'tooltip-class'),
    sliceColors: ['#ff8c0d', '#686868',]
  });

  $("#estudiosPorMes").sparkline([70, 80, 65, 78, 58, 80, 78, 80, 70, 50, 75, 65, 80, 70, 65, 90, 65, 80, 70, 65, 90], {
    type: 'bar',
    height: '150',
    barWidth: 8,
    barSpacing: 4,
    barColor: '#ff8c0d',
    negBarColor: '#689f38',
    zeroColor: '#689f38',
  });

  //numero de estudios informados
let numeroEstudiosInformados = [];

  let trInformados = '';
  let cont = 0;
  $("#table-listado").hide();
  $("#verListado").hide();
  
  $("#verListado").on('click', function (params) {
    $("#table-listado").toggle('slow');
  })

  if (estudiosInformados.length != 0){ 
  for(var i=0;i<estudiosInformados.length;i++){
    
    if (estudiosInformados[i].fecha === fechaActualjs){
      $("#verListado").show();
       
      cont++;
      numeroEstudiosInformados[0] = (cont);
      trInformados += "<tr><td '>" + estudiosInformados[i].pat_name + "</td>";
      trInformados += "<td>" + estudiosInformados[i].pat_id + "</td> " + "<td>" + estudiosInformados[i].modality + "</td>";
      trInformados += "<td >" + estudiosInformados[i].fecha + "</td></tr>";
       
     }else{
      if (cont != 0) {

        $("#estudiosinformados").text('Total Estudios Hoy :  ' + cont)
        $("#listadoInformados").html(trInformados);
      } else {
        $("#estudiosinformados").text('Aun no hay Estudios Informados para Hoy')
      }
     }

    
    
  }
  }else{
    $("#estudiosinformados").text('Aun no hay Estudios Informados para Hoy')
  }
  
  

  $("#buscarResultadosInformados").on('click',function(e) {
    
    
    if ($("#fechaInicial").val() != "" && $("#fechaFinal").val() != "") {
      estado = ""
      fecha_inicial= $("#fechaInicial").val(),
      fecha_final= $("#fechaFinal").val() 
      if ($("#estado").val() ==="pendiente por informar"){
        estado = null;
      }else{
        estado = $("#estado").val();
      }
      
      listado_id = "#listadoInformados";
      mensaje = "#estudiosinformados";
      verListado = '#verListado'
      inoportuno =''
      consultar(fecha_inicial,fecha_final,estado,listado_id,mensaje,'',verListado,inoportuno)

    // $.ajax({
    //   url:'/buscarResultadosInformados',
    //   method: 'get',
    //   data:{
    //       fechaInicial: $("#fechaInicial").val(),
    //       fechaFinal: $("#fechaFinal").val()
    //   },
    //   success:function (response) {
        
    //     trInformados = ''

    //     response.forEach(element => {
          
    //       if (element.total === 0) {
    //         $("#estudiosinformados").text('No hay resultados Para Estas fechas')
            
    //       } else {
            
    //         $("#estudiosinformados").text('Total Estudios Realizados para estas fechas:  ' + response.length)
    //         $("#verListado").show();
    //         trInformados += "<tr><td '>" + element.pat_name + "</td>";
    //         trInformados += "<td>" + element.pat_id + "</td> " + "<td>" + element.modality + "</td>";
    //         trInformados += "<td >" + element.fecha + "</td></tr>";
    //         $("#listadoInformados").html(trInformados);

    //       }
    //     });
        
    //   }
    // })

    }else{
      
      if ($("#fechaInicial").val() != "" && $("#fechaFinal").val() === ""){
        estado = ""
        fecha_inicial = $("#fechaInicial").val(),
        fecha_final = $("#fechaFinal").val()
        if ($("#estado").val() === "pendiente por informar") {
          estado = null;
        } else {
          estado = $("#estado").val();
        }
        listado_id = "#listadoInformados";
        mensaje = "#estudiosinformados";
        verListado = '#verListado'
        inoportuno =''
        consultar(fecha_inicial, fecha_final, estado, listado_id, mensaje, '',verListado,inoportuno)
        
        
        
        
        
        // $.ajax({
        //   url: '/buscarResultadosInformadosPorFecha',
        //   method: 'get',
        //   data: {
        //     fechaInicial: $("#fechaInicial").val(),
            
        //   },
        //   success: function (response) {
            
        //     trInformados = ''

        //     response.forEach(element => {

        //       if (element.total === 0) {
        //         $("#estudiosinformados").text('No hay resultados Para Esta fechas')

        //       } else {

        //         $("#estudiosinformados").text('Total Estudios Realizados para esta fechas:  ' + response.length)
        //         $("#verListado").show();
        //         trInformados += "<tr><td '>" + element.pat_name + "</td>";
        //         trInformados += "<td>" + element.pat_id + "</td> " + "<td>" + element.modality + "</td>";
        //         trInformados += "<td >" + element.fecha + "</td></tr>";
        //         $("#listadoInformados").html(trInformados);

        //       }
        //     });

        //   }
        // })
      
      }else{
        if ($("#fechaInicial").val() === "" && $("#fechaFinal").val() === ""){
          $("#fechaInicial").val("") 
          $("#fechaFinal").val("")
          toastr.warning('Debes seleccionar un rango de fechas')
        }else{
          if ($("#fechaInicial").val() === "" && $("#fechaFinal").val() != "") {
            $("#fechaFinal").val("")
            toastr.warning('Si deseas Buscar por una fecha especifica, selecciona una en la fecha Inicial')
          }
        }
        
      }
      
    }


  })


  //numero de estudios para transcripcion
let trTrasncripcion ='';

  $("#table-listadoTranscripcion").hide();
  $("#verPendientesTranscripcion").hide();

  $("#verPendientesTranscripcion").on('click', function (params) {
    $("#table-listadoTranscripcion").toggle('slow');
  })
  estudiosPendientesPorLeer.forEach(element=>{
    
    $("#verPendientesTranscripcion").show();
    trTrasncripcion += "<tr><td '>" + element.nombres + "</td>";
    trTrasncripcion += "<td>" + element.estudio_solicitado + "</td>";
    trTrasncripcion += "<td >" + element.fecha + "</td></tr>";
    $("#listadoPendientesTranscripcion").html(trTrasncripcion);
  });
  $("#estudiosPendientesPorTranscribir").text('Total Estudios Pendientes Para Transcribir Hoy : ' + estudiosPendientesPorLeer.length)
  


  $("#buscarResultadosTranscribir").on('click', function (e) {

    
    if ($("#fechaInicial1").val() != "" && $("#fechaFinal1").val() != "") {
    
      fecha_inicial = $("#fechaInicial1").val(),
      fecha_final = $("#fechaFinal1").val()
      estado = "pendiente para transcripcion";
      listado_id = "#listadoPendientesTranscripcion";
      mensaje = "#estudiosPendientesPorTranscribir";
      verListado = "#verPendientesTranscripcion"
      inoportuno = ''
      consultar(fecha_inicial, fecha_final, estado, listado_id, mensaje, '',verListado,inoportuno)
    
    
    
    
    //   $.ajax({
    //   url: '/buscarResultadosPorTranscribir',
    //   method: 'get',
    //   data: {
    //     fechaInicial: $("#fechaInicial1").val(),
    //     fechaFinal: $("#fechaFinal1").val()
    //   },
    //   success: function (response) {
        
    //     trTrasncripcion = '';

    //     if (response.length === 0) {
    //       $(mensaje).text('No hay resultados Para Estas Fechas')
    //     }else{

    //       response.forEach(element => {
            
            
              
  
            
    //           $("#fechaInicial1").val("")
    //           $("#fechaFinal1").val("")
  
    //         $(mensa).text('Total Estudios Pendientes Para Transcribir para estas fechas :  ' + response.length)
    //         $("#verPendientesTranscripcion").show();
            
    //         trTrasncripcion += "<tr><td '>" + element.nombres + "</td>";
    //         trTrasncripcion += "<td>" + element.estudio_solicitado + "</td>";
    //         trTrasncripcion += "<td >" + element.fecha + "</td></tr>";
    //         $("#listadoPendientesTranscripcion").html(trTrasncripcion);
            
    //       });
    //     }

    //   },
    // })
  }else{

      if ($("#fechaInicial1").val() != "" && $("#fechaFinal1").val() === "") {
        fecha_inicial = $("#fechaInicial1").val(),
        fecha_final = $("#fechaFinal1").val()
        estado = "pendiente para transcripcion";
        listado_id = "#listadoPendientesTranscripcion";
        mensaje = "#estudiosPendientesPorTranscribir";
        verListado = "#verPendientesTranscripcion"
        inoportuno = ''
        consultar(fecha_inicial, fecha_final, estado, listado_id, mensaje, '', verListado,inoportuno)
        // $.ajax({
        //   url: '/buscarResultadosPorTranscribirPorFecha',
        //   method: 'get',
        //   data: {
        //     fechaInicial: $("#fechaInicial1").val(),
            
        //   },
        //   success: function (response) {
            
        //     trTrasncripcion = '';

        //     if (response.length === 0) {
        //       $("#estudiosPendientesPorTranscribir").text('No hay resultados Para Esta Fecha')
        //     } else {

        //       response.forEach(element => {
        //         $("#fechaInicial1").val("")
        //         $("#fechaFinal1").val("")

        //         $("#estudiosPendientesPorTranscribir").text('Total Estudios Pendientes Para Transcribir para estas fechas :  ' + response.length)
                
        //         $("#verPendientesTranscripcion").show();
        //         $('#descargar-transcripcion').show();
        //         trTrasncripcion += "<tr><td '>" + element.nombres + "</td>";
        //         trTrasncripcion += "<td>" + element.estudio_solicitado + "</td>";
        //         trTrasncripcion += "<td >" + element.fecha + "</td></tr>";
        //         $("#listadoPendientesTranscripcion").html(trTrasncripcion);

        //       });
        //     }

        //   },
        // })
        
      }else{
        if ($("#fechaInicial1").val() === "" && $("#fechaFinal1").val() === "") {
          $("#fechaInicia1l").val("")
          $("#fechaFinal1").val("")
          toastr.warning('Debes seleccionar un rango de fechas')
        } else {
          if ($("#fechaInicial1").val() === "" && $("#fechaFinal1").val() != "") {
            $("#fechaFinal1").val("")
            toastr.warning('Si deseas Buscar por una fecha especifica, selecciona una en la fecha Inicial')
          }
        }
      }
      
  }
  })


  //ESTUDIOS PENDIENTES PARA VOLVERLOS A REVISAR
  let trRevision = ''
  $("#table-listadoRevision").hide();
  $("#verPendientesRevision").hide();

  $("#verPendientesRevision").on('click', function (params) {
    $("#table-listadoRevision").toggle('slow');
  })
  estudiosPendientesParaRevision.forEach(element=>{
    
    $("#verPendientesRevision").show();
    trRevision += "<tr><td '>" + element.nombres + "</td>";
    trRevision += "<td>" + element.estudio_solicitado + "</td>";
    trRevision += "<td >" + element.fecha + "</td></tr>";
    $("#listadoPendientesRevision").html(trRevision);

  }) 
    
  
  
  $("#estudiosPendientesParaRevision").text('Estudios Pendientes Por Terminar de revisar Hoy : '+estudiosPendientesParaRevision.length)

  $("#buscarResultadosPendientesParaRevision").on('click', function (e) {

    
    if ($("#fechaInicial2").val() != "" && $("#fechaFinal2").val() != "") {

      fecha_inicial = $("#fechaInicial2").val(),
      fecha_final = $("#fechaFinal2").val()
      estado = "pendiente para revision";
      listado_id = "#listadoPendientesRevision";
      mensaje = "#estudiosPendientesParaRevision";
      verListado = "#verPendientesRevision"
      inoportuno = ''
      consultar(fecha_inicial, fecha_final, estado, listado_id, mensaje, '', verListado,inoportuno)

    // $.ajax({
    //   url: '/buscarResultadosPorRevisar',
    //   method: 'get',
    //   data: {
    //     fechaInicial: $("#fechaInicial2").val(),
    //     fechaFinal: $("#fechaFinal2").val()
    //   },
    //   success: function (response) {
        
    //     trRevision = '';

    //     if (response.length === 0) {
    //       $("#estudiosPendientesParaRevision").text('No hay resultados Para Estas Fechas')
    //     } else {

    //       response.forEach(element => {
            

    //         $("#fechaInicial1").val("")
    //         $("#fechaFinal1").val("")

    //         $("#estudiosPendientesParaRevision").text('Total Estudios Pendientes Por Terminar de Revisar para estas fechas :  ' + response.length)
            
    //         $("#verPendientesRevision").show();
    //         trRevision += "<tr><td '>" + element.nombres + "</td>";
    //         trRevision += "<td>" + element.estudio_solicitado + "</td>";
    //         trRevision += "<td >" + element.fecha + "</td></tr>";
    //         $("#listadoPendientesRevision").html(trRevision);

    //       });
    //     }

    //   },
    // })
  }else{
      if ($("#fechaInicial2").val() != "" && $("#fechaFinal2").val() === ""){

        fecha_inicial = $("#fechaInicial2").val(),
        fecha_final = $("#fechaFinal2").val()
        estado = "pendiente para revision";
        listado_id = "#listadoPendientesRevision";
        mensaje = "#estudiosPendientesParaRevision";
        verListado = "#verPendientesRevision"
        inoportuno = ''
        consultar(fecha_inicial, fecha_final, estado, listado_id, mensaje, '', verListado,inoportuno)
        // $.ajax({
        //   url: '/buscarResultadosPorRevisarPorFecha',
        //   method: 'get',
        //   data: {
        //     fechaInicial: $("#fechaInicial2").val(),
        //     fechaFinal: $("#fechaFinal2").val()
        //   },
        //   success: function (response) {
            
        //     trRevision = '';

        //     if (response.length === 0) {
        //       $("#estudiosPendientesParaRevision").text('No hay resultados Para Esta Fecha')
        //     } else {

        //       response.forEach(element => {
                

        //         $("#fechaInicial1").val("")
        //         $("#fechaFinal1").val("")

        //         $("#estudiosPendientesParaRevision").text('Total Estudios Pendientes Por Terminar de Revisar para esta fecha :  ' + response.length)

        //         $("#verPendientesRevision").show();
        //         trRevision += "<tr><td '>" + element.nombres + "</td>";
        //         trRevision += "<td>" + element.estudio_solicitado + "</td>";
        //         trRevision += "<td >" + element.fecha + "</td></tr>";
        //         $("#listadoPendientesRevision").html(trRevision);

        //       });
        //     }

        //   },
        // })  
      }else{
        if ($("#fechaInicial2").val() === "" && $("#fechaFinal2").val() === "") {
          $("#fechaInicial2").val("")
          $("#fechaFinal2").val("")
          toastr.warning('Debes seleccionar un rango de fechas')
        } else {
          if ($("#fechaInicial2").val() === "" && $("#fechaFinal2").val() != "") {
            $("#fechaFinal2").val("")
            toastr.warning('Si deseas Buscar por una fecha especifica, selecciona una en la fecha Inicial')
          }
        }
      }
      
  }
  })




  //ESTUDIOS LISTO PARA SER ENTREGADOS.
  let trEntrega =''
  $("#table-listadoEntrega").hide();
  $("#verPendientesEntrega").hide();

  $("#verPendientesEntrega").on('click', function (params) {
    $("#table-listadoEntrega").toggle('slow');
    
  })
  estudiosParaEntregar.forEach(element=>{
    
    $("#verPendientesEntrega").show();
    trEntrega += "<tr><td '>" + element.nombres + "</td>";
    trEntrega += "<td>" + element.estudio_solicitado + "</td>";
    trEntrega += "<td >" + element.fecha + "</td></tr>";
    $("#listadoPendientesEntrega").html(trEntrega);
  })

  $("#estudiosParaEntregar").text('Estudios Listos Para Ser Entregados Hoy : ' + estudiosParaEntregar.length)



  $("#buscarResultadosParaEntregar").on('click', function (e) {
    
    if ($("#fechaInicial3").val() != "" && $("#fechaFinal3").val() != "") {
   

      fecha_inicial = $("#fechaInicial3").val(),
      fecha_final = $("#fechaFinal3").val()
      estado = "entrega";
      listado_id = "#listadoPendientesEntrega";
      mensaje = "#estudiosParaEntregar";
      verListado = "#verPendientesEntrega"
      inoportuno = ''
      consultar(fecha_inicial, fecha_final, estado, listado_id, mensaje, '', verListado,inoportuno)
   
   
      // $.ajax({
    //   url: '/buscarResultadosParaEntregar',
    //   method: 'get',
    //   data: {
    //     fechaInicial: $("#fechaInicial3").val(),
    //     fechaFinal: $("#fechaFinal3").val()
    //   },
    //   success: function (response) {
        
    //     trEntrega = '';

    //     if (response.length === 0) {
    //       $("#estudiosParaEntregar").text('No hay resultados Para Estas Fechas')
    //     } else {

    //       response.forEach(element => {
            

    //         $("#fechaInicial3").val("")
    //         $("#fechaFinal3").val("")

    //         $("#estudiosParaEntregar").text('Total Estudios Pendientes Para Entregar para estas fechas:  ' + response.length)
            
    //         $("#verPendientesEntrega").show();
    //         trEntrega += "<tr><td '>" + element.nombres + "</td>";
    //         trEntrega += "<td>" + element.estudio_solicitado + "</td>";
    //         trEntrega += "<td >" + element.fecha + "</td></tr>";
    //         $("#listadoPendientesEntrega").html(trEntrega);

    //       });
    //     }

    //   },
    // })
  }else{
      if ($("#fechaInicial3").val() != "" && $("#fechaFinal3").val() === ""){


        fecha_inicial = $("#fechaInicial3").val(),
        fecha_final = $("#fechaFinal3").val()
        estado = "entrega";
        listado_id = "#listadoPendientesEntrega";
        mensaje = "#estudiosParaEntregar";
        verListado = "#verPendientesEntrega"
        inoportuno = ''
        consultar(fecha_inicial, fecha_final, estado, listado_id, mensaje, '', verListado,inoportuno)
        // $.ajax({
        //   url: '/buscarResultadosParaEntregarPorFecha',
        //   method: 'get',
        //   data: {
        //     fechaInicial: $("#fechaInicial3").val(),
        //     fechaFinal: $("#fechaFinal3").val()
        //   },
        //   success: function (response) {
            
        //     trEntrega = '';

        //     if (response.length === 0) {
        //       $("#estudiosParaEntregar").text('No hay resultados Para Esta Fecha')
        //     } else {

        //       response.forEach(element => {
                

        //         $("#fechaInicial3").val("")
        //         $("#fechaFinal3").val("")

        //         $("#estudiosParaEntregar").text('Total Estudios Pendientes Para Entregar para esta fecha:  ' + response.length)
        //         $('#descargar-entrega').show()
        //         $("#verPendientesEntrega").show();
        //         trEntrega += "<tr><td '>" + element.nombres + "</td>";
        //         trEntrega += "<td>" + element.estudio_solicitado + "</td>";
        //         trEntrega += "<td >" + element.fecha + "</td></tr>";
        //         $("#listadoPendientesEntrega").html(trEntrega);

        //       });
        //     }

        //   },
        // })  
      }else{
        if ($("#fechaInicial3").val() === "" && $("#fechaFinal3").val() === "") {
          $("#fechaInicial3").val("")
          $("#fechaFinal3").val("")
          toastr.warning('Debes seleccionar un rango de fechas')
        } else {
          if ($("#fechaInicial3").val() === "" && $("#fechaFinal3").val() != "") {
            $("#fechaFinal3").val("")
            toastr.warning('Si deseas Buscar por una fecha especifica, selecciona una en la fecha Inicial')
          }
        }
      }
      
  }

  })

  
  let trDevueltos = ''
  $("#table-listadoDevueltos").hide();
  $("#verPendientesDevueltos").hide();

  $("#verPendientesDevueltos").on('click', function (params) {
    $("#table-listadoDevueltos").toggle('slow');
    
  })
  estudiosDevueltos.forEach(element=>{
    
    $("#verPendientesDevueltos").show();
    trDevueltos += "<tr><td '>" + element.nombres + "</td>";
    trDevueltos += "<td>" + element.estudio_solicitado + "</td>";
    trDevueltos += "<td >" + element.fecha + "</td></tr>";
    $("#listadoPendientesDevueltos").html(trDevueltos);
  })

  $("#estudiosDevueltos").text('Estudios Devueltos Hoy : ' + estudiosDevueltos.length);
  $("#buscarResultadosDevueltos").on('click', function (e) {

    if ($("#fechaInicial4").val() != "" && $("#fechaFinal4").val() != ""){
    
      fecha_inicial = $("#fechaInicial4").val(),
      fecha_final = $("#fechaFinal4").val()
      estado = "devolucion";
      listado_id = "#listadoPendientesDevueltos";
      mensaje = "#estudiosDevueltos";
      verListado = "#verPendientesDevueltos"
      inoportuno = ''
      consultar(fecha_inicial, fecha_final, estado, listado_id, mensaje, '', verListado,inoportuno)

    // $.ajax({
    //   url: '/buscarResultadosDevueltos',
    //   method: 'get',
    //   data: {
    //     fechaInicial: $("#fechaInicial4").val(),
    //     fechaFinal: $("#fechaFinal4").val()
    //   },
    //   success: function (response) {
        
    //     trDevueltos = '';

    //     if (response.length === 0) {
    //       $("#estudiosDevueltos").text('No hay resultados Para Estas Fechas')
    //     } else {

    //       response.forEach(element => {
            

    //         $("#fechaInicial4").val("")
    //         $("#fechaFinal4").val("")

    //         $("#estudiosDevueltos").text('Total Estudios Devueltos para estas fechas :  ' + response.length)

            
    //         $("#verPendientesDevueltos").show();
    //         trDevueltos += "<tr><td '>" + element.nombres + "</td>";
    //         trDevueltos += "<td>" + element.estudio_solicitado + "</td>";
    //         trDevueltos += "<td >" + element.fecha + "</td></tr>";
    //         $("#listadoPendientesDevueltos").html(trDevueltos);

    //       });
    //     }

    //   },
    // })
    }else{
      if ($("#fechaInicial4").val() != "" && $("#fechaFinal4").val() === ""){

        fecha_inicial = $("#fechaInicial4").val()
        fecha_final = $("#fechaFinal4").val()
        estado = "devolucion";
        listado_id = "#listadoPendientesDevueltos";
        mensaje = "#estudiosDevueltos";
        verListado = "#verPendientesDevueltos"
        inoportuno = ''
        consultar(fecha_inicial, fecha_final, estado, listado_id, mensaje, '', verListado,inoportuno)
        // $.ajax({
        //   url: '/buscarResultadosDevueltosPorFecha',
        //   method: 'get',
        //   data: {
        //     fechaInicial: $("#fechaInicial4").val(),
        //     fechaFinal: $("#fechaFinal4").val()
        //   },
        //   success: function (response) {
            
        //     trDevueltos = '';

        //     if (response.length === 0) {
        //       $("#estudiosDevueltos").text('No hay resultados Para Esta Fecha')
        //     } else {

        //       response.forEach(element => {
                

        //         $("#fechaInicial4").val("")
        //         $("#fechaFinal4").val("")

        //         $("#estudiosDevueltos").text('Total Estudios Devueltos para esta fecha :  ' + response.length)


        //         $("#verPendientesDevueltos").show();
        //         $("#descargar-devueltos").show();
        //         trDevueltos += "<tr><td '>" + element.nombres + "</td>";
        //         trDevueltos += "<td>" + element.estudio_solicitado + "</td>";
        //         trDevueltos += "<td >" + element.fecha + "</td></tr>";
        //         $("#listadoPendientesDevueltos").html(trDevueltos);

        //       });
        //     }

        //   },
        // })  
      }else{
        if ($("#fechaInicial4").val() === "" && $("#fechaFinal4").val() === "") {
          $("#fechaInicial4").val("")
          $("#fechaFinal4").val("")
          toastr.warning('Debes seleccionar un rango de fechas')
        } else {
          if ($("#fechaInicial4").val() === "" && $("#fechaFinal4").val() != "") {
            $("#fechaFinal4").val("")
            toastr.warning('Si deseas Buscar por una fecha especifica, selecciona una en la fecha Inicial')
          }
        }
      }
        
    }
  })

  //entregados inoportunamente
  let trInoportunos =''
  $("#table-listadoInoportunos").hide();
  $("#verPendientesInoportunos").hide();

  $("#verPendientesInoportunos").on('click', function (params) {
    $("#table-listadoInoportunos").toggle('slow');
    
  })

  estudiosInoportunos.forEach(element => {
     if(element.fecha_entregado > element.fecha_entrega_oportuna){
      contadorInoportunos ++;

       $("#verPendientesInoportunos").show();
       trInoportunos += "<tr><td '>" + element.nombres + "</td>";
       trInoportunos += "<td>" + element.estudio_solicitado + "</td>";
       trInoportunos += "<td >" + element.fecha + "</td></tr>";
       $("#listadoPendientesInoportunos").html(trInoportunos);
     }
  });
$("#estudiosInoportunos").text('Estudios Inoportunos hoy : '+ contadorInoportunos);

//falta hacer la consulta porrango de fechas;

  $("#buscarResultadosInoportunos").on('click', function (e) {

    if ($("#fechaInicial5").val() != "" && $("#fechaFinal5").val() != "") {
      
      fecha_inicial = $("#fechaInicial5").val()
      fecha_final = $("#fechaFinal5").val()
      estado = "entrega";
      listado_id = "#listadoPendientesInoportunos";
      mensaje = "#estudiosInoportunos";
      verListado = "#verPendientesInoportunos"
      inoportuno = 'inoportuno'
      consultar(fecha_inicial, fecha_final, estado, listado_id, mensaje, '', verListado,inoportuno)

      // $.ajax({
      //   url: '/buscarResultadosInoportunos',
      //   method: 'get',
      //   data: {
      //     fechaInicial: $("#fechaInicial5").val(),
      //     fechaFinal: $("#fechaFinal5").val()
      //   },
      //   success: function (response) {
          
      //     trInoportunos = '';
      //     contadorInoportunos =0;

      //     if (response.length === 0) {
      //       $("#estudiosInoportunos").text('No hay resultados Para Estas Fechas')
      //     } else {

      //       response.forEach(element => {
              

      //         $("#fechaInicial5").val("")
      //         $("#fechaFinal5").val("")

      //         if(element.fecha_entregado > element.fecha_entrega_oportuna){
      //           contadorInoportunos ++;
                


      //           $("#verPendientesInoportunos").show();
      //           trInoportunos += "<tr><td '>" + element.nombres + "</td>";
      //           trInoportunos += "<td>" + element.estudio_realizado + "</td>";
      //           trInoportunos += "<td>" + element.fecha + "</td>";
      //           trInoportunos += "<td>" + element.fecha_entrega_oportuna + "</td>";
      //           trInoportunos += "<td >" + element.fecha_entregado + "</td></tr>";
      //           $("#listadoPendientesInoportunos").html(trInoportunos);
      //           $("#estudiosInoportunos").text('Total Estudios Inoportunos para estas fechas :  ' + contadorInoportunos)

      //         }


      //       });
      //     }

      //   },
      // })
    } else {
      if ($("#fechaInicial5").val() != "" && $("#fechaFinal5").val() === ""){

        fecha_inicial = $("#fechaInicial5").val()
        fecha_final = $("#fechaFinal5").val()
        estado = "entrega";
        listado_id = "#listadoPendientesInoportunos";
        mensaje = "#estudiosInoportunos";
        verListado = "#verPendientesInoportunos"
        inoportuno = 'inoportuno'
        consultar(fecha_inicial, fecha_final, estado, listado_id, mensaje, '', verListado,inoportuno)
        // $.ajax({
        //   url: '/buscarResultadosInoportunosPorFecha',
        //   method: 'get',
        //   data: {
        //     fechaInicial: $("#fechaInicial5").val(),
        //     fechaFinal: $("#fechaFinal5").val()
        //   },
        //   success: function (response) {
            
        //     trInoportunos = '';
        //     contadorInoportunos = 0;

        //     if (response.length === 0) {
        //       $("#estudiosInoportunos").text('No hay resultados Para Esta Fecha')
        //     } else {

        //       response.forEach(element => {
                

        //         $("#fechaInicial5").val("")
        //         $("#fechaFinal5").val("")
        //         if(element.fecha_entregado !="Null"){

        //           if (element.fecha_entregado > element.fecha_entrega_oportuna) {
        //             contadorInoportunos++;
  
  
  
        //             $("#verPendientesInoportunos").show();
        //             trInoportunos += "<tr><td '>" + element.nombres + "</td>";
        //             trInoportunos += "<td>" + element.estudio_realizado + "</td>";
        //             trInoportunos += "<td>" + element.fecha + "</td>";
        //             trInoportunos += "<td>" + element.fecha_entrega_oportuna + "</td>";
        //             trInoportunos += "<td >" + element.fecha_entregado + "</td></tr>";
        //             $("#listadoPendientesInoportunos").html(trInoportunos);
        //             $("#estudiosInoportunos").text('Total Estudios Inoportunos para esta fecha :  ' + contadorInoportunos)
  
        //           }

        //         }  

        //       });
        //     }

        //   },
        // })
      }else{
        if ($("#fechaInicial5").val() === "" && $("#fechaFinal5").val() === "") {
          $("#fechaInicial5").val("")
          $("#fechaFinal5").val("")
          toastr.warning('Debes seleccionar un rango de fechas')
        } else {
          if ($("#fechaInicial5").val() === "" && $("#fechaFinal5").val() != "") {
            $("#fechaFinal5").val("")
            toastr.warning('Si deseas Buscar por una fecha especifica, selecciona una en la fecha Inicial')
          }
        }
      }
      
    }
  })




 



});