import React from 'react'
import { Link } from 'react-router-dom'

function NavbarM() {
  return (
    <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
        <Link className="navbar-brand brand-logo mr-5" to="../MainManager"><img src="../images/logo_Hairport.png" className="mr-2" alt="logo"/></Link>
        <Link className="navbar-brand brand-logo-mini" to="../MainManager"><img src="../images/logo-mini.svg" alt="logo"/></Link>
      </div>
      <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
        <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
          <span className="icon-menu"></span>
        </button>

      <span className="navbar-text" style={{marginTop: "10px"}}>
          <h3>&nbsp; &nbsp;<b>Branch Panel</b></h3>
      </span>

      <span className="navbar-text" style={{marginTop: "10px", marginLeft: "500px", color: "black"}}>
        <p>&nbsp; &nbsp;Username: <b style={{color: "blue"}}>Naseem Saeed</b></p>
      </span>

        <ul className="navbar-nav navbar-nav-right">
          <li className="nav-item nav-profile dropdown">
            <Link className="nav-link dropdown-toggle" to="#" data-toggle="dropdown" id="profileDropdown">
              <img src="../images/faces/profile_logo.webp" alt="profile"/>
            </Link>
            <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
              
              <Link className="dropdown-item" to="#">
                <i className="ti-pencil text-primary"></i>
                Change Password
              </Link>
              <Link className="dropdown-item" to="/">
                <i className="ti-power-off text-primary"></i>
                Logout
              </Link>
            </div>
          </li>
        </ul>
        <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
          <span className="icon-menu"></span>
        </button>
      </div>
    </nav>
  )
}

export default NavbarM
