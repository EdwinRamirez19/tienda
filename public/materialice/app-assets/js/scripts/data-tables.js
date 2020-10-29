/*
 * DataTables - Tables
 */


$(function () {

  // Simple Data Table

  $('#data-table-simple').DataTable({
    "responsive": true,
    "order":[],
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
    
    
  });
  $('#scroll-vert-hor tfoot th').each(function () {
    var title = $(this).text();
    if(title==="Fecha"){
      $(this).html('<input type="text" class="Fecha"  placeholder="' + title + '" />');  
    }else{
      if(title=="Modalidad"){
        $(this).html('<input type="text" class="modalidad"  placeholder="' + title + '" />');  
      }else{
        if (title ==="Fecha de Ingreso"){
          $(this).html('<input type="text" class="Fecha"  placeholder="' + title + '" />');  
        }else{
          if (title ==="Estado del informe"){
            $(this).html('<input type="text" class="estado_informe" placeholder="' + title + '" />');
          }else{
            $(this).html('<input type="text" placeholder="' + title + '" />');
          }
          
        }
        
      }
      
    }
    
  });

  $('#informes tfoot th').each(function () {
    var title = $(this).text();
    if (title === "Fecha") {
      $(this).html('<input type="text" class="Fecha"  placeholder="' + title + '" />');
    } else {
      if (title == "Modalidad") {
        $(this).html('<input type="text" class="modalidad"  placeholder="' + title + '" />');
      } else {
        if (title === "Fecha de Ingreso") {
          $(this).html('<input type="text" class="Fecha"  placeholder="' + title + '" />');
        } else {
          if (title === "Estado del informe") {
            $(this).html('<input type="text" class="estado_informe" placeholder="' + title + '" />');
          } else {
            $(this).html('<input type="text" placeholder="' + title + '" />');
          }

        }

      }

    }

  });

  $("#filtroFecha").on('change', function (params) {
    $(".Fecha").val("")
    $(".Fecha").val($("#filtroFecha").val())
    $(".Fecha").keyup();
    
  })
  
  $("#modalidad").change(function(params) {
    $(".modalidad").val("")
    $(".modalidad").val($("#modalidad").val())
    $(".modalidad").keyup();
  })
  
    
  $("#estado_informe").change(function (params) {
    $(".estado_informe").val("")
    $(".estado_informe").val($("#estado_informe").val())
    $(".estado_informe").keyup();
  })

  
     
  

  // Row Grouping Table

  var table = $('#data-table-row-grouping').DataTable({
    "responsive": true,
    "columnDefs": [{
      "visible": false,
      "targets": 2
    }],
    "order": [
      [2, 'asc']
    ],
    "displayLength": 25,
    "drawCallback": function (settings) {
      var api = this.api();
      var rows = api.rows({
        page: 'current'
      }).nodes();
      var last = null;

      api.column(2, {
        page: 'current'
      }).data().each(function (group, i) {
        if (last !== group) {
          $(rows).eq(i).before(
            '<tr class="group"><td colspan="6">' + group + '</td></tr>'
          );

          last = group;
        }
      });
    }
  });

  // Page Length Option Table

  $('#page-length-option').DataTable({
    "responsive": true,
    "lengthMenu": [
      [10, 25, 50, -1],
      [10, 25, 50, "All"]
    ]
  });

  // Dynmaic Scroll table

  $('#scroll-dynamic').DataTable({
    "responsive": true,
    scrollY: '50vh',
    scrollCollapse: true,
    paging: false
  })

  // Horizontal And Vertical Scroll Table

  $('#scroll-vert-hor').DataTable({
    "scrollY": 650,
    "scrollX": true,
    "order": [[1, 'asc']],
    "language": {
      "emptyTable":			"No hay datos disponibles en la tabla.",
        "info": "Mostrado del _START_ al _END_ de _TOTAL_ ",
				"infoEmpty":			"Mostrando 0 registros de un total de 0.",
				"infoFiltered":			"(filtrados de un total de _MAX_ registros)",
				"infoPostFix":			"Entradas",
        "lengthMenu":			"Mostrar _MENU_ registros",
        'classMenu':"browser-default",
				"loadingRecords":		"Cargando...",
				"processing":			"Procesando...",
				"search":			"BUSQUEDA:",
				"searchPlaceholder":		"Ingrese informacion para filtrar",
				"zeroRecords":			"No se han encontrado coincidencias.",
				"paginate": {
					"first":			"Primera",
					"last":				"Última",
					"next":				"Siguiente",
					"previous":			"Anterior"
				},
				"aria": {
					"sortAscending":	"Ordenación ascendente",
					"sortDescending":	"Ordenación descendente"
				},
			},
    "lengthMenu": [[ 10, 20, 25, 50, -1], [ 10, 20, 25, 50, "Todos"]],
    
  })
  $('#informes').DataTable({
    "scrollY": 650,
    "scrollX": true,
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
    "lengthMenu": [[10, 20, 25, 50, -1], [10, 20, 25, 50, "Todos"]],

  })

  // DataTable
  var table = $('#scroll-vert-hor').DataTable();

  // Apply the search
  table.columns().every(function () {
    var that = this;

    $('input', this.footer()).on('keyup change clear', function () {
      if (that.search() !== this.value) {
        that
          .search(this.value)
          .draw();
      }
    });
  });
  var table = $('#informes').DataTable();

  // Apply the search
  table.columns().every(function () {
    var that = this;

    $('input', this.footer()).on('keyup change clear', function () {
      console.log(this.value)
      if (that.search() !== this.value) {
        that
          .search(this.value)
          .draw();
      }
    });
  });
  // Multi Select Table

  $('#multi-select').DataTable({
    responsive: true,
    "paging": true,
    "ordering": false,
    "info": false,
    "columnDefs": [{
      "visible": false,
      "targets": 2
    }],


  });

});



// Datatable click on select issue fix
$(window).on('load', function () {
  $(".dropdown-content.select-dropdown li").on("click", function () {
    var that = this;
    setTimeout(function () {
      if ($(that).parent().parent().find('.select-dropdown').hasClass('active')) {
        // $(that).parent().removeClass('active');
        $(that).parent().parent().find('.select-dropdown').removeClass('active');
        $(that).parent().hide();
      }
    }, 100);
  });
});

var checkbox = $('#multi-select tbody tr th input')
var selectAll = $('#multi-select .select-all')

// Select A Row Function

$(document).ready(function () {
  checkbox.on('click', function () {
    $(this).parent().parent().parent().toggleClass('selected');
  })

  checkbox.on('click', function () {
    if ($(this).attr("checked")) {
      $(this).attr('checked', false);
    } else {
      $(this).attr('checked', true);
    }
  })


  // Select Every Row 

  selectAll.on('click', function () {
    $(this).toggleClass('clicked');
    if (selectAll.hasClass('clicked')) {
      $('#multi-select tbody tr').addClass('selected');
    } else {
      $('#multi-select tbody tr').removeClass('selected');
    }

    if ($('#multi-select tbody tr').hasClass('selected')) {
      checkbox.prop('checked', true);

    } else {
      checkbox.prop('checked', false);

    }
  })
})