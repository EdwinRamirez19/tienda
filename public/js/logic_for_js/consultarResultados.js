$(document).ready(function () {

$("#ocultarResultados").hide()
let identificacion ='';
let tr= ''
    $("#resultados-limpiar").hide()

$('#identificacion').keyup(function () {
    this.value = (this.value + '').replace(/[^0-9]/g, '');
});

$("#buscar").on('click',function (params) {
    toastr.success('Espera un poco Estamos cargando los Resultados')
    identificacion = $("#identificacion").val();
    console.log(identificacion)
    $.ajax({
        url:'/consultarPaciente/'+identificacion,
        method: 'GET',
        success:function(response) {
            console.log(response)
            $("#resultados-limpiar").show()
            if(response.length === 0){
                toastr.warning('Tus Resultados aun no estan listos, Vuelve mas tarde')
            }else{
                toastr.success('Tus Resultados fueron  Encontrados, desliza hacia abajo ')

                response.forEach(element => {
                    if (element.estado === "entrega" || element.estado === "entregado" || element.estado === "entregado por la web" ){
                        tr += "<tr><td '>" + element.nombres + "</td>";
                        tr += "<td>" + element.identificacion + "</td> " + "<td>" + element.estudio_realizado + "</td>";
                        tr += "<td >" + element.fecha + "</td>"
                        tr += "<td>" + "<a id='descargarPDF' target='blank_new' class='btn waves-effect waves-light border-round gradient-45deg-amber-amber col s14' href='/informederesultados/" + element.id + "'>" + 'descargar' + "</a>" + "</td></tr>";
                    }else{
                        tr ="Sus resultados no estan Listos aun, estaran disponibles para esta fecha "+ element.fecha_entrega_oportuna
                    }
                    

                    
                });
                
                
                    
                
                
                $("#resultados").html(tr);
                $("#login-page").hide();
                $("#ocultarResultados").show()
                $("table #tresultados").show()
                $("table tfoot").hide()

                $("#identificacion").val("")
                tr=''
            }

           

            
        },
        erorr: function(error) {
            console.log(error)
        }
    })
})

//devolver informes por mala redaccion



    $("#resultados-limpiar").on('click',function (params) {
        $("#ocultarResultados").hide()
        tr=''
        $(this).hide()
        $("table tfoot").show()
    })

})