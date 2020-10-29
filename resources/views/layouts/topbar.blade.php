<header class="page-topbar" id="header">
      <div class="navbar navbar-fixed"> 
        <nav class="navbar-main navbar-color nav-collapsible sideNav-lock navbar-light">
          <div class="nav-wrapper">
          <!--  <div class="header-search-wrapper hide-on-med-and-down"><i class="material-icons">search</i>
              <input class="header-search-input z-depth-2" type="text" name="Search" placeholder="Explore Materialize">
            </div>-->
            <ul class="navbar-list right">
              
              <li class="hide-on-med-and-down" style="color:black;">Bienvenido {{ auth()->user()->name }}</li>
              <li class="hide-on-med-and-down"><a class="waves-effect waves-block waves-light toggle-fullscreen" href="javascript:void(0);"><i class="material-icons">settings_overscan</i></a></li>
              <li class="hide-on-large-only"><a class="waves-effect waves-block waves-light search-button" href="javascript:void(0);"><i class="material-icons">search</i></a></li>
              <li>
                <a class="waves-effect waves-block waves-light profile-button" href="javascript:void(0);" data-target="profile-dropdown"><span class="avatar-status avatar-online"><img src="/materialice/app-assets/images/user/user1.png" alt="avatar"><i></i></span></a></li>
              
            </ul>
            <!-- translation-button-->
            
            <!-- notifications-dropdown-->
            
            <!-- profile-dropdown-->
            <ul class="dropdown-content" id="profile-dropdown">
              <!--<li><a class="grey-text text-darken-1" href="user-profile-page.html"><i class="material-icons">person_outline</i> Profile</a></li>
              <li><a class="grey-text text-darken-1" href="app-chat.html"><i class="material-icons">chat_bubble_outline</i> Chat</a></li>
              <li><a class="grey-text text-darken-1" href="page-faq.html"><i class="material-icons">help_outline</i> Help</a></li>
              <li class="divider"></li>
              <li><a class="grey-text text-darken-1" href="user-lock-screen.html"><i class="material-icons">lock_outline</i> Lock</a></li>-->
              <li>
                <a class="grey-text text-darken-1" href="{{ route('logout')  }}"onclick="event.preventDefault();
                            document.getElementById('logout-form').submit();">
                  <i class="material-icons">keyboard_tab</i> Cerrar Sesión {{ auth()->user()->name }}
                </a>
                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                            @csrf
                  </form>
              </li>
              
                
            </ul>
          </div>
          <nav class="display-none search-sm">
            <div class="nav-wrapper">
              <form>
                <div class="input-field">
                  <input class="search-box-sm" type="search" required="">
                  <label class="label-icon" for="search"><i class="material-icons search-sm-icon">search</i></label><i class="material-icons search-sm-close">close</i>
                </div>
              </form>
            </div>
          </nav>
        </nav>
      </div>
    </header>
    