import React from 'react';

class Sidebar extends React.Component {
  render() {

    return (
     <div> 	
      <nav class="side-navbar">
       <div class="side-navbar-wrapper">

        <div class="sidenav-header d-flex align-items-center justify-content-center">

          <div class="sidenav-header-inner text-center">
             <img src="img/avatar-1.png" alt="person" class="img-fluid rounded-circle" />
            <h2 class="h5">Navjot Singh</h2><span>Project Atchitect</span>
          </div>
          <div class="sidenav-header-logo"><a href="index.html" class="brand-small text-center"> <strong>B</strong><strong class="text-primary">D</strong></a></div>
        </div>

        <div class="main-menu">
          <h5 class="sidenav-heading">Main</h5>
          <ul id="side-main-menu" class="side-menu list-unstyled">                  
            <li><a href="/"> <i class="icon-home"></i>Dashboard                             </a></li>
            <li><a href="#exampledropdownDropdown" aria-expanded="false" data-toggle="collapse"> <i class="icon-interface-windows"></i>User Management</a>
              <ul id="exampledropdownDropdown" class="collapse list-unstyled ">
                <li><a href="/Student">Student</a></li>
                <li><a href="/Teacher">Teacher</a></li>
                <li><a href="/Principal">Principal</a></li>
              </ul>
            </li>
            <li><a href="/UserManagement"> <i class="icon-form"></i>User Management                             </a></li>
            <li><a href="charts.html"> <i class="fa fa-bar-chart"></i>Charts                             </a></li>
            <li><a href="tables.html"> <i class="icon-grid"></i>Tables                             </a></li>

            <li><a href="login.html"> <i class="icon-interface-windows"></i>Login page                             </a></li>
            <li> <a href="#"> <i class="icon-mail"></i>Demo
                <div class="badge badge-warning">6 New</div></a></li>
          </ul>
        </div>
        <div class="admin-menu">
          <h5 class="sidenav-heading">Second menu</h5>
          <ul id="side-admin-menu" class="side-menu list-unstyled"> 
            <li> <a href="#"> <i class="icon-screen"> </i>Demo</a></li>
            <li> <a href="#"> <i class="icon-flask"> </i>Demo
                <div class="badge badge-info">Special</div></a></li>
            <li> <a href=""> <i class="icon-flask"> </i>Demo</a></li>
            <li> <a href=""> <i class="icon-picture"> </i>Demo</a></li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
      );
    }
  }

export default Sidebar;