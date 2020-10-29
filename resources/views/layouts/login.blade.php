<!DOCTYPE html>
<html class="loading" lang="en" data-textdirection="ltr">
  <!-- BEGIN: Head-->
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
    <meta name="description" content="Materialize is a Material Design Admin Template,It's modern, responsive and based on Material Design by Google.">
    <meta name="keywords" content="materialize, admin template, dashboard template, flat admin template, responsive admin template, eCommerce dashboard, analytic dashboard">
    <meta name="author" content="ThemeSelect">
    <title>Inicio de Sesion | GoTelemedicina</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="apple-touch-icon" href="/materialice/app-assets/images/favicon/apple-touch-icon-152x152.png">
    <link rel="shortcut icon" type="image/x-icon" href="/materialice/app-assets/images/favicon/favicon-32x32.png">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!-- BEGIN: VENDOR CSS-->
    <link rel="stylesheet" type="text/css" href="/materialice/app-assets/vendors/vendors.min.css">
    <!-- END: VENDOR CSS-->
    <!-- BEGIN: Page Level CSS-->
    <link rel="stylesheet" type="text/css" href="/materialice/app-assets/css/themes/vertical-gradient-menu-template/materialize.css">
    <link rel="stylesheet" type="text/css" href="/materialice/app-assets/css/themes/vertical-gradient-menu-template/style.css">
    <link rel="stylesheet" type="text/css" href="/materialice/app-assets/css/pages/login.css">
    <!-- END: Page Level CSS-->
    <!-- BEGIN: Custom CSS-->
    <style>
     .imagenLogin{
        width: 400px;
        padding-top: 20px;
        padding-bottom: 20px;
        
        
    }

    @media all and (max-width: 400px) {
      .imagenLogin{
        width: 400px;
        padding-top: 20px;
        padding-bottom: 20px;
        max-width: 300px;
        
    }
    }
    
    </style>
    <link rel="stylesheet" type="text/css" href="/materialice/app-assets/css/custom/custom.css">
    <!-- END: Custom CSS-->
  </head>
  
  <!-- END: Head-->
  <body class="vertical-layout page-header-light vertical-menu-collapsible vertical-gradient-menu 1-column login-bg  blank-page blank-page" data-open="click" data-menu="vertical-gradient-menu" data-col="1-column">
    <div class="row">
        <div class="col s12">
            <div class="container">
                <div id="login-page" class="row">
                    <div class="col s12 m6 l4 z-depth-4 card-panel border-radius-6 login-card bg-opacity-8">
                        @yield('content')
                    </div>
                </div>
            </div>    
        </div>
    </div>

    
    <script src="/materialice/app-assets/js/vendors.min.js" type="text/javascript"></script>
    <script src="/materialice/app-assets/js/plugins.js" type="text/javascript"></script>
    <script src="/materialice/app-assets/js/custom/custom-script.js" type="text/javascript"></script>
    
  </body>
</html>