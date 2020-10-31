<!DOCTYPE html>
<html class="loading" lang="en" data-textdirection="ltr">
  <!-- BEGIN: Head-->
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
    <meta name="description" content="Gotelemedicina aplicacion para administracion de Empresas dedicadas a imagenes Diagnosticas">
    <meta name="keywords" content="Con grandes y eficientes modulos para informar estudios,transcripcion y entrega de informes digitales.">
    <meta name="author" content="ThemeSelect">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title> Tienda</title>
    <link rel="apple-touch-icon" href="/materialice/app-assets/images/favicon/apple-touch-icon-152x152.png">
    <link rel="shortcut icon" type="image/x-icon" href="/materialice/app-assets/images/favicon/favicon-32x32.png">
    <link href="/css/libreriasCSS/iconmaterialize.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="/materialice/app-assets/vendors/vendors.min.css">
    <link rel="stylesheet" href="/css/toastr.min.css">
    <script src="/js/libreriasJS/jquery.min.js"></script>
    <script src="/js/libreriasJS/toastr.min.js"></script>
    <link rel="stylesheet" type="text/css" href="/css/force.css">
    <link rel="stylesheet" type="text/css" href="/materialice/app-assets/css/themes/vertical-gradient-menu-template/materialize.css">
    <link rel="stylesheet" type="text/css" href="/materialice/app-assets/css/themes/vertical-gradient-menu-template/style.css">
    <link rel="stylesheet" type="text/css" href="/materialice/app-assets/css/pages/dashboard.css">
    <link rel="stylesheet" type="text/css" href="/materialice/app-assets/css/custom/custom.css">
    <link rel="stylesheet" type="text/css" href="/materialice/app-assets/vendors/data-tables/css/jquery.dataTables.min.css">
    <link rel="stylesheet" type="text/css" href="/materialice/app-assets/vendors/data-tables/extensions/responsive/css/responsive.dataTables.min.css">
    <link rel="stylesheet" type="text/css" href="/materialice/app-assets/vendors/data-tables/css/select.dataTables.min.css">
    <link rel="stylesheet" type="text/css" href="/materialice/app-assets/css/pages/data-tables.css">
    <link rel="stylesheet" href="/css/libreriasCSS/select2.css">
     <link rel="stylesheet" type="text/css" href="/materialice/app-assets/vendors/sweetalert/sweetalert.css">
     

  </head>
  <!-- END: Head-->
  <body class="vertical-layout page-header-light vertical-menu-collapsible vertical-gradient-menu 2-columns  " data-open="click" data-menu="vertical-gradient-menu" data-col="2-columns">
    
    @include('layouts.topbar')<!-- END: Header-->

    <!-- BEGIN: SideNav-->
    <aside class="sidenav-main nav-expanded nav-lock nav-collapsible sidenav-dark gradient-45deg-amber-amber sidenav-gradient sidenav-active-rounded">
      <div class="brand-sidebar">
        <h1 class="logo-wrapper"><img src="/materialice/app-assets/images/logo/generic-logo.png"  width="250px; " height="65px"/ style="margin-bottom:20px;"></h1>
      </div>
      <ul class="sidenav sidenav-collapsible leftside-navigation collapsible sidenav-fixed menu-shadow" id="slide-out" data-menu="menu-navigation" data-collapsible="menu-accordion">
        @include('layouts.menu')
      </ul>
      <div class="navigation-background"></div><a class="sidenav-trigger btn-sidenav-toggle btn-floating btn-medium waves-effect gradient-45deg-amber-amber hide-on-large-only" href="#" data-target="slide-out"><i class="material-icons">menu</i></a>
    </aside>
    <!-- BEGIN: Page Main-->
    
    <div id="main">
      <div class="row">
        <div class="col s12">
           
          <div class="container">
          <div class="center section" id="circulo" style="margin-top:250px; margin-bottom:250px;">
              <div class="preloader-wrapper big active ">
              <div class="spinner-layer spinner-blue-only">
                <div class="circle-clipper left">
                  <div class="circle"></div>
                </div><div class="gap-patch">
                  <div class="circle"></div>
                </div><div class="circle-clipper right">
                  <div class="circle"></div>
                </div>
              </div>
            </div>
          </div>
          
          
            @if(session('crear'))
            
                        <div id="alert" class="card-alert card gradient-45deg-green-teal">
                          <div class="card-content white-text">
                            <p>
                              <i class="material-icons">check</i> {{session('crear')}}</p>
                          </div>
                          <button type="button" class="close white-text" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">×</span>
                          </button>
                        </div>
                    @endif
                    @if(session('editar'))
                       
                        <div id ="alert" class="card-alert card gradient-45deg-light-blue-cyan">
                          <div class="card-content white-text">
                            <p>
                              <i class="material-icons">info_outline</i> {{session('editar')}}</p>
                          </div>
                          <button type="button" class="close white-text" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">×</span>
                          </button>

                        </div>
                    @endif
                    @if(session('eliminar'))
                        
                        <div id="alert"class="card-alert card gradient-45deg-red-pink">
                          <div class="card-content white-text">
                            <p>
                              <i class="material-icons">error</i> {{session('eliminar')}}</p>
                          </div>
                          <button type="button" class="close white-text" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">×</span>
                          </button>
                        </div>
                    @endif
            <div class="hide" id="contenido" >
              @yield('content')
            </div>
            @yield('home')
            
          </div>
        </div>
      </div>
    </div>
    <!-- END: Page Main-->

    <!-- BEGIN: Footer-->
<div class="hide" id="footer">
    <footer class="page-footer footer footer-static footer-light navbar-border navbar-shadow ">
      <div class="footer-copyright">
        <div class="container"><span>&copy; 2019          <a href="#" target="_blank">Materialize</a> All rights reserved.</span><span class="right hide-on-small-only">Design and Developed by <a href="#">Materialize</a></span></div>
      </div>
    </footer>
  </div>
    
    <script src="/materialice/app-assets/js/vendors.min.js" type="text/javascript"></script>
    <script src="/materialice/app-assets/vendors/data-tables/js/jquery.dataTables.min.js" type="text/javascript"></script>
    <script src="/materialice/app-assets/vendors/data-tables/extensions/responsive/js/dataTables.responsive.min.js" ></script>
    <script src="/materialice/app-assets/vendors/data-tables/js/dataTables.select.min.js" type="text/javascript"></script>
    <script src="/materialice/app-assets/js/plugins.js" type="text/javascript"></script>
    <script src="/materialice/app-assets/js/custom/custom-script.js" type="text/javascript"></script>
    <script src="/materialice/app-assets/js/scripts/data-tables.js" type="text/javascript"></script>
    {{-- <script src="/materialice/app-assets/js/scripts/dashboard-ecommerce.js" type="text/javascript"></script> --}}
    <script src="/materialice/app-assets/vendors/sparkline/jquery.sparkline.min.js" type="text/javascript"></script>
    <script src="/materialice/app-assets/vendors/chartjs/chart.min.js"></script>
    <script src="/materialice/app-assets/vendors/sweetalert/sweetalert.min.js"></script>
     <script src="/materialice/app-assets/js/scripts/extra-components-sweetalert.js" type="text/javascript"></script>
    
    <script>
      $("#alert").fadeTo(1500, 500).slideUp(500, function(){ $("#alert").alert('close'); });

        window.addEventListener('load',()=>{
        setTimeout(() => {
          document.getElementById('circulo').className='hide'
          document.getElementById('contenido').className=''
          document.getElementById('footer').className=''
          
        }, 1000);
      })
    </script>
    <script src="/ckeditor/ckeditor.js"></script>
    <script type="text/javascript" src="/ckeditor/adapters/jquery.js"></script>
    <script src="/js/libreriasJS/select2.min.js"></script>
      
    
  </body>
</html>